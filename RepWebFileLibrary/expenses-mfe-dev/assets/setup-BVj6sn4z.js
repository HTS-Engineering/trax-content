var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { D as DiagAPI, r as registerGlobal, g as getGlobal, u as unregisterGlobal, d as createContextKey, b as baggageEntryMetadataFromString, p as propagation, t as trace, i as isSpanContextValid, T as TraceFlags, c as context, S as SpanStatusCode, e as isValidTraceId, I as INVALID_SPAN_CONTEXT, R as ROOT_CONTEXT } from "./__federation_expose_Mount-D-uHMT33.js";
const _NoopMeter = class _NoopMeter {
  constructor() {
  }
  /**
   * @see {@link Meter.createGauge}
   */
  createGauge(_name, _options) {
    return NOOP_GAUGE_METRIC;
  }
  /**
   * @see {@link Meter.createHistogram}
   */
  createHistogram(_name, _options) {
    return NOOP_HISTOGRAM_METRIC;
  }
  /**
   * @see {@link Meter.createCounter}
   */
  createCounter(_name, _options) {
    return NOOP_COUNTER_METRIC;
  }
  /**
   * @see {@link Meter.createUpDownCounter}
   */
  createUpDownCounter(_name, _options) {
    return NOOP_UP_DOWN_COUNTER_METRIC;
  }
  /**
   * @see {@link Meter.createObservableGauge}
   */
  createObservableGauge(_name, _options) {
    return NOOP_OBSERVABLE_GAUGE_METRIC;
  }
  /**
   * @see {@link Meter.createObservableCounter}
   */
  createObservableCounter(_name, _options) {
    return NOOP_OBSERVABLE_COUNTER_METRIC;
  }
  /**
   * @see {@link Meter.createObservableUpDownCounter}
   */
  createObservableUpDownCounter(_name, _options) {
    return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
  }
  /**
   * @see {@link Meter.addBatchObservableCallback}
   */
  addBatchObservableCallback(_callback, _observables) {
  }
  /**
   * @see {@link Meter.removeBatchObservableCallback}
   */
  removeBatchObservableCallback(_callback) {
  }
};
__name(_NoopMeter, "NoopMeter");
let NoopMeter = _NoopMeter;
const _NoopMetric = class _NoopMetric {
};
__name(_NoopMetric, "NoopMetric");
let NoopMetric = _NoopMetric;
const _NoopCounterMetric = class _NoopCounterMetric extends NoopMetric {
  add(_value, _attributes) {
  }
};
__name(_NoopCounterMetric, "NoopCounterMetric");
let NoopCounterMetric = _NoopCounterMetric;
const _NoopUpDownCounterMetric = class _NoopUpDownCounterMetric extends NoopMetric {
  add(_value, _attributes) {
  }
};
__name(_NoopUpDownCounterMetric, "NoopUpDownCounterMetric");
let NoopUpDownCounterMetric = _NoopUpDownCounterMetric;
const _NoopGaugeMetric = class _NoopGaugeMetric extends NoopMetric {
  record(_value, _attributes) {
  }
};
__name(_NoopGaugeMetric, "NoopGaugeMetric");
let NoopGaugeMetric = _NoopGaugeMetric;
const _NoopHistogramMetric = class _NoopHistogramMetric extends NoopMetric {
  record(_value, _attributes) {
  }
};
__name(_NoopHistogramMetric, "NoopHistogramMetric");
let NoopHistogramMetric = _NoopHistogramMetric;
const _NoopObservableMetric = class _NoopObservableMetric {
  addCallback(_callback) {
  }
  removeCallback(_callback) {
  }
};
__name(_NoopObservableMetric, "NoopObservableMetric");
let NoopObservableMetric = _NoopObservableMetric;
const _NoopObservableCounterMetric = class _NoopObservableCounterMetric extends NoopObservableMetric {
};
__name(_NoopObservableCounterMetric, "NoopObservableCounterMetric");
let NoopObservableCounterMetric = _NoopObservableCounterMetric;
const _NoopObservableGaugeMetric = class _NoopObservableGaugeMetric extends NoopObservableMetric {
};
__name(_NoopObservableGaugeMetric, "NoopObservableGaugeMetric");
let NoopObservableGaugeMetric = _NoopObservableGaugeMetric;
const _NoopObservableUpDownCounterMetric = class _NoopObservableUpDownCounterMetric extends NoopObservableMetric {
};
__name(_NoopObservableUpDownCounterMetric, "NoopObservableUpDownCounterMetric");
let NoopObservableUpDownCounterMetric = _NoopObservableUpDownCounterMetric;
const NOOP_METER = new NoopMeter();
const NOOP_COUNTER_METRIC = new NoopCounterMetric();
const NOOP_GAUGE_METRIC = new NoopGaugeMetric();
const NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
const NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
const NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
const NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
const NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
function createNoopMeter() {
  return NOOP_METER;
}
__name(createNoopMeter, "createNoopMeter");
var SamplingDecision$1;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision$1 || (SamplingDecision$1 = {}));
var SpanKind;
(function(SpanKind2) {
  SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
  SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
  SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
  SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
  SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
const diag = DiagAPI.instance();
const _NoopMeterProvider = class _NoopMeterProvider {
  getMeter(_name, _version, _options) {
    return NOOP_METER;
  }
};
__name(_NoopMeterProvider, "NoopMeterProvider");
let NoopMeterProvider = _NoopMeterProvider;
const NOOP_METER_PROVIDER = new NoopMeterProvider();
const API_NAME = "metrics";
const _MetricsAPI = class _MetricsAPI {
  /** Empty private constructor prevents end users from constructing a new instance of the API */
  constructor() {
  }
  /** Get the singleton instance of the Metrics API */
  static getInstance() {
    if (!this._instance) {
      this._instance = new _MetricsAPI();
    }
    return this._instance;
  }
  /**
   * Set the current global meter provider.
   * Returns true if the meter provider was successfully registered, else false.
   */
  setGlobalMeterProvider(provider) {
    return registerGlobal(API_NAME, provider, DiagAPI.instance());
  }
  /**
   * Returns the global meter provider.
   */
  getMeterProvider() {
    return getGlobal(API_NAME) || NOOP_METER_PROVIDER;
  }
  /**
   * Returns a meter from the global meter provider.
   */
  getMeter(name, version, options) {
    return this.getMeterProvider().getMeter(name, version, options);
  }
  /** Remove the global meter provider */
  disable() {
    unregisterGlobal(API_NAME, DiagAPI.instance());
  }
};
__name(_MetricsAPI, "MetricsAPI");
let MetricsAPI = _MetricsAPI;
const metrics = MetricsAPI.getInstance();
const _OTLPExporterBase = class _OTLPExporterBase {
  _delegate;
  constructor(delegate) {
    this._delegate = delegate;
  }
  /**
   * Export items.
   * @param items
   * @param resultCallback
   */
  export(items, resultCallback) {
    this._delegate.export(items, resultCallback);
  }
  forceFlush() {
    return this._delegate.forceFlush();
  }
  shutdown() {
    return this._delegate.shutdown();
  }
};
__name(_OTLPExporterBase, "OTLPExporterBase");
let OTLPExporterBase = _OTLPExporterBase;
const _OTLPExporterError = class _OTLPExporterError extends Error {
  code;
  name = "OTLPExporterError";
  data;
  constructor(message, code, data) {
    super(message);
    this.data = data;
    this.code = code;
  }
};
__name(_OTLPExporterError, "OTLPExporterError");
let OTLPExporterError = _OTLPExporterError;
function validateTimeoutMillis(timeoutMillis) {
  if (Number.isFinite(timeoutMillis) && timeoutMillis > 0) {
    return timeoutMillis;
  }
  throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${timeoutMillis}')`);
}
__name(validateTimeoutMillis, "validateTimeoutMillis");
function wrapStaticHeadersInFunction(headers) {
  if (headers == null) {
    return void 0;
  }
  return async () => headers;
}
__name(wrapStaticHeadersInFunction, "wrapStaticHeadersInFunction");
function mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
  return {
    timeoutMillis: validateTimeoutMillis(userProvidedConfiguration.timeoutMillis ?? fallbackConfiguration.timeoutMillis ?? defaultConfiguration.timeoutMillis),
    concurrencyLimit: userProvidedConfiguration.concurrencyLimit ?? fallbackConfiguration.concurrencyLimit ?? defaultConfiguration.concurrencyLimit,
    compression: userProvidedConfiguration.compression ?? fallbackConfiguration.compression ?? defaultConfiguration.compression
  };
}
__name(mergeOtlpSharedConfigurationWithDefaults, "mergeOtlpSharedConfigurationWithDefaults");
function getSharedConfigurationDefaults() {
  return {
    timeoutMillis: 1e4,
    concurrencyLimit: 30,
    compression: "none"
  };
}
__name(getSharedConfigurationDefaults, "getSharedConfigurationDefaults");
const _BoundedQueueExportPromiseHandler = class _BoundedQueueExportPromiseHandler {
  _concurrencyLimit;
  _sendingPromises = [];
  /**
   * @param concurrencyLimit maximum promises allowed in a queue at the same time.
   */
  constructor(concurrencyLimit) {
    this._concurrencyLimit = concurrencyLimit;
  }
  pushPromise(promise) {
    if (this.hasReachedLimit()) {
      throw new Error("Concurrency Limit reached");
    }
    this._sendingPromises.push(promise);
    const popPromise = /* @__PURE__ */ __name(() => {
      const index = this._sendingPromises.indexOf(promise);
      void this._sendingPromises.splice(index, 1);
    }, "popPromise");
    promise.then(popPromise, popPromise);
  }
  hasReachedLimit() {
    return this._sendingPromises.length >= this._concurrencyLimit;
  }
  async awaitAll() {
    await Promise.all(this._sendingPromises);
  }
};
__name(_BoundedQueueExportPromiseHandler, "BoundedQueueExportPromiseHandler");
let BoundedQueueExportPromiseHandler = _BoundedQueueExportPromiseHandler;
function createBoundedQueueExportPromiseHandler(options) {
  return new BoundedQueueExportPromiseHandler(options.concurrencyLimit);
}
__name(createBoundedQueueExportPromiseHandler, "createBoundedQueueExportPromiseHandler");
const SUPPRESS_TRACING_KEY = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function suppressTracing(context2) {
  return context2.setValue(SUPPRESS_TRACING_KEY, true);
}
__name(suppressTracing, "suppressTracing");
function isTracingSuppressed(context2) {
  return context2.getValue(SUPPRESS_TRACING_KEY) === true;
}
__name(isTracingSuppressed, "isTracingSuppressed");
const BAGGAGE_KEY_PAIR_SEPARATOR = "=";
const BAGGAGE_PROPERTIES_SEPARATOR = ";";
const BAGGAGE_ITEMS_SEPARATOR = ",";
const BAGGAGE_HEADER = "baggage";
const BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
const BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
const BAGGAGE_MAX_TOTAL_LENGTH = 8192;
function serializeKeyPairs(keyPairs) {
  return keyPairs.reduce((hValue, current) => {
    const value = `${hValue}${hValue !== "" ? BAGGAGE_ITEMS_SEPARATOR : ""}${current}`;
    return value.length > BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
  }, "");
}
__name(serializeKeyPairs, "serializeKeyPairs");
function getKeyPairs(baggage) {
  return baggage.getAllEntries().map(([key, value]) => {
    let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
    if (value.metadata !== void 0) {
      entry += BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
    }
    return entry;
  });
}
__name(getKeyPairs, "getKeyPairs");
function parsePairKeyValue(entry) {
  if (!entry)
    return;
  const metadataSeparatorIndex = entry.indexOf(BAGGAGE_PROPERTIES_SEPARATOR);
  const keyPairPart = metadataSeparatorIndex === -1 ? entry : entry.substring(0, metadataSeparatorIndex);
  const separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR);
  if (separatorIndex <= 0)
    return;
  const rawKey = keyPairPart.substring(0, separatorIndex).trim();
  const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
  if (!rawKey || !rawValue)
    return;
  let key;
  let value;
  try {
    key = decodeURIComponent(rawKey);
    value = decodeURIComponent(rawValue);
  } catch {
    return;
  }
  let metadata;
  if (metadataSeparatorIndex !== -1 && metadataSeparatorIndex < entry.length - 1) {
    const metadataString = entry.substring(metadataSeparatorIndex + 1);
    metadata = baggageEntryMetadataFromString(metadataString);
  }
  return { key, value, metadata };
}
__name(parsePairKeyValue, "parsePairKeyValue");
const _W3CBaggagePropagator = class _W3CBaggagePropagator {
  inject(context2, carrier, setter) {
    const baggage = propagation.getBaggage(context2);
    if (!baggage || isTracingSuppressed(context2))
      return;
    const keyPairs = getKeyPairs(baggage).filter((pair) => {
      return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
    }).slice(0, BAGGAGE_MAX_NAME_VALUE_PAIRS);
    const headerValue = serializeKeyPairs(keyPairs);
    if (headerValue.length > 0) {
      setter.set(carrier, BAGGAGE_HEADER, headerValue);
    }
  }
  extract(context2, carrier, getter) {
    const headerValue = getter.get(carrier, BAGGAGE_HEADER);
    const baggageString = Array.isArray(headerValue) ? headerValue.join(BAGGAGE_ITEMS_SEPARATOR) : headerValue;
    if (!baggageString)
      return context2;
    const baggage = {};
    if (baggageString.length === 0) {
      return context2;
    }
    const pairs = baggageString.split(BAGGAGE_ITEMS_SEPARATOR);
    pairs.forEach((entry) => {
      const keyPair = parsePairKeyValue(entry);
      if (keyPair) {
        const baggageEntry = { value: keyPair.value };
        if (keyPair.metadata) {
          baggageEntry.metadata = keyPair.metadata;
        }
        baggage[keyPair.key] = baggageEntry;
      }
    });
    if (Object.entries(baggage).length === 0) {
      return context2;
    }
    return propagation.setBaggage(context2, propagation.createBaggage(baggage));
  }
  fields() {
    return [BAGGAGE_HEADER];
  }
};
__name(_W3CBaggagePropagator, "W3CBaggagePropagator");
let W3CBaggagePropagator = _W3CBaggagePropagator;
function sanitizeAttributes$1(attributes) {
  const out = {};
  if (typeof attributes !== "object" || attributes == null) {
    return out;
  }
  for (const key in attributes) {
    if (!Object.prototype.hasOwnProperty.call(attributes, key)) {
      continue;
    }
    if (!isAttributeKey(key)) {
      diag.warn(`Invalid attribute key: ${key}`);
      continue;
    }
    const val = attributes[key];
    if (!isAttributeValue(val)) {
      diag.warn(`Invalid attribute value set for key: ${key}`);
      continue;
    }
    if (Array.isArray(val)) {
      out[key] = val.slice();
    } else {
      out[key] = val;
    }
  }
  return out;
}
__name(sanitizeAttributes$1, "sanitizeAttributes$1");
function isAttributeKey(key) {
  return typeof key === "string" && key !== "";
}
__name(isAttributeKey, "isAttributeKey");
function isAttributeValue(val) {
  if (val == null) {
    return true;
  }
  if (Array.isArray(val)) {
    return isHomogeneousAttributeValueArray(val);
  }
  return isValidPrimitiveAttributeValueType(typeof val);
}
__name(isAttributeValue, "isAttributeValue");
function isHomogeneousAttributeValueArray(arr) {
  let type;
  for (const element of arr) {
    if (element == null)
      continue;
    const elementType = typeof element;
    if (elementType === type) {
      continue;
    }
    if (!type) {
      if (isValidPrimitiveAttributeValueType(elementType)) {
        type = elementType;
        continue;
      }
      return false;
    }
    return false;
  }
  return true;
}
__name(isHomogeneousAttributeValueArray, "isHomogeneousAttributeValueArray");
function isValidPrimitiveAttributeValueType(valType) {
  switch (valType) {
    case "number":
    case "boolean":
    case "string":
      return true;
  }
  return false;
}
__name(isValidPrimitiveAttributeValueType, "isValidPrimitiveAttributeValueType");
function loggingErrorHandler() {
  return (ex) => {
    diag.error(stringifyException(ex));
  };
}
__name(loggingErrorHandler, "loggingErrorHandler");
function stringifyException(ex) {
  if (typeof ex === "string") {
    return ex;
  } else {
    return JSON.stringify(flattenException(ex));
  }
}
__name(stringifyException, "stringifyException");
function flattenException(ex) {
  const result = {};
  let current = ex;
  while (current !== null) {
    Object.getOwnPropertyNames(current).forEach((propertyName) => {
      if (result[propertyName])
        return;
      const value = current[propertyName];
      if (value) {
        result[propertyName] = String(value);
      }
    });
    current = Object.getPrototypeOf(current);
  }
  return result;
}
__name(flattenException, "flattenException");
let delegateHandler = loggingErrorHandler();
function globalErrorHandler(ex) {
  try {
    delegateHandler(ex);
  } catch {
  }
}
__name(globalErrorHandler, "globalErrorHandler");
function getNumberFromEnv(_) {
  return void 0;
}
__name(getNumberFromEnv, "getNumberFromEnv");
const VERSION$4 = "2.7.1";
const ATTR_ERROR_TYPE = "error.type";
const ATTR_EXCEPTION_MESSAGE = "exception.message";
const ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
const ATTR_EXCEPTION_TYPE = "exception.type";
const ATTR_HTTP_REQUEST_METHOD = "http.request.method";
const ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
const ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
const ATTR_SERVER_ADDRESS = "server.address";
const ATTR_SERVER_PORT = "server.port";
const ATTR_SERVICE_NAME = "service.name";
const ATTR_SERVICE_VERSION = "service.version";
const ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
const TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
const ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
const ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
const ATTR_URL_FULL = "url.full";
const ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
const SDK_INFO = {
  [ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
  [ATTR_PROCESS_RUNTIME_NAME]: "browser",
  [ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS,
  [ATTR_TELEMETRY_SDK_VERSION]: VERSION$4
};
const otperformance = performance;
const NANOSECOND_DIGITS = 9;
const NANOSECOND_DIGITS_IN_MILLIS = 6;
const MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
const SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
function millisToHrTime(epochMillis) {
  const epochSeconds = epochMillis / 1e3;
  const seconds = Math.trunc(epochSeconds);
  const nanos = Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS);
  return [seconds, nanos];
}
__name(millisToHrTime, "millisToHrTime");
function hrTime(performanceNow) {
  const timeOrigin = millisToHrTime(otperformance.timeOrigin);
  const now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : otperformance.now());
  return addHrTimes(timeOrigin, now);
}
__name(hrTime, "hrTime");
function timeInputToHrTime(time) {
  if (isTimeInputHrTime(time)) {
    return time;
  } else if (typeof time === "number") {
    if (time < otperformance.timeOrigin) {
      return hrTime(time);
    } else {
      return millisToHrTime(time);
    }
  } else if (time instanceof Date) {
    return millisToHrTime(time.getTime());
  } else {
    throw TypeError("Invalid input type");
  }
}
__name(timeInputToHrTime, "timeInputToHrTime");
function hrTimeDuration(startTime, endTime) {
  let seconds = endTime[0] - startTime[0];
  let nanos = endTime[1] - startTime[1];
  if (nanos < 0) {
    seconds -= 1;
    nanos += SECOND_TO_NANOSECONDS;
  }
  return [seconds, nanos];
}
__name(hrTimeDuration, "hrTimeDuration");
function hrTimeToNanoseconds(time) {
  return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
__name(hrTimeToNanoseconds, "hrTimeToNanoseconds");
function isTimeInputHrTime(value) {
  return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
__name(isTimeInputHrTime, "isTimeInputHrTime");
function isTimeInput(value) {
  return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
__name(isTimeInput, "isTimeInput");
function addHrTimes(time1, time2) {
  const out = [time1[0] + time2[0], time1[1] + time2[1]];
  if (out[1] >= SECOND_TO_NANOSECONDS) {
    out[1] -= SECOND_TO_NANOSECONDS;
    out[0] += 1;
  }
  return out;
}
__name(addHrTimes, "addHrTimes");
var ExportResultCode;
(function(ExportResultCode2) {
  ExportResultCode2[ExportResultCode2["SUCCESS"] = 0] = "SUCCESS";
  ExportResultCode2[ExportResultCode2["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));
const _CompositePropagator = class _CompositePropagator {
  _propagators;
  _fields;
  /**
   * Construct a composite propagator from a list of propagators.
   *
   * @param [config] Configuration object for composite propagator
   */
  constructor(config = {}) {
    this._propagators = config.propagators ?? [];
    const fields = /* @__PURE__ */ new Set();
    for (const propagator of this._propagators) {
      const propagatorFields = typeof propagator.fields === "function" ? propagator.fields() : [];
      for (const field of propagatorFields) {
        fields.add(field);
      }
    }
    this._fields = Array.from(fields);
  }
  /**
   * Run each of the configured propagators with the given context and carrier.
   * Propagators are run in the order they are configured, so if multiple
   * propagators write the same carrier key, the propagator later in the list
   * will "win".
   *
   * @param context Context to inject
   * @param carrier Carrier into which context will be injected
   */
  inject(context2, carrier, setter) {
    for (const propagator of this._propagators) {
      try {
        propagator.inject(context2, carrier, setter);
      } catch (err) {
        diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
      }
    }
  }
  /**
   * Run each of the configured propagators with the given context and carrier.
   * Propagators are run in the order they are configured, so if multiple
   * propagators write the same context key, the propagator later in the list
   * will "win".
   *
   * @param context Context to add values to
   * @param carrier Carrier from which to extract context
   */
  extract(context2, carrier, getter) {
    return this._propagators.reduce((ctx, propagator) => {
      try {
        return propagator.extract(ctx, carrier, getter);
      } catch (err) {
        diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
      }
      return ctx;
    }, context2);
  }
  fields() {
    return this._fields.slice();
  }
};
__name(_CompositePropagator, "CompositePropagator");
let CompositePropagator = _CompositePropagator;
const VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
const VALID_KEY = `[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`;
const VALID_VENDOR_KEY = `[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`;
const VALID_KEY_REGEX = new RegExp(`^(?:${VALID_KEY}|${VALID_VENDOR_KEY})$`);
const VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
const INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
__name(validateKey, "validateKey");
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
__name(validateValue, "validateValue");
const MAX_TRACE_STATE_ITEMS = 32;
const MAX_TRACE_STATE_LEN = 512;
const LIST_MEMBERS_SEPARATOR = ",";
const LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
const _TraceState = class _TraceState {
  _length;
  _rawTraceState;
  _internalState;
  constructor(rawTraceState) {
    this._rawTraceState = typeof rawTraceState === "string" ? rawTraceState : "";
    this._length = this._rawTraceState.length;
  }
  set(key, value) {
    if (!validateKey(key) || !validateValue(value)) {
      return this;
    }
    const currState = this._getState();
    const currValue = currState.get(key);
    let newLength = this._length;
    if (typeof currValue === "string") {
      newLength += value.length - currValue.length;
    } else {
      newLength += key.length + value.length + (currState.size > 0 ? 2 : 1);
    }
    if (newLength > MAX_TRACE_STATE_LEN) {
      return this;
    }
    const newState = new Map(currState);
    newState.delete(key);
    newState.set(key, value);
    return this._fromState(newState, newLength);
  }
  unset(key) {
    const currState = this._getState();
    const currValue = currState.get(key);
    if (typeof currValue !== "string") {
      return this;
    }
    let newLength = this._length - (key.length + currValue.length + 1);
    if (currState.size > 1) {
      newLength = newLength - 1;
    }
    const newState = new Map(currState);
    newState.delete(key);
    return this._fromState(newState, newLength);
  }
  get(key) {
    const currState = this._getState();
    return currState.get(key);
  }
  serialize() {
    let serialized = "";
    let index = 0;
    for (const entry of this._getState()) {
      if (index > 0) {
        serialized = LIST_MEMBERS_SEPARATOR + serialized;
      }
      serialized = `${entry[0]}${LIST_MEMBER_KEY_VALUE_SPLITTER}${entry[1]}` + serialized;
      index++;
    }
    return serialized;
  }
  _getState() {
    if (this._internalState) {
      return this._internalState;
    }
    const vendorMembers = this._rawTraceState.split(LIST_MEMBERS_SEPARATOR);
    const vendorEntries = /* @__PURE__ */ new Map();
    let currentLength = 0;
    for (const member of vendorMembers) {
      const m = member.trim();
      const idx = m.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
      if (idx === -1) {
        continue;
      }
      const key = m.slice(0, idx);
      const value = m.slice(idx + 1);
      if (!validateKey(key) || !validateValue(value)) {
        continue;
      }
      const futureLength = currentLength + m.length + (vendorEntries.size > 0 ? 1 : 0);
      if (futureLength > MAX_TRACE_STATE_LEN) {
        continue;
      }
      vendorEntries.set(key, value);
      currentLength = futureLength;
      if (vendorEntries.size >= MAX_TRACE_STATE_ITEMS) {
        break;
      }
    }
    this._length = currentLength;
    this._internalState = new Map(Array.from(vendorEntries.entries()).reverse());
    return this._internalState;
  }
  _fromState(state, length) {
    const traceState = Object.create(_TraceState.prototype);
    traceState._internalState = state;
    traceState._length = length;
    return traceState;
  }
};
__name(_TraceState, "TraceState");
let TraceState = _TraceState;
const TRACE_PARENT_HEADER = "traceparent";
const TRACE_STATE_HEADER = "tracestate";
const VERSION$3 = "00";
const VERSION_PART = "(?!ff)[\\da-f]{2}";
const TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}";
const PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}";
const FLAGS_PART = "[\\da-f]{2}";
const TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
function parseTraceParent(traceParent) {
  const match = TRACE_PARENT_REGEX.exec(traceParent);
  if (!match)
    return null;
  if (match[1] === "00" && match[5])
    return null;
  return {
    traceId: match[2],
    spanId: match[3],
    traceFlags: parseInt(match[4], 16)
  };
}
__name(parseTraceParent, "parseTraceParent");
const _W3CTraceContextPropagator = class _W3CTraceContextPropagator {
  inject(context2, carrier, setter) {
    const spanContext = trace.getSpanContext(context2);
    if (!spanContext || isTracingSuppressed(context2) || !isSpanContextValid(spanContext))
      return;
    const traceParent = `${VERSION$3}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || TraceFlags.NONE).toString(16)}`;
    setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
    if (spanContext.traceState) {
      setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
    }
  }
  extract(context2, carrier, getter) {
    const traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
    if (!traceParentHeader)
      return context2;
    const traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
    if (typeof traceParent !== "string")
      return context2;
    const spanContext = parseTraceParent(traceParent);
    if (!spanContext)
      return context2;
    spanContext.isRemote = true;
    const traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
    if (traceStateHeader) {
      const state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
      spanContext.traceState = new TraceState(typeof state === "string" ? state : void 0);
    }
    return trace.setSpanContext(context2, spanContext);
  }
  fields() {
    return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
  }
};
__name(_W3CTraceContextPropagator, "W3CTraceContextPropagator");
let W3CTraceContextPropagator = _W3CTraceContextPropagator;
const objectTag = "[object Object]";
const nullTag = "[object Null]";
const undefinedTag = "[object Undefined]";
const funcProto = Function.prototype;
const funcToString = funcProto.toString;
const objectCtorString = funcToString.call(Object);
const getPrototypeOf = Object.getPrototypeOf;
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const symToStringTag = Symbol ? Symbol.toStringTag : void 0;
const nativeObjectToString = objectProto.toString;
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
    return false;
  }
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
__name(isPlainObject, "isPlainObject");
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
__name(isObjectLike, "isObjectLike");
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
__name(baseGetTag, "baseGetTag");
function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  let unmasked = false;
  try {
    value[symToStringTag] = void 0;
    unmasked = true;
  } catch {
  }
  const result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
__name(getRawTag, "getRawTag");
function objectToString(value) {
  return nativeObjectToString.call(value);
}
__name(objectToString, "objectToString");
const MAX_LEVEL = 20;
function merge(...args) {
  let result = args.shift();
  const objects = /* @__PURE__ */ new WeakMap();
  while (args.length > 0) {
    result = mergeTwoObjects(result, args.shift(), 0, objects);
  }
  return result;
}
__name(merge, "merge");
function takeValue(value) {
  if (isArray(value)) {
    return value.slice();
  }
  return value;
}
__name(takeValue, "takeValue");
function mergeTwoObjects(one, two, level = 0, objects) {
  let result;
  if (level > MAX_LEVEL) {
    return void 0;
  }
  level++;
  if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
    result = takeValue(two);
  } else if (isArray(one)) {
    result = one.slice();
    if (isArray(two)) {
      for (let i = 0, j = two.length; i < j; i++) {
        result.push(takeValue(two[i]));
      }
    } else if (isObject(two)) {
      const keys = Object.keys(two);
      for (let i = 0, j = keys.length; i < j; i++) {
        const key = keys[i];
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          continue;
        }
        result[key] = takeValue(two[key]);
      }
    }
  } else if (isObject(one)) {
    if (isObject(two)) {
      if (!shouldMerge(one, two)) {
        return two;
      }
      result = Object.assign({}, one);
      const keys = Object.keys(two);
      for (let i = 0, j = keys.length; i < j; i++) {
        const key = keys[i];
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          continue;
        }
        const twoValue = two[key];
        if (isPrimitive(twoValue)) {
          if (typeof twoValue === "undefined") {
            delete result[key];
          } else {
            result[key] = twoValue;
          }
        } else {
          const obj1 = result[key];
          const obj2 = twoValue;
          if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
            delete result[key];
          } else {
            if (isObject(obj1) && isObject(obj2)) {
              const arr1 = objects.get(obj1) || [];
              const arr2 = objects.get(obj2) || [];
              arr1.push({ obj: one, key });
              arr2.push({ obj: two, key });
              objects.set(obj1, arr1);
              objects.set(obj2, arr2);
            }
            result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
          }
        }
      }
    } else {
      result = two;
    }
  }
  return result;
}
__name(mergeTwoObjects, "mergeTwoObjects");
function wasObjectReferenced(obj, key, objects) {
  const arr = objects.get(obj[key]) || [];
  for (let i = 0, j = arr.length; i < j; i++) {
    const info = arr[i];
    if (info.key === key && info.obj === obj) {
      return true;
    }
  }
  return false;
}
__name(wasObjectReferenced, "wasObjectReferenced");
function isArray(value) {
  return Array.isArray(value);
}
__name(isArray, "isArray");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function isObject(value) {
  return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
__name(isObject, "isObject");
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
__name(isPrimitive, "isPrimitive");
function shouldMerge(one, two) {
  if (!isPlainObject(one) || !isPlainObject(two)) {
    return false;
  }
  return true;
}
__name(shouldMerge, "shouldMerge");
function urlMatches(url, urlToMatch) {
  if (typeof urlToMatch === "string") {
    return url === urlToMatch;
  } else {
    return !!url.match(urlToMatch);
  }
}
__name(urlMatches, "urlMatches");
function isUrlIgnored(url, ignoredUrls) {
  if (!ignoredUrls) {
    return false;
  }
  for (const ignoreUrl of ignoredUrls) {
    if (urlMatches(url, ignoreUrl)) {
      return true;
    }
  }
  return false;
}
__name(isUrlIgnored, "isUrlIgnored");
const _Deferred = class _Deferred {
  _promise;
  _resolve;
  _reject;
  constructor() {
    this._promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
  get promise() {
    return this._promise;
  }
  resolve(val) {
    this._resolve(val);
  }
  reject(err) {
    this._reject(err);
  }
};
__name(_Deferred, "Deferred");
let Deferred = _Deferred;
const _BindOnceFuture = class _BindOnceFuture {
  _isCalled = false;
  _deferred = new Deferred();
  _callback;
  _that;
  constructor(callback, that) {
    this._callback = callback;
    this._that = that;
  }
  get isCalled() {
    return this._isCalled;
  }
  get promise() {
    return this._deferred.promise;
  }
  call(...args) {
    if (!this._isCalled) {
      this._isCalled = true;
      try {
        Promise.resolve(this._callback.call(this._that, ...args)).then((val) => this._deferred.resolve(val), (err) => this._deferred.reject(err));
      } catch (err) {
        this._deferred.reject(err);
      }
    }
    return this._deferred.promise;
  }
};
__name(_BindOnceFuture, "BindOnceFuture");
let BindOnceFuture = _BindOnceFuture;
function _export(exporter, arg) {
  return new Promise((resolve) => {
    context.with(suppressTracing(context.active()), () => {
      exporter.export(arg, resolve);
    });
  });
}
__name(_export, "_export");
const internal = {
  _export
};
function isPartialSuccessResponse(response) {
  return Object.prototype.hasOwnProperty.call(response, "partialSuccess");
}
__name(isPartialSuccessResponse, "isPartialSuccessResponse");
function createLoggingPartialSuccessResponseHandler() {
  return {
    handleResponse(response) {
      if (response == null || !isPartialSuccessResponse(response) || response.partialSuccess == null || Object.keys(response.partialSuccess).length === 0) {
        return;
      }
      diag.warn("Received Partial Success response:", JSON.stringify(response.partialSuccess));
    }
  };
}
__name(createLoggingPartialSuccessResponseHandler, "createLoggingPartialSuccessResponseHandler");
const _OTLPExportDelegate = class _OTLPExportDelegate {
  _diagLogger;
  _transport;
  _serializer;
  _responseHandler;
  _promiseQueue;
  _timeout;
  constructor(transport, serializer, responseHandler, promiseQueue, timeout) {
    this._transport = transport;
    this._serializer = serializer;
    this._responseHandler = responseHandler;
    this._promiseQueue = promiseQueue;
    this._timeout = timeout;
    this._diagLogger = diag.createComponentLogger({
      namespace: "OTLPExportDelegate"
    });
  }
  export(internalRepresentation, resultCallback) {
    this._diagLogger.debug("items to be sent", internalRepresentation);
    if (this._promiseQueue.hasReachedLimit()) {
      resultCallback({
        code: ExportResultCode.FAILED,
        error: new Error("Concurrent export limit reached")
      });
      return;
    }
    const serializedRequest = this._serializer.serializeRequest(internalRepresentation);
    if (serializedRequest == null) {
      resultCallback({
        code: ExportResultCode.FAILED,
        error: new Error("Nothing to send")
      });
      return;
    }
    this._promiseQueue.pushPromise(this._transport.send(serializedRequest, this._timeout).then((response) => {
      if (response.status === "success") {
        if (response.data != null) {
          try {
            this._responseHandler.handleResponse(this._serializer.deserializeResponse(response.data));
          } catch (e) {
            this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", e, response.data);
          }
        }
        resultCallback({
          code: ExportResultCode.SUCCESS
        });
        return;
      } else if (response.status === "failure" && response.error) {
        resultCallback({
          code: ExportResultCode.FAILED,
          error: response.error
        });
        return;
      } else if (response.status === "retryable") {
        resultCallback({
          code: ExportResultCode.FAILED,
          error: response.error ?? new OTLPExporterError("Export failed with retryable status")
        });
      } else {
        resultCallback({
          code: ExportResultCode.FAILED,
          error: new OTLPExporterError("Export failed with unknown error")
        });
      }
    }, (reason) => resultCallback({
      code: ExportResultCode.FAILED,
      error: reason
    })));
  }
  forceFlush() {
    return this._promiseQueue.awaitAll();
  }
  async shutdown() {
    this._diagLogger.debug("shutdown started");
    await this.forceFlush();
    this._transport.shutdown();
  }
};
__name(_OTLPExportDelegate, "OTLPExportDelegate");
let OTLPExportDelegate = _OTLPExportDelegate;
function createOtlpExportDelegate(components, settings) {
  return new OTLPExportDelegate(components.transport, components.serializer, createLoggingPartialSuccessResponseHandler(), components.promiseHandler, settings.timeout);
}
__name(createOtlpExportDelegate, "createOtlpExportDelegate");
function createOtlpNetworkExportDelegate(options, serializer, transport) {
  return createOtlpExportDelegate({
    transport,
    serializer,
    promiseHandler: createBoundedQueueExportPromiseHandler(options)
  }, { timeout: options.timeoutMillis });
}
__name(createOtlpNetworkExportDelegate, "createOtlpNetworkExportDelegate");
const _NoopLogger = class _NoopLogger {
  emit(_logRecord) {
  }
  enabled() {
    return false;
  }
};
__name(_NoopLogger, "NoopLogger");
let NoopLogger = _NoopLogger;
const NOOP_LOGGER = new NoopLogger();
const GLOBAL_LOGS_API_KEY = /* @__PURE__ */ Symbol.for("io.opentelemetry.js.api.logs");
const _global = globalThis;
function makeGetter(requiredVersion, instance, fallback) {
  return (version) => version === requiredVersion ? instance : fallback;
}
__name(makeGetter, "makeGetter");
const API_BACKWARDS_COMPATIBILITY_VERSION = 1;
const _NoopLoggerProvider = class _NoopLoggerProvider {
  getLogger(_name, _version, _options) {
    return new NoopLogger();
  }
};
__name(_NoopLoggerProvider, "NoopLoggerProvider");
let NoopLoggerProvider = _NoopLoggerProvider;
const NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
const _ProxyLogger = class _ProxyLogger {
  constructor(provider, name, version, options) {
    this._provider = provider;
    this.name = name;
    this.version = version;
    this.options = options;
  }
  /**
   * Emit a log record. This method should only be used by log appenders.
   *
   * @param logRecord
   */
  emit(logRecord) {
    this._getLogger().emit(logRecord);
  }
  enabled(options) {
    return this._getLogger().enabled(options);
  }
  /**
   * Try to get a logger from the proxy logger provider.
   * If the proxy logger provider has no delegate, return a noop logger.
   */
  _getLogger() {
    if (this._delegate) {
      return this._delegate;
    }
    const logger2 = this._provider._getDelegateLogger(this.name, this.version, this.options);
    if (!logger2) {
      return NOOP_LOGGER;
    }
    this._delegate = logger2;
    return this._delegate;
  }
};
__name(_ProxyLogger, "ProxyLogger");
let ProxyLogger = _ProxyLogger;
const _ProxyLoggerProvider = class _ProxyLoggerProvider {
  getLogger(name, version, options) {
    var _a;
    return (_a = this._getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyLogger(this, name, version, options);
  }
  /**
   * Get the delegate logger provider.
   * Used by tests only.
   * @internal
   */
  _getDelegate() {
    var _a;
    return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_LOGGER_PROVIDER;
  }
  /**
   * Set the delegate logger provider
   * @internal
   */
  _setDelegate(delegate) {
    this._delegate = delegate;
  }
  /**
   * @internal
   */
  _getDelegateLogger(name, version, options) {
    var _a;
    return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
  }
};
__name(_ProxyLoggerProvider, "ProxyLoggerProvider");
let ProxyLoggerProvider = _ProxyLoggerProvider;
const _LogsAPI = class _LogsAPI {
  constructor() {
    this._proxyLoggerProvider = new ProxyLoggerProvider();
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _LogsAPI();
    }
    return this._instance;
  }
  setGlobalLoggerProvider(provider) {
    if (_global[GLOBAL_LOGS_API_KEY]) {
      return this.getLoggerProvider();
    }
    _global[GLOBAL_LOGS_API_KEY] = makeGetter(API_BACKWARDS_COMPATIBILITY_VERSION, provider, NOOP_LOGGER_PROVIDER);
    this._proxyLoggerProvider._setDelegate(provider);
    return provider;
  }
  /**
   * Returns the global logger provider.
   *
   * @returns LoggerProvider
   */
  getLoggerProvider() {
    var _a, _b;
    return (_b = (_a = _global[GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_global, API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
  }
  /**
   * Returns a logger from the global logger provider.
   *
   * @returns Logger
   */
  getLogger(name, version, options) {
    return this.getLoggerProvider().getLogger(name, version, options);
  }
  /** Remove the global logger provider */
  disable() {
    delete _global[GLOBAL_LOGS_API_KEY];
    this._proxyLoggerProvider = new ProxyLoggerProvider();
  }
};
__name(_LogsAPI, "LogsAPI");
let LogsAPI = _LogsAPI;
const logs = LogsAPI.getInstance();
let serviceName;
function defaultServiceName() {
  if (serviceName === void 0) {
    try {
      const argv0 = globalThis.process.argv0;
      serviceName = argv0 ? `unknown_service:${argv0}` : "unknown_service";
    } catch {
      serviceName = "unknown_service";
    }
  }
  return serviceName;
}
__name(defaultServiceName, "defaultServiceName");
const isPromiseLike = /* @__PURE__ */ __name((val) => {
  return val !== null && typeof val === "object" && typeof val.then === "function";
}, "isPromiseLike");
const _ResourceImpl = class _ResourceImpl {
  _rawAttributes;
  _asyncAttributesPending = false;
  _schemaUrl;
  _memoizedAttributes;
  static FromAttributeList(attributes, options) {
    const res = new _ResourceImpl({}, options);
    res._rawAttributes = guardedRawAttributes(attributes);
    res._asyncAttributesPending = attributes.filter(([_, val]) => isPromiseLike(val)).length > 0;
    return res;
  }
  constructor(resource, options) {
    const attributes = resource.attributes ?? {};
    this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
      if (isPromiseLike(v)) {
        this._asyncAttributesPending = true;
      }
      return [k, v];
    });
    this._rawAttributes = guardedRawAttributes(this._rawAttributes);
    this._schemaUrl = validateSchemaUrl(options == null ? void 0 : options.schemaUrl);
  }
  get asyncAttributesPending() {
    return this._asyncAttributesPending;
  }
  async waitForAsyncAttributes() {
    if (!this.asyncAttributesPending) {
      return;
    }
    for (let i = 0; i < this._rawAttributes.length; i++) {
      const [k, v] = this._rawAttributes[i];
      this._rawAttributes[i] = [k, isPromiseLike(v) ? await v : v];
    }
    this._asyncAttributesPending = false;
  }
  get attributes() {
    if (this.asyncAttributesPending) {
      diag.error("Accessing resource attributes before async attributes settled");
    }
    if (this._memoizedAttributes) {
      return this._memoizedAttributes;
    }
    const attrs = {};
    for (const [k, v] of this._rawAttributes) {
      if (isPromiseLike(v)) {
        diag.debug(`Unsettled resource attribute ${k} skipped`);
        continue;
      }
      if (v != null) {
        attrs[k] ??= v;
      }
    }
    if (!this._asyncAttributesPending) {
      this._memoizedAttributes = attrs;
    }
    return attrs;
  }
  getRawAttributes() {
    return this._rawAttributes;
  }
  get schemaUrl() {
    return this._schemaUrl;
  }
  merge(resource) {
    if (resource == null)
      return this;
    const mergedSchemaUrl = mergeSchemaUrl(this, resource);
    const mergedOptions = mergedSchemaUrl ? { schemaUrl: mergedSchemaUrl } : void 0;
    return _ResourceImpl.FromAttributeList([...resource.getRawAttributes(), ...this.getRawAttributes()], mergedOptions);
  }
};
__name(_ResourceImpl, "ResourceImpl");
let ResourceImpl = _ResourceImpl;
function resourceFromAttributes(attributes, options) {
  return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
__name(resourceFromAttributes, "resourceFromAttributes");
function defaultResource() {
  return resourceFromAttributes({
    [ATTR_SERVICE_NAME]: defaultServiceName(),
    [ATTR_TELEMETRY_SDK_LANGUAGE]: SDK_INFO[ATTR_TELEMETRY_SDK_LANGUAGE],
    [ATTR_TELEMETRY_SDK_NAME]: SDK_INFO[ATTR_TELEMETRY_SDK_NAME],
    [ATTR_TELEMETRY_SDK_VERSION]: SDK_INFO[ATTR_TELEMETRY_SDK_VERSION]
  });
}
__name(defaultResource, "defaultResource");
function guardedRawAttributes(attributes) {
  return attributes.map(([k, v]) => {
    if (isPromiseLike(v)) {
      return [
        k,
        v.catch((err) => {
          diag.debug("promise rejection for resource attribute: %s - %s", k, err);
          return void 0;
        })
      ];
    }
    return [k, v];
  });
}
__name(guardedRawAttributes, "guardedRawAttributes");
function validateSchemaUrl(schemaUrl) {
  if (typeof schemaUrl === "string" || schemaUrl === void 0) {
    return schemaUrl;
  }
  diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", schemaUrl);
  return void 0;
}
__name(validateSchemaUrl, "validateSchemaUrl");
function mergeSchemaUrl(old, updating) {
  const oldSchemaUrl = old == null ? void 0 : old.schemaUrl;
  const updatingSchemaUrl = updating == null ? void 0 : updating.schemaUrl;
  const isOldEmpty = oldSchemaUrl === void 0 || oldSchemaUrl === "";
  const isUpdatingEmpty = updatingSchemaUrl === void 0 || updatingSchemaUrl === "";
  if (isOldEmpty) {
    return updatingSchemaUrl;
  }
  if (isUpdatingEmpty) {
    return oldSchemaUrl;
  }
  if (oldSchemaUrl === updatingSchemaUrl) {
    return oldSchemaUrl;
  }
  diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', oldSchemaUrl, updatingSchemaUrl);
  return void 0;
}
__name(mergeSchemaUrl, "mergeSchemaUrl");
function createResource(resource, encoder) {
  const result = {
    attributes: toAttributes(resource.attributes, encoder),
    droppedAttributesCount: 0
  };
  const schemaUrl = resource.schemaUrl;
  if (schemaUrl && schemaUrl !== "")
    result.schemaUrl = schemaUrl;
  return result;
}
__name(createResource, "createResource");
function createInstrumentationScope(scope) {
  return {
    name: scope.name,
    version: scope.version
  };
}
__name(createInstrumentationScope, "createInstrumentationScope");
function toAttributes(attributes, encoder) {
  return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key], encoder));
}
__name(toAttributes, "toAttributes");
function toKeyValue(key, value, encoder) {
  return {
    key,
    value: toAnyValue(value, encoder)
  };
}
__name(toKeyValue, "toKeyValue");
function toAnyValue(value, encoder) {
  const t = typeof value;
  if (t === "string")
    return { stringValue: value };
  if (t === "number") {
    if (!Number.isInteger(value))
      return { doubleValue: value };
    return { intValue: value };
  }
  if (t === "boolean")
    return { boolValue: value };
  if (value instanceof Uint8Array)
    return { bytesValue: encoder.encodeUint8Array(value) };
  if (Array.isArray(value)) {
    const values = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
      values[i] = toAnyValue(value[i], encoder);
    }
    return { arrayValue: { values } };
  }
  if (t === "object" && value != null) {
    const keys = Object.keys(value);
    const values = new Array(keys.length);
    for (let i = 0; i < keys.length; i++) {
      values[i] = {
        key: keys[i],
        value: toAnyValue(value[keys[i]], encoder)
      };
    }
    return { kvlistValue: { values } };
  }
  return {};
}
__name(toAnyValue, "toAnyValue");
function hrTimeToNanos(hrTime2) {
  const NANOSECONDS = BigInt(1e9);
  return BigInt(Math.trunc(hrTime2[0])) * NANOSECONDS + BigInt(Math.trunc(hrTime2[1]));
}
__name(hrTimeToNanos, "hrTimeToNanos");
function encodeAsString(hrTime2) {
  const nanos = hrTimeToNanos(hrTime2);
  return nanos.toString();
}
__name(encodeAsString, "encodeAsString");
const encodeTimestamp = typeof BigInt !== "undefined" ? encodeAsString : hrTimeToNanoseconds;
function identity(value) {
  return value;
}
__name(identity, "identity");
const JSON_ENCODER = {
  encodeHrTime: encodeTimestamp,
  encodeSpanContext: identity,
  encodeOptionalSpanContext: identity,
  encodeUint8Array: /* @__PURE__ */ __name((bytes) => {
    if (typeof Buffer !== "undefined") {
      return Buffer.from(bytes).toString("base64");
    }
    const chars = new Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      chars[i] = String.fromCharCode(bytes[i]);
    }
    return btoa(chars.join(""));
  }, "encodeUint8Array")
};
const SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK = 256;
const SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK = 512;
function buildSpanFlagsFrom(traceFlags, isRemote) {
  let flags = traceFlags & 255 | SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK;
  if (isRemote) {
    flags |= SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK;
  }
  return flags;
}
__name(buildSpanFlagsFrom, "buildSpanFlagsFrom");
function sdkSpanToOtlpSpan(span, encoder) {
  var _a, _b, _c, _d;
  const ctx = span.spanContext();
  const status = span.status;
  const parentSpanId = ((_a = span.parentSpanContext) == null ? void 0 : _a.spanId) ? encoder.encodeSpanContext((_b = span.parentSpanContext) == null ? void 0 : _b.spanId) : void 0;
  return {
    traceId: encoder.encodeSpanContext(ctx.traceId),
    spanId: encoder.encodeSpanContext(ctx.spanId),
    parentSpanId,
    traceState: (_c = ctx.traceState) == null ? void 0 : _c.serialize(),
    name: span.name,
    // Span kind is offset by 1 because the API does not define a value for unset
    kind: span.kind == null ? 0 : span.kind + 1,
    startTimeUnixNano: encoder.encodeHrTime(span.startTime),
    endTimeUnixNano: encoder.encodeHrTime(span.endTime),
    attributes: toAttributes(span.attributes, encoder),
    droppedAttributesCount: span.droppedAttributesCount,
    events: span.events.map((event) => toOtlpSpanEvent(event, encoder)),
    droppedEventsCount: span.droppedEventsCount,
    status: {
      // API and proto enums share the same values
      code: status.code,
      message: status.message
    },
    links: span.links.map((link) => toOtlpLink(link, encoder)),
    droppedLinksCount: span.droppedLinksCount,
    flags: buildSpanFlagsFrom(ctx.traceFlags, (_d = span.parentSpanContext) == null ? void 0 : _d.isRemote)
  };
}
__name(sdkSpanToOtlpSpan, "sdkSpanToOtlpSpan");
function toOtlpLink(link, encoder) {
  var _a;
  return {
    attributes: link.attributes ? toAttributes(link.attributes, encoder) : [],
    spanId: encoder.encodeSpanContext(link.context.spanId),
    traceId: encoder.encodeSpanContext(link.context.traceId),
    traceState: (_a = link.context.traceState) == null ? void 0 : _a.serialize(),
    droppedAttributesCount: link.droppedAttributesCount || 0,
    flags: buildSpanFlagsFrom(link.context.traceFlags, link.context.isRemote)
  };
}
__name(toOtlpLink, "toOtlpLink");
function toOtlpSpanEvent(timedEvent, encoder) {
  return {
    attributes: timedEvent.attributes ? toAttributes(timedEvent.attributes, encoder) : [],
    name: timedEvent.name,
    timeUnixNano: encoder.encodeHrTime(timedEvent.time),
    droppedAttributesCount: timedEvent.droppedAttributesCount || 0
  };
}
__name(toOtlpSpanEvent, "toOtlpSpanEvent");
function createExportTraceServiceRequest(spans, encoder) {
  return {
    resourceSpans: spanRecordsToResourceSpans(spans, encoder)
  };
}
__name(createExportTraceServiceRequest, "createExportTraceServiceRequest");
function createResourceMap(readableSpans) {
  const resourceMap = /* @__PURE__ */ new Map();
  for (const record of readableSpans) {
    let ilsMap = resourceMap.get(record.resource);
    if (!ilsMap) {
      ilsMap = /* @__PURE__ */ new Map();
      resourceMap.set(record.resource, ilsMap);
    }
    const instrumentationScopeKey = `${record.instrumentationScope.name}@${record.instrumentationScope.version || ""}:${record.instrumentationScope.schemaUrl || ""}`;
    let records = ilsMap.get(instrumentationScopeKey);
    if (!records) {
      records = [];
      ilsMap.set(instrumentationScopeKey, records);
    }
    records.push(record);
  }
  return resourceMap;
}
__name(createResourceMap, "createResourceMap");
function spanRecordsToResourceSpans(readableSpans, encoder) {
  const resourceMap = createResourceMap(readableSpans);
  const out = [];
  const entryIterator = resourceMap.entries();
  let entry = entryIterator.next();
  while (!entry.done) {
    const [resource, ilmMap] = entry.value;
    const scopeResourceSpans = [];
    const ilmIterator = ilmMap.values();
    let ilmEntry = ilmIterator.next();
    while (!ilmEntry.done) {
      const scopeSpans = ilmEntry.value;
      if (scopeSpans.length > 0) {
        const spans = scopeSpans.map((readableSpan) => sdkSpanToOtlpSpan(readableSpan, encoder));
        scopeResourceSpans.push({
          scope: createInstrumentationScope(scopeSpans[0].instrumentationScope),
          spans,
          schemaUrl: scopeSpans[0].instrumentationScope.schemaUrl
        });
      }
      ilmEntry = ilmIterator.next();
    }
    const processedResource = createResource(resource, encoder);
    const transformedSpans = {
      resource: processedResource,
      scopeSpans: scopeResourceSpans,
      schemaUrl: processedResource.schemaUrl
    };
    out.push(transformedSpans);
    entry = entryIterator.next();
  }
  return out;
}
__name(spanRecordsToResourceSpans, "spanRecordsToResourceSpans");
const JsonTraceSerializer = {
  serializeRequest: /* @__PURE__ */ __name((arg) => {
    const request = createExportTraceServiceRequest(arg, JSON_ENCODER);
    const encoder = new TextEncoder();
    return encoder.encode(JSON.stringify(request));
  }, "serializeRequest"),
  deserializeResponse: /* @__PURE__ */ __name((arg) => {
    if (arg.length === 0) {
      return {};
    }
    const decoder = new TextDecoder();
    try {
      return JSON.parse(decoder.decode(arg));
    } catch (err) {
      diag.warn(`Failed to parse trace export response: ${err.message}. Returning empty response`);
      return {};
    }
  }, "deserializeResponse")
};
const MAX_ATTEMPTS = 5;
const INITIAL_BACKOFF = 1e3;
const MAX_BACKOFF = 5e3;
const BACKOFF_MULTIPLIER = 1.5;
const JITTER = 0.2;
function getJitter() {
  return Math.random() * (2 * JITTER) - JITTER;
}
__name(getJitter, "getJitter");
const _RetryingTransport = class _RetryingTransport {
  _transport;
  constructor(transport) {
    this._transport = transport;
  }
  retry(data, timeoutMillis, inMillis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._transport.send(data, timeoutMillis).then(resolve, reject);
      }, inMillis);
    });
  }
  async send(data, timeoutMillis) {
    let attempts = MAX_ATTEMPTS;
    let nextBackoff = INITIAL_BACKOFF;
    const deadline = Date.now() + timeoutMillis;
    let result = await this._transport.send(data, timeoutMillis);
    while (result.status === "retryable" && attempts > 0) {
      attempts--;
      const backoff = Math.max(Math.min(nextBackoff * (1 + getJitter()), MAX_BACKOFF), 0);
      nextBackoff = nextBackoff * BACKOFF_MULTIPLIER;
      const retryInMillis = result.retryInMillis ?? backoff;
      const remainingTimeoutMillis = deadline - Date.now();
      if (retryInMillis > remainingTimeoutMillis) {
        diag.info(`Export retry time ${Math.round(retryInMillis)}ms exceeds remaining timeout ${Math.round(remainingTimeoutMillis)}ms, not retrying further.`);
        return result;
      }
      diag.verbose(`Scheduling export retry in ${Math.round(retryInMillis)}ms`);
      result = await this.retry(data, remainingTimeoutMillis, retryInMillis);
    }
    if (result.status === "success") {
      diag.verbose(`Export succeeded after ${MAX_ATTEMPTS - attempts} retry attempts.`);
    } else if (result.status === "retryable") {
      diag.info(`Export failed after maximum retry attempts (${MAX_ATTEMPTS}).`);
    } else {
      diag.info(`Export failed with non-retryable error: ${result.error}`);
    }
    return result;
  }
  shutdown() {
    return this._transport.shutdown();
  }
};
__name(_RetryingTransport, "RetryingTransport");
let RetryingTransport = _RetryingTransport;
function createRetryingTransport(options) {
  return new RetryingTransport(options.transport);
}
__name(createRetryingTransport, "createRetryingTransport");
function isExportHTTPErrorRetryable(statusCode) {
  return statusCode === 429 || statusCode === 502 || statusCode === 503 || statusCode === 504;
}
__name(isExportHTTPErrorRetryable, "isExportHTTPErrorRetryable");
function parseRetryAfterToMills(retryAfter) {
  if (retryAfter == null) {
    return void 0;
  }
  const seconds = Number.parseInt(retryAfter, 10);
  if (Number.isInteger(seconds)) {
    return seconds > 0 ? seconds * 1e3 : -1;
  }
  const delay = new Date(retryAfter).getTime() - Date.now();
  if (delay >= 0) {
    return delay;
  }
  return 0;
}
__name(parseRetryAfterToMills, "parseRetryAfterToMills");
const MAX_KEEPALIVE_BODY_SIZE = 60 * 1024;
const MAX_KEEPALIVE_REQUESTS = 9;
let pendingBodySize = 0;
let pendingKeepaliveCount = 0;
const _FetchTransport = class _FetchTransport {
  _parameters;
  constructor(parameters) {
    this._parameters = parameters;
  }
  async send(data, timeoutMillis) {
    const abortController = new AbortController();
    const timeout = setTimeout(() => abortController.abort(), timeoutMillis);
    let fetchApi = globalThis.fetch;
    if (typeof fetchApi.__original === "function") {
      fetchApi = fetchApi.__original;
    }
    const requestSize = data.byteLength;
    const wouldExceedSize = pendingBodySize + requestSize > MAX_KEEPALIVE_BODY_SIZE;
    const wouldExceedCount = pendingKeepaliveCount >= MAX_KEEPALIVE_REQUESTS;
    const useKeepalive = !wouldExceedSize && !wouldExceedCount;
    if (useKeepalive) {
      pendingBodySize += requestSize;
      pendingKeepaliveCount++;
    } else {
      const reason = wouldExceedSize ? "size limit" : "count limit";
      diag.debug(`keepalive disabled: ${(requestSize / 1024).toFixed(1)}KB payload, ${pendingKeepaliveCount} pending (${reason})`);
    }
    try {
      const url = new URL(this._parameters.url);
      const response = await fetchApi(url.href, {
        method: "POST",
        headers: await this._parameters.headers(),
        body: data,
        signal: abortController.signal,
        keepalive: useKeepalive,
        mode: globalThis.location ? globalThis.location.origin === url.origin ? "same-origin" : "cors" : "no-cors"
      });
      if (response.status >= 200 && response.status <= 299) {
        diag.debug(`export response success (status: ${response.status})`);
        return { status: "success" };
      } else if (isExportHTTPErrorRetryable(response.status)) {
        diag.warn(`export response retryable (status: ${response.status})`);
        const retryAfter = response.headers.get("Retry-After");
        const retryInMillis = parseRetryAfterToMills(retryAfter);
        return { status: "retryable", retryInMillis };
      }
      diag.error(`export response failure (status: ${response.status})`);
      return {
        status: "failure",
        error: new Error(`Fetch request failed with non-retryable status ${response.status}`)
      };
    } catch (error) {
      if (isFetchNetworkErrorRetryable(error)) {
        diag.warn(`export request retryable (network error: ${error})`);
        return {
          status: "retryable",
          error: new Error("Fetch request encountered a network error", {
            cause: error
          })
        };
      }
      diag.error(`export request failure (error: ${error})`);
      return {
        status: "failure",
        error: new Error("Fetch request errored", { cause: error })
      };
    } finally {
      clearTimeout(timeout);
      if (useKeepalive) {
        pendingBodySize -= requestSize;
        pendingKeepaliveCount--;
      }
    }
  }
  shutdown() {
  }
};
__name(_FetchTransport, "FetchTransport");
let FetchTransport = _FetchTransport;
function createFetchTransport(parameters) {
  return new FetchTransport(parameters);
}
__name(createFetchTransport, "createFetchTransport");
function isFetchNetworkErrorRetryable(error) {
  return error instanceof TypeError && !error.cause;
}
__name(isFetchNetworkErrorRetryable, "isFetchNetworkErrorRetryable");
function createOtlpFetchExportDelegate(options, serializer) {
  return createOtlpNetworkExportDelegate(options, serializer, createRetryingTransport({
    transport: createFetchTransport(options)
  }));
}
__name(createOtlpFetchExportDelegate, "createOtlpFetchExportDelegate");
function validateAndNormalizeHeaders(partialHeaders) {
  const headers = {};
  Object.entries(partialHeaders ?? {}).forEach(([key, value]) => {
    if (typeof value !== "undefined") {
      headers[key] = String(value);
    } else {
      diag.warn(`Header "${key}" has invalid value (${value}) and will be ignored`);
    }
  });
  return headers;
}
__name(validateAndNormalizeHeaders, "validateAndNormalizeHeaders");
function mergeHeaders(userProvidedHeaders, fallbackHeaders, defaultHeaders) {
  return async () => {
    const requiredHeaders = {
      ...await defaultHeaders()
    };
    const headers = {};
    if (fallbackHeaders != null) {
      Object.assign(headers, await fallbackHeaders());
    }
    if (userProvidedHeaders != null) {
      Object.assign(headers, validateAndNormalizeHeaders(await userProvidedHeaders()));
    }
    return Object.assign(headers, requiredHeaders);
  };
}
__name(mergeHeaders, "mergeHeaders");
function validateUserProvidedUrl(url) {
  var _a;
  if (url == null) {
    return void 0;
  }
  try {
    const base = (_a = globalThis.location) == null ? void 0 : _a.href;
    return new URL(url, base).href;
  } catch {
    throw new Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
  }
}
__name(validateUserProvidedUrl, "validateUserProvidedUrl");
function mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
  return {
    ...mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration),
    headers: mergeHeaders(userProvidedConfiguration.headers, fallbackConfiguration.headers, defaultConfiguration.headers),
    url: validateUserProvidedUrl(userProvidedConfiguration.url) ?? fallbackConfiguration.url ?? defaultConfiguration.url
  };
}
__name(mergeOtlpHttpConfigurationWithDefaults, "mergeOtlpHttpConfigurationWithDefaults");
function getHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
  return {
    ...getSharedConfigurationDefaults(),
    headers: /* @__PURE__ */ __name(async () => requiredHeaders, "headers"),
    url: "http://localhost:4318/" + signalResourcePath
  };
}
__name(getHttpConfigurationDefaults, "getHttpConfigurationDefaults");
function convertLegacyHeaders(config) {
  if (typeof config.headers === "function") {
    return config.headers;
  }
  return wrapStaticHeadersInFunction(config.headers);
}
__name(convertLegacyHeaders, "convertLegacyHeaders");
function convertLegacyBrowserHttpOptions(config, signalResourcePath, requiredHeaders) {
  return mergeOtlpHttpConfigurationWithDefaults(
    {
      url: config.url,
      timeoutMillis: config.timeoutMillis,
      headers: convertLegacyHeaders(config),
      concurrencyLimit: config.concurrencyLimit
    },
    {},
    // no fallback for browser case
    getHttpConfigurationDefaults(requiredHeaders, signalResourcePath)
  );
}
__name(convertLegacyBrowserHttpOptions, "convertLegacyBrowserHttpOptions");
function createLegacyOtlpBrowserExportDelegate(config, serializer, signalResourcePath, requiredHeaders) {
  const options = convertLegacyBrowserHttpOptions(config, signalResourcePath, requiredHeaders);
  return createOtlpFetchExportDelegate(options, serializer);
}
__name(createLegacyOtlpBrowserExportDelegate, "createLegacyOtlpBrowserExportDelegate");
const _OTLPTraceExporter = class _OTLPTraceExporter extends OTLPExporterBase {
  constructor(config = {}) {
    super(createLegacyOtlpBrowserExportDelegate(config, JsonTraceSerializer, "v1/traces", { "Content-Type": "application/json" }));
  }
};
__name(_OTLPTraceExporter, "OTLPTraceExporter");
let OTLPTraceExporter = _OTLPTraceExporter;
function enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider) {
  for (let i = 0, j = instrumentations.length; i < j; i++) {
    const instrumentation = instrumentations[i];
    if (tracerProvider) {
      instrumentation.setTracerProvider(tracerProvider);
    }
    if (meterProvider) {
      instrumentation.setMeterProvider(meterProvider);
    }
    if (loggerProvider && instrumentation.setLoggerProvider) {
      instrumentation.setLoggerProvider(loggerProvider);
    }
    if (!instrumentation.getConfig().enabled) {
      instrumentation.enable();
    }
  }
}
__name(enableInstrumentations, "enableInstrumentations");
function disableInstrumentations(instrumentations) {
  instrumentations.forEach((instrumentation) => instrumentation.disable());
}
__name(disableInstrumentations, "disableInstrumentations");
function registerInstrumentations(options) {
  var _a;
  const tracerProvider = options.tracerProvider || trace.getTracerProvider();
  const meterProvider = options.meterProvider || metrics.getMeterProvider();
  const loggerProvider = options.loggerProvider || logs.getLoggerProvider();
  const instrumentations = ((_a = options.instrumentations) == null ? void 0 : _a.flat()) ?? [];
  enableInstrumentations(instrumentations, tracerProvider, meterProvider, loggerProvider);
  return () => {
    disableInstrumentations(instrumentations);
  };
}
__name(registerInstrumentations, "registerInstrumentations");
let logger = console.error.bind(console);
function defineProperty(obj, name, value) {
  const enumerable = !!obj[name] && Object.prototype.propertyIsEnumerable.call(obj, name);
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable,
    writable: true,
    value
  });
}
__name(defineProperty, "defineProperty");
const wrap = /* @__PURE__ */ __name((nodule, name, wrapper) => {
  if (!nodule || !nodule[name]) {
    logger("no original function " + String(name) + " to wrap");
    return;
  }
  if (!wrapper) {
    logger("no wrapper function");
    logger(new Error().stack);
    return;
  }
  const original = nodule[name];
  if (typeof original !== "function" || typeof wrapper !== "function") {
    logger("original object and wrapper must be functions");
    return;
  }
  const wrapped = wrapper(original, name);
  defineProperty(wrapped, "__original", original);
  defineProperty(wrapped, "__unwrap", () => {
    if (nodule[name] === wrapped) {
      defineProperty(nodule, name, original);
    }
  });
  defineProperty(wrapped, "__wrapped", true);
  defineProperty(nodule, name, wrapped);
  return wrapped;
}, "wrap");
const massWrap = /* @__PURE__ */ __name((nodules, names, wrapper) => {
  if (!nodules) {
    logger("must provide one or more modules to patch");
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }
  if (!(names && Array.isArray(names))) {
    logger("must provide one or more functions to wrap on modules");
    return;
  }
  nodules.forEach((nodule) => {
    names.forEach((name) => {
      wrap(nodule, name, wrapper);
    });
  });
}, "massWrap");
const unwrap = /* @__PURE__ */ __name((nodule, name) => {
  if (!nodule || !nodule[name]) {
    logger("no function to unwrap.");
    logger(new Error().stack);
    return;
  }
  const wrapped = nodule[name];
  if (!wrapped.__unwrap) {
    logger("no original to unwrap to -- has " + String(name) + " already been unwrapped?");
  } else {
    wrapped.__unwrap();
    return;
  }
}, "unwrap");
const massUnwrap = /* @__PURE__ */ __name((nodules, names) => {
  if (!nodules) {
    logger("must provide one or more modules to patch");
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }
  if (!(names && Array.isArray(names))) {
    logger("must provide one or more functions to unwrap on modules");
    return;
  }
  nodules.forEach((nodule) => {
    names.forEach((name) => {
      unwrap(nodule, name);
    });
  });
}, "massUnwrap");
const _InstrumentationAbstract = class _InstrumentationAbstract {
  _config = {};
  _tracer;
  _meter;
  _logger;
  _diag;
  instrumentationName;
  instrumentationVersion;
  constructor(instrumentationName, instrumentationVersion, config) {
    this.instrumentationName = instrumentationName;
    this.instrumentationVersion = instrumentationVersion;
    this.setConfig(config);
    this._diag = diag.createComponentLogger({
      namespace: instrumentationName
    });
    this._tracer = trace.getTracer(instrumentationName, instrumentationVersion);
    this._meter = metrics.getMeter(instrumentationName, instrumentationVersion);
    this._logger = logs.getLogger(instrumentationName, instrumentationVersion);
    this._updateMetricInstruments();
  }
  /* Api to wrap instrumented method */
  _wrap = wrap;
  /* Api to unwrap instrumented methods */
  _unwrap = unwrap;
  /* Api to mass wrap instrumented method */
  _massWrap = massWrap;
  /* Api to mass unwrap instrumented methods */
  _massUnwrap = massUnwrap;
  /* Returns meter */
  get meter() {
    return this._meter;
  }
  /**
   * Sets MeterProvider to this plugin
   * @param meterProvider
   */
  setMeterProvider(meterProvider) {
    this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
    this._updateMetricInstruments();
  }
  /* Returns logger */
  get logger() {
    return this._logger;
  }
  /**
   * Sets LoggerProvider to this plugin
   * @param loggerProvider
   */
  setLoggerProvider(loggerProvider) {
    this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
  }
  /**
   * @experimental
   *
   * Get module definitions defined by {@link init}.
   * This can be used for experimental compile-time instrumentation.
   *
   * @returns an array of {@link InstrumentationModuleDefinition}
   */
  getModuleDefinitions() {
    const initResult = this.init() ?? [];
    if (!Array.isArray(initResult)) {
      return [initResult];
    }
    return initResult;
  }
  /**
   * Sets the new metric instruments with the current Meter.
   */
  _updateMetricInstruments() {
    return;
  }
  /* Returns InstrumentationConfig */
  getConfig() {
    return this._config;
  }
  /**
   * Sets InstrumentationConfig to this plugin
   * @param config
   */
  setConfig(config) {
    this._config = {
      enabled: true,
      ...config
    };
  }
  /**
   * Sets TraceProvider to this plugin
   * @param tracerProvider
   */
  setTracerProvider(tracerProvider) {
    this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
  }
  /* Returns tracer */
  get tracer() {
    return this._tracer;
  }
  /**
   * Execute span customization hook, if configured, and log any errors.
   * Any semantics of the trigger and info are defined by the specific instrumentation.
   * @param hookHandler The optional hook handler which the user has configured via instrumentation config
   * @param triggerName The name of the trigger for executing the hook for logging purposes
   * @param span The span to which the hook should be applied
   * @param info The info object to be passed to the hook, with useful data the hook may use
   */
  _runSpanCustomizationHook(hookHandler, triggerName, span, info) {
    if (!hookHandler) {
      return;
    }
    try {
      hookHandler(span, info);
    } catch (e) {
      this._diag.error(`Error running span customization hook due to exception in handler`, { triggerName }, e);
    }
  }
};
__name(_InstrumentationAbstract, "InstrumentationAbstract");
let InstrumentationAbstract = _InstrumentationAbstract;
const _InstrumentationBase = class _InstrumentationBase extends InstrumentationAbstract {
  constructor(instrumentationName, instrumentationVersion, config) {
    super(instrumentationName, instrumentationVersion, config);
    if (this._config.enabled) {
      this.enable();
    }
  }
};
__name(_InstrumentationBase, "InstrumentationBase");
let InstrumentationBase = _InstrumentationBase;
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
  let error;
  let result;
  try {
    result = execute();
  } catch (e) {
    error = e;
  } finally {
    onFinish(error, result);
    return result;
  }
}
__name(safeExecuteInTheMiddle, "safeExecuteInTheMiddle");
var SemconvStability;
(function(SemconvStability2) {
  SemconvStability2[SemconvStability2["STABLE"] = 1] = "STABLE";
  SemconvStability2[SemconvStability2["OLD"] = 2] = "OLD";
  SemconvStability2[SemconvStability2["DUPLICATE"] = 3] = "DUPLICATE";
})(SemconvStability || (SemconvStability = {}));
function semconvStabilityFromStr(namespace, str) {
  let semconvStability = SemconvStability.OLD;
  const entries = str == null ? void 0 : str.split(",").map((v) => v.trim()).filter((s) => s !== "");
  for (const entry of entries ?? []) {
    if (entry.toLowerCase() === namespace + "/dup") {
      semconvStability = SemconvStability.DUPLICATE;
      break;
    } else if (entry.toLowerCase() === namespace) {
      semconvStability = SemconvStability.STABLE;
    }
  }
  return semconvStability;
}
__name(semconvStabilityFromStr, "semconvStabilityFromStr");
const ExceptionEventName = "exception";
const _SpanImpl = class _SpanImpl {
  // Below properties are included to implement ReadableSpan for export
  // purposes but are not intended to be written-to directly.
  _spanContext;
  kind;
  parentSpanContext;
  attributes = {};
  links = [];
  events = [];
  startTime;
  resource;
  instrumentationScope;
  _droppedAttributesCount = 0;
  _droppedEventsCount = 0;
  _droppedLinksCount = 0;
  _attributesCount = 0;
  name;
  status = {
    code: SpanStatusCode.UNSET
  };
  endTime = [0, 0];
  _ended = false;
  _duration = [-1, -1];
  _spanProcessor;
  _spanLimits;
  _attributeValueLengthLimit;
  _recordEndMetrics;
  _performanceStartTime;
  _performanceOffset;
  _startTimeProvided;
  /**
   * Constructs a new SpanImpl instance.
   */
  constructor(opts) {
    const now = Date.now();
    this._spanContext = opts.spanContext;
    this._performanceStartTime = otperformance.now();
    this._performanceOffset = now - (this._performanceStartTime + otperformance.timeOrigin);
    this._startTimeProvided = opts.startTime != null;
    this._spanLimits = opts.spanLimits;
    this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit ?? 0;
    this._spanProcessor = opts.spanProcessor;
    this.name = opts.name;
    this.parentSpanContext = opts.parentSpanContext;
    this.kind = opts.kind;
    if (opts.links) {
      for (const link of opts.links) {
        this.addLink(link);
      }
    }
    this.startTime = this._getTime(opts.startTime ?? now);
    this.resource = opts.resource;
    this.instrumentationScope = opts.scope;
    this._recordEndMetrics = opts.recordEndMetrics;
    if (opts.attributes != null) {
      this.setAttributes(opts.attributes);
    }
    this._spanProcessor.onStart(this, opts.context);
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(key, value) {
    if (value == null || this._isSpanEnded())
      return this;
    if (key.length === 0) {
      diag.warn(`Invalid attribute key: ${key}`);
      return this;
    }
    if (!isAttributeValue(value)) {
      diag.warn(`Invalid attribute value set for key: ${key}`);
      return this;
    }
    const { attributeCountLimit } = this._spanLimits;
    const isNewKey = !Object.prototype.hasOwnProperty.call(this.attributes, key);
    if (attributeCountLimit !== void 0 && this._attributesCount >= attributeCountLimit && isNewKey) {
      this._droppedAttributesCount++;
      return this;
    }
    this.attributes[key] = this._truncateToSize(value);
    if (isNewKey) {
      this._attributesCount++;
    }
    return this;
  }
  setAttributes(attributes) {
    for (const key in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        this.setAttribute(key, attributes[key]);
      }
    }
    return this;
  }
  /**
   *
   * @param name Span Name
   * @param [attributesOrStartTime] Span attributes or start time
   *     if type is {@type TimeInput} and 3rd param is undefined
   * @param [timeStamp] Specified time stamp for the event
   */
  addEvent(name, attributesOrStartTime, timeStamp) {
    if (this._isSpanEnded())
      return this;
    const { eventCountLimit } = this._spanLimits;
    if (eventCountLimit === 0) {
      diag.warn("No events allowed.");
      this._droppedEventsCount++;
      return this;
    }
    if (eventCountLimit !== void 0 && this.events.length >= eventCountLimit) {
      if (this._droppedEventsCount === 0) {
        diag.debug("Dropping extra events.");
      }
      this.events.shift();
      this._droppedEventsCount++;
    }
    if (isTimeInput(attributesOrStartTime)) {
      if (!isTimeInput(timeStamp)) {
        timeStamp = attributesOrStartTime;
      }
      attributesOrStartTime = void 0;
    }
    const sanitized = sanitizeAttributes$1(attributesOrStartTime);
    const { attributePerEventCountLimit } = this._spanLimits;
    const attributes = {};
    let droppedAttributesCount = 0;
    let eventAttributesCount = 0;
    for (const attr in sanitized) {
      if (!Object.prototype.hasOwnProperty.call(sanitized, attr)) {
        continue;
      }
      const attrVal = sanitized[attr];
      if (attributePerEventCountLimit !== void 0 && eventAttributesCount >= attributePerEventCountLimit) {
        droppedAttributesCount++;
        continue;
      }
      attributes[attr] = this._truncateToSize(attrVal);
      eventAttributesCount++;
    }
    this.events.push({
      name,
      attributes,
      time: this._getTime(timeStamp),
      droppedAttributesCount
    });
    return this;
  }
  addLink(link) {
    if (this._isSpanEnded())
      return this;
    const { linkCountLimit } = this._spanLimits;
    if (linkCountLimit === 0) {
      this._droppedLinksCount++;
      return this;
    }
    if (linkCountLimit !== void 0 && this.links.length >= linkCountLimit) {
      if (this._droppedLinksCount === 0) {
        diag.debug("Dropping extra links.");
      }
      this.links.shift();
      this._droppedLinksCount++;
    }
    const { attributePerLinkCountLimit } = this._spanLimits;
    const sanitized = sanitizeAttributes$1(link.attributes);
    const attributes = {};
    let droppedAttributesCount = 0;
    let linkAttributesCount = 0;
    for (const attr in sanitized) {
      if (!Object.prototype.hasOwnProperty.call(sanitized, attr)) {
        continue;
      }
      const attrVal = sanitized[attr];
      if (attributePerLinkCountLimit !== void 0 && linkAttributesCount >= attributePerLinkCountLimit) {
        droppedAttributesCount++;
        continue;
      }
      attributes[attr] = this._truncateToSize(attrVal);
      linkAttributesCount++;
    }
    const processedLink = { context: link.context };
    if (linkAttributesCount > 0) {
      processedLink.attributes = attributes;
    }
    if (droppedAttributesCount > 0) {
      processedLink.droppedAttributesCount = droppedAttributesCount;
    }
    this.links.push(processedLink);
    return this;
  }
  addLinks(links) {
    for (const link of links) {
      this.addLink(link);
    }
    return this;
  }
  setStatus(status) {
    if (this._isSpanEnded())
      return this;
    if (status.code === SpanStatusCode.UNSET)
      return this;
    if (this.status.code === SpanStatusCode.OK)
      return this;
    const newStatus = { code: status.code };
    if (status.code === SpanStatusCode.ERROR) {
      if (typeof status.message === "string") {
        newStatus.message = status.message;
      } else if (status.message != null) {
        diag.warn(`Dropping invalid status.message of type '${typeof status.message}', expected 'string'`);
      }
    }
    this.status = newStatus;
    return this;
  }
  updateName(name) {
    if (this._isSpanEnded())
      return this;
    this.name = name;
    return this;
  }
  end(endTime) {
    var _a;
    if (this._isSpanEnded()) {
      diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
      return;
    }
    this.endTime = this._getTime(endTime);
    this._duration = hrTimeDuration(this.startTime, this.endTime);
    if (this._duration[0] < 0) {
      diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
      this.endTime = this.startTime.slice();
      this._duration = [0, 0];
    }
    if (this._droppedEventsCount > 0) {
      diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
    }
    if (this._droppedLinksCount > 0) {
      diag.warn(`Dropped ${this._droppedLinksCount} links because linkCountLimit reached`);
    }
    if (this._spanProcessor.onEnding) {
      this._spanProcessor.onEnding(this);
    }
    (_a = this._recordEndMetrics) == null ? void 0 : _a.call(this);
    this._ended = true;
    this._spanProcessor.onEnd(this);
  }
  _getTime(inp) {
    if (typeof inp === "number" && inp <= otperformance.now()) {
      return hrTime(inp + this._performanceOffset);
    }
    if (typeof inp === "number") {
      return millisToHrTime(inp);
    }
    if (inp instanceof Date) {
      return millisToHrTime(inp.getTime());
    }
    if (isTimeInputHrTime(inp)) {
      return inp;
    }
    if (this._startTimeProvided) {
      return millisToHrTime(Date.now());
    }
    const msDuration = otperformance.now() - this._performanceStartTime;
    return addHrTimes(this.startTime, millisToHrTime(msDuration));
  }
  isRecording() {
    return this._ended === false;
  }
  recordException(exception, time) {
    const attributes = {};
    if (typeof exception === "string") {
      attributes[ATTR_EXCEPTION_MESSAGE] = exception;
    } else if (exception) {
      if (exception.code) {
        attributes[ATTR_EXCEPTION_TYPE] = exception.code.toString();
      } else if (exception.name) {
        attributes[ATTR_EXCEPTION_TYPE] = exception.name;
      }
      if (exception.message) {
        attributes[ATTR_EXCEPTION_MESSAGE] = exception.message;
      }
      if (exception.stack) {
        attributes[ATTR_EXCEPTION_STACKTRACE] = exception.stack;
      }
    }
    if (attributes[ATTR_EXCEPTION_TYPE] || attributes[ATTR_EXCEPTION_MESSAGE]) {
      this.addEvent(ExceptionEventName, attributes, time);
    } else {
      diag.warn(`Failed to record an exception ${exception}`);
    }
  }
  get duration() {
    return this._duration;
  }
  get ended() {
    return this._ended;
  }
  get droppedAttributesCount() {
    return this._droppedAttributesCount;
  }
  get droppedEventsCount() {
    return this._droppedEventsCount;
  }
  get droppedLinksCount() {
    return this._droppedLinksCount;
  }
  _isSpanEnded() {
    if (this._ended) {
      const error = new Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
      diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, error);
    }
    return this._ended;
  }
  // Utility function to truncate given value within size
  // for value type of string, will truncate to given limit
  // for type of non-string, will return same value
  _truncateToLimitUtil(value, limit) {
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit);
  }
  /**
   * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
   * return string with truncated to {@code attributeValueLengthLimit} characters
   *
   * If the given attribute value is array of strings then
   * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
   *
   * Otherwise return same Attribute {@code value}
   *
   * @param value Attribute value
   * @returns truncated attribute value if required, otherwise same value
   */
  _truncateToSize(value) {
    const limit = this._attributeValueLengthLimit;
    if (limit <= 0) {
      diag.warn(`Attribute value limit must be positive, got ${limit}`);
      return value;
    }
    if (typeof value === "string") {
      return this._truncateToLimitUtil(value, limit);
    }
    if (Array.isArray(value)) {
      return value.map((val) => typeof val === "string" ? this._truncateToLimitUtil(val, limit) : val);
    }
    return value;
  }
};
__name(_SpanImpl, "SpanImpl");
let SpanImpl = _SpanImpl;
var SamplingDecision;
(function(SamplingDecision2) {
  SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
  SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
  SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
const _AlwaysOffSampler = class _AlwaysOffSampler {
  shouldSample() {
    return {
      decision: SamplingDecision.NOT_RECORD
    };
  }
  toString() {
    return "AlwaysOffSampler";
  }
};
__name(_AlwaysOffSampler, "AlwaysOffSampler");
let AlwaysOffSampler = _AlwaysOffSampler;
const _AlwaysOnSampler = class _AlwaysOnSampler {
  shouldSample() {
    return {
      decision: SamplingDecision.RECORD_AND_SAMPLED
    };
  }
  toString() {
    return "AlwaysOnSampler";
  }
};
__name(_AlwaysOnSampler, "AlwaysOnSampler");
let AlwaysOnSampler = _AlwaysOnSampler;
const _ParentBasedSampler = class _ParentBasedSampler {
  _root;
  _remoteParentSampled;
  _remoteParentNotSampled;
  _localParentSampled;
  _localParentNotSampled;
  constructor(config) {
    this._root = config.root;
    if (!this._root) {
      globalErrorHandler(new Error("ParentBasedSampler must have a root sampler configured"));
      this._root = new AlwaysOnSampler();
    }
    this._remoteParentSampled = config.remoteParentSampled ?? new AlwaysOnSampler();
    this._remoteParentNotSampled = config.remoteParentNotSampled ?? new AlwaysOffSampler();
    this._localParentSampled = config.localParentSampled ?? new AlwaysOnSampler();
    this._localParentNotSampled = config.localParentNotSampled ?? new AlwaysOffSampler();
  }
  shouldSample(context2, traceId, spanName, spanKind, attributes, links) {
    const parentContext = trace.getSpanContext(context2);
    if (!parentContext || !isSpanContextValid(parentContext)) {
      return this._root.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    if (parentContext.isRemote) {
      if (parentContext.traceFlags & TraceFlags.SAMPLED) {
        return this._remoteParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
      }
      return this._remoteParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    if (parentContext.traceFlags & TraceFlags.SAMPLED) {
      return this._localParentSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
    }
    return this._localParentNotSampled.shouldSample(context2, traceId, spanName, spanKind, attributes, links);
  }
  toString() {
    return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
  }
};
__name(_ParentBasedSampler, "ParentBasedSampler");
let ParentBasedSampler = _ParentBasedSampler;
const _TraceIdRatioBasedSampler = class _TraceIdRatioBasedSampler {
  _ratio;
  _upperBound;
  constructor(ratio = 0) {
    this._ratio = this._normalize(ratio);
    this._upperBound = Math.floor(this._ratio * 4294967295);
  }
  shouldSample(context2, traceId) {
    return {
      decision: isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD
    };
  }
  toString() {
    return `TraceIdRatioBased{${this._ratio}}`;
  }
  _normalize(ratio) {
    if (typeof ratio !== "number" || isNaN(ratio))
      return 0;
    return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
  }
  _accumulate(traceId) {
    let accumulation = 0;
    for (let i = 0; i < 32; i += 8) {
      let part = 0;
      for (let j = 0; j < 8; j++) {
        const c = traceId.charCodeAt(i + j);
        const v = c < 58 ? c - 48 : c < 71 ? c - 55 : c - 87;
        part = part << 4 | v;
      }
      accumulation = (accumulation ^ part) >>> 0;
    }
    return accumulation;
  }
};
__name(_TraceIdRatioBasedSampler, "TraceIdRatioBasedSampler");
let TraceIdRatioBasedSampler = _TraceIdRatioBasedSampler;
var TracesSamplerValues;
(function(TracesSamplerValues2) {
  TracesSamplerValues2["AlwaysOff"] = "always_off";
  TracesSamplerValues2["AlwaysOn"] = "always_on";
  TracesSamplerValues2["ParentBasedAlwaysOff"] = "parentbased_always_off";
  TracesSamplerValues2["ParentBasedAlwaysOn"] = "parentbased_always_on";
  TracesSamplerValues2["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
  TracesSamplerValues2["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
const DEFAULT_RATIO = 1;
function loadDefaultConfig() {
  return {
    sampler: buildSamplerFromEnv(),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: Infinity,
      attributeCountLimit: 128
    },
    spanLimits: {
      attributeValueLengthLimit: Infinity,
      attributeCountLimit: 128,
      linkCountLimit: 128,
      eventCountLimit: 128,
      attributePerEventCountLimit: 128,
      attributePerLinkCountLimit: 128
    }
  };
}
__name(loadDefaultConfig, "loadDefaultConfig");
function buildSamplerFromEnv() {
  const sampler = TracesSamplerValues.ParentBasedAlwaysOn;
  switch (sampler) {
    case TracesSamplerValues.AlwaysOn:
      return new AlwaysOnSampler();
    case TracesSamplerValues.AlwaysOff:
      return new AlwaysOffSampler();
    case TracesSamplerValues.ParentBasedAlwaysOn:
      return new ParentBasedSampler({
        root: new AlwaysOnSampler()
      });
    case TracesSamplerValues.ParentBasedAlwaysOff:
      return new ParentBasedSampler({
        root: new AlwaysOffSampler()
      });
    case TracesSamplerValues.TraceIdRatio:
      return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
    case TracesSamplerValues.ParentBasedTraceIdRatio:
      return new ParentBasedSampler({
        root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv())
      });
    default:
      diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
      return new ParentBasedSampler({
        root: new AlwaysOnSampler()
      });
  }
}
__name(buildSamplerFromEnv, "buildSamplerFromEnv");
function getSamplerProbabilityFromEnv() {
  {
    diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
    return DEFAULT_RATIO;
  }
}
__name(getSamplerProbabilityFromEnv, "getSamplerProbabilityFromEnv");
const DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
const DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = Infinity;
function mergeConfig(userConfig) {
  const perInstanceDefaults = {
    sampler: buildSamplerFromEnv()
  };
  const DEFAULT_CONFIG = loadDefaultConfig();
  const target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
  target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
  target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
  return target;
}
__name(mergeConfig, "mergeConfig");
function reconfigureLimits(userConfig) {
  var _a, _b, _c, _d;
  const spanLimits = Object.assign({}, userConfig.spanLimits);
  spanLimits.attributeCountLimit = ((_a = userConfig.spanLimits) == null ? void 0 : _a.attributeCountLimit) ?? ((_b = userConfig.generalLimits) == null ? void 0 : _b.attributeCountLimit) ?? getNumberFromEnv() ?? getNumberFromEnv() ?? DEFAULT_ATTRIBUTE_COUNT_LIMIT;
  spanLimits.attributeValueLengthLimit = ((_c = userConfig.spanLimits) == null ? void 0 : _c.attributeValueLengthLimit) ?? ((_d = userConfig.generalLimits) == null ? void 0 : _d.attributeValueLengthLimit) ?? getNumberFromEnv() ?? getNumberFromEnv() ?? DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT;
  return Object.assign({}, userConfig, { spanLimits });
}
__name(reconfigureLimits, "reconfigureLimits");
const _BatchSpanProcessorBase = class _BatchSpanProcessorBase {
  _maxExportBatchSize;
  _maxQueueSize;
  _scheduledDelayMillis;
  _exportTimeoutMillis;
  _exporter;
  _isExporting = false;
  _finishedSpans = [];
  _timer;
  _shutdownOnce;
  _droppedSpansCount = 0;
  constructor(exporter, config) {
    this._exporter = exporter;
    this._maxExportBatchSize = typeof (config == null ? void 0 : config.maxExportBatchSize) === "number" ? config.maxExportBatchSize : 512;
    this._maxQueueSize = typeof (config == null ? void 0 : config.maxQueueSize) === "number" ? config.maxQueueSize : 2048;
    this._scheduledDelayMillis = typeof (config == null ? void 0 : config.scheduledDelayMillis) === "number" ? config.scheduledDelayMillis : 5e3;
    this._exportTimeoutMillis = typeof (config == null ? void 0 : config.exportTimeoutMillis) === "number" ? config.exportTimeoutMillis : 3e4;
    this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
    if (this._maxExportBatchSize > this._maxQueueSize) {
      diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
      this._maxExportBatchSize = this._maxQueueSize;
    }
  }
  forceFlush() {
    if (this._shutdownOnce.isCalled) {
      return this._shutdownOnce.promise;
    }
    return this._flushAll();
  }
  // does nothing.
  onStart(_span, _parentContext) {
  }
  onEnd(span) {
    if (this._shutdownOnce.isCalled) {
      return;
    }
    if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
      return;
    }
    this._addToBuffer(span);
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return Promise.resolve().then(() => {
      return this.onShutdown();
    }).then(() => {
      return this._flushAll();
    }).then(() => {
      return this._exporter.shutdown();
    });
  }
  /** Add a span in the buffer. */
  _addToBuffer(span) {
    if (this._finishedSpans.length >= this._maxQueueSize) {
      if (this._droppedSpansCount === 0) {
        diag.debug("maxQueueSize reached, dropping spans");
      }
      this._droppedSpansCount++;
      return;
    }
    if (this._droppedSpansCount > 0) {
      diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`);
      this._droppedSpansCount = 0;
    }
    this._finishedSpans.push(span);
    this._maybeStartTimer();
  }
  /**
   * Send all spans to the exporter respecting the batch size limit
   * This function is used only on forceFlush or shutdown,
   * for all other cases _flush should be used
   * */
  _flushAll() {
    return new Promise((resolve, reject) => {
      const promises = [];
      const count = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
      for (let i = 0, j = count; i < j; i++) {
        promises.push(this._flushOneBatch());
      }
      Promise.all(promises).then(() => {
        resolve();
      }).catch(reject);
    });
  }
  _flushOneBatch() {
    this._clearTimer();
    if (this._finishedSpans.length === 0) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Timeout"));
      }, this._exportTimeoutMillis);
      context.with(suppressTracing(context.active()), () => {
        let spans;
        if (this._finishedSpans.length <= this._maxExportBatchSize) {
          spans = this._finishedSpans;
          this._finishedSpans = [];
        } else {
          spans = this._finishedSpans.splice(0, this._maxExportBatchSize);
        }
        const doExport = /* @__PURE__ */ __name(() => this._exporter.export(spans, (result) => {
          clearTimeout(timer);
          if (result.code === ExportResultCode.SUCCESS) {
            resolve();
          } else {
            reject(result.error ?? new Error("BatchSpanProcessor: span export failed"));
          }
        }), "doExport");
        let pendingResources = null;
        for (let i = 0, len = spans.length; i < len; i++) {
          const span = spans[i];
          if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
            pendingResources ??= [];
            pendingResources.push(span.resource.waitForAsyncAttributes());
          }
        }
        if (pendingResources === null) {
          doExport();
        } else {
          Promise.all(pendingResources).then(doExport, (err) => {
            globalErrorHandler(err);
            reject(err);
          });
        }
      });
    });
  }
  _maybeStartTimer() {
    if (this._isExporting)
      return;
    const flush = /* @__PURE__ */ __name(() => {
      this._isExporting = true;
      this._flushOneBatch().finally(() => {
        this._isExporting = false;
        if (this._finishedSpans.length > 0) {
          this._clearTimer();
          this._maybeStartTimer();
        }
      }).catch((e) => {
        this._isExporting = false;
        globalErrorHandler(e);
      });
    }, "flush");
    if (this._finishedSpans.length >= this._maxExportBatchSize) {
      return flush();
    }
    if (this._timer !== void 0)
      return;
    this._timer = setTimeout(() => flush(), this._scheduledDelayMillis);
    if (typeof this._timer !== "number") {
      this._timer.unref();
    }
  }
  _clearTimer() {
    if (this._timer !== void 0) {
      clearTimeout(this._timer);
      this._timer = void 0;
    }
  }
};
__name(_BatchSpanProcessorBase, "BatchSpanProcessorBase");
let BatchSpanProcessorBase = _BatchSpanProcessorBase;
const _BatchSpanProcessor = class _BatchSpanProcessor extends BatchSpanProcessorBase {
  _visibilityChangeListener;
  _pageHideListener;
  constructor(_exporter, config) {
    super(_exporter, config);
    this.onInit(config);
  }
  onInit(config) {
    if ((config == null ? void 0 : config.disableAutoFlushOnDocumentHide) !== true && typeof document !== "undefined") {
      this._visibilityChangeListener = () => {
        if (document.visibilityState === "hidden") {
          this.forceFlush().catch((error) => {
            globalErrorHandler(error);
          });
        }
      };
      this._pageHideListener = () => {
        this.forceFlush().catch((error) => {
          globalErrorHandler(error);
        });
      };
      document.addEventListener("visibilitychange", this._visibilityChangeListener);
      document.addEventListener("pagehide", this._pageHideListener);
    }
  }
  onShutdown() {
    if (typeof document !== "undefined") {
      if (this._visibilityChangeListener) {
        document.removeEventListener("visibilitychange", this._visibilityChangeListener);
      }
      if (this._pageHideListener) {
        document.removeEventListener("pagehide", this._pageHideListener);
      }
    }
  }
};
__name(_BatchSpanProcessor, "BatchSpanProcessor");
let BatchSpanProcessor = _BatchSpanProcessor;
const TRACE_ID_BYTES = 16;
const SPAN_ID_BYTES = 8;
const TRACE_BUFFER = new Uint8Array(TRACE_ID_BYTES);
const SPAN_BUFFER = new Uint8Array(SPAN_ID_BYTES);
const HEX = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function randomFill(buf) {
  for (let i = 0; i < buf.length; i++) {
    buf[i] = Math.random() * 256 >>> 0;
  }
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] > 0)
      return;
  }
  buf[buf.length - 1] = 1;
}
__name(randomFill, "randomFill");
function toHex(buf) {
  let hex = "";
  for (let i = 0; i < buf.length; i++) {
    hex += HEX[buf[i]];
  }
  return hex;
}
__name(toHex, "toHex");
const _RandomIdGenerator = class _RandomIdGenerator {
  /**
   * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
   * characters corresponding to 128 bits.
   */
  generateTraceId() {
    randomFill(TRACE_BUFFER);
    return toHex(TRACE_BUFFER);
  }
  /**
   * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
   * characters corresponding to 64 bits.
   */
  generateSpanId() {
    randomFill(SPAN_BUFFER);
    return toHex(SPAN_BUFFER);
  }
};
__name(_RandomIdGenerator, "RandomIdGenerator");
let RandomIdGenerator = _RandomIdGenerator;
const ATTR_OTEL_SPAN_PARENT_ORIGIN = "otel.span.parent.origin";
const ATTR_OTEL_SPAN_SAMPLING_RESULT = "otel.span.sampling_result";
const METRIC_OTEL_SDK_SPAN_LIVE = "otel.sdk.span.live";
const METRIC_OTEL_SDK_SPAN_STARTED = "otel.sdk.span.started";
const _TracerMetrics = class _TracerMetrics {
  startedSpans;
  liveSpans;
  constructor(meter) {
    this.startedSpans = meter.createCounter(METRIC_OTEL_SDK_SPAN_STARTED, {
      unit: "{span}",
      description: "The number of created spans."
    });
    this.liveSpans = meter.createUpDownCounter(METRIC_OTEL_SDK_SPAN_LIVE, {
      unit: "{span}",
      description: "The number of currently live spans."
    });
  }
  startSpan(parentSpanCtx, samplingDecision) {
    const samplingDecisionStr = samplingDecisionToString(samplingDecision);
    this.startedSpans.add(1, {
      [ATTR_OTEL_SPAN_PARENT_ORIGIN]: parentOrigin(parentSpanCtx),
      [ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr
    });
    if (samplingDecision === SamplingDecision.NOT_RECORD) {
      return () => {
      };
    }
    const liveSpanAttributes = {
      [ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr
    };
    this.liveSpans.add(1, liveSpanAttributes);
    return () => {
      this.liveSpans.add(-1, liveSpanAttributes);
    };
  }
};
__name(_TracerMetrics, "TracerMetrics");
let TracerMetrics = _TracerMetrics;
function parentOrigin(parentSpanContext) {
  if (!parentSpanContext) {
    return "none";
  }
  if (parentSpanContext.isRemote) {
    return "remote";
  }
  return "local";
}
__name(parentOrigin, "parentOrigin");
function samplingDecisionToString(decision) {
  switch (decision) {
    case SamplingDecision.RECORD_AND_SAMPLED:
      return "RECORD_AND_SAMPLE";
    case SamplingDecision.RECORD:
      return "RECORD_ONLY";
    case SamplingDecision.NOT_RECORD:
      return "DROP";
  }
}
__name(samplingDecisionToString, "samplingDecisionToString");
const VERSION$2 = "2.7.1";
const _Tracer = class _Tracer {
  _sampler;
  _generalLimits;
  _spanLimits;
  _idGenerator;
  instrumentationScope;
  _resource;
  _spanProcessor;
  _tracerMetrics;
  /**
   * Constructs a new Tracer instance.
   */
  constructor(instrumentationScope, config, resource, spanProcessor) {
    const localConfig = mergeConfig(config);
    this._sampler = localConfig.sampler;
    this._generalLimits = localConfig.generalLimits;
    this._spanLimits = localConfig.spanLimits;
    this._idGenerator = config.idGenerator || new RandomIdGenerator();
    this._resource = resource;
    this._spanProcessor = spanProcessor;
    this.instrumentationScope = instrumentationScope;
    const meter = localConfig.meterProvider ? localConfig.meterProvider.getMeter("@opentelemetry/sdk-trace", VERSION$2) : createNoopMeter();
    this._tracerMetrics = new TracerMetrics(meter);
  }
  /**
   * Starts a new Span or returns the default NoopSpan based on the sampling
   * decision.
   */
  startSpan(name, options = {}, context$1 = context.active()) {
    if (options.root) {
      context$1 = trace.deleteSpan(context$1);
    }
    const parentSpan = trace.getSpan(context$1);
    if (isTracingSuppressed(context$1)) {
      diag.debug("Instrumentation suppressed, returning Noop Span");
      const nonRecordingSpan = trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
      return nonRecordingSpan;
    }
    const parentSpanContext = parentSpan == null ? void 0 : parentSpan.spanContext();
    const spanId = this._idGenerator.generateSpanId();
    let validParentSpanContext;
    let traceId;
    let traceState;
    if (!parentSpanContext || !trace.isSpanContextValid(parentSpanContext)) {
      traceId = this._idGenerator.generateTraceId();
    } else {
      traceId = parentSpanContext.traceId;
      traceState = parentSpanContext.traceState;
      validParentSpanContext = parentSpanContext;
    }
    const spanKind = options.kind ?? SpanKind.INTERNAL;
    const links = (options.links ?? []).map((link) => {
      return {
        context: link.context,
        attributes: sanitizeAttributes$1(link.attributes)
      };
    });
    const attributes = sanitizeAttributes$1(options.attributes);
    const samplingResult = this._sampler.shouldSample(context$1, traceId, name, spanKind, attributes, links);
    const recordEndMetrics = this._tracerMetrics.startSpan(parentSpanContext, samplingResult.decision);
    traceState = samplingResult.traceState ?? traceState;
    const traceFlags = samplingResult.decision === SamplingDecision$1.RECORD_AND_SAMPLED ? TraceFlags.SAMPLED : TraceFlags.NONE;
    const spanContext = { traceId, spanId, traceFlags, traceState };
    if (samplingResult.decision === SamplingDecision$1.NOT_RECORD) {
      diag.debug("Recording is off, propagating context in a non-recording span");
      const nonRecordingSpan = trace.wrapSpanContext(spanContext);
      return nonRecordingSpan;
    }
    const initAttributes = sanitizeAttributes$1(Object.assign(attributes, samplingResult.attributes));
    const span = new SpanImpl({
      resource: this._resource,
      scope: this.instrumentationScope,
      context: context$1,
      spanContext,
      name,
      kind: spanKind,
      links,
      parentSpanContext: validParentSpanContext,
      attributes: initAttributes,
      startTime: options.startTime,
      spanProcessor: this._spanProcessor,
      spanLimits: this._spanLimits,
      recordEndMetrics
    });
    return span;
  }
  startActiveSpan(name, arg2, arg3, arg4) {
    let opts;
    let ctx;
    let fn;
    if (arguments.length < 2) {
      return;
    } else if (arguments.length === 2) {
      fn = arg2;
    } else if (arguments.length === 3) {
      opts = arg2;
      fn = arg3;
    } else {
      opts = arg2;
      ctx = arg3;
      fn = arg4;
    }
    const parentContext = ctx ?? context.active();
    const span = this.startSpan(name, opts, parentContext);
    const contextWithSpanSet = trace.setSpan(parentContext, span);
    return context.with(contextWithSpanSet, fn, void 0, span);
  }
  /** Returns the active {@link GeneralLimits}. */
  getGeneralLimits() {
    return this._generalLimits;
  }
  /** Returns the active {@link SpanLimits}. */
  getSpanLimits() {
    return this._spanLimits;
  }
};
__name(_Tracer, "Tracer");
let Tracer = _Tracer;
const _MultiSpanProcessor = class _MultiSpanProcessor {
  _spanProcessors;
  constructor(spanProcessors) {
    this._spanProcessors = spanProcessors;
  }
  forceFlush() {
    const promises = [];
    for (const spanProcessor of this._spanProcessors) {
      promises.push(spanProcessor.forceFlush());
    }
    return new Promise((resolve) => {
      Promise.all(promises).then(() => {
        resolve();
      }).catch((error) => {
        globalErrorHandler(error || new Error("MultiSpanProcessor: forceFlush failed"));
        resolve();
      });
    });
  }
  onStart(span, context2) {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onStart(span, context2);
    }
  }
  onEnding(span) {
    for (const spanProcessor of this._spanProcessors) {
      if (spanProcessor.onEnding) {
        spanProcessor.onEnding(span);
      }
    }
  }
  onEnd(span) {
    for (const spanProcessor of this._spanProcessors) {
      spanProcessor.onEnd(span);
    }
  }
  shutdown() {
    const promises = [];
    for (const spanProcessor of this._spanProcessors) {
      promises.push(spanProcessor.shutdown());
    }
    return new Promise((resolve, reject) => {
      Promise.all(promises).then(() => {
        resolve();
      }, reject);
    });
  }
};
__name(_MultiSpanProcessor, "MultiSpanProcessor");
let MultiSpanProcessor = _MultiSpanProcessor;
var ForceFlushState;
(function(ForceFlushState2) {
  ForceFlushState2[ForceFlushState2["resolved"] = 0] = "resolved";
  ForceFlushState2[ForceFlushState2["timeout"] = 1] = "timeout";
  ForceFlushState2[ForceFlushState2["error"] = 2] = "error";
  ForceFlushState2[ForceFlushState2["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
const _BasicTracerProvider = class _BasicTracerProvider {
  _config;
  _tracers = /* @__PURE__ */ new Map();
  _resource;
  _activeSpanProcessor;
  constructor(config = {}) {
    var _a;
    const mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
    this._resource = mergedConfig.resource ?? defaultResource();
    this._config = Object.assign({}, mergedConfig, {
      resource: this._resource
    });
    const spanProcessors = [];
    if ((_a = config.spanProcessors) == null ? void 0 : _a.length) {
      spanProcessors.push(...config.spanProcessors);
    }
    this._activeSpanProcessor = new MultiSpanProcessor(spanProcessors);
  }
  getTracer(name, version, options) {
    const key = `${name}@${version || ""}:${(options == null ? void 0 : options.schemaUrl) || ""}`;
    if (!this._tracers.has(key)) {
      this._tracers.set(key, new Tracer({ name, version, schemaUrl: options == null ? void 0 : options.schemaUrl }, this._config, this._resource, this._activeSpanProcessor));
    }
    return this._tracers.get(key);
  }
  forceFlush() {
    const timeout = this._config.forceFlushTimeoutMillis;
    const promises = this._activeSpanProcessor["_spanProcessors"].map((spanProcessor) => {
      return new Promise((resolve) => {
        let state;
        const timeoutInterval = setTimeout(() => {
          resolve(new Error(`Span processor did not completed within timeout period of ${timeout} ms`));
          state = ForceFlushState.timeout;
        }, timeout);
        spanProcessor.forceFlush().then(() => {
          clearTimeout(timeoutInterval);
          if (state !== ForceFlushState.timeout) {
            state = ForceFlushState.resolved;
            resolve(state);
          }
        }).catch((error) => {
          clearTimeout(timeoutInterval);
          state = ForceFlushState.error;
          resolve(error);
        });
      });
    });
    return new Promise((resolve, reject) => {
      Promise.all(promises).then((results) => {
        const errors = results.filter((result) => result !== ForceFlushState.resolved);
        if (errors.length > 0) {
          reject(errors);
        } else {
          resolve();
        }
      }).catch((error) => reject([error]));
    });
  }
  shutdown() {
    return this._activeSpanProcessor.shutdown();
  }
};
__name(_BasicTracerProvider, "BasicTracerProvider");
let BasicTracerProvider = _BasicTracerProvider;
const _SimpleSpanProcessor = class _SimpleSpanProcessor {
  _exporter;
  _shutdownOnce;
  _pendingExports;
  constructor(exporter) {
    this._exporter = exporter;
    this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
    this._pendingExports = /* @__PURE__ */ new Set();
  }
  async forceFlush() {
    await Promise.all(Array.from(this._pendingExports));
    if (this._exporter.forceFlush) {
      await this._exporter.forceFlush();
    }
  }
  onStart(_span, _parentContext) {
  }
  onEnd(span) {
    if (this._shutdownOnce.isCalled) {
      return;
    }
    if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) {
      return;
    }
    const pendingExport = this._doExport(span).catch((err) => globalErrorHandler(err));
    this._pendingExports.add(pendingExport);
    void pendingExport.finally(() => this._pendingExports.delete(pendingExport));
  }
  async _doExport(span) {
    var _a, _b;
    if (span.resource.asyncAttributesPending) {
      await ((_b = (_a = span.resource).waitForAsyncAttributes) == null ? void 0 : _b.call(_a));
    }
    const result = await internal._export(this._exporter, [span]);
    if (result.code !== ExportResultCode.SUCCESS) {
      throw result.error ?? new Error(`SimpleSpanProcessor: span export failed (status ${result})`);
    }
  }
  shutdown() {
    return this._shutdownOnce.call();
  }
  _shutdown() {
    return this._exporter.shutdown();
  }
};
__name(_SimpleSpanProcessor, "SimpleSpanProcessor");
let SimpleSpanProcessor = _SimpleSpanProcessor;
const _StackContextManager = class _StackContextManager {
  /**
   * whether the context manager is enabled or not
   */
  _enabled = false;
  /**
   * Keeps the reference to current context
   */
  _currentContext = ROOT_CONTEXT;
  /**
   *
   * @param context
   * @param target Function to be executed within the context
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  _bindFunction(context2 = ROOT_CONTEXT, target) {
    const manager = this;
    const contextWrapper = /* @__PURE__ */ __name(function(...args) {
      return manager.with(context2, () => target.apply(this, args));
    }, "contextWrapper");
    Object.defineProperty(contextWrapper, "length", {
      enumerable: false,
      configurable: true,
      writable: false,
      value: target.length
    });
    return contextWrapper;
  }
  /**
   * Returns the active context
   */
  active() {
    return this._currentContext;
  }
  /**
   * Binds a the certain context or the active one to the target function and then returns the target
   * @param context A context (span) to be bind to target
   * @param target a function or event emitter. When target or one of its callbacks is called,
   *  the provided context will be used as the active context for the duration of the call.
   */
  bind(context2, target) {
    if (context2 === void 0) {
      context2 = this.active();
    }
    if (typeof target === "function") {
      return this._bindFunction(context2, target);
    }
    return target;
  }
  /**
   * Disable the context manager (clears the current context)
   */
  disable() {
    this._currentContext = ROOT_CONTEXT;
    this._enabled = false;
    return this;
  }
  /**
   * Enables the context manager and creates a default(root) context
   */
  enable() {
    if (this._enabled) {
      return this;
    }
    this._enabled = true;
    this._currentContext = ROOT_CONTEXT;
    return this;
  }
  /**
   * Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
   * The context will be set as active
   * @param context
   * @param fn Callback function
   * @param thisArg optional receiver to be used for calling fn
   * @param args optional arguments forwarded to fn
   */
  with(context2, fn, thisArg, ...args) {
    const previousContext = this._currentContext;
    this._currentContext = context2 || ROOT_CONTEXT;
    try {
      return fn.call(thisArg, ...args);
    } finally {
      this._currentContext = previousContext;
    }
  }
};
__name(_StackContextManager, "StackContextManager");
let StackContextManager = _StackContextManager;
function setupContextManager(contextManager) {
  if (contextManager === null) {
    return;
  }
  if (contextManager === void 0) {
    const defaultContextManager = new StackContextManager();
    defaultContextManager.enable();
    context.setGlobalContextManager(defaultContextManager);
    return;
  }
  contextManager.enable();
  context.setGlobalContextManager(contextManager);
}
__name(setupContextManager, "setupContextManager");
function setupPropagator(propagator) {
  if (propagator === null) {
    return;
  }
  if (propagator === void 0) {
    propagation.setGlobalPropagator(new CompositePropagator({
      propagators: [
        new W3CTraceContextPropagator(),
        new W3CBaggagePropagator()
      ]
    }));
    return;
  }
  propagation.setGlobalPropagator(propagator);
}
__name(setupPropagator, "setupPropagator");
const _WebTracerProvider = class _WebTracerProvider extends BasicTracerProvider {
  /**
   * Constructs a new Tracer instance.
   * @param config Web Tracer config
   */
  constructor(config = {}) {
    super(config);
  }
  /**
   * Register this TracerProvider for use with the OpenTelemetry API.
   * Undefined values may be replaced with defaults, and
   * null values will be skipped.
   *
   * @param config Configuration object for SDK registration
   */
  register(config = {}) {
    trace.setGlobalTracerProvider(this);
    setupPropagator(config.propagator);
    setupContextManager(config.contextManager);
  }
};
__name(_WebTracerProvider, "WebTracerProvider");
let WebTracerProvider = _WebTracerProvider;
var PerformanceTimingNames;
(function(PerformanceTimingNames2) {
  PerformanceTimingNames2["CONNECT_END"] = "connectEnd";
  PerformanceTimingNames2["CONNECT_START"] = "connectStart";
  PerformanceTimingNames2["DECODED_BODY_SIZE"] = "decodedBodySize";
  PerformanceTimingNames2["DOM_COMPLETE"] = "domComplete";
  PerformanceTimingNames2["DOM_CONTENT_LOADED_EVENT_END"] = "domContentLoadedEventEnd";
  PerformanceTimingNames2["DOM_CONTENT_LOADED_EVENT_START"] = "domContentLoadedEventStart";
  PerformanceTimingNames2["DOM_INTERACTIVE"] = "domInteractive";
  PerformanceTimingNames2["DOMAIN_LOOKUP_END"] = "domainLookupEnd";
  PerformanceTimingNames2["DOMAIN_LOOKUP_START"] = "domainLookupStart";
  PerformanceTimingNames2["ENCODED_BODY_SIZE"] = "encodedBodySize";
  PerformanceTimingNames2["FETCH_START"] = "fetchStart";
  PerformanceTimingNames2["LOAD_EVENT_END"] = "loadEventEnd";
  PerformanceTimingNames2["LOAD_EVENT_START"] = "loadEventStart";
  PerformanceTimingNames2["NAVIGATION_START"] = "navigationStart";
  PerformanceTimingNames2["REDIRECT_END"] = "redirectEnd";
  PerformanceTimingNames2["REDIRECT_START"] = "redirectStart";
  PerformanceTimingNames2["REQUEST_START"] = "requestStart";
  PerformanceTimingNames2["RESPONSE_END"] = "responseEnd";
  PerformanceTimingNames2["RESPONSE_START"] = "responseStart";
  PerformanceTimingNames2["SECURE_CONNECTION_START"] = "secureConnectionStart";
  PerformanceTimingNames2["START_TIME"] = "startTime";
  PerformanceTimingNames2["UNLOAD_EVENT_END"] = "unloadEventEnd";
  PerformanceTimingNames2["UNLOAD_EVENT_START"] = "unloadEventStart";
})(PerformanceTimingNames || (PerformanceTimingNames = {}));
const ATTR_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
const ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
let urlNormalizingAnchor;
function getUrlNormalizingAnchor() {
  if (!urlNormalizingAnchor) {
    urlNormalizingAnchor = document.createElement("a");
  }
  return urlNormalizingAnchor;
}
__name(getUrlNormalizingAnchor, "getUrlNormalizingAnchor");
function hasKey(obj, key) {
  return key in obj;
}
__name(hasKey, "hasKey");
function addSpanNetworkEvent(span, performanceName, entries, ignoreZeros = true) {
  if (hasKey(entries, performanceName) && typeof entries[performanceName] === "number" && !(ignoreZeros && entries[performanceName] === 0)) {
    return span.addEvent(performanceName, entries[performanceName]);
  }
  return void 0;
}
__name(addSpanNetworkEvent, "addSpanNetworkEvent");
function addSpanNetworkEvents(span, resource, ignoreNetworkEvents = false, ignoreZeros, skipOldSemconvContentLengthAttrs) {
  if (ignoreZeros === void 0) {
    ignoreZeros = resource[PerformanceTimingNames.START_TIME] !== 0;
  }
  if (!ignoreNetworkEvents) {
    addSpanNetworkEvent(span, PerformanceTimingNames.FETCH_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.DOMAIN_LOOKUP_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.DOMAIN_LOOKUP_END, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.CONNECT_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.SECURE_CONNECTION_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.CONNECT_END, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.REQUEST_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.RESPONSE_START, resource, ignoreZeros);
    addSpanNetworkEvent(span, PerformanceTimingNames.RESPONSE_END, resource, ignoreZeros);
  }
  if (!skipOldSemconvContentLengthAttrs) {
    const encodedLength = resource[PerformanceTimingNames.ENCODED_BODY_SIZE];
    if (encodedLength !== void 0) {
      span.setAttribute(ATTR_HTTP_RESPONSE_CONTENT_LENGTH, encodedLength);
    }
    const decodedLength = resource[PerformanceTimingNames.DECODED_BODY_SIZE];
    if (decodedLength !== void 0 && encodedLength !== decodedLength) {
      span.setAttribute(ATTR_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, decodedLength);
    }
  }
}
__name(addSpanNetworkEvents, "addSpanNetworkEvents");
function sortResources(filteredResources) {
  return filteredResources.slice().sort((a, b) => {
    const valueA = a[PerformanceTimingNames.FETCH_START];
    const valueB = b[PerformanceTimingNames.FETCH_START];
    if (valueA > valueB) {
      return 1;
    } else if (valueA < valueB) {
      return -1;
    }
    return 0;
  });
}
__name(sortResources, "sortResources");
function getOrigin() {
  return typeof location !== "undefined" ? location.origin : void 0;
}
__name(getOrigin, "getOrigin");
function getResource(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources = /* @__PURE__ */ new WeakSet(), initiatorType) {
  const parsedSpanUrl = parseUrl(spanUrl);
  spanUrl = parsedSpanUrl.toString();
  const filteredResources = filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType);
  if (filteredResources.length === 0) {
    return {
      mainRequest: void 0
    };
  }
  if (filteredResources.length === 1) {
    return {
      mainRequest: filteredResources[0]
    };
  }
  const sorted = sortResources(filteredResources);
  if (parsedSpanUrl.origin !== getOrigin() && sorted.length > 1) {
    let corsPreFlightRequest = sorted[0];
    let mainRequest = findMainRequest(sorted, corsPreFlightRequest[PerformanceTimingNames.RESPONSE_END], endTimeHR);
    const responseEnd = corsPreFlightRequest[PerformanceTimingNames.RESPONSE_END];
    const fetchStart = mainRequest[PerformanceTimingNames.FETCH_START];
    if (fetchStart < responseEnd) {
      mainRequest = corsPreFlightRequest;
      corsPreFlightRequest = void 0;
    }
    return {
      corsPreFlightRequest,
      mainRequest
    };
  } else {
    return {
      mainRequest: filteredResources[0]
    };
  }
}
__name(getResource, "getResource");
function findMainRequest(resources, corsPreFlightRequestEndTime, spanEndTimeHR) {
  const spanEndTime = hrTimeToNanoseconds(spanEndTimeHR);
  const minTime = hrTimeToNanoseconds(timeInputToHrTime(corsPreFlightRequestEndTime));
  let mainRequest = resources[1];
  let bestGap;
  const length = resources.length;
  for (let i = 1; i < length; i++) {
    const resource = resources[i];
    const resourceStartTime = hrTimeToNanoseconds(timeInputToHrTime(resource[PerformanceTimingNames.FETCH_START]));
    const resourceEndTime = hrTimeToNanoseconds(timeInputToHrTime(resource[PerformanceTimingNames.RESPONSE_END]));
    const currentGap = spanEndTime - resourceEndTime;
    if (resourceStartTime >= minTime && (!bestGap || currentGap < bestGap)) {
      bestGap = currentGap;
      mainRequest = resource;
    }
  }
  return mainRequest;
}
__name(findMainRequest, "findMainRequest");
function filterResourcesForSpan(spanUrl, startTimeHR, endTimeHR, resources, ignoredResources, initiatorType) {
  const startTime = hrTimeToNanoseconds(startTimeHR);
  const endTime = hrTimeToNanoseconds(endTimeHR);
  let filteredResources = resources.filter((resource) => {
    const resourceStartTime = hrTimeToNanoseconds(timeInputToHrTime(resource[PerformanceTimingNames.FETCH_START]));
    const resourceEndTime = hrTimeToNanoseconds(timeInputToHrTime(resource[PerformanceTimingNames.RESPONSE_END]));
    return resource.initiatorType.toLowerCase() === (initiatorType || "xmlhttprequest") && resource.name === spanUrl && resourceStartTime >= startTime && resourceEndTime <= endTime;
  });
  if (filteredResources.length > 0) {
    filteredResources = filteredResources.filter((resource) => {
      return !ignoredResources.has(resource);
    });
  }
  return filteredResources;
}
__name(filterResourcesForSpan, "filterResourcesForSpan");
function parseUrl(url) {
  if (typeof URL === "function") {
    return new URL(url, typeof document !== "undefined" ? document.baseURI : typeof location !== "undefined" ? location.href : void 0);
  }
  const element = getUrlNormalizingAnchor();
  element.href = url;
  return element;
}
__name(parseUrl, "parseUrl");
function shouldPropagateTraceHeaders(spanUrl, propagateTraceHeaderCorsUrls) {
  let propagateTraceHeaderUrls = propagateTraceHeaderCorsUrls || [];
  if (typeof propagateTraceHeaderUrls === "string" || propagateTraceHeaderUrls instanceof RegExp) {
    propagateTraceHeaderUrls = [propagateTraceHeaderUrls];
  }
  const parsedSpanUrl = parseUrl(spanUrl);
  if (parsedSpanUrl.origin === getOrigin()) {
    return true;
  } else {
    return propagateTraceHeaderUrls.some((propagateTraceHeaderUrl) => urlMatches(spanUrl, propagateTraceHeaderUrl));
  }
}
__name(shouldPropagateTraceHeaders, "shouldPropagateTraceHeaders");
var AttributeNames$1;
(function(AttributeNames2) {
  AttributeNames2["COMPONENT"] = "component";
  AttributeNames2["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames$1 || (AttributeNames$1 = {}));
const ATTR_HTTP_HOST$1 = "http.host";
const ATTR_HTTP_METHOD$1 = "http.method";
const ATTR_HTTP_REQUEST_BODY_SIZE$1 = "http.request.body.size";
const ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED$1 = "http.request_content_length_uncompressed";
const ATTR_HTTP_SCHEME$1 = "http.scheme";
const ATTR_HTTP_STATUS_CODE$1 = "http.status_code";
const ATTR_HTTP_URL$1 = "http.url";
const ATTR_HTTP_USER_AGENT$1 = "http.user_agent";
const DIAG_LOGGER$1 = diag.createComponentLogger({
  namespace: "@opentelemetry/opentelemetry-instrumentation-fetch/utils"
});
function getFetchBodyLength(...args) {
  if (args[0] instanceof URL || typeof args[0] === "string") {
    const requestInit = args[1];
    if (!(requestInit == null ? void 0 : requestInit.body)) {
      return Promise.resolve();
    }
    if (requestInit.body instanceof ReadableStream) {
      const { body, length } = _getBodyNonDestructively(requestInit.body);
      requestInit.body = body;
      return length;
    } else {
      return Promise.resolve(getXHRBodyLength$1(requestInit.body));
    }
  } else {
    const info = args[0];
    if (!(info == null ? void 0 : info.body)) {
      return Promise.resolve();
    }
    return info.clone().text().then((t) => getByteLength$1(t));
  }
}
__name(getFetchBodyLength, "getFetchBodyLength");
function _getBodyNonDestructively(body) {
  if (!body.pipeThrough) {
    DIAG_LOGGER$1.warn("Platform has ReadableStream but not pipeThrough!");
    return {
      body,
      length: Promise.resolve(void 0)
    };
  }
  let length = 0;
  let resolveLength;
  const lengthPromise = new Promise((resolve) => {
    resolveLength = resolve;
  });
  const transform = new TransformStream({
    start() {
    },
    async transform(chunk, controller) {
      const bytearray = await chunk;
      length += bytearray.byteLength;
      controller.enqueue(chunk);
    },
    flush() {
      resolveLength(length);
    }
  });
  return {
    body: body.pipeThrough(transform),
    length: lengthPromise
  };
}
__name(_getBodyNonDestructively, "_getBodyNonDestructively");
function isDocument$1(value) {
  return typeof Document !== "undefined" && value instanceof Document;
}
__name(isDocument$1, "isDocument$1");
function getXHRBodyLength$1(body) {
  if (isDocument$1(body)) {
    return new XMLSerializer().serializeToString(document).length;
  }
  if (typeof body === "string") {
    return getByteLength$1(body);
  }
  if (body instanceof Blob) {
    return body.size;
  }
  if (body instanceof FormData) {
    return getFormDataSize$1(body);
  }
  if (body instanceof URLSearchParams) {
    return getByteLength$1(body.toString());
  }
  if (body.byteLength !== void 0) {
    return body.byteLength;
  }
  DIAG_LOGGER$1.warn("unknown body type");
  return void 0;
}
__name(getXHRBodyLength$1, "getXHRBodyLength$1");
const TEXT_ENCODER$1 = new TextEncoder();
function getByteLength$1(s) {
  return TEXT_ENCODER$1.encode(s).byteLength;
}
__name(getByteLength$1, "getByteLength$1");
function getFormDataSize$1(formData) {
  let size = 0;
  for (const [key, value] of formData.entries()) {
    size += key.length;
    if (value instanceof Blob) {
      size += value.size;
    } else {
      size += value.length;
    }
  }
  return size;
}
__name(getFormDataSize$1, "getFormDataSize$1");
function normalizeHttpRequestMethod$1(method) {
  const knownMethods2 = getKnownMethods$1();
  const methUpper = method.toUpperCase();
  if (methUpper in knownMethods2) {
    return methUpper;
  } else {
    return "_OTHER";
  }
}
__name(normalizeHttpRequestMethod$1, "normalizeHttpRequestMethod$1");
const DEFAULT_KNOWN_METHODS$1 = {
  CONNECT: true,
  DELETE: true,
  GET: true,
  HEAD: true,
  OPTIONS: true,
  PATCH: true,
  POST: true,
  PUT: true,
  TRACE: true,
  // QUERY from https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/
  QUERY: true
};
let knownMethods$1;
function getKnownMethods$1() {
  if (knownMethods$1 === void 0) {
    {
      knownMethods$1 = DEFAULT_KNOWN_METHODS$1;
    }
  }
  return knownMethods$1;
}
__name(getKnownMethods$1, "getKnownMethods$1");
const HTTP_PORT_FROM_PROTOCOL$1 = {
  "https:": "443",
  "http:": "80"
};
function serverPortFromUrl$1(url) {
  const serverPort = Number(url.port || HTTP_PORT_FROM_PROTOCOL$1[url.protocol]);
  if (serverPort && !isNaN(serverPort)) {
    return serverPort;
  } else {
    return void 0;
  }
}
__name(serverPortFromUrl$1, "serverPortFromUrl$1");
const VERSION$1 = "0.218.0";
const OBSERVER_WAIT_TIME_MS$1 = 300;
const hasBrowserPerformanceAPI = typeof PerformanceObserver !== "undefined";
const _FetchInstrumentation = class _FetchInstrumentation extends InstrumentationBase {
  component = "fetch";
  version = VERSION$1;
  moduleName = this.component;
  _usedResources = /* @__PURE__ */ new WeakSet();
  _tasksCount = 0;
  _semconvStability;
  constructor(config = {}) {
    super("@opentelemetry/instrumentation-fetch", VERSION$1, config);
    this._semconvStability = semconvStabilityFromStr("http", config == null ? void 0 : config.semconvStabilityOptIn);
  }
  init() {
  }
  /**
   * Add cors pre flight child span
   * @param span
   * @param corsPreFlightRequest
   */
  _addChildSpan(span, corsPreFlightRequest) {
    const childSpan = this.tracer.startSpan("CORS Preflight", {
      startTime: corsPreFlightRequest[PerformanceTimingNames.FETCH_START]
    }, trace.setSpan(context.active(), span));
    const skipOldSemconvContentLengthAttrs = !(this._semconvStability & SemconvStability.OLD);
    addSpanNetworkEvents(childSpan, corsPreFlightRequest, this.getConfig().ignoreNetworkEvents, void 0, skipOldSemconvContentLengthAttrs);
    childSpan.end(corsPreFlightRequest[PerformanceTimingNames.RESPONSE_END]);
  }
  /**
   * Adds more attributes to span just before ending it
   * @param span
   * @param response
   */
  _addFinalSpanAttributes(span, response) {
    const parsedUrl = parseUrl(response.url);
    if (this._semconvStability & SemconvStability.OLD) {
      span.setAttribute(ATTR_HTTP_STATUS_CODE$1, response.status);
      if (response.statusText != null) {
        span.setAttribute(AttributeNames$1.HTTP_STATUS_TEXT, response.statusText);
      }
      span.setAttribute(ATTR_HTTP_HOST$1, parsedUrl.host);
      span.setAttribute(ATTR_HTTP_SCHEME$1, parsedUrl.protocol.replace(":", ""));
      if (typeof navigator !== "undefined") {
        span.setAttribute(ATTR_HTTP_USER_AGENT$1, navigator.userAgent);
      }
    }
    if (this._semconvStability & SemconvStability.STABLE) {
      span.setAttribute(ATTR_HTTP_RESPONSE_STATUS_CODE, response.status);
      span.setAttribute(ATTR_SERVER_ADDRESS, parsedUrl.hostname);
      const serverPort = serverPortFromUrl$1(parsedUrl);
      if (serverPort) {
        span.setAttribute(ATTR_SERVER_PORT, serverPort);
      }
    }
  }
  /**
   * Add headers
   * @param options
   * @param spanUrl
   */
  _addHeaders(options, spanUrl) {
    if (!shouldPropagateTraceHeaders(spanUrl, this.getConfig().propagateTraceHeaderCorsUrls)) {
      const headers = {};
      propagation.inject(context.active(), headers);
      if (Object.keys(headers).length > 0) {
        this._diag.debug("headers inject skipped due to CORS policy");
      }
      return;
    }
    if (options instanceof Request) {
      propagation.inject(context.active(), options.headers, {
        set: /* @__PURE__ */ __name((h, k, v) => h.set(k, typeof v === "string" ? v : String(v)), "set")
      });
    } else {
      const headers = new Headers(options.headers);
      propagation.inject(context.active(), headers, {
        set: /* @__PURE__ */ __name((h, k, v) => h.set(k, typeof v === "string" ? v : String(v)), "set")
      });
      options.headers = headers;
    }
  }
  /**
   * Clears the resource timings and all resources assigned with spans
   *     when {@link FetchPluginConfig.clearTimingResources} is
   *     set to true (default false)
   * @private
   */
  _clearResources() {
    if (this._tasksCount === 0 && this.getConfig().clearTimingResources) {
      performance.clearResourceTimings();
      this._usedResources = /* @__PURE__ */ new WeakSet();
    }
  }
  /**
   * Creates a new span
   * @param url
   * @param options
   */
  _createSpan(url, options = {}) {
    if (isUrlIgnored(url, this.getConfig().ignoreUrls)) {
      this._diag.debug("ignoring span as url matches ignored url");
      return;
    }
    let name = "";
    const attributes = {};
    if (this._semconvStability & SemconvStability.OLD) {
      const method = (options.method || "GET").toUpperCase();
      name = `HTTP ${method}`;
      attributes[AttributeNames$1.COMPONENT] = this.moduleName;
      attributes[ATTR_HTTP_METHOD$1] = method;
      attributes[ATTR_HTTP_URL$1] = url;
    }
    if (this._semconvStability & SemconvStability.STABLE) {
      const origMethod = options.method;
      const normMethod = normalizeHttpRequestMethod$1(options.method || "GET");
      if (!name) {
        name = normMethod;
      }
      attributes[ATTR_HTTP_REQUEST_METHOD] = normMethod;
      if (normMethod !== origMethod) {
        attributes[ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = origMethod;
      }
      attributes[ATTR_URL_FULL] = url;
    }
    return this.tracer.startSpan(name, {
      kind: SpanKind.CLIENT,
      attributes
    });
  }
  /**
   * Finds appropriate resource and add network events to the span
   * @param span
   * @param resourcesObserver
   * @param endTime
   */
  _findResourceAndAddNetworkEvents(span, resourcesObserver, endTime) {
    let resources = resourcesObserver.entries;
    if (!resources.length) {
      if (!performance.getEntriesByType) {
        return;
      }
      resources = performance.getEntriesByType("resource");
    }
    const resource = getResource(resourcesObserver.spanUrl, resourcesObserver.startTime, endTime, resources, this._usedResources, "fetch");
    if (resource.mainRequest) {
      const mainRequest = resource.mainRequest;
      this._markResourceAsUsed(mainRequest);
      const corsPreFlightRequest = resource.corsPreFlightRequest;
      if (corsPreFlightRequest) {
        this._addChildSpan(span, corsPreFlightRequest);
        this._markResourceAsUsed(corsPreFlightRequest);
      }
      const skipOldSemconvContentLengthAttrs = !(this._semconvStability & SemconvStability.OLD);
      addSpanNetworkEvents(span, mainRequest, this.getConfig().ignoreNetworkEvents, void 0, skipOldSemconvContentLengthAttrs);
    }
  }
  /**
   * Marks certain [resource]{@link PerformanceResourceTiming} when information
   * from this is used to add events to span.
   * This is done to avoid reusing the same resource again for next span
   * @param resource
   */
  _markResourceAsUsed(resource) {
    this._usedResources.add(resource);
  }
  /**
   * Finish span, add attributes, network events etc.
   * @param span
   * @param spanData
   * @param response
   */
  _endSpan(span, spanData, response) {
    const endTime = millisToHrTime(Date.now());
    const performanceEndTime = hrTime();
    this._addFinalSpanAttributes(span, response);
    if (this._semconvStability & SemconvStability.STABLE) {
      if (response.status >= 400) {
        span.setStatus({ code: SpanStatusCode.ERROR });
        span.setAttribute(ATTR_ERROR_TYPE, String(response.status));
      }
    }
    setTimeout(() => {
      var _a;
      (_a = spanData.observer) == null ? void 0 : _a.disconnect();
      this._findResourceAndAddNetworkEvents(span, spanData, performanceEndTime);
      this._tasksCount--;
      this._clearResources();
      span.end(endTime);
    }, OBSERVER_WAIT_TIME_MS$1);
  }
  /**
   * Patches the constructor of fetch
   */
  _patchConstructor() {
    return (original) => {
      const plugin = this;
      return /* @__PURE__ */ __name(function patchConstructor(...args) {
        if (!plugin._isEnabled) {
          return original.apply(this, args);
        }
        const self = this;
        const url = parseUrl(args[0] instanceof Request ? args[0].url : String(args[0])).href;
        let options;
        if (args[0] instanceof Request) {
          options = args[1] != null ? new Request(args[0], args[1]) : args[0];
        } else {
          options = args[1] || {};
        }
        const createdSpan = plugin._createSpan(url, options);
        if (!createdSpan) {
          return original.apply(this, args);
        }
        const spanData = plugin._prepareSpanData(url);
        if (plugin.getConfig().measureRequestSize) {
          getFetchBodyLength(...args).then((bodyLength) => {
            if (!bodyLength)
              return;
            if (plugin._semconvStability & SemconvStability.OLD) {
              createdSpan.setAttribute(ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED$1, bodyLength);
            }
            if (plugin._semconvStability & SemconvStability.STABLE) {
              createdSpan.setAttribute(ATTR_HTTP_REQUEST_BODY_SIZE$1, bodyLength);
            }
          }).catch((error) => {
            plugin._diag.warn("getFetchBodyLength", error);
          });
        }
        function endSpanOnError(span, error) {
          plugin._applyAttributesAfterFetch(span, options, error);
          plugin._endSpan(span, spanData, {
            status: error.status || 0,
            statusText: error.message,
            url
          });
        }
        __name(endSpanOnError, "endSpanOnError");
        function endSpanOnSuccess(span, response) {
          plugin._applyAttributesAfterFetch(span, options, response);
          if (response.status >= 200 && response.status < 400) {
            plugin._endSpan(span, spanData, response);
          } else {
            plugin._endSpan(span, spanData, {
              status: response.status,
              statusText: response.statusText,
              url
            });
          }
        }
        __name(endSpanOnSuccess, "endSpanOnSuccess");
        function onSuccess(span, response) {
          try {
            const resClone = response.clone();
            const body = resClone.body;
            if (body) {
              const reader = body.getReader();
              const read = /* @__PURE__ */ __name(() => {
                reader.read().then(({ done }) => {
                  if (done) {
                    endSpanOnSuccess(span, response);
                  } else {
                    read();
                  }
                }, (error) => {
                  endSpanOnError(span, error);
                });
              }, "read");
              read();
            } else {
              endSpanOnSuccess(span, response);
            }
          } catch (error) {
            plugin._diag.error("Failed to read fetch response body", error);
            plugin._endSpan(span, spanData, {
              status: 0,
              url
            });
          }
          return response;
        }
        __name(onSuccess, "onSuccess");
        function onError(span, error) {
          try {
            endSpanOnError(span, error);
          } catch (e) {
            plugin._diag.error("Failed to end span on fetch error", e);
            plugin._endSpan(span, spanData, {
              status: error.status || 0,
              url
            });
          }
          throw error;
        }
        __name(onError, "onError");
        return context.with(trace.setSpan(context.active(), createdSpan), () => {
          plugin._callRequestHook(createdSpan, options);
          plugin._addHeaders(options, url);
          plugin._tasksCount++;
          return original.apply(self, options instanceof Request ? [options] : [url, options]).then(onSuccess.bind(self, createdSpan), onError.bind(self, createdSpan));
        });
      }, "patchConstructor");
    };
  }
  _applyAttributesAfterFetch(span, request, result) {
    const applyCustomAttributesOnSpan = this.getConfig().applyCustomAttributesOnSpan;
    if (applyCustomAttributesOnSpan) {
      safeExecuteInTheMiddle(() => applyCustomAttributesOnSpan(span, request, result), (error) => {
        if (!error) {
          return;
        }
        this._diag.error("applyCustomAttributesOnSpan", error);
      });
    }
  }
  _callRequestHook(span, request) {
    const requestHook = this.getConfig().requestHook;
    if (requestHook) {
      safeExecuteInTheMiddle(() => requestHook(span, request), (error) => {
        if (!error) {
          return;
        }
        this._diag.error("requestHook", error);
      });
    }
  }
  /**
   * Prepares a span data - needed later for matching appropriate network
   *     resources
   * @param spanUrl
   */
  _prepareSpanData(spanUrl) {
    const startTime = hrTime();
    const entries = [];
    if (typeof PerformanceObserver !== "function") {
      return { entries, startTime, spanUrl };
    }
    const observer = new PerformanceObserver((list) => {
      const perfObsEntries = list.getEntries();
      perfObsEntries.forEach((entry) => {
        if (entry.initiatorType === "fetch" && entry.name === spanUrl) {
          entries.push(entry);
        }
      });
    });
    observer.observe({
      entryTypes: ["resource"]
    });
    return { entries, observer, startTime, spanUrl };
  }
  /**
   * implements enable function
   */
  enable() {
    if (!hasBrowserPerformanceAPI) {
      this._diag.warn("this instrumentation is intended for web usage only, it does not instrument server-side fetch()");
      return;
    }
    if (this._isEnabled) {
      return;
    }
    if (this._isFetchPatched) {
      this._diag.debug("fetch constructor already patched");
      this._isEnabled = true;
      return;
    }
    try {
      this._wrap(globalThis, "fetch", this._patchConstructor());
      this._isFetchPatched = true;
      this._isEnabled = true;
    } catch (err) {
      this._diag.warn("Failed to patch globalThis.fetch; instrumentation will not be enabled. Another script may have locked globalThis.fetch via Object.defineProperty.", err);
    }
  }
  /**
   * deactivates fetch instrumentation
   */
  disable() {
    if (!hasBrowserPerformanceAPI) {
      return;
    }
    if (!this._isEnabled) {
      return;
    }
    this._isEnabled = false;
    this._usedResources = /* @__PURE__ */ new WeakSet();
  }
};
__name(_FetchInstrumentation, "FetchInstrumentation");
let FetchInstrumentation = _FetchInstrumentation;
const ATTR_HTTP_HOST = "http.host";
const ATTR_HTTP_METHOD = "http.method";
const ATTR_HTTP_REQUEST_BODY_SIZE = "http.request.body.size";
const ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
const ATTR_HTTP_SCHEME = "http.scheme";
const ATTR_HTTP_STATUS_CODE = "http.status_code";
const ATTR_HTTP_URL = "http.url";
const ATTR_HTTP_USER_AGENT = "http.user_agent";
var EventNames;
(function(EventNames2) {
  EventNames2["METHOD_OPEN"] = "open";
  EventNames2["METHOD_SEND"] = "send";
  EventNames2["EVENT_ABORT"] = "abort";
  EventNames2["EVENT_ERROR"] = "error";
  EventNames2["EVENT_LOAD"] = "loaded";
  EventNames2["EVENT_TIMEOUT"] = "timeout";
})(EventNames || (EventNames = {}));
const DIAG_LOGGER = diag.createComponentLogger({
  namespace: "@opentelemetry/opentelemetry-instrumentation-xml-http-request/utils"
});
function isDocument(value) {
  return typeof Document !== "undefined" && value instanceof Document;
}
__name(isDocument, "isDocument");
function getXHRBodyLength(body) {
  if (isDocument(body)) {
    return new XMLSerializer().serializeToString(document).length;
  }
  if (typeof body === "string") {
    return getByteLength(body);
  }
  if (body instanceof Blob) {
    return body.size;
  }
  if (body instanceof FormData) {
    return getFormDataSize(body);
  }
  if (body instanceof URLSearchParams) {
    return getByteLength(body.toString());
  }
  if (body.byteLength !== void 0) {
    return body.byteLength;
  }
  DIAG_LOGGER.warn("unknown body type");
  return void 0;
}
__name(getXHRBodyLength, "getXHRBodyLength");
const TEXT_ENCODER = new TextEncoder();
function getByteLength(s) {
  return TEXT_ENCODER.encode(s).byteLength;
}
__name(getByteLength, "getByteLength");
function getFormDataSize(formData) {
  let size = 0;
  for (const [key, value] of formData.entries()) {
    size += key.length;
    if (value instanceof Blob) {
      size += value.size;
    } else {
      size += value.length;
    }
  }
  return size;
}
__name(getFormDataSize, "getFormDataSize");
function normalizeHttpRequestMethod(method) {
  const knownMethods2 = getKnownMethods();
  const methUpper = method.toUpperCase();
  if (methUpper in knownMethods2) {
    return methUpper;
  } else {
    return "_OTHER";
  }
}
__name(normalizeHttpRequestMethod, "normalizeHttpRequestMethod");
const DEFAULT_KNOWN_METHODS = {
  CONNECT: true,
  DELETE: true,
  GET: true,
  HEAD: true,
  OPTIONS: true,
  PATCH: true,
  POST: true,
  PUT: true,
  TRACE: true,
  // QUERY from https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/
  QUERY: true
};
let knownMethods;
function getKnownMethods() {
  if (knownMethods === void 0) {
    {
      knownMethods = DEFAULT_KNOWN_METHODS;
    }
  }
  return knownMethods;
}
__name(getKnownMethods, "getKnownMethods");
const HTTP_PORT_FROM_PROTOCOL = {
  "https:": "443",
  "http:": "80"
};
function serverPortFromUrl(url) {
  const serverPort = Number(url.port || HTTP_PORT_FROM_PROTOCOL[url.protocol]);
  if (serverPort && !isNaN(serverPort)) {
    return serverPort;
  } else {
    return void 0;
  }
}
__name(serverPortFromUrl, "serverPortFromUrl");
const VERSION = "0.218.0";
var AttributeNames;
(function(AttributeNames2) {
  AttributeNames2["HTTP_STATUS_TEXT"] = "http.status_text";
})(AttributeNames || (AttributeNames = {}));
const OBSERVER_WAIT_TIME_MS = 300;
const _XMLHttpRequestInstrumentation = class _XMLHttpRequestInstrumentation extends InstrumentationBase {
  component = "xml-http-request";
  version = VERSION;
  moduleName = this.component;
  _tasksCount = 0;
  _xhrMem = /* @__PURE__ */ new WeakMap();
  _usedResources = /* @__PURE__ */ new WeakSet();
  _semconvStability;
  constructor(config = {}) {
    super("@opentelemetry/instrumentation-xml-http-request", VERSION, config);
    this._semconvStability = semconvStabilityFromStr("http", config == null ? void 0 : config.semconvStabilityOptIn);
  }
  init() {
  }
  /**
   * Adds custom headers to XMLHttpRequest
   * @param xhr
   * @param spanUrl
   * @private
   */
  _addHeaders(xhr, spanUrl) {
    const url = parseUrl(spanUrl).href;
    if (!shouldPropagateTraceHeaders(url, this.getConfig().propagateTraceHeaderCorsUrls)) {
      const headers2 = {};
      propagation.inject(context.active(), headers2);
      if (Object.keys(headers2).length > 0) {
        this._diag.debug("headers inject skipped due to CORS policy");
      }
      return;
    }
    const headers = {};
    propagation.inject(context.active(), headers);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, String(headers[key]));
    });
  }
  /**
   * Add cors pre flight child span
   * @param span
   * @param corsPreFlightRequest
   * @private
   */
  _addChildSpan(span, corsPreFlightRequest) {
    context.with(trace.setSpan(context.active(), span), () => {
      const childSpan = this.tracer.startSpan("CORS Preflight", {
        startTime: corsPreFlightRequest[PerformanceTimingNames.FETCH_START]
      });
      const skipOldSemconvContentLengthAttrs = !(this._semconvStability & SemconvStability.OLD);
      addSpanNetworkEvents(childSpan, corsPreFlightRequest, this.getConfig().ignoreNetworkEvents, void 0, skipOldSemconvContentLengthAttrs);
      childSpan.end(corsPreFlightRequest[PerformanceTimingNames.RESPONSE_END]);
    });
  }
  /**
   * Add attributes when span is going to end
   * @param span
   * @param xhr
   * @param spanUrl
   * @private
   */
  _addFinalSpanAttributes(span, xhrMem, spanUrl) {
    if (this._semconvStability & SemconvStability.OLD) {
      if (xhrMem.status !== void 0) {
        span.setAttribute(ATTR_HTTP_STATUS_CODE, xhrMem.status);
      }
      if (xhrMem.statusText !== void 0) {
        span.setAttribute(AttributeNames.HTTP_STATUS_TEXT, xhrMem.statusText);
      }
      if (typeof spanUrl === "string") {
        const parsedUrl = parseUrl(spanUrl);
        span.setAttribute(ATTR_HTTP_HOST, parsedUrl.host);
        span.setAttribute(ATTR_HTTP_SCHEME, parsedUrl.protocol.replace(":", ""));
      }
      span.setAttribute(ATTR_HTTP_USER_AGENT, navigator.userAgent);
    }
    if (this._semconvStability & SemconvStability.STABLE) {
      if (xhrMem.status) {
        span.setAttribute(ATTR_HTTP_RESPONSE_STATUS_CODE, xhrMem.status);
      }
    }
  }
  _applyAttributesAfterXHR(span, xhr) {
    const applyCustomAttributesOnSpan = this.getConfig().applyCustomAttributesOnSpan;
    if (typeof applyCustomAttributesOnSpan === "function") {
      safeExecuteInTheMiddle(() => applyCustomAttributesOnSpan(span, xhr), (error) => {
        if (!error) {
          return;
        }
        this._diag.error("applyCustomAttributesOnSpan", error);
      });
    }
  }
  /**
   * will collect information about all resources created
   * between "send" and "end" with additional waiting for main resource
   * @param xhr
   * @param spanUrl
   * @private
   */
  _addResourceObserver(xhr, spanUrl) {
    const xhrMem = this._xhrMem.get(xhr);
    if (!xhrMem || typeof PerformanceObserver !== "function" || typeof PerformanceResourceTiming !== "function") {
      return;
    }
    xhrMem.createdResources = {
      observer: new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const parsedUrl = parseUrl(spanUrl);
        entries.forEach((entry) => {
          if (entry.initiatorType === "xmlhttprequest" && entry.name === parsedUrl.href) {
            if (xhrMem.createdResources) {
              xhrMem.createdResources.entries.push(entry);
            }
          }
        });
      }),
      entries: []
    };
    xhrMem.createdResources.observer.observe({
      entryTypes: ["resource"]
    });
  }
  /**
   * Clears the resource timings and all resources assigned with spans
   *     when {@link XMLHttpRequestInstrumentationConfig.clearTimingResources} is
   *     set to true (default false)
   * @private
   */
  _clearResources() {
    if (this._tasksCount === 0 && this.getConfig().clearTimingResources) {
      otperformance.clearResourceTimings();
      this._xhrMem = /* @__PURE__ */ new WeakMap();
      this._usedResources = /* @__PURE__ */ new WeakSet();
    }
  }
  /**
   * Finds appropriate resource and add network events to the span
   * @param span
   */
  _findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, startTime, endTime) {
    if (!spanUrl || !startTime || !endTime || !xhrMem.createdResources) {
      return;
    }
    let resources = xhrMem.createdResources.entries;
    if (!resources || !resources.length) {
      resources = otperformance.getEntriesByType("resource");
    }
    const resource = getResource(parseUrl(spanUrl).href, startTime, endTime, resources, this._usedResources);
    if (resource.mainRequest) {
      const mainRequest = resource.mainRequest;
      this._markResourceAsUsed(mainRequest);
      const corsPreFlightRequest = resource.corsPreFlightRequest;
      if (corsPreFlightRequest) {
        this._addChildSpan(span, corsPreFlightRequest);
        this._markResourceAsUsed(corsPreFlightRequest);
      }
      const skipOldSemconvContentLengthAttrs = !(this._semconvStability & SemconvStability.OLD);
      addSpanNetworkEvents(span, mainRequest, this.getConfig().ignoreNetworkEvents, void 0, skipOldSemconvContentLengthAttrs);
    }
  }
  /**
   * Removes the previous information about span.
   * This might happened when the same xhr is used again.
   * @param xhr
   * @private
   */
  _cleanPreviousSpanInformation(xhr) {
    const xhrMem = this._xhrMem.get(xhr);
    if (xhrMem) {
      const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
      if (callbackToRemoveEvents) {
        callbackToRemoveEvents();
      }
      this._xhrMem.delete(xhr);
    }
  }
  /**
   * Creates a new span when method "open" is called
   * @param xhr
   * @param url
   * @param method
   * @private
   */
  _createSpan(xhr, url, method) {
    const parsedUrl = parseUrl(url);
    if (isUrlIgnored(parsedUrl.href, this.getConfig().ignoreUrls)) {
      this._diag.debug("ignoring span as url matches ignored url");
      return;
    }
    let name = "";
    const attributes = {};
    if (this._semconvStability & SemconvStability.OLD) {
      name = method.toUpperCase();
      attributes[ATTR_HTTP_METHOD] = method;
      attributes[ATTR_HTTP_URL] = parsedUrl.toString();
    }
    if (this._semconvStability & SemconvStability.STABLE) {
      const origMethod = method;
      const normMethod = normalizeHttpRequestMethod(method);
      if (!name) {
        name = normMethod;
      }
      attributes[ATTR_HTTP_REQUEST_METHOD] = normMethod;
      if (normMethod !== origMethod) {
        attributes[ATTR_HTTP_REQUEST_METHOD_ORIGINAL] = origMethod;
      }
      attributes[ATTR_URL_FULL] = parsedUrl.toString();
      attributes[ATTR_SERVER_ADDRESS] = parsedUrl.hostname;
      const serverPort = serverPortFromUrl(parsedUrl);
      if (serverPort) {
        attributes[ATTR_SERVER_PORT] = serverPort;
      }
    }
    const currentSpan = this.tracer.startSpan(name, {
      kind: SpanKind.CLIENT,
      attributes
    });
    currentSpan.addEvent(EventNames.METHOD_OPEN);
    this._cleanPreviousSpanInformation(xhr);
    this._xhrMem.set(xhr, {
      span: currentSpan,
      spanUrl: url
    });
    return currentSpan;
  }
  /**
   * Marks certain [resource]{@link PerformanceResourceTiming} when information
   * from this is used to add events to span.
   * This is done to avoid reusing the same resource again for next span
   * @param resource
   * @private
   */
  _markResourceAsUsed(resource) {
    this._usedResources.add(resource);
  }
  /**
   * Patches the method open
   * @private
   */
  _patchOpen() {
    return (original) => {
      const plugin = this;
      return /* @__PURE__ */ __name(function patchOpen(...args) {
        if (!plugin._isEnabled) {
          return original.apply(this, args);
        }
        const method = args[0];
        const url = args[1];
        plugin._createSpan(this, url, method);
        return original.apply(this, args);
      }, "patchOpen");
    };
  }
  /**
   * Patches the method send
   * @private
   */
  _patchSend() {
    const plugin = this;
    function endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime) {
      const callbackToRemoveEvents = xhrMem.callbackToRemoveEvents;
      if (typeof callbackToRemoveEvents === "function") {
        callbackToRemoveEvents();
      }
      const { span, spanUrl, sendStartTime } = xhrMem;
      if (span) {
        plugin._findResourceAndAddNetworkEvents(xhrMem, span, spanUrl, sendStartTime, performanceEndTime);
        span.addEvent(eventName, endTime);
        plugin._addFinalSpanAttributes(span, xhrMem, spanUrl);
        span.end(endTime);
        plugin._tasksCount--;
      }
      plugin._clearResources();
    }
    __name(endSpanTimeout, "endSpanTimeout");
    function endSpan(eventName, xhr, isError, errorType) {
      const xhrMem = plugin._xhrMem.get(xhr);
      if (!xhrMem) {
        return;
      }
      xhrMem.status = xhr.status;
      xhrMem.statusText = xhr.statusText;
      plugin._xhrMem.delete(xhr);
      if (xhrMem.span) {
        const span = xhrMem.span;
        plugin._applyAttributesAfterXHR(span, xhr);
        if (plugin._semconvStability & SemconvStability.STABLE) {
          if (isError) {
            if (errorType) {
              span.setStatus({
                code: SpanStatusCode.ERROR,
                message: errorType
              });
              span.setAttribute(ATTR_ERROR_TYPE, errorType);
            }
          } else if (xhrMem.status && xhrMem.status >= 400) {
            span.setStatus({ code: SpanStatusCode.ERROR });
            span.setAttribute(ATTR_ERROR_TYPE, String(xhrMem.status));
          }
        }
      }
      const performanceEndTime = hrTime();
      const endTime = Date.now();
      setTimeout(() => {
        endSpanTimeout(eventName, xhrMem, performanceEndTime, endTime);
      }, OBSERVER_WAIT_TIME_MS);
    }
    __name(endSpan, "endSpan");
    function onError() {
      endSpan(EventNames.EVENT_ERROR, this, true, "error");
    }
    __name(onError, "onError");
    function onAbort() {
      endSpan(EventNames.EVENT_ABORT, this, false);
    }
    __name(onAbort, "onAbort");
    function onTimeout() {
      endSpan(EventNames.EVENT_TIMEOUT, this, true, "timeout");
    }
    __name(onTimeout, "onTimeout");
    function onLoad() {
      if (this.status < 299) {
        endSpan(EventNames.EVENT_LOAD, this, false);
      } else {
        endSpan(EventNames.EVENT_ERROR, this, false);
      }
    }
    __name(onLoad, "onLoad");
    function unregister(xhr) {
      xhr.removeEventListener("abort", onAbort);
      xhr.removeEventListener("error", onError);
      xhr.removeEventListener("load", onLoad);
      xhr.removeEventListener("timeout", onTimeout);
      const xhrMem = plugin._xhrMem.get(xhr);
      if (xhrMem) {
        xhrMem.callbackToRemoveEvents = void 0;
      }
    }
    __name(unregister, "unregister");
    return (original) => {
      return /* @__PURE__ */ __name(function patchSend(...args) {
        if (!plugin._isEnabled) {
          return original.apply(this, args);
        }
        const xhrMem = plugin._xhrMem.get(this);
        if (!xhrMem) {
          return original.apply(this, args);
        }
        const currentSpan = xhrMem.span;
        const spanUrl = xhrMem.spanUrl;
        if (currentSpan && spanUrl) {
          if (plugin.getConfig().measureRequestSize && (args == null ? void 0 : args[0])) {
            const body = args[0];
            const bodyLength = getXHRBodyLength(body);
            if (bodyLength !== void 0) {
              if (plugin._semconvStability & SemconvStability.OLD) {
                currentSpan.setAttribute(ATTR_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, bodyLength);
              }
              if (plugin._semconvStability & SemconvStability.STABLE) {
                currentSpan.setAttribute(ATTR_HTTP_REQUEST_BODY_SIZE, bodyLength);
              }
            }
          }
          context.with(trace.setSpan(context.active(), currentSpan), () => {
            plugin._tasksCount++;
            xhrMem.sendStartTime = hrTime();
            currentSpan.addEvent(EventNames.METHOD_SEND);
            this.addEventListener("abort", onAbort);
            this.addEventListener("error", onError);
            this.addEventListener("load", onLoad);
            this.addEventListener("timeout", onTimeout);
            xhrMem.callbackToRemoveEvents = () => {
              unregister(this);
              if (xhrMem.createdResources) {
                xhrMem.createdResources.observer.disconnect();
              }
            };
            plugin._addHeaders(this, spanUrl);
            plugin._addResourceObserver(this, spanUrl);
          });
        }
        return original.apply(this, args);
      }, "patchSend");
    };
  }
  /**
   * implements enable function
   */
  enable() {
    if (this._isEnabled) {
      return;
    }
    if (this._isXhrPatched) {
      this._diag.debug("reactivating existing patch on", this.moduleName, this.version);
      this._isEnabled = true;
      return;
    }
    try {
      this._diag.debug("applying patch to", this.moduleName, this.version);
      this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen());
      this._wrap(XMLHttpRequest.prototype, "send", this._patchSend());
      this._isXhrPatched = true;
      this._isEnabled = true;
    } catch (err) {
      this._unwrap(XMLHttpRequest.prototype, "open");
      this._unwrap(XMLHttpRequest.prototype, "send");
      this._diag.warn("Failed to patch globalThis.XMLHttpRequest; instrumentation will not be enabled. Another script may have locked globalThis.XMLHttpRequest via Object.defineProperty.", err);
    }
  }
  /**
   * implements disable function
   */
  disable() {
    if (!this._isEnabled) {
      return;
    }
    this._isEnabled = false;
    this._tasksCount = 0;
    this._xhrMem = /* @__PURE__ */ new WeakMap();
    this._usedResources = /* @__PURE__ */ new WeakSet();
  }
};
__name(_XMLHttpRequestInstrumentation, "XMLHttpRequestInstrumentation");
let XMLHttpRequestInstrumentation = _XMLHttpRequestInstrumentation;
function registerAutoInstrumentations(opts) {
  const { tracerProvider, propagateTraceHeaderCorsUrls } = opts;
  const instrumentations = [
    new FetchInstrumentation({ propagateTraceHeaderCorsUrls }),
    // Covers axios calls without touching axiosInstance.ts.
    new XMLHttpRequestInstrumentation({ propagateTraceHeaderCorsUrls })
  ];
  registerInstrumentations({ tracerProvider, instrumentations });
  return instrumentations;
}
__name(registerAutoInstrumentations, "registerAutoInstrumentations");
function buildPropagateUrls(apiUrl) {
  if (!apiUrl) return [];
  let origin;
  try {
    origin = new URL(apiUrl).origin;
  } catch {
    return [];
  }
  const escaped = origin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return [new RegExp(`^${escaped}(?:[/?#]|$)`)];
}
__name(buildPropagateUrls, "buildPropagateUrls");
const TRACER_NAME = "expenses-mfe.errors";
const UNCAUGHT_SPAN_NAME = "uncaught_error";
const REJECTION_SPAN_NAME = "unhandled_promise_rejection";
function registerGlobalErrorHandlers(opts) {
  const tracer = opts.tracerProvider.getTracer(TRACER_NAME);
  const errorListener = /* @__PURE__ */ __name((event) => {
    const error = event.error instanceof Error ? event.error : null;
    const spanName = (error == null ? void 0 : error.name) || UNCAUGHT_SPAN_NAME;
    const span = tracer.startSpan(spanName);
    span.setStatus({ code: SpanStatusCode.ERROR, message: event.message });
    if (error) {
      span.recordException(error);
      span.setAttribute("error.type", error.name || "unknown");
    } else {
      span.setAttribute("error.type", "unknown");
    }
    span.setAttribute("error.source", "window.onerror");
    if (event.filename) span.setAttribute("error.filename", event.filename);
    if (event.lineno) span.setAttribute("error.lineno", event.lineno);
    if (event.colno) span.setAttribute("error.colno", event.colno);
    span.end();
  }, "errorListener");
  const rejectionListener = /* @__PURE__ */ __name((event) => {
    const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason ?? "unhandled rejection"));
    const span = tracer.startSpan(error.name || REJECTION_SPAN_NAME);
    span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
    span.recordException(error);
    span.setAttribute("error.type", error.name || "unknown");
    span.setAttribute("error.source", "unhandledrejection");
    span.end();
  }, "rejectionListener");
  window.addEventListener("error", errorListener);
  window.addEventListener("unhandledrejection", rejectionListener);
  return { error: errorListener, rejection: rejectionListener };
}
__name(registerGlobalErrorHandlers, "registerGlobalErrorHandlers");
function unregisterGlobalErrorHandlers(refs) {
  window.removeEventListener("error", refs.error);
  window.removeEventListener("unhandledrejection", refs.rejection);
}
__name(unregisterGlobalErrorHandlers, "unregisterGlobalErrorHandlers");
const SERVICE_NAME = "expenses-mfe";
const ATTR_SERVICE_ENVIRONMENT = "service.environment";
const ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
const ATTR_HOST_NAME = "host.name";
const ENVIRONMENT_MAP = {
  development: "dev",
  localdev: "local",
  sit: "sit",
  stage: "stage",
  production: "prod"
};
const UNKNOWN_VALUE = "unknown";
function mapEnvironment(viteAppEnv) {
  return ENVIRONMENT_MAP[viteAppEnv];
}
__name(mapEnvironment, "mapEnvironment");
const SERVICE_INSTANCE_ID = generateInstanceId();
function generateInstanceId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
__name(generateInstanceId, "generateInstanceId");
function getHostname() {
  if (typeof window !== "undefined" && window.location && window.location.hostname) {
    return window.location.hostname;
  }
  return UNKNOWN_VALUE;
}
__name(getHostname, "getHostname");
function buildResource() {
  return resourceFromAttributes({
    [ATTR_SERVICE_NAME]: SERVICE_NAME,
    [ATTR_SERVICE_VERSION]: "0.1.0-dev.31",
    [ATTR_SERVICE_ENVIRONMENT]: mapEnvironment("development"),
    [ATTR_SERVICE_INSTANCE_ID]: SERVICE_INSTANCE_ID,
    [ATTR_HOST_NAME]: getHostname()
  });
}
__name(buildResource, "buildResource");
const DEFAULT_URL_TEMPLATES = [];
function templatePath(pathname, templates = DEFAULT_URL_TEMPLATES) {
  const normalized = stripTrailingSlash(pathname);
  for (const t of templates) {
    if (t.pattern.test(normalized)) return t.template;
  }
  return normalized.replace(/\/\d+(?=\/|$)/g, "/{id}");
}
__name(templatePath, "templatePath");
function stripTrailingSlash(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}
__name(stripTrailingSlash, "stripTrailingSlash");
function deriveSpanName(method, url, templates) {
  const methodPart = (method ?? "").trim().toUpperCase();
  const pathname = extractPathname(url);
  const templated = templatePath(pathname, templates);
  return methodPart ? `${methodPart} ${templated}` : templated;
}
__name(deriveSpanName, "deriveSpanName");
function extractPathname(url) {
  const cleaned = url.split(/[?#]/, 1)[0] ?? "";
  if (cleaned.startsWith("/")) return cleaned;
  try {
    return new URL(cleaned).pathname;
  } catch {
    return cleaned || "/";
  }
}
__name(extractPathname, "extractPathname");
const REDACTED_MARKER = "[REDACTED]";
const DEFAULT_ATTRIBUTE_ALLOWLIST = /* @__PURE__ */ new Set([
  // `http.url`, `http.target`, `http.route`, `url.path`, `url.query` are
  // allowed because their values are templated / redacted in place below.
  // `http.host` is intentionally NOT on the default allowlist: after origin
  // is stripped from `http.url`, `http.host` would be the last place a
  // backend IP / hostname appears. Consumers who need it must opt in
  // explicitly AND configure `hostnameReplacements` to avoid leaking infra
  // identifiers.
  "http.method",
  "http.status_code",
  "http.status_text",
  "http.scheme",
  "http.url",
  "http.target",
  "http.route",
  "http.response_content_length",
  "http.request_content_length",
  "url.path",
  "url.query",
  "error.type",
  "error.source",
  "error.filename",
  "error.lineno",
  "error.colno",
  "error.componentStack",
  // Caller controls `exception.message`; throw sites must not embed user
  // input. `exception.stacktrace` in prod is minified bundle paths.
  "exception.type",
  "exception.message",
  "exception.stacktrace",
  "expense.id",
  "expense.draft_id",
  "approval.action"
]);
const DEFAULT_HIGH_RISK_QUERY_KEYS = /* @__PURE__ */ new Set([
  "email",
  "token",
  "password",
  "api_key",
  "apikey",
  "authorization",
  "access_token",
  "refresh_token",
  "ssn",
  "secret",
  "name",
  "first_name",
  "last_name",
  "phone",
  // Free-form user input.
  "search",
  "query"
]);
const DEFAULT_ALLOWED_QUERY_KEYS = /* @__PURE__ */ new Set([
  "page",
  "pageNumber",
  "limit",
  "pageSize",
  "offset",
  "sort",
  "sortBy",
  "order",
  "sortOrder",
  "status",
  "scope",
  "show_inactive",
  "document_type",
  "form_type_ids",
  "expense_type_id",
  "company_id",
  "period_id",
  "statement_id",
  "mileage_rate_id"
]);
const DEFAULT_SANITIZER_CONFIG = {
  attributeAllowlist: DEFAULT_ATTRIBUTE_ALLOWLIST,
  highRiskQueryKeys: DEFAULT_HIGH_RISK_QUERY_KEYS,
  allowedQueryKeys: DEFAULT_ALLOWED_QUERY_KEYS,
  hostnameReplacements: [],
  redactedMarker: REDACTED_MARKER
};
function sanitizeUrl(rawUrl, config) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return rawUrl;
  }
  const path = templatePath(parsed.pathname, config.urlTemplates);
  const query = sanitizeSearchParams(parsed.searchParams, config);
  return query ? `${path}?${query}` : path;
}
__name(sanitizeUrl, "sanitizeUrl");
function sanitizeSearchParams(params, config) {
  const out = [];
  for (const [key, value] of params.entries()) {
    const lower = key.toLowerCase();
    if (config.highRiskQueryKeys.has(lower)) {
      out.push(`${encodeURIComponent(key)}=${encodeURIComponent(config.redactedMarker)}`);
      continue;
    }
    if (config.allowedQueryKeys.has(lower)) {
      out.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      continue;
    }
    out.push(`${encodeURIComponent(key)}=${encodeURIComponent(config.redactedMarker)}`);
  }
  return out.join("&");
}
__name(sanitizeSearchParams, "sanitizeSearchParams");
function applyHostnameReplacements(host, config) {
  for (const { pattern, replacement } of config.hostnameReplacements) {
    if (pattern.test(host)) return replacement;
  }
  return host;
}
__name(applyHostnameReplacements, "applyHostnameReplacements");
function sanitizeQueryString(rawQuery, config) {
  if (!rawQuery) return "";
  return sanitizeSearchParams(new URLSearchParams(rawQuery), config);
}
__name(sanitizeQueryString, "sanitizeQueryString");
function sanitizeUrlQueryAttr(value, config) {
  if (!value) return value;
  const hadPrefix = value.startsWith("?");
  const sanitised = sanitizeQueryString(hadPrefix ? value.slice(1) : value, config);
  if (!sanitised) return "";
  return hadPrefix ? `?${sanitised}` : sanitised;
}
__name(sanitizeUrlQueryAttr, "sanitizeUrlQueryAttr");
function sanitizeTarget(target, config) {
  if (!target) return target;
  const queryIdx = target.indexOf("?");
  const path = queryIdx === -1 ? target : target.slice(0, queryIdx);
  const rawQuery = queryIdx === -1 ? "" : target.slice(queryIdx + 1);
  const templated = templatePath(path, config.urlTemplates);
  const sanitised = sanitizeQueryString(rawQuery, config);
  return sanitised ? `${templated}?${sanitised}` : templated;
}
__name(sanitizeTarget, "sanitizeTarget");
function sanitizeAttributes(attrs, config) {
  const out = {};
  for (const [key, value] of Object.entries(attrs)) {
    if (!config.attributeAllowlist.has(key)) continue;
    if (value === void 0 || value === null) continue;
    if (key === "http.url" && typeof value === "string") {
      out[key] = sanitizeUrl(value, config);
      continue;
    }
    if (key === "http.host" && typeof value === "string") {
      out[key] = applyHostnameReplacements(value, config);
      continue;
    }
    if (key === "http.target" && typeof value === "string") {
      out[key] = sanitizeTarget(value, config);
      continue;
    }
    if ((key === "http.route" || key === "url.path") && typeof value === "string") {
      out[key] = templatePath(value, config.urlTemplates);
      continue;
    }
    if (key === "url.query" && typeof value === "string") {
      out[key] = sanitizeUrlQueryAttr(value, config);
      continue;
    }
    out[key] = value;
  }
  return out;
}
__name(sanitizeAttributes, "sanitizeAttributes");
function sanitizeEvents(events, config) {
  return events.map((event) => ({
    ...event,
    attributes: event.attributes ? sanitizeAttributes(event.attributes, config) : event.attributes
  }));
}
__name(sanitizeEvents, "sanitizeEvents");
const BARE_HTTP_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "HEAD",
  "OPTIONS",
  "CONNECT",
  "TRACE"
]);
function normalizeSpanName(name, sanitisedAttrs, urlTemplates) {
  if (!BARE_HTTP_METHODS.has(name.toUpperCase())) return name;
  const method = typeof sanitisedAttrs["http.method"] === "string" ? sanitisedAttrs["http.method"] : name;
  const url = typeof sanitisedAttrs["http.url"] === "string" ? sanitisedAttrs["http.url"] : "";
  if (!url) return name;
  return deriveSpanName(method, url, urlTemplates);
}
__name(normalizeSpanName, "normalizeSpanName");
function sanitizeSpan(span, config) {
  const sanitisedAttrs = sanitizeAttributes(span.attributes, config);
  const sanitisedEvents = sanitizeEvents(span.events, config);
  const sanitisedName = normalizeSpanName(span.name, sanitisedAttrs, config.urlTemplates);
  return Object.create(span, {
    name: { value: sanitisedName, enumerable: true, writable: false, configurable: false },
    attributes: {
      value: sanitisedAttrs,
      enumerable: true,
      writable: false,
      configurable: false
    },
    events: {
      value: sanitisedEvents,
      enumerable: true,
      writable: false,
      configurable: false
    }
  });
}
__name(sanitizeSpan, "sanitizeSpan");
const _SanitizingSpanExporter = class _SanitizingSpanExporter {
  constructor(inner, config = DEFAULT_SANITIZER_CONFIG) {
    this.inner = inner;
    this.config = config;
  }
  inner;
  config;
  export(spans, resultCallback) {
    var _a, _b;
    const out = [];
    for (const span of spans) {
      if ((_b = (_a = this.config).dropPredicate) == null ? void 0 : _b.call(_a, span)) continue;
      out.push(sanitizeSpan(span, this.config));
    }
    this.inner.export(out, resultCallback);
  }
  shutdown() {
    return this.inner.shutdown();
  }
  forceFlush() {
    var _a, _b;
    return ((_b = (_a = this.inner).forceFlush) == null ? void 0 : _b.call(_a)) ?? Promise.resolve();
  }
};
__name(_SanitizingSpanExporter, "SanitizingSpanExporter");
let SanitizingSpanExporter = _SanitizingSpanExporter;
function buildSpanProcessor(exporter, isDev) {
  return isDev ? new SimpleSpanProcessor(exporter) : new BatchSpanProcessor(exporter);
}
__name(buildSpanProcessor, "buildSpanProcessor");
function buildExporterUrl(collectorUrl) {
  return `${collectorUrl.replace(/\/$/, "")}/v1/traces`;
}
__name(buildExporterUrl, "buildExporterUrl");
function buildExporter(collectorUrl, sanitizerConfig) {
  const otlp = new OTLPTraceExporter({ url: buildExporterUrl(collectorUrl) });
  return new SanitizingSpanExporter(otlp, sanitizerConfig);
}
__name(buildExporter, "buildExporter");
function makeTeardown(provider, instrumentations, errorHandlers) {
  return async () => {
    for (const instrumentation of instrumentations) {
      instrumentation.disable();
    }
    unregisterGlobalErrorHandlers(errorHandlers);
    try {
      await provider.forceFlush();
    } catch {
    }
    await provider.shutdown();
  };
}
__name(makeTeardown, "makeTeardown");
function initializeObservability(config) {
  const isDev = config.isDev ?? false;
  const sanitizerConfig = config.sanitizerConfig ?? (config.urlTemplates ? { ...DEFAULT_SANITIZER_CONFIG, urlTemplates: config.urlTemplates } : DEFAULT_SANITIZER_CONFIG);
  const exporter = buildExporter(config.collectorUrl, sanitizerConfig);
  const provider = new WebTracerProvider({
    resource: buildResource(),
    spanProcessors: [buildSpanProcessor(exporter, isDev)]
  });
  provider.register();
  let instrumentations;
  try {
    instrumentations = registerAutoInstrumentations({
      tracerProvider: provider,
      propagateTraceHeaderCorsUrls: buildPropagateUrls(config.apiUrl)
    });
    const errorHandlers = registerGlobalErrorHandlers({ tracerProvider: provider });
    return { teardown: makeTeardown(provider, instrumentations, errorHandlers) };
  } catch (error) {
    if (instrumentations) {
      for (const i of instrumentations) i.disable();
    }
    provider.shutdown().catch(() => {
    });
    throw error;
  }
}
__name(initializeObservability, "initializeObservability");
export {
  buildExporter,
  buildExporterUrl,
  buildSpanProcessor,
  initializeObservability
};
