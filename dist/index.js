Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Translator = /** @class */ (function () {
    function Translator(options, cacheProvider) {
        this.from = options.from;
        this.to = options.to;
        this.cacheProvider = cacheProvider;
    }
    Translator.prototype.translate = function (__value) {
        throw new Error('You must extend the base `translate()` method!');
    };
    return Translator;
}());

var IdenticalTranslator = /** @class */ (function (_super) {
    __extends(IdenticalTranslator, _super);
    function IdenticalTranslator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdenticalTranslator.prototype.translate = function (value) {
        return new Promise(function (resolve) {
            resolve(value);
        });
    };
    return IdenticalTranslator;
}(Translator));

var GoogleTranslator = /** @class */ (function (_super) {
    __extends(GoogleTranslator, _super);
    function GoogleTranslator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleTranslator.prototype.translate = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var translation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tryGetGoogleTranslation(value)];
                    case 1:
                        translation = _a.sent();
                        return [2 /*return*/, translation];
                }
            });
        });
    };
    GoogleTranslator.prototype.tryGetGoogleTranslation = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fetchGoogleTranslation(value)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, undefined];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GoogleTranslator.prototype.fetchGoogleTranslation = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://translation.googleapis.com/language/translate/v2?source=".concat(this.from, "&target=").concat(this.to, "&key=").concat('AIzaSyAfoW3-nAGT22_alscL8co5KnuBowWiSps', "&q=").concat(value, "&format=text"))];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data.translations[0].translatedText];
                }
            });
        });
    };
    return GoogleTranslator;
}(Translator));

var CacheTranslator = /** @class */ (function (_super) {
    __extends(CacheTranslator, _super);
    function CacheTranslator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CacheTranslator.prototype.translate = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var translation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cacheProvider.get(this.to, value)];
                    case 1:
                        translation = _a.sent();
                        if (!!translation) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.tryGetGoogleTranslationAndCache(value)];
                    case 2:
                        translation = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, translation];
                }
            });
        });
    };
    CacheTranslator.prototype.tryGetGoogleTranslationAndCache = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var translation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tryGetGoogleTranslation(value)];
                    case 1:
                        translation = _a.sent();
                        this.setCachedTranslationForValue(value, translation);
                        return [2 /*return*/, translation];
                }
            });
        });
    };
    CacheTranslator.prototype.setCachedTranslationForValue = function (value, translation) {
        if (translation) {
            this.cacheProvider.set(this.to, value, translation);
        }
    };
    return CacheTranslator;
}(GoogleTranslator));

var TranslatorFactory = /** @class */ (function () {
    function TranslatorFactory() {
    }
    TranslatorFactory.create = function (options, cacheProvider) {
        if (this.isToLanguageIdenticalWithFrom(options.to, options.from)) {
            return new IdenticalTranslator(options);
        }
        if (this.isCachable(cacheProvider)) {
            return new CacheTranslator(options, cacheProvider);
        }
        return new GoogleTranslator(options);
    };
    TranslatorFactory.isToLanguageIdenticalWithFrom = function (to, from) {
        return to === from;
    };
    TranslatorFactory.isCachable = function (cacheProvider) {
        return !!cacheProvider;
    };
    return TranslatorFactory;
}());

var defaultHandler = function () { };
var TranslateContext = React.createContext(defaultHandler);
var LanguageContext = React.createContext('en');
function KTranslator(_a) {
    var _this = this;
    var to = _a.to, from = _a.from, cacheProvider = _a.cacheProvider, children = _a.children;
    var handleTranslationAsync = React.useCallback(function (value, setTranslation) { return __awaiter(_this, void 0, void 0, function () {
        var options, translator, translation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        to: to,
                        from: from,
                    };
                    translator = TranslatorFactory.create(options, cacheProvider);
                    return [4 /*yield*/, translator.translate(value)];
                case 1:
                    translation = _a.sent();
                    if (translation) {
                        setTranslation(translation);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [to, from, cacheProvider]);
    return (React__namespace.createElement(TranslateContext.Provider, { value: handleTranslationAsync },
        React__namespace.createElement(LanguageContext.Provider, { value: to }, children)));
}

function KTranslate(_a) {
    var value = _a.children;
    var language = React.useContext(LanguageContext);
    var handleTranslate = React.useContext(TranslateContext);
    var _b = React.useState(value), translation = _b[0], setTranslation = _b[1];
    React.useEffect(function () {
        handleTranslate(value, setTranslation);
    }, [value, language]);
    return translation;
}

exports.KTranslate = KTranslate;
exports.KTranslator = KTranslator;
//# sourceMappingURL=index.js.map
