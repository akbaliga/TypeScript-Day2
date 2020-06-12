/* eslint-disable @typescript-eslint/no-unused-vars */

type Handler<T> = (data: T) => void;

class EventEmitter<EventDataTypes> {
  private events: {
    [K in keyof EventDataTypes]?: Array<Handler<EventDataTypes[K]>>
  } = {};

  addListener<K extends keyof EventDataTypes>(
    eventName: K,
    eventHandler: Handler<EventDataTypes[K]>,
  ) {
    let existingHandlers = this.events[eventName];
    if (existingHandlers) {
      existingHandlers.push(eventHandler);
    } else {
      this.events[eventName] = [eventHandler];
    }
  }

  emit<K extends keyof EventDataTypes>(eventName: K, data: EventDataTypes[K]) {
    let eventHandlers = this.events[eventName];
    if (Array.isArray(eventHandlers)) {
      for (let eventHandler of eventHandlers) {
        eventHandler(data);
      }
    }
  }
}

// ===============
// This below is our implementation
// ===============

type WindowEventEmitter = {
  resize: { width: number; height: number };
  close: null;
};
let emitter = new EventEmitter<WindowEventEmitter>();

emitter.addListener('resize', (newSize) => {
  console.log(`Window was resized:`, newSize.width, newSize.height);
});

emitter.addListener('resize', (newSize) => {
  console.log(`Second handler fired.`);
});

// Later...

emitter.emit('resize', { width: 200, height: 100 });

// Ignore this.
export {};
