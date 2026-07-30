var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _a;
import { c as create, d as devtools, s as subscribeWithSelector } from "./middleware-BxIPYTl9.js";
import { d as devError, a as devWarn, b as devLog, ad as devGroup, ae as devGroupEnd } from "./index-CFVMMdzN.js";
import { J as JWT_STORAGE_KEY } from "./mfe.config-tfp2F-Dw.js";
var NOTHING = /* @__PURE__ */ Symbol.for("immer-nothing");
var DRAFTABLE = /* @__PURE__ */ Symbol.for("immer-draftable");
var DRAFT_STATE = /* @__PURE__ */ Symbol.for("immer-state");
function die(error, ...args) {
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
__name(die, "die");
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
__name(isDraft, "isDraft");
function isDraftable(value) {
  var _a2;
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_a2 = value.constructor) == null ? void 0 : _a2[DRAFTABLE]) || isMap(value) || isSet(value);
}
__name(isDraftable, "isDraftable");
var objectCtorString = Object.prototype.constructor.toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null || proto === Object.prototype)
    return true;
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  if (typeof Ctor !== "function")
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
__name(isPlainObject, "isPlainObject");
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0) {
    const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
__name(each, "each");
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
__name(getArchtype, "getArchtype");
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
__name(has, "has");
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
__name(set, "set");
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
__name(is, "is");
function isMap(target) {
  return target instanceof Map;
}
__name(isMap, "isMap");
function isSet(target) {
  return target instanceof Set;
}
__name(isSet, "isSet");
function latest(state) {
  return state.copy_ || state.base_;
}
__name(latest, "latest");
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
__name(shallowCopy, "shallowCopy");
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    Object.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  Object.freeze(obj);
  if (deep)
    Object.values(obj).forEach((value) => freeze(value, true));
  return obj;
}
__name(freeze, "freeze");
function dontMutateFrozenCollections() {
  die(2);
}
__name(dontMutateFrozenCollections, "dontMutateFrozenCollections");
var dontMutateMethodOverride = {
  value: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || typeof obj !== "object")
    return true;
  return Object.isFrozen(obj);
}
__name(isFrozen, "isFrozen");
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
__name(getPlugin, "getPlugin");
var currentScope;
function getCurrentScope() {
  return currentScope;
}
__name(getCurrentScope, "getCurrentScope");
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
__name(createScope, "createScope");
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
__name(usePatchesInScope, "usePatchesInScope");
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
__name(revokeScope, "revokeScope");
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
__name(leaveScope, "leaveScope");
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
__name(enterScope, "enterScope");
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
__name(revokeDraft, "revokeDraft");
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
__name(processResult, "processResult");
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
      useStrictIteration
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(
        rootScope,
        state,
        result,
        key,
        childValue,
        path,
        isSet2
      ),
      useStrictIteration
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
__name(finalize, "finalize");
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue == null) {
    return;
  }
  if (typeof childValue !== "object" && !targetIsSet) {
    return;
  }
  const childIsFrozen = isFrozen(childValue);
  if (childIsFrozen && !targetIsSet) {
    return;
  }
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !childIsFrozen) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop)))
      maybeFreeze(rootScope, childValue);
  }
}
__name(finalizeProperty, "finalizeProperty");
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
__name(maybeFreeze, "maybeFreeze");
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
__name(createProxyProxy, "createProxyProxy");
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc == null ? void 0 : desc.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2 == null ? void 0 : current2[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
__name(peek, "peek");
function readPropFromProto(state, source, prop) {
  var _a2;
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (_a2 = desc.get) == null ? void 0 : _a2.call(state.draft_)
  ) : void 0;
}
__name(readPropFromProto, "readPropFromProto");
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
__name(getDescriptorFromProto, "getDescriptorFromProto");
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
__name(markChanged, "markChanged");
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
__name(prepareCopy, "prepareCopy");
var Immer2 = (_a = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = true;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return /* @__PURE__ */ __name(function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        }, "curriedProduce");
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof (config == null ? void 0 : config.useStrictShallowCopy) === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (typeof (config == null ? void 0 : config.useStrictIteration) === "boolean")
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
}, __name(_a, "Immer2"), _a);
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
__name(createProxy, "createProxy");
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
__name(current, "current");
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    strict = state.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
__name(currentImpl, "currentImpl");
var immer$1 = new Immer2();
var produce = immer$1.produce;
const immerImpl = /* @__PURE__ */ __name((initializer) => (set2, get, store) => {
  store.setState = (updater, replace, ...args) => {
    const nextState = typeof updater === "function" ? produce(updater) : updater;
    return set2(nextState, replace, ...args);
  };
  return initializer(store.setState, get, store);
}, "immerImpl");
const immer = immerImpl;
function decodeJwtPayload(token) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}
__name(decodeJwtPayload, "decodeJwtPayload");
function isJwtExpired(token) {
  const payload = decodeJwtPayload(token);
  if (!(payload == null ? void 0 : payload.exp)) return true;
  return payload.exp < Math.floor(Date.now() / 1e3);
}
__name(isJwtExpired, "isJwtExpired");
const SessionStorageKeys = {
  JWT_TOKEN: JWT_STORAGE_KEY
};
var DOMEventNames = /* @__PURE__ */ ((DOMEventNames2) => {
  DOMEventNames2["JWT_TOKEN_UPDATED"] = "trax-jwt-token-updated";
  DOMEventNames2["JWT_UNAUTHORIZED"] = "trax-jwt-unauthorized";
  return DOMEventNames2;
})(DOMEventNames || {});
var TokenPlaceholders = /* @__PURE__ */ ((TokenPlaceholders2) => {
  TokenPlaceholders2["NO_TOKEN_AVAILABLE"] = "NO_TOKEN_AVAILABLE";
  TokenPlaceholders2["TOKEN_EXPIRED"] = "TOKEN_EXPIRED";
  TokenPlaceholders2["TOKEN_INVALID"] = "TOKEN_INVALID";
  return TokenPlaceholders2;
})(TokenPlaceholders || {});
const JWT_LOG_PREFIX = "[JWT Auth]";
const decodeJWTPayload = /* @__PURE__ */ __name((token) => !token || token === TokenPlaceholders.NO_TOKEN_AVAILABLE ? null : decodeJwtPayload(token), "decodeJWTPayload");
const isTokenExpired = /* @__PURE__ */ __name((token) => !token || token === TokenPlaceholders.NO_TOKEN_AVAILABLE ? true : isJwtExpired(token), "isTokenExpired");
const extractUserFromPayload = /* @__PURE__ */ __name((payload) => {
  if (!payload) {
    return null;
  }
  const permissions = payload.permissions || (payload.scp ? payload.scp.split(" ") : null) || (payload.scope ? typeof payload.scope === "string" ? payload.scope.split(" ") : payload.scope : []);
  const roles = payload.roles || payload.wids || [];
  const email = payload.email || payload.unique_name || payload.preferred_username || payload.upn || null;
  const name = payload.name || (payload.given_name && payload.family_name ? `${payload.given_name} ${payload.family_name}` : null) || payload.nickname || null;
  return {
    id: payload.sub,
    email,
    name,
    roles,
    permissions
  };
}, "extractUserFromPayload");
const createInitialState = /* @__PURE__ */ __name(() => ({
  token: TokenPlaceholders.NO_TOKEN_AVAILABLE,
  isValid: false,
  isLoading: false,
  isInitialized: false,
  error: null,
  lastUpdated: null,
  payload: null,
  user: null,
  isAuthenticated: false,
  isExpired: true,
  expiresAt: null
}), "createInitialState");
let eventListener = null;
const useJWTStore = create()(
  devtools(
    subscribeWithSelector(
      immer((set2, get) => ({
        token: TokenPlaceholders.NO_TOKEN_AVAILABLE,
        isValid: false,
        isLoading: false,
        isInitialized: false,
        error: null,
        lastUpdated: null,
        payload: null,
        user: null,
        isAuthenticated: false,
        isExpired: true,
        expiresAt: null,
        // Initialize the JWT service
        initialize: /* @__PURE__ */ __name(async () => {
          devGroup(`${JWT_LOG_PREFIX} Initializing JWT service`);
          set2((state) => {
            state.isLoading = true;
            state.error = null;
          });
          try {
            devLog(`${JWT_LOG_PREFIX} Loading token from sessionStorage key: "${SessionStorageKeys.JWT_TOKEN}"`);
            get()._loadFromStorage();
            devLog(`${JWT_LOG_PREFIX} Subscribing to DOM event: "${DOMEventNames.JWT_TOKEN_UPDATED}"`);
            get()._setupEventListener();
            set2((state) => {
              state.isInitialized = true;
              state.isLoading = false;
            });
            const { isAuthenticated, isExpired, expiresAt, user } = get();
            devLog(`${JWT_LOG_PREFIX} Initialization complete`, {
              isAuthenticated,
              isExpired,
              expiresAt: (expiresAt == null ? void 0 : expiresAt.toISOString()) ?? null,
              user: (user == null ? void 0 : user.email) ?? "unknown"
            });
            devGroupEnd();
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Initialization failed";
            devError(`${JWT_LOG_PREFIX} Initialization failed:`, errorMessage);
            devGroupEnd();
            set2((state) => {
              state.error = errorMessage;
              state.isLoading = false;
            });
            throw error;
          }
        }, "initialize"),
        // Set JWT token
        setToken: /* @__PURE__ */ __name((token) => {
          devLog(`${JWT_LOG_PREFIX} setToken called (manual update)`);
          if (!token || typeof token !== "string") {
            devWarn(`${JWT_LOG_PREFIX} setToken rejected - invalid token provided`);
            get().setError("Invalid token provided");
            return;
          }
          get()._updateTokenData(token);
          get()._saveToStorage(token);
        }, "setToken"),
        // Clear JWT token
        clearToken: /* @__PURE__ */ __name(() => {
          devWarn(`${JWT_LOG_PREFIX} clearToken called - removing authentication`);
          try {
            sessionStorage.removeItem(SessionStorageKeys.JWT_TOKEN);
          } catch (error) {
            devError(`${JWT_LOG_PREFIX} Failed to clear token from storage:`, error);
          }
          set2((state) => {
            state.token = TokenPlaceholders.NO_TOKEN_AVAILABLE;
            state.isValid = false;
            state.isAuthenticated = false;
            state.isExpired = true;
            state.payload = null;
            state.user = null;
            state.expiresAt = null;
            state.lastUpdated = /* @__PURE__ */ new Date();
            state.error = null;
          });
        }, "clearToken"),
        // Validate JWT token
        validateToken: /* @__PURE__ */ __name((token) => {
          const targetToken = token || get().token;
          if (targetToken === TokenPlaceholders.NO_TOKEN_AVAILABLE) {
            return false;
          }
          return !isTokenExpired(targetToken);
        }, "validateToken"),
        // Decode JWT token
        decodeToken: /* @__PURE__ */ __name((token) => {
          const targetToken = token || get().token;
          if (targetToken === TokenPlaceholders.NO_TOKEN_AVAILABLE) {
            return null;
          }
          return decodeJWTPayload(targetToken);
        }, "decodeToken"),
        // Set loading state
        setLoading: /* @__PURE__ */ __name((isLoading) => {
          set2((state) => {
            state.isLoading = isLoading;
          });
        }, "setLoading"),
        // Set error state
        setError: /* @__PURE__ */ __name((error) => {
          set2((state) => {
            state.error = error;
          });
        }, "setError"),
        // Reset state
        reset: /* @__PURE__ */ __name(() => {
          devWarn(`${JWT_LOG_PREFIX} Full store reset - cleaning up event listener and clearing state`);
          get()._cleanupEventListener();
          set2(() => createInitialState());
        }, "reset"),
        // Internal: Load token from Session Storage
        _loadFromStorage: /* @__PURE__ */ __name(() => {
          try {
            const storedToken = sessionStorage.getItem(SessionStorageKeys.JWT_TOKEN);
            if (storedToken && storedToken !== TokenPlaceholders.NO_TOKEN_AVAILABLE) {
              devLog(`${JWT_LOG_PREFIX} Token found in sessionStorage (${storedToken.length} chars)`);
              get()._updateTokenData(storedToken);
            } else {
              devWarn(`${JWT_LOG_PREFIX} No token in sessionStorage (value: ${storedToken ?? "null"})`);
              set2((state) => {
                state.token = TokenPlaceholders.NO_TOKEN_AVAILABLE;
                state.isValid = false;
                state.payload = null;
                state.user = null;
                state.isAuthenticated = false;
                state.isExpired = true;
                state.expiresAt = null;
                state.lastUpdated = /* @__PURE__ */ new Date();
              });
            }
          } catch (error) {
            devError(`${JWT_LOG_PREFIX} Failed to load token from storage:`, error);
            get().setError("Failed to load authentication data");
          }
        }, "_loadFromStorage"),
        // Internal: Save token to Session Storage
        _saveToStorage: /* @__PURE__ */ __name((token) => {
          try {
            sessionStorage.setItem(SessionStorageKeys.JWT_TOKEN, token);
            devLog(`${JWT_LOG_PREFIX} Token saved to sessionStorage`);
          } catch (error) {
            devError(`${JWT_LOG_PREFIX} Failed to save token to storage:`, error);
          }
        }, "_saveToStorage"),
        // Internal: Setup DOM event listener
        _setupEventListener: /* @__PURE__ */ __name(() => {
          if (typeof window === "undefined") return;
          get()._cleanupEventListener();
          eventListener = /* @__PURE__ */ __name(() => {
            devGroup(`${JWT_LOG_PREFIX} Shell App dispatched "${DOMEventNames.JWT_TOKEN_UPDATED}" - token refresh`);
            get()._loadFromStorage();
            const { isAuthenticated, isExpired, expiresAt, user } = get();
            devLog(`${JWT_LOG_PREFIX} Token refresh result`, {
              isAuthenticated,
              isExpired,
              expiresAt: (expiresAt == null ? void 0 : expiresAt.toISOString()) ?? null,
              user: (user == null ? void 0 : user.email) ?? "unknown"
            });
            devGroupEnd();
          }, "eventListener");
          window.addEventListener(DOMEventNames.JWT_TOKEN_UPDATED, eventListener);
          devLog(`${JWT_LOG_PREFIX} DOM event listener registered`);
        }, "_setupEventListener"),
        // Internal: Cleanup DOM event listener
        _cleanupEventListener: /* @__PURE__ */ __name(() => {
          if (typeof window !== "undefined" && eventListener) {
            window.removeEventListener(DOMEventNames.JWT_TOKEN_UPDATED, eventListener);
            eventListener = null;
          }
        }, "_cleanupEventListener"),
        // Internal: Update token and related data
        _updateTokenData: /* @__PURE__ */ __name((token) => {
          const payload = decodeJWTPayload(token);
          const isValid = get().validateToken(token);
          const isExpired = token === TokenPlaceholders.NO_TOKEN_AVAILABLE ? true : isTokenExpired(token);
          const user = extractUserFromPayload(payload);
          const expiresAt = (payload == null ? void 0 : payload.exp) ? new Date(payload.exp * 1e3) : null;
          if (!isValid) {
            devWarn(`${JWT_LOG_PREFIX} Token is invalid or expired`, {
              isExpired,
              expiresAt: (expiresAt == null ? void 0 : expiresAt.toISOString()) ?? null
            });
          } else {
            devLog(`${JWT_LOG_PREFIX} Token decoded successfully`, {
              sub: (payload == null ? void 0 : payload.sub) ?? null,
              email: (user == null ? void 0 : user.email) ?? null,
              isExpired,
              expiresAt: (expiresAt == null ? void 0 : expiresAt.toISOString()) ?? null
            });
          }
          set2((state) => {
            state.token = token;
            state.payload = payload;
            state.isValid = isValid;
            state.isAuthenticated = isValid && !isExpired;
            state.isExpired = isExpired;
            state.user = user;
            state.expiresAt = expiresAt;
            state.lastUpdated = /* @__PURE__ */ new Date();
            state.error = isValid ? null : "Invalid or expired token";
          });
        }, "_updateTokenData")
      }))
    ),
    { name: "jwt-auth-storage" }
  )
);
const jwtSelectors = {
  // Get authentication status
  isAuthenticated: /* @__PURE__ */ __name((state) => state.isAuthenticated, "isAuthenticated"),
  // Get real token only (null if placeholder)
  realToken: /* @__PURE__ */ __name((state) => state.token !== TokenPlaceholders.NO_TOKEN_AVAILABLE ? state.token : null, "realToken"),
  // Get user information
  user: /* @__PURE__ */ __name((state) => state.user, "user"),
  // Get error state
  error: /* @__PURE__ */ __name((state) => state.error, "error"),
  // Get loading state
  isLoading: /* @__PURE__ */ __name((state) => state.isLoading, "isLoading")
};
let initializationPromise = null;
const ensureJWTInitialized = /* @__PURE__ */ __name(async () => {
  const state = useJWTStore.getState();
  if (state.isInitialized) {
    return;
  }
  if (typeof window === "undefined") {
    return;
  }
  if (initializationPromise) {
    return initializationPromise;
  }
  initializationPromise = state.initialize().catch((error) => {
    devError(`${JWT_LOG_PREFIX} Failed to initialize JWT store:`, error);
    throw error;
  }).finally(() => {
    initializationPromise = null;
  });
  return initializationPromise;
}, "ensureJWTInitialized");
export {
  DOMEventNames as D,
  TokenPlaceholders as T,
  ensureJWTInitialized as e,
  jwtSelectors as j,
  useJWTStore as u
};
