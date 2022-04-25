import React from 'react';

export const { isValidElement } = React;

type AnyObject = Record<any, any>;

type RenderProps = undefined | AnyObject | ((originProps: AnyObject) => AnyObject | undefined);

import type { InternalNamePath } from './typings';

export const tuple = <T extends string[]>(...args: T) => args;

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

export function getFieldId(namePath: InternalNamePath, formName?: string): string | undefined {
  if (!namePath.length) return undefined;
  const mergedId = namePath.join('_');
  return formName ? `${formName}_${mergedId}` : mergedId;
}

export function replaceElement(
  element: React.ReactNode,
  replacement: React.ReactNode,
  props: RenderProps,
): React.ReactNode {
  if (!isValidElement(element)) return replacement;

  return React.cloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}

export function cloneElement(element: React.ReactNode, props?: RenderProps): React.ReactElement {
  return replaceElement(element, element, props) as React.ReactElement;
}
