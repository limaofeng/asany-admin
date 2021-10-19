/* eslint-disable no-param-reassign */
// Global variables
window.KTUtilElementDataStore = {};
window.KTUtilElementDataStoreID = 0;
window.KTUtilDelegatedEventHandlers = {};

export function findAll(parent: HTMLElement, query: string) {
  if (parent !== null) {
    return parent.querySelectorAll(query);
  }
  return null;
}

export function trim(string: string) {
  return string.trim();
}

export function hasClass(el: HTMLElement, className: string) {
  if (!el) {
    return false;
  }

  return el.classList
    ? el.classList.contains(className)
    : new RegExp(`\\b${className}\\b`).test(el.className);
}

export function addClass(el: HTMLElement, className: string) {
  if (!el || typeof className === 'undefined') {
    return;
  }

  const classNames = className.split(' ');

  if (el.classList) {
    for (let i = 0; i < classNames.length; i += 1) {
      if (classNames[i] && classNames[i].length > 0) {
        el.classList.add(trim(classNames[i]));
      }
    }
  } else if (!hasClass(el, className)) {
    for (let x = 0; x < classNames.length; x += 1) {
      el.className += ` ${trim(classNames[x])}`;
    }
  }
}

export function removeClass(el: HTMLElement, className: string) {
  if (!el || typeof className === 'undefined') {
    return;
  }

  const classNames = className.split(' ');

  if (el.classList) {
    for (let i = 0; i < classNames.length; i += 1) {
      el.classList.remove(trim(classNames[i]));
    }
  } else if (hasClass(el, className)) {
    for (let x = 0; x < classNames.length; x += 1) {
      el.className = el.className.replace(new RegExp(`\\b${trim(classNames[x])}\\b`, 'g'), '');
    }
  }
}

export function data(el: HTMLElement) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    set(name: string, data: any) {
      if (!el) {
        return;
      }

      if (el.customDataTag === undefined) {
        window.KTUtilElementDataStoreID += 1;
        el.customDataTag = window.KTUtilElementDataStoreID;
      }

      if (window.KTUtilElementDataStore[el.customDataTag] === undefined) {
        window.KTUtilElementDataStore[el.customDataTag] = {};
      }

      window.KTUtilElementDataStore[el.customDataTag][name] = data;
    },

    get(name: string) {
      if (!el) {
        return null;
      }

      if (el.customDataTag === undefined) {
        return null;
      }

      return this.has(name) ? window.KTUtilElementDataStore[el.customDataTag][name] : null;
    },

    has(name: string) {
      if (!el) {
        return false;
      }

      if (el.customDataTag === undefined) {
        return false;
      }

      return !!(
        window.KTUtilElementDataStore[el.customDataTag] &&
        window.KTUtilElementDataStore[el.customDataTag][name]
      );
    },

    remove(name: string) {
      if (el && this.has(name)) {
        delete window.KTUtilElementDataStore[el.customDataTag!][name];
      }
    },
  };
}

export function animate(
  from: number,
  to: number,
  duration: number,
  update: any,
  easingKey: string,
  done?: () => void,
) {
  /**
   * TinyAnimate.easings
   *  Adapted from jQuery Easing
   */
  const easings = {
    linear(t: number, b: number, c: number, d: number) {
      return (c * t) / d + b;
    },
  };

  const easing = easings[easingKey];

  // Early bail out if called incorrectly
  if (
    typeof from !== 'number' ||
    typeof to !== 'number' ||
    typeof duration !== 'number' ||
    typeof update !== 'function'
  ) {
    return;
  }

  // Pick implementation (requestAnimationFrame | setTimeout)
  const rAF =
    window.requestAnimationFrame ||
    function rAF(callback) {
      window.setTimeout(callback, 1000 / 50);
    };

  // Start animation loop
  const start =
    window.performance && window.performance.now ? window.performance.now() : +new Date();

  // Animation loop
  const change = to - from;

  function loop(timestamp: number) {
    const time = (timestamp || +new Date()) - start;

    if (time >= 0) {
      update(easing(time, from, change, duration));
    }
    if (time >= 0 && time >= duration) {
      update(to);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      done && done();
    } else {
      rAF(loop);
    }
  }

  update(from);

  rAF(loop);
}

export function actualCss(el: HTMLElement, prop: string, cache: any): number {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  let css = '';

  if (el instanceof HTMLElement === false) {
    return 0;
  }

  if (!el.getAttribute(`kt-hidden-${prop}`) || cache === false) {
    let value;

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    css = el.style.cssText;
    // eslint-disable-next-line no-param-reassign
    el.style.cssText = 'position: absolute; visibility: hidden; display: block;';

    if (prop === 'width') {
      value = el.offsetWidth;
    } else if (prop === 'height') {
      value = el.offsetHeight;
    }

    // eslint-disable-next-line no-param-reassign
    el.style.cssText = css;

    // store it in cache
    el.setAttribute(`kt-hidden-${prop}`, String(value));

    // eslint-disable-next-line consistent-return
    return parseFloat(String(value));
  }
  // store it in cache
  return parseFloat(el.getAttribute(`kt-hidden-${prop}`) as any);
}

export function actualHeight(el: HTMLElement, cache?: any) {
  return actualCss(el, 'height', cache);
}
export function visible(el: HTMLElement) {
  return !(el.offsetWidth === 0 && el.offsetHeight === 0);
}

export function css(el: HTMLElement, styleProp: string, value?: any, important?: any) {
  if (!el) {
    return null;
  }

  if (value !== undefined) {
    if (important === true) {
      el.style.setProperty(styleProp, value, 'important');
    } else {
      // eslint-disable-next-line no-param-reassign
      el.style[styleProp] = value;
    }
  } else {
    const { defaultView } = el.ownerDocument || document;

    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hyphen separated words eg. font-Size)
      // eslint-disable-next-line no-param-reassign
      styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
      // eslint-disable-next-line consistent-return
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
  }
  return null;
}

export function slide(
  el: HTMLElement,
  dir: 'up' | 'down',
  speed: number = 600,
  callback: () => void,
) {
  if (!el || (dir === 'up' && visible(el) === false) || (dir === 'down' && visible(el) === true)) {
    return;
  }
  const calcHeight = actualHeight(el, false);
  let calcPaddingTop: number = 0;
  let calcPaddingBottom: number = 0;

  if (css(el, 'padding-top') && data(el).has('slide-padding-top') !== true) {
    data(el).set('slide-padding-top', css(el, 'padding-top'));
  }

  if (css(el, 'padding-bottom') && data(el).has('slide-padding-bottom') !== true) {
    data(el).set('slide-padding-bottom', css(el, 'padding-bottom'));
  }

  if (data(el).has('slide-padding-top')) {
    calcPaddingTop = parseInt(data(el).get('slide-padding-top'), 10);
  }

  if (data(el).has('slide-padding-bottom')) {
    calcPaddingBottom = parseInt(data(el).get('slide-padding-bottom'), 10);
  }

  if (dir === 'up') {
    // up
    // eslint-disable-next-line no-param-reassign
    el.style.cssText = 'display: block; overflow: hidden;';

    if (calcPaddingTop) {
      animate(
        0,
        calcPaddingTop,
        speed,
        (value: number) => {
          el.style.paddingTop = `${calcPaddingTop - value}px`;
        },
        'linear',
      );
    }

    if (calcPaddingBottom) {
      animate(
        0,
        calcPaddingBottom,
        speed,
        (value: number) => {
          el.style.paddingBottom = `${calcPaddingBottom - value}px`;
        },
        'linear',
      );
    }

    animate(
      0,
      calcHeight,
      speed,
      (value: number) => {
        el.style.height = `${calcHeight - value}px`;
      },
      'linear',
      () => {
        el.style.height = '';
        el.style.display = 'none';

        if (typeof callback === 'function') {
          callback();
        }
      },
    );
  } else if (dir === 'down') {
    // down
    el.style.cssText = 'display: block; overflow: hidden;';

    if (calcPaddingTop) {
      animate(
        0,
        calcPaddingTop,
        speed,
        (value: any) => {
          el.style.paddingTop = `${value}px`;
        },
        'linear',
        () => {
          el.style.paddingTop = '';
        },
      );
    }

    if (calcPaddingBottom) {
      animate(
        0,
        calcPaddingBottom,
        speed,
        (value: any) => {
          el.style.paddingBottom = `${value}px`;
        },
        'linear',
        () => {
          el.style.paddingBottom = '';
        },
      );
    }

    animate(
      0,
      calcHeight,
      speed,
      (value: number) => {
        el.style.height = `${value}px`;
      },
      'linear',
      () => {
        el.style.height = '';
        el.style.display = '';
        el.style.overflow = '';

        if (typeof callback === 'function') {
          callback();
        }
      },
    );
  }
}

export function slideUp(el: HTMLElement, speed: number, callback: () => void) {
  slide(el, 'up', speed, callback);
}

export function slideDown(el: HTMLElement, speed: number, callback: () => void) {
  slide(el, 'down', speed, callback);
}

/**
 * Gets browser window viewport size. Ref:
 * http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
 * @returns {object}
 */
export function getViewPort(): { width?: number; height?: number } {
  let e: any = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }

  return {
    width: e[a + 'Width'],
    height: e[a + 'Height'],
  };
}

export function parseJson(value: string) {
  if (typeof value === 'string') {
    value = value.replace(/'/g, '"');

    const jsonStr = value.replace(/(\w+:)|(\w+ :)/g, function (matched) {
      return '"' + matched.substring(0, matched.length - 1) + '":';
    });

    try {
      value = JSON.parse(jsonStr);
    } catch (e) {}
  }

  return value;
}

export function getCssVariableValue(variableName: string) {
  let hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);
  if (hex && hex.length > 0) {
    hex = hex.trim();
  }
  return hex;
}

export function getBreakpoint(breakpoint: any) {
  let value: any = getCssVariableValue('--bs-' + breakpoint);

  if (value) {
    value = parseInt(value.trim());
  }

  return value;
}

export function getResponsiveValue(value: any) {
  const width = getViewPort().width!;
  let result;

  value = parseJson(value);

  if (typeof value === 'object') {
    let resultKey;
    let resultBreakpoint: any = -1;
    let breakpoint;

    for (const key in value) {
      if (key === 'default') {
        breakpoint = 0;
      } else {
        breakpoint = getBreakpoint(key) ? getBreakpoint(key) : parseInt(key);
      }

      if (breakpoint <= width && breakpoint > resultBreakpoint) {
        resultKey = key;
        resultBreakpoint = breakpoint;
      }
    }

    if (resultKey) {
      result = value[resultKey];
    } else {
      result = value;
    }
  } else {
    result = value;
  }

  return result;
}

/**
 * Gets highest z-index of the given element parents
 * @param {object} el jQuery element object
 * @returns {number}
 */
export function getHighestZindex(el: any) {
  let position, value;

  while (el && el !== document) {
    // Ignore z-index if position is set to a value where z-index is ignored by the browser
    // This makes behavior of this function consistent across browsers
    // WebKit always returns auto if the element is positioned
    position = css(el, 'position');

    if (position === 'absolute' || position === 'relative' || position === 'fixed') {
      // IE returns 0 when zIndex is not specified
      // other browsers return a string
      // we ignore the case of nested elements with an explicit value of 0
      // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
      value = parseInt(css(el, 'z-index')!);

      if (!isNaN(value) && value !== 0) {
        return value;
      }
    }

    el = el.parentNode;
  }
  return 1;
}
