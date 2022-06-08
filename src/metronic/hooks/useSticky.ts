import { useCallback, useEffect, useMemo, useRef } from 'react';

import * as KTUtil from '../utils/KTUtil';
import KTEventHandler from '../utils/KTEventHandler';

type OffsetValue = number | false;

type ResponsiveOffsetValue = {
  default?: OffsetValue;
  sm?: OffsetValue;
  md?: OffsetValue;
  lg?: OffsetValue;
  xl?: OffsetValue;
};

type ResponsiveReverse = {
  default?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

type StickyOptions = {
  name: string;
  offset?: ResponsiveOffsetValue | OffsetValue;
  releaseOffset?: ResponsiveOffsetValue | OffsetValue;
  reverse?: ResponsiveReverse | boolean;
};

const defaultOptions = {
  offset: 200,
  releaseOffset: 0,
  reverse: false,
  animation: true,
  animationSpeed: '0.3s',
  animationClass: 'animation-slide-in-down',
};

function useSticky(options: StickyOptions) {
  const element = useRef<HTMLDivElement>(null);

  const state = useRef({
    attributeName: 'data-kt-sticky-' + options.name,
    eventTriggerState: true,
    lastScrollTop: 0,
  });

  const _options = useMemo(() => ({ ...defaultOptions, ...options }), [options]);

  const _getOption = useCallback(
    (key: string) => {
      const attr = _options[key];
      let value = KTUtil.getResponsiveValue(attr);
      if (value !== null && String(value) === 'true') {
        value = true;
      } else if (value !== null && String(value) === 'false') {
        value = false;
      }
      return value;
    },
    [_options],
  );

  const _calculateHeight = useCallback(() => {
    if (!element.current) {
      throw new Error('element is null');
    }
    let height = parseFloat(KTUtil.css(element.current, 'height')!);

    height = height + parseFloat(KTUtil.css(element.current, 'margin-top')!);
    height = height + parseFloat(KTUtil.css(element.current, 'margin-bottom')!);

    if (KTUtil.css(element.current, 'border-top')) {
      height = height + parseFloat(KTUtil.css(element.current, 'border-top')!);
    }

    if (KTUtil.css(element.current, 'border-bottom')!) {
      height = height + parseFloat(KTUtil.css(element.current, 'border-bottom')!);
    }

    return height;
  }, []);

  const _enable = useCallback(
    (update?: boolean) => {
      const top = _getOption('top');
      const left = _getOption('left');
      const right = _getOption('right');
      let width = _getOption('width');
      const zindex = _getOption('zindex');
      const dependencies = _getOption('dependencies');
      const classes = _getOption('class');
      const height = _calculateHeight();

      if (!element.current) {
        throw new Error('element is null');
      }

      if (update !== true && _getOption('animation') === true) {
        KTUtil.css(element.current, 'animationDuration', _getOption('animationSpeed'));
        KTUtil.animateClass(element.current, 'animation ' + _getOption('animationClass'));
      }

      if (!!classes) {
        KTUtil.addClass(element.current, classes);
      }

      if (!!zindex) {
        KTUtil.css(element.current, 'z-index', zindex);
        KTUtil.css(element.current, 'position', 'fixed');
      }

      if (!!top) {
        KTUtil.css(element.current, 'top', top);
      }

      if (!!width) {
        if (width.target) {
          const targetElement = document.querySelector(width.target);
          if (targetElement) {
            width = KTUtil.css(targetElement, 'width');
          }
        }

        KTUtil.css(element.current, 'width', width);
      }

      if (!!left) {
        if (String(left).toLowerCase() === 'auto') {
          const offsetLeft = KTUtil.offset(element.current)!.left;

          if (offsetLeft > 0) {
            KTUtil.css(element.current, 'left', String(offsetLeft) + 'px');
          }
        } else {
          KTUtil.css(element.current, 'left', left);
        }
      }

      if (!!right) {
        KTUtil.css(element.current, 'right', right);
      }

      // Height dependencies
      if (!!dependencies) {
        const dependencyElements = document.querySelectorAll(dependencies);

        if (dependencyElements && dependencyElements.length > 0) {
          for (let i = 0, len = dependencyElements.length; i < len; i++) {
            KTUtil.css(dependencyElements[i], 'padding-top', String(height) + 'px');
          }
        }
      }
    },
    [_calculateHeight, _getOption],
  );

  const _disable = useCallback(() => {
    if (!element.current) {
      throw new Error('element is null');
    }
    const _element = element.current;
    KTUtil.css(_element, 'top', '');
    KTUtil.css(_element, 'width', '');
    KTUtil.css(_element, 'left', '');
    KTUtil.css(_element, 'right', '');
    KTUtil.css(_element, 'z-index', '');
    KTUtil.css(_element, 'position', '');

    const dependencies = _getOption('dependencies');
    const classes = _getOption('class');

    if (classes !== null) {
      KTUtil.removeClass(_element, classes);
    }

    // Height dependencies
    if (dependencies !== null) {
      const dependencyElements = document.querySelectorAll(dependencies);

      if (dependencyElements && dependencyElements.length > 0) {
        for (let i = 0, len = dependencyElements.length; i < len; i++) {
          KTUtil.css(dependencyElements[i], 'padding-top', '');
        }
      }
    }
  }, [_getOption]);

  const handleScroll = useCallback(() => {
    const offset = _getOption('offset');
    const releaseOffset = _getOption('releaseOffset') || 0;
    const reverse = _getOption('reverse');
    // // Exit if false
    if (offset === false) {
      return;
    }

    const st = KTUtil.getScrollTop();
    const diff = document.documentElement.scrollHeight - window.innerHeight - KTUtil.getScrollTop();

    if (!element.current) {
      return;
    }

    const _element = element.current;
    const attributeName = state.current.attributeName;

    if (reverse === true) {
      // Release on reverse scroll mode
      if (st > offset && (releaseOffset === 0 || releaseOffset < diff)) {
        if (document.body.hasAttribute(attributeName) === false) {
          _enable();
          document.body.setAttribute(attributeName, 'on');
        }

        if (state.current.eventTriggerState === true) {
          KTEventHandler.trigger(_element, 'kt.sticky.on', {});
          KTEventHandler.trigger(_element, 'kt.sticky.change', {});

          state.current.eventTriggerState = false;
        }
      } else {
        // Back scroll mode
        if (document.body.hasAttribute(attributeName) === true) {
          _disable();
          document.body.removeAttribute(attributeName);
        }
        if (state.current.eventTriggerState === false) {
          KTEventHandler.trigger(_element, 'kt.sticky.off', {});
          KTEventHandler.trigger(_element, 'kt.sticky.change', {});
          state.current.eventTriggerState = true;
        }
      }

      state.current.lastScrollTop = st;
    } else {
      //   // Classic scroll mode
      if (st > offset && (releaseOffset === 0 || releaseOffset < diff)) {
        if (document.body.hasAttribute(attributeName) === false) {
          _enable();
          document.body.setAttribute(attributeName, 'on');
        }
        if (state.current.eventTriggerState === true) {
          KTEventHandler.trigger(_element, 'kt.sticky.on', {});
          KTEventHandler.trigger(_element, 'kt.sticky.change', {});
          state.current.eventTriggerState = false;
        }
      } else {
        // back scroll mode
        if (document.body.hasAttribute(attributeName) === true) {
          _disable();
          document.body.removeAttribute(attributeName);
        }
        if (state.current.eventTriggerState === false) {
          KTEventHandler.trigger(_element, 'kt.sticky.off', {});
          KTEventHandler.trigger(_element, 'kt.sticky.change', {});
          state.current.eventTriggerState = true;
        }
      }
    }

    if (releaseOffset > 0) {
      if (diff < releaseOffset) {
        _element.setAttribute('data-kt-sticky-released', 'true');
      } else {
        _element.removeAttribute('data-kt-sticky-released');
      }
    }
  }, [_disable, _enable, _getOption]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const attributeName = state.current!.attributeName;
    return () => {
      document.body.removeAttribute(attributeName);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [element];
}

export default useSticky;
