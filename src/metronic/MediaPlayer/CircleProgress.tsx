class CircleProgress {
  el: SVGCircleElement;
  c: number;
  r: number;
  constructor(el: SVGCircleElement) {
    this.el = el;
    this.r = el.getAttribute('r') as any;
    this.c = Math.PI * (this.r * 2);
    this._init();
  }

  _init() {
    this.el.style.strokeDasharray = this.c as any;
    this.setProgress(0);
  }

  setProgress(amount: number) {
    const dashoffset = Math.abs((amount * this.c) / 100 - this.c);
    this.el.style.strokeDashoffset = dashoffset as any;
  }
}

export default CircleProgress;
