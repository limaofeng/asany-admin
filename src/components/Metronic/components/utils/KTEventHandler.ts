import * as KTUtil from './KTUtil';
////////////////////////////
// ** Private Variables  ** //
////////////////////////////
const _handlers = {};

////////////////////////////
// ** Private Methods  ** //
////////////////////////////
const _triggerEvent = function (
  this: any,
  element: HTMLElement,
  name: string,
  target: any,
  e: any,
) {
  if (KTUtil.data(element).has(name) === true) {
    const handlerId = KTUtil.data(element).get(name);

    if (_handlers[name] && _handlers[name][handlerId]) {
      const handler = _handlers[name][handlerId];

      if (handler.name === name) {
        if (handler.one == true) {
          if (handler.fired == false) {
            _handlers[name][handlerId].fired = true;

            return handler.callback.call(this, target, e);
          }
        } else {
          return handler.callback.call(this, target, e);
        }
      }
    }
  }

  return null;
};

const _addEvent = function (
  element: HTMLElement,
  name: string,
  callback: () => void,
  one?: boolean,
) {
  const handlerId = KTUtil.getUniqueId('event');

  KTUtil.data(element).set(name, handlerId);

  if (!_handlers[name]) {
    _handlers[name] = {};
  }

  _handlers[name][handlerId] = {
    name: name,
    callback: callback,
    one: one,
    fired: false,
  };
};

const _removeEvent = function (element: HTMLElement, name: string) {
  const handlerId = KTUtil.data(element).get(name);

  if (_handlers[name] && _handlers[name][handlerId]) {
    delete _handlers[name][handlerId];
  }
};

////////////////////////////
// ** Public Methods  ** //
////////////////////////////
const KTEventHandler = {
  trigger: function (element: HTMLElement, name: string, target: any, e?: any) {
    return _triggerEvent(element, name, target, e);
  },

  on: function (element: HTMLElement, name: string, handler: () => void) {
    return _addEvent(element, name, handler);
  },

  one: function (element: HTMLElement, name: string, handler: () => void) {
    return _addEvent(element, name, handler, true);
  },

  off: function (element: HTMLElement, name: string) {
    return _removeEvent(element, name);
  },

  debug: function () {
    for (const b in _handlers) {
      if (_handlers.hasOwnProperty(b)) console.log(b);
    }
  },
};

export default KTEventHandler;
