// ============================================================
//  js/state.js  —  Tiny reactive state (pub/sub)
//  Sections subscribe to language changes → re-render themselves
// ============================================================

const _state = {
  lang: "ar",
  skillsFired: false,
};

const _subscribers = [];

export const State = {
  get(key)  { return _state[key]; },

  set(key, val) {
    _state[key] = val;
    _subscribers.forEach(fn => fn(key, val));
  },

  subscribe(fn) {
    _subscribers.push(fn);
    return () => {
      const i = _subscribers.indexOf(fn);
      if (i > -1) _subscribers.splice(i, 1);
    };
  },

  // convenience
  get lang()         { return _state.lang; },
  get skillsFired()  { return _state.skillsFired; },
  set skillsFired(v) { _state.skillsFired = v; },
};
