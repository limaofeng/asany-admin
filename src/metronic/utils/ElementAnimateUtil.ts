import { DOMEventHandlerUtil } from './_DOMEventHandlerUtil';
import { ElementStyleUtil } from './_ElementStyleUtil';
import { getElementOffset } from './DomHelpers';

export class ElementAnimateUtil {
  public static animate(
    from: number,
    to: number,
    duration: number,
    // eslint-disable-next-line @typescript-eslint/ban-types
    update: Function,
    complete = function () {},
  ) {
    /**
     * TinyAnimate.easings
     *  Adapted from jQuery Easing
     */
    const easings = {
      linear: function (t: number, b: number, c: number, d: number) {
        return (c * t) / d + b;
      },
    };

    // Animation loop
    // let canceled = false;
    const change = to - from;

    let start: number = 0;

    function loop(timestamp: number) {
      const time = (timestamp || +new Date()) - start;

      if (time >= 0) {
        update(easings.linear(time, from, change, duration));
      }
      if (time >= 0 && time >= duration) {
        update(to);
        if (complete) {
          complete();
        }
      } else {
        window.requestAnimationFrame(loop);
      }
    }

    update(from);

    // Start animation loop
    start =
      window.performance && window.performance.now
        ? window.performance.now()
        : +new Date();

    window.requestAnimationFrame(loop);
  }

  public static animateClass(
    element: HTMLElement,
    animationName: string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    callBack?: Function,
  ): void {
    const animateClasses = animationName.split(' ');
    animateClasses.forEach((cssClass) => element.classList.add(cssClass));
    DOMEventHandlerUtil.one(element, 'animationend', function () {
      animateClasses.forEach((cssClass) => element.classList.remove(cssClass));
    });

    if (callBack) {
      DOMEventHandlerUtil.one(element, 'animationend', callBack as any);
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public static transitionEnd(element: HTMLElement, callBack: Function) {
    DOMEventHandlerUtil.one(element, 'transitionend', callBack as any);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public static animationEnd(element: HTMLElement, callBack: Function) {
    DOMEventHandlerUtil.one(element, 'animationend', callBack as any);
  }

  public static animationDelay(element: HTMLElement, value: string) {
    ElementStyleUtil.set(element, 'animation-delay', value);
  }

  public static animationDuration(element: HTMLElement, value: string) {
    ElementStyleUtil.set(element, 'animation-duration', value);
  }

  public static scrollTo(
    element: HTMLElement | null,
    offset: number,
    duration: number = 500,
  ) {
    let targetPos = element ? getElementOffset(element).top : 0;
    let scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (offset) {
      scrollPos += offset;
      targetPos = targetPos - offset;
    }

    const from = scrollPos;
    const to = targetPos;

    ElementAnimateUtil.animate(from, to, duration, function (value: number) {
      document.documentElement.scrollTop = value;
      // document.body.parentNode.scrollTop = value;
      document.body.scrollTop = value;
    }); //, easing, done
  }
  public static scrollTop(offset: number, duration: number) {
    ElementAnimateUtil.scrollTo(null, offset, duration);
  }
}
