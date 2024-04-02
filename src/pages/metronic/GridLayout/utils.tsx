import type { CSSProperties } from 'react';
import React, { useEffect, useRef } from 'react';

import { isEqual, throttle as lodashThrottle } from 'lodash';
import type { XYCoord } from 'react-dnd';

import type {
  AnimatedProps,
  CompactType,
  DragPreviewRenderer,
  GridItemContentProps,
  GridItemRender,
  ICoord,
  IGridItemInternalData,
  IGridItemLayout,
  Layout,
  Position,
  Relation,
} from './typings';

export const isProduction = process.env.NODE_ENV === 'production';
const DEBUG = false;

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */
export function bottom(layout: Layout): number {
  let max = 0,
    bottomY;
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }
  return max;
}

export function cloneLayout(layout: Layout): Layout {
  const newLayout = Array(layout.length);
  for (let i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }
  return newLayout;
}

// Fast path to cloning, since this is monomorphic
export function cloneLayoutItem(layoutItem: IGridItemLayout): IGridItemLayout {
  return {
    w: layoutItem.w,
    h: layoutItem.h,
    x: layoutItem.x,
    y: layoutItem.y,
    id: layoutItem.id,
    // minW: layoutItem.minW,
    // maxW: layoutItem.maxW,
    // minH: layoutItem.minH,
    // maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved),
    static: Boolean(layoutItem.static),
    // These can be null
    // isDraggable: layoutItem.isDraggable,
    // isResizable: layoutItem.isResizable,
  };
}

/**
 * Given two layoutitems, check if they collide.
 */
export function collides(l1: IGridItemLayout, l2: IGridItemLayout): boolean {
  if (l1.id === l2.id) return false; // same element
  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
  return true; // boxes overlap
}

/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */
export function compact(
  layout: Layout,
  compactType: CompactType | undefined,
  cols: number,
): Layout {
  // Statics go in the compareWith array right away so items flow around them.
  const compareWith = getStatics(layout);
  // We go through the items by row and column.
  const sorted = sortLayoutItems(layout, compactType);
  // Holding for new items.
  const out = Array(layout.length);

  for (let i = 0, len = sorted.length; i < len; i++) {
    let l = cloneLayoutItem(sorted[i]);

    // Don't move static elements
    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted);

      // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.
      compareWith.push(l);
    }

    // Add to output array to make sure they still come out in the right order.
    out[layout.indexOf(sorted[i])] = l;

    // Clear moved flag, if it exists.
    l.moved = false;
  }

  // console.log('compact', compactType, cols, layout, out);
  return out;
}

const heightWidth: { x: 'w'; y: 'h' } = { x: 'w', y: 'h' };
/**
 * Before moving item down, it will check if the movement will cause collisions and move those items down before.
 */
function resolveCompactionCollision(
  layout: Layout,
  item: IGridItemLayout,
  moveToCoord: number,
  axis: 'x' | 'y',
) {
  const sizeProp = heightWidth[axis];
  item[axis] += 1;
  const itemIndex = layout
    .map((layoutItem) => {
      return layoutItem.id;
    })
    .indexOf(item.id);

  // Go through each item we collide with.
  for (let i = itemIndex + 1; i < layout.length; i++) {
    const otherItem = layout[i];
    // Ignore static items
    if (otherItem.static) continue;

    // Optimization: we can break early if we know we're past this el
    // We can do this b/c it's a sorted layout
    if (otherItem.y > item.y + item.h) break;

    if (collides(item, otherItem)) {
      resolveCompactionCollision(
        layout,
        otherItem,
        moveToCoord + item[sizeProp],
        axis,
      );
    }
  }

  item[axis] = moveToCoord;
}

/**
 * Compact an item in the layout.
 */
export function compactItem(
  compareWith: Layout,
  l: IGridItemLayout,
  compactType: CompactType | undefined,
  cols: number,
  fullLayout: Layout,
): IGridItemLayout {
  const compactV = compactType === 'vertical';
  const compactH = compactType === 'horizontal';
  if (compactV) {
    // Bottom 'y' possible is the bottom of the layout.
    // This allows you to do nice stuff like specify {y: Infinity}
    // This is here because the layout must be sorted in order to get the correct bottom `y`.
    l.y = Math.min(bottom(compareWith), l.y);
    // Move the element up as far as it can go without colliding.
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } else if (compactH) {
    l.y = Math.min(bottom(compareWith), l.y);
    // Move the element left as far as it can go without colliding.
    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--;
    }
  }

  // Move it down, and keep moving it down if it's colliding.
  let _collides;
  while ((_collides = getFirstCollision(compareWith, l))) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, _collides.x + _collides.w, 'x');
    } else {
      resolveCompactionCollision(fullLayout, l, _collides.y + _collides.h, 'y');
    }
    // Since we can't grow without bounds horizontally, if we've overflown, let's move it down and try again.
    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w;
      l.y++;
    }
  }
  return l;
}

/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */
export function correctBounds(
  layout: Layout,
  bounds: { cols: number },
): Layout {
  const collidesWith = getStatics(layout);
  for (let i = 0, len = layout.length; i < len; i++) {
    const l = layout[i];
    // Overflows right
    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
    // Overflows left
    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }
    if (!l.static) collidesWith.push(l);
    else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }
  return layout;
}

export interface GridItemPositionState {
  resizing?: {
    width: number;
    height: number;
  };
  dragging?: {
    top: number;
    left: number;
  };
}

export function calcGridItemPosition(
  positionParams: PositionParams,
  { x, y, w, h }: IGridItemLayout,
  state?: GridItemPositionState,
): Position {
  const { margin, containerPadding, rowHeight } = positionParams;
  const colWidth = calcGridColWidth(positionParams);
  const out: any = {};

  // If resizing, use the exact width and height as returned from resizing callbacks.
  if (state && state.resizing) {
    out.width = Math.round(state.resizing.width);
    out.height = Math.round(state.resizing.height);
  }
  // Otherwise, calculate from grid units.
  else {
    // 0 * Infinity === NaN, which causes problems with resize constraints;
    // Fix this if it occurs.
    // Note we do it here rather than later because Math.round(Infinity) causes deopt
    out.width =
      w === Infinity
        ? w
        : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]);
    out.height =
      h === Infinity
        ? h
        : Math.round(rowHeight * h + Math.max(0, h - 1) * margin[1]);
  }

  // If dragging, use the exact width and height as returned from dragging callbacks.
  if (state && state.dragging) {
    out.top = Math.round(state.dragging.top);
    out.left = Math.round(state.dragging.left);
  }
  // Otherwise, calculate from grid units.
  else {
    out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
    out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
  }

  console.log('Widget calcGridItemPosition', out);

  return out;
}

/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */
export function getLayoutItem(
  layout: Layout,
  id: string,
): IGridItemLayout | undefined {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (layout[i].id == id) return layout[i];
  }
  return undefined;
}

export type PositionParams = {
  margin: [number, number];
  containerPadding: [number, number];
  containerWidth: number;
  cols: number;
  rowHeight: number;
  maxRows: number;
};

export function calcGridColWidth(positionParams: PositionParams): number {
  const { margin, containerPadding, containerWidth, cols } = positionParams;
  return (
    (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols
  );
}

export function calcXY(
  positionParams: PositionParams,
  top: number,
  left: number,
  w: number,
  h: number,
): { x: number; y: number } {
  const { margin, cols, rowHeight, maxRows } = positionParams;
  const colWidth = calcGridColWidth(positionParams);

  let x = Math.round((left - margin[0]) / (colWidth + margin[0]));
  let y = Math.round((top - margin[1]) / (rowHeight + margin[1]));

  // Capping
  x = Math.max(Math.min(x, cols - w), 0);
  y = Math.max(Math.min(y, maxRows - h), 0);

  // console.log('calcXY', JSON.stringify(positionParams));

  return { x, y };
}

/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */
export function getFirstCollision(
  layout: Layout,
  layoutItem: IGridItemLayout,
): IGridItemLayout | undefined {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
  return undefined;
}

export function getAllCollisions(
  layout: Layout,
  layoutItem: IGridItemLayout,
): IGridItemLayout[] {
  return layout.filter((l) => collides(l, layoutItem));
}

/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */
export function getStatics(layout: Layout): IGridItemLayout[] {
  return layout.filter((l) => l.static);
}

/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout            Full layout to modify.
 * @param  {IGridItemLayout} l                 element to move.
 * @param  {Number}     [x]               X position in grid units.
 * @param  {Number}     [y]               Y position in grid units.
 */
export function moveElement(
  _layout: Layout,
  l: IGridItemLayout,
  x: number | undefined,
  y: number | undefined,
  isUserAction: boolean,
  preventCollision: boolean | undefined,
  compactType: CompactType,
  cols: number,
): Layout {
  let layout = _layout;
  // If this is static and not explicitly enabled as draggable,
  // no move is possible, so we can short-circuit this immediately.
  if (l.static && l.isDraggable !== true) return layout;

  // Short-circuit if nothing to do.
  if (l.y === y && l.x === x) return layout;

  log(
    `Moving element ${l.id} to [${String(x)},${String(y)}] from [${l.x},${
      l.y
    }]`,
  );
  const oldX = l.x;
  const oldY = l.y;

  // This is quite a bit faster than extending the object
  if (typeof x === 'number') l.x = x;
  if (typeof y === 'number') l.y = y;
  l.moved = true;

  // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.
  let sorted = sortLayoutItems(layout, compactType);
  const movingUp =
    compactType === 'vertical' && typeof y === 'number'
      ? oldY >= y
      : compactType === 'horizontal' && typeof x === 'number'
      ? oldX >= x
      : false;
  if (movingUp) sorted = sorted.reverse();
  const collisions = getAllCollisions(sorted, l);

  // There was a collision; abort
  if (preventCollision && collisions.length) {
    log(`Collision prevented on ${l.id}, reverting.`);
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout;
  }

  // Move each item that collides away from this element.
  for (let i = 0, len = collisions.length; i < len; i++) {
    const collision = collisions[i];
    log(
      `Resolving collision between ${l.id} at [${l.x},${l.y}] and ${collision.id} at [${collision.x},${collision.y}]`,
    );

    // Short circuit so we can't infinite loop
    if (collision.moved) continue;

    // Don't move static items - we have to move *this* element away
    if (collision.static) {
      layout = moveElementAwayFromCollision(
        layout,
        collision,
        l,
        isUserAction,
        compactType,
        cols,
      );
    } else {
      layout = moveElementAwayFromCollision(
        layout,
        l,
        collision,
        isUserAction,
        compactType,
        cols,
      );
    }
  }

  return layout;
}

/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {IGridItemLayout} collidesWith Layout item we're colliding with.
 * @param  {IGridItemLayout} itemToMove   Layout item we're moving.
 */
export function moveElementAwayFromCollision(
  layout: Layout,
  collidesWith: IGridItemLayout,
  itemToMove: IGridItemLayout,
  _isUserAction: boolean,
  compactType: CompactType,
  cols: number,
): Layout {
  const compactH = compactType === 'horizontal';
  // Compact vertically if not set to horizontal
  const compactV = compactType !== 'horizontal';
  const preventCollision = collidesWith.static; // we're already colliding (not for static items)
  let isUserAction = _isUserAction;
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.
  if (isUserAction) {
    // Reset isUserAction flag because we're not in the main collision anymore.
    isUserAction = false;

    // Make a mock item so we don't modify the item here, only modify in moveElement.
    const fakeItem: IGridItemLayout = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      id: '-1',
    };

    // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal
    if (!getFirstCollision(layout, fakeItem)) {
      log(
        `Doing reverse collision on ${itemToMove.id} up to [${fakeItem.x},${fakeItem.y}].`,
      );
      return moveElement(
        layout,
        itemToMove,
        compactH ? fakeItem.x : undefined,
        compactV ? fakeItem.y : undefined,
        isUserAction,
        preventCollision,
        compactType,
        cols,
      );
    }
  }

  return moveElement(
    layout,
    itemToMove,
    compactH ? itemToMove.x + 1 : undefined,
    compactV ? itemToMove.y + 1 : undefined,
    isUserAction,
    preventCollision,
    compactType,
    cols,
  );
}

/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */
export function perc(num: number): string {
  return num * 100 + '%';
}

export function setTransform({ top, left, width, height }: Position) {
  // Replace unitless items with px
  const translate = `translate(${left}px,${top}px)`;
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
  };
}

export function setTopLeft({ top, left, width, height }: Position) {
  return {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
    position: 'absolute',
  };
}

/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */
export function sortLayoutItems(
  layout: Layout,
  compactType?: CompactType,
): Layout {
  if (compactType === 'horizontal') return sortLayoutItemsByColRow(layout);
  else return sortLayoutItemsByRowCol(layout);
}

export function sortLayoutItemsByRowCol(layout: Layout): Layout {
  return [].concat(layout as any).sort(function (a: any, b: any) {
    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      // Without this, we can get different sort results in IE vs. Chrome/FF
      return 0;
    }
    return -1;
  });
}

export function sortLayoutItemsByColRow(layout: Layout): Layout {
  return [].concat(layout as any).sort(function (a: any, b: any) {
    if (a.x > b.x || (a.x === b.x && a.y > b.y)) {
      return 1;
    }
    return -1;
  });
}

/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {?String} compact      Compaction option.
 * @return {Array}                Working layout.
 */
export function synchronizeLayoutWithChildren(
  initialLayout: Layout,
  cols: number,
  compactType?: CompactType,
): Layout {
  const _initialLayout = initialLayout || [];

  let layout: Layout = _initialLayout;
  layout = correctBounds(layout, { cols: cols });
  layout = compact(layout, compactType, cols);

  return layout;
}

/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */
export function validateLayout(
  layout: Layout,
  contextName: string = 'Layout',
): void {
  const subProps: ('x' | 'y' | 'w' | 'h')[] = ['x', 'y', 'w', 'h'];
  if (!Array.isArray(layout))
    throw new Error(contextName + ' must be an array!');
  for (let i = 0, len = layout.length; i < len; i++) {
    const item = layout[i];
    for (let j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== 'number') {
        throw new Error(
          'ReactGridLayout: ' +
            contextName +
            '[' +
            i +
            '].' +
            subProps[j] +
            ' must be a number!',
        );
      }
    }
    if (item.id && typeof item.id !== 'string') {
      throw new Error(
        'ReactGridLayout: ' + contextName + '[' + i + '].i must be a string!',
      );
    }
    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error(
        'ReactGridLayout: ' +
          contextName +
          '[' +
          i +
          '].static must be a boolean!',
      );
    }
  }
}

// Flow can't really figure this out, so we just use Object
export function autoBindHandlers(el: any, fns: string[]): void {
  fns.forEach((key) => (el[key] = el[key].bind(el)));
}

function log(...args: any) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.log(...args);
}

/**
 * Given a height and width in pixel values, calculate grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calcluations.
 * @param  {Number} height                  Height in pixels.
 * @param  {Number} width                   Width in pixels.
 * @param  {Number} x                       X coordinate in grid units.
 * @param  {Number} y                       Y coordinate in grid units.
 * @return {Object}                         w, h as grid units.
 */
export function calcWH(
  positionParams: PositionParams,
  width: number,
  height: number,
  x: number,
  y: number,
): { w: number; h: number } {
  const { margin, maxRows, cols, rowHeight } = positionParams;
  const colWidth = calcGridColWidth(positionParams);

  // width = colWidth * w - (margin * (w - 1))
  // ...
  // w = (width + margin) / (colWidth + margin)
  let w = Math.round((width + margin[0]) / (colWidth + margin[0]));
  let h = Math.round((height + margin[1]) / (rowHeight + margin[1]));

  // Capping
  w = Math.max(Math.min(w, cols - x), 0);
  h = Math.max(Math.min(h, maxRows - y), 0);
  return { w, h };
}

function isRectangleOverlap(rec1: number[], rec2: number[]) {
  const x_overlap = !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0]);
  const y_overlap = !(rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);
  return x_overlap && y_overlap ? { x: x_overlap, y: y_overlap } : false;
}

function getRec(itemRect: DOMRect, layoutRect: DOMRect) {
  const x = itemRect.left - layoutRect.left;
  const y = itemRect.top - layoutRect.top;
  return [x, y, x + itemRect.width, y + itemRect.height];
}

export function getMonitorCoord(
  layout: React.RefObject<HTMLDivElement>,
  itemRect: DOMRect,
  sourceClientOffset: XYCoord,
): ICoord {
  const layoutRect = layout.current!.getBoundingClientRect();
  const top = sourceClientOffset.y - layoutRect.top;
  const left = sourceClientOffset.x - layoutRect.left;
  const height = itemRect.height;
  const width = itemRect.width;
  return {
    top,
    height,
    left,
    width: itemRect.width,
    direction(
      { y, x, h, w }: { y: number; x: number; h: number; w: number }, // layout: SortableLayout, // detection: SortableDirection
    ) {
      const currentRec = [left, top, left + width, top + height];
      if (!isRectangleOverlap(currentRec, [x, y, x + w, y + h])) {
        return 'none';
      }
      const x1 = x + w / 2;
      const y1 = y + h / 2;
      const source = getRec(itemRect, layoutRect); //.map((l) => l * zoom);
      const target = [x, y, x + w, y + h]; //.map((l) => l * zoom);
      const overlap = isRectangleOverlap(currentRec, [x1, y1, x1, y1]);
      if (!overlap) {
        return 'none';
      }
      if (source[3] < target[1] || source[2] < target[0]) {
        return 'after';
      }
      return 'before';
    },
    compare: (): Relation => {
      throw new Error('未实现逻辑');
    },
  };
}

export function getItemCoord(
  layout: React.RefObject<HTMLDivElement>,
  item: IGridItemInternalData,
) {
  const layoutRect = layout.current!.getBoundingClientRect();
  const itemRect = item._rect!;
  const top = itemRect.top - layoutRect.top;
  const left = itemRect.left - layoutRect.left;
  return {
    top,
    left,
    itemRect: itemRect.height,
    compare(other: ICoord): Relation {
      return other.direction({
        y: top,
        x: left,
        h: itemRect.height,
        w: itemRect.width,
      });
    },
  };
}

export function getCompactType(
  verticalCompact: boolean,
  compactType: CompactType,
): CompactType | undefined {
  return verticalCompact === false ? undefined : compactType;
}

export function assign(target: any, ...sources: any[]) {
  sources.forEach((source) => {
    const descriptors = Object.keys(source).reduce((_descriptors: any, key) => {
      _descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return _descriptors;
    }, {});
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if ((descriptor as any).enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    try {
      Object.defineProperties(target, descriptors);
    } catch (e) {
      console.log('target', descriptors, e);
    }
  });
  return target;
}

export const dispatchWindowResize = lodashThrottle(() => {
  window.dispatchEvent(new Event('resize'));
}, 500);

export const sleep = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });

export function generateUUID() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c: any) =>
    (
      c ^
      (crypto.getRandomValues(new Uint32Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

function deepCompareEquals(a: any, b: any) {
  return isEqual(a, b);
}

function useDeepCompareMemoize(value: any) {
  const ref = useRef();
  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

export function useDeepCompareEffect(
  effect: React.EffectCallback,
  dependencies?: any[],
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, useDeepCompareMemoize(dependencies));
}

export const injectAnime = (props: any): AnimatedProps => {
  const key: string[] = [];
  const anime = Object.keys(props)
    .filter(
      (_key: string) =>
        _key.startsWith('data-flip') || _key === 'data-portal-key',
    )
    .reduce((data, name) => {
      data[name] = props[name];
      key.push(props[name]);
      return data;
    }, {} as any);
  anime.key = key.join(',');
  return anime;
};

export function snapToGrid(x: number, y: number): [number, number] {
  const snappedX = Math.round(x / 32) * 32;
  const snappedY = Math.round(y / 32) * 32;
  return [snappedX, snappedY];
}

export function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  isSnapToGrid: boolean,
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  let { x, y } = currentOffset;

  if (isSnapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export function getScaleItemStyles(style: CSSProperties, scale: number) {
  if (scale >= 1) {
    return {
      transform: `scale(${scale})`,
      width: style.width,
      height: style.height,
    };
  }
  const width = (style.width as number) * (1 / scale);
  const height = (style.height as number) * (1 / scale);
  const x = -(((width as number) * (1 - scale)) / 2);
  const y = -(((height as number) * (1 - scale)) / 2);
  return {
    transform: `translate(${x}px, ${y}px) scale(${scale})`,
    width: width,
    height: height,
  };
}

export function renderItem(
  itemRender: GridItemRender<any>,
  props: GridItemContentProps<any>,
  ref?: any,
) {
  if (React.isValidElement(itemRender)) {
    return React.cloneElement(itemRender, { ...props, ref } as any);
  }
  if (typeof itemRender === 'function') {
    return itemRender(props, ref);
  }
  (props as any).ref = ref;
  return React.createElement(itemRender, props);
}

export function dragPreview(
  itemRender: GridItemRender<any>,
  options: { props?: any; scale?: number | (() => number) } = {},
): DragPreviewRenderer {
  return (data, { style }) => {
    const props = {
      data,
      style: { width: style.width, height: style.height },
      drag: () => undefined,
      ...options,
    } as any;
    if (!!options?.scale) {
      return (
        <div className="gridlayout-preview-container" style={style}>
          <div
            style={getScaleItemStyles(
              style,
              typeof options.scale == 'function'
                ? options.scale()
                : options.scale,
            )}
          >
            {renderItem(itemRender, props)}
          </div>
        </div>
      );
    }
    return <div style={style}>{renderItem(itemRender, props)}</div>;
  };
}
