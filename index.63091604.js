// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5nrFl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "565c47cb63091604";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gMIi3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swup = require("swup");
var _swupDefault = parcelHelpers.interopDefault(_swup);
var _intro = require("./intro");
var _introDefault = parcelHelpers.interopDefault(_intro);
var _aboutMe = require("./about-me");
var _aboutMeDefault = parcelHelpers.interopDefault(_aboutMe);
var _projects = require("./projects");
var _projectsDefault = parcelHelpers.interopDefault(_projects);
// import SwupPreloadPlugin from '@swup/preload-plugin';
const swup = new (0, _swupDefault.default)({
});
let navigation;
let randomImageFocus;
function init() {
    if (document.querySelector("#nav-wrapper")) {
        console.log("On index page");
        navigation = new (0, _introDefault.default)();
    }
    if (document.querySelector("#about-me-text")) {
        console.log("On about me page");
        randomImageFocus = new (0, _aboutMeDefault.default)();
    }
    if (document.querySelector("#contact-page-area")) // ...
    console.log("On contact page");
    if (document.querySelector("#project-container")) {
        console.log("On projects page");
        new (0, _projectsDefault.default)();
    }
}
// run once when page loads
if (document.readyState === "complete") init();
else document.addEventListener("DOMContentLoaded", ()=>init());
// run after every additional navigation by swup
swup.on("contentReplaced", init);
//Destroy old scripts runtime.
function unload() {
    if (document.querySelector("#nav-wrapper")) navigation.destroy();
    document.querySelector("#about-me-text");
}
swup.on("willReplaceContent", unload);

},{"swup":"5QjrV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./intro":"4V73i","./about-me":"hYjW6","./projects":"82j8t"}],"5QjrV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>p);
parcelHelpers.export(exports, "classify", ()=>e);
parcelHelpers.export(exports, "cleanupAnimationClasses", ()=>f);
parcelHelpers.export(exports, "createHistoryRecord", ()=>i);
parcelHelpers.export(exports, "default", ()=>O);
parcelHelpers.export(exports, "delegateEvent", ()=>o);
parcelHelpers.export(exports, "escapeCssIdentifier", ()=>c);
parcelHelpers.export(exports, "fetch", ()=>d);
parcelHelpers.export(exports, "getCurrentUrl", ()=>n);
parcelHelpers.export(exports, "getDataFromHtml", ()=>h);
parcelHelpers.export(exports, "markSwupElements", ()=>g);
parcelHelpers.export(exports, "nextTick", ()=>l);
parcelHelpers.export(exports, "query", ()=>r);
parcelHelpers.export(exports, "queryAll", ()=>a);
parcelHelpers.export(exports, "toMs", ()=>u);
parcelHelpers.export(exports, "updateHistoryRecord", ()=>s);
var _delegateIt = require("delegate-it");
var _delegateItDefault = parcelHelpers.interopDefault(_delegateIt);
const e = (t, e)=>String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e || "", n = function(t) {
    let { hash: e  } = void 0 === t ? {} : t;
    return location.pathname + location.search + (e ? location.hash : "");
}, i = function(t, e) {
    void 0 === e && (e = {});
    const i = {
        url: t = t || n({
            hash: !0
        }),
        random: Math.random(),
        source: "swup",
        ...e
    };
    history.pushState(i, "", t);
}, s = function(t, e) {
    void 0 === t && (t = null), void 0 === e && (e = {}), t = t || n({
        hash: !0
    });
    const i = {
        ...history.state,
        url: t,
        random: Math.random(),
        source: "swup",
        ...e
    };
    history.replaceState(i, "", t);
}, o = function(e, n, i, s) {
    let { base: o = document , ...r } = void 0 === s ? {} : s;
    const a = (0, _delegateItDefault.default)(o, e, n, i, r);
    return {
        destroy: ()=>a.destroy()
    };
}, r = function(t, e) {
    return void 0 === e && (e = document), e.querySelector(t);
}, a = function(t, e) {
    return void 0 === e && (e = document), Array.from(e.querySelectorAll(t));
}, l = (t)=>{
    requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            t();
        });
    });
}, c = (t)=>window.CSS && window.CSS.escape ? CSS.escape(t) : t, u = (t)=>1e3 * Number(t.slice(0, -1).replace(",", ".")), h = (t, e)=>{
    let n = document.createElement("html");
    n.innerHTML = t;
    let i = [];
    e.forEach((t)=>{
        if (null == r(t, n)) return console.warn(`[swup] Container ${t} not found on page.`), null;
        a(t).length !== a(t, n).length && console.warn("[swup] Mismatched number of containers found on new page."), a(t).forEach((e, s)=>{
            a(t, n)[s].setAttribute("data-swup", String(i.length)), i.push(a(t, n)[s].outerHTML);
        });
    });
    const s = r("title", n)?.innerText || "", o = r("body", n)?.className;
    return n.innerHTML = "", n = null, {
        title: s,
        pageClass: o,
        blocks: i,
        originalContent: t
    };
}, d = (t, e)=>{
    const n = {
        url: window.location.pathname + window.location.search,
        method: "GET",
        data: null,
        headers: {}
    }, { url: i , method: s , headers: o , data: r  } = {
        ...n,
        ...t
    }, a = new XMLHttpRequest;
    return a.onreadystatechange = function() {
        4 === a.readyState && e(a);
    }, a.open(s, i, !0), Object.entries(o).forEach((t)=>{
        let [e, n] = t;
        a.setRequestHeader(e, n);
    }), a.send(r), a;
};
class p extends URL {
    constructor(t, e){
        void 0 === e && (e = document.baseURI), super(t.toString(), e);
    }
    get url() {
        return this.pathname + this.search;
    }
    static fromElement(t) {
        const e = t.getAttribute("href") || t.getAttribute("xlink:href");
        return new p(e);
    }
    static fromUrl(t) {
        return new p(t);
    }
}
const g = (t, e)=>{
    let n = 0;
    e.forEach((e)=>{
        null == r(e, t) ? console.warn(`[swup] Container ${e} not found on page.`) : a(e).forEach((i, s)=>{
            a(e, t)[s].setAttribute("data-swup", String(n)), n++;
        });
    });
}, m = (t)=>/^to-/.test(t) || [
        "is-changing",
        "is-rendering",
        "is-popstate"
    ].includes(t), f = ()=>{
    const t = document.documentElement.className.split(" ").filter(m);
    document.documentElement.classList.remove(...t);
};
class v {
    constructor(t){
        this.pages = {}, this.last = null, this.swup = void 0, this.swup = t;
    }
    getCacheUrl(t) {
        return this.swup.resolveUrl(p.fromUrl(t).url);
    }
    cacheUrl(t) {
        t.url = this.getCacheUrl(t.url), t.url in this.pages == 0 && (this.pages[t.url] = t), t.responseURL = this.getCacheUrl(t.responseURL), this.last = this.pages[t.url], this.swup.log(`Cache (${Object.keys(this.pages).length})`, this.pages);
    }
    getPage(t) {
        return t = this.getCacheUrl(t), this.pages[t];
    }
    getCurrentPage() {
        return this.getPage(n());
    }
    exists(t) {
        return (t = this.getCacheUrl(t)) in this.pages;
    }
    empty() {
        this.pages = {}, this.last = null, this.swup.log("Cache cleared");
    }
    remove(t) {
        delete this.pages[this.getCacheUrl(t)];
    }
}
const w = function(t) {
    let { event: e , skipTransition: n  } = void 0 === t ? {} : t;
    if (n) return this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses(), [
        Promise.resolve()
    ];
    l(()=>{
        this.triggerEvent("animationInStart"), document.documentElement.classList.remove("is-animating");
    });
    const i = this.getAnimationPromises("in");
    return Promise.all(i).then(()=>{
        this.triggerEvent("animationInDone"), this.triggerEvent("transitionEnd", e), this.cleanupAnimationClasses();
    }), i;
}, E = (t)=>t ? ("#" === t.charAt(0) && (t = t.substring(1)), t = decodeURIComponent(t), t = c(t), r(`#${t}`) || r(`a[name='${t}']`)) : null;
let P = "transition", S = "transitionend", b = "animation", U = "animationend";
function k(t) {
    const e = this.options.animationSelector;
    if (!1 === e) return [
        Promise.resolve()
    ];
    const n = a(e, document.body);
    return n.length ? n.map((t)=>(function(t, e, n) {
            void 0 === n && (n = null);
            const { type: i , timeout: s , propCount: o  } = function(t, e) {
                void 0 === e && (e = null);
                const n = window.getComputedStyle(t), i = `${P}Duration`, s = `${b}Delay`, o = `${b}Duration`, r = n[`${P}Delay`].split(", "), a = (n[i] || "").split(", "), l = y(r, a), c = (n[s] || "").split(", "), u = (n[o] || "").split(", "), h = y(c, u);
                let d = "", p = 0, g = 0;
                return "transition" === e ? l > 0 && (d = "transition", p = l, g = a.length) : "animation" === e ? h > 0 && (d = "animation", p = h, g = u.length) : (p = Math.max(l, h), d = p > 0 ? l > h ? "transition" : "animation" : null, g = d ? "transition" === d ? a.length : u.length : 0), {
                    type: d,
                    timeout: p,
                    propCount: g
                };
            }(t, n);
            return i && s ? new Promise((e)=>{
                const n = "transition" === i ? S : U, r = performance.now();
                let a = 0;
                const l = ()=>{
                    t.removeEventListener(n, c), e();
                }, c = (e)=>{
                    if (e.target === t) {
                        if (!((t)=>!!t.elapsedTime)(e)) throw new Error("Not a transition or animation event.");
                        (performance.now() - r) / 1e3 < e.elapsedTime || ++a >= o && l();
                    }
                };
                setTimeout(()=>{
                    a < o && l();
                }, s + 1), t.addEventListener(n, c);
            }) : (console.warn(`[swup] No CSS transition duration defined for element of selector ${e}`), Promise.resolve());
        })(t, e)) : (console.warn(`[swup] No animated elements found by selector ${e}`), [
        Promise.resolve()
    ]);
}
function y(t, e) {
    for(; t.length < e.length;)t = t.concat(t);
    return Math.max(...e.map((e, n)=>u(e) + u(t[n])));
}
void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (P = "WebkitTransition", S = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (b = "WebkitAnimation", U = "webkitAnimationEnd");
const L = function(t) {
    const e = h(t.responseText, this.options.containers);
    return e ? {
        ...e,
        responseURL: t.responseURL || window.location.href
    } : (console.warn("[swup] Received page is invalid."), null);
};
function C(t) {
    const e = this.options.requestHeaders, { url: n  } = t;
    return this.cache.exists(n) ? (this.triggerEvent("pageRetrievedFromCache"), Promise.resolve(this.cache.getPage(n))) : new Promise((i, s)=>{
        d({
            ...t,
            headers: e
        }, (t)=>{
            if (500 === t.status) return this.triggerEvent("serverError"), void s(n);
            const e = this.getPageData(t);
            if (!e || !e.blocks.length) return void s(n);
            const o = {
                ...e,
                url: n
            };
            this.cache.cacheUrl(o), this.triggerEvent("pageLoaded"), i(o);
        });
    });
}
const T = function(t) {
    let { event: e , skipTransition: n  } = void 0 === t ? {} : t;
    const i = e instanceof PopStateEvent;
    if (n) return this.triggerEvent("animationSkipped"), [
        Promise.resolve()
    ];
    this.triggerEvent("animationOutStart"), document.documentElement.classList.add("is-changing", "is-leaving", "is-animating"), i && document.documentElement.classList.add("is-popstate");
    const s = this.getAnimationPromises("out");
    return Promise.all(s).then(()=>{
        this.triggerEvent("animationOutDone");
    }), s;
};
function H(t) {
    const { url: e  } = t;
    this.shouldIgnoreVisit(e) ? window.location.href = e : this.performPageLoad(t);
}
function R(t) {
    const { url: s , event: o , customTransition: r  } = t ?? {}, a = o instanceof PopStateEvent, l = this.shouldSkipTransition({
        url: s,
        event: o
    });
    this.triggerEvent("transitionStart", o), this.updateTransition(n(), s, r), null != r && document.documentElement.classList.add(`to-${e(r)}`);
    const c = this.leavePage({
        event: o,
        skipTransition: l
    });
    a || i(s + (this.scrollToElement || "")), this.currentPageUrl = n();
    const u = this.fetchPage(t);
    Promise.all([
        u,
        ...c
    ]).then((t)=>{
        let [e] = t;
        this.renderPage(e, {
            event: o,
            skipTransition: l
        });
    }).catch((t)=>{
        void 0 !== t && (this.options.skipPopStateHandling = ()=>(window.location = t, !0), history.go(-1));
    });
}
const A = function(t) {
    let { blocks: e , title: n  } = t;
    return e.forEach((t, e)=>{
        document.body.querySelector(`[data-swup="${e}"]`).outerHTML = t;
    }), document.title = n, Promise.resolve();
};
function $(t, e) {
    const n = this._handlers[t];
    n ? n.push(e) : console.warn(`Unsupported event ${t}.`);
}
function _(t, e) {
    if (t && e) {
        const n = this._handlers[t];
        n.includes(e) ? this._handlers[t] = n.filter((t)=>t !== e) : console.warn(`Handler for event '${t}' not found.`);
    } else t ? this._handlers[t] = [] : Object.keys(this._handlers).forEach((t)=>{
        this._handlers[t] = [];
    });
}
function x(t, e) {
    this._handlers[t].forEach((t)=>{
        try {
            t(e);
        } catch (t) {
            console.error(t);
        }
    });
    const n = new CustomEvent(`swup:${t}`, {
        detail: t
    });
    document.dispatchEvent(n);
}
const q = function(t) {
    if (t?.isSwupPlugin) {
        if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
    } else console.error("Not a swup plugin instance", t);
};
function D(t) {
    const e = this.findPlugin(t);
    if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter((t)=>t !== e), this.plugins;
    console.error("No such plugin", e);
}
function I(t) {
    return this.plugins.find((e)=>e === t || e.name === t);
}
const M = function(t, e) {
    let { event: i , skipTransition: o  } = void 0 === e ? {} : e;
    if (document.documentElement.classList.remove("is-leaving"), !this.isSameResolvedUrl(n(), t.url)) return;
    const { url: r  } = p.fromUrl(t.responseURL);
    this.isSameResolvedUrl(n(), r) || (this.cache.cacheUrl({
        ...t,
        url: r
    }), this.currentPageUrl = n(), s(r)), o || document.documentElement.classList.add("is-rendering"), this.triggerEvent("willReplaceContent", i), this.replaceContent(t).then(()=>{
        this.triggerEvent("contentReplaced", i), this.triggerEvent("pageView", i), this.options.cache || this.cache.empty(), this.enterPage({
            event: i,
            skipTransition: o
        }), this.scrollToElement = null;
    });
};
function N(t, e, n) {
    this.transition = {
        from: t,
        to: e,
        custom: n
    };
}
function W(t) {
    let { event: e  } = t;
    return !(!(e instanceof PopStateEvent) || this.options.animateHistoryBrowsing);
}
class O {
    constructor(t){
        void 0 === t && (t = {}), this.version = "3.0.4", this._handlers = {
            animationInDone: [],
            animationInStart: [],
            animationOutDone: [],
            animationOutStart: [],
            animationSkipped: [],
            clickLink: [],
            contentReplaced: [],
            disabled: [],
            enabled: [],
            openPageInNewTab: [],
            pageLoaded: [],
            pageRetrievedFromCache: [],
            pageView: [],
            popState: [],
            samePage: [],
            samePageWithHash: [],
            serverError: [],
            transitionStart: [],
            transitionEnd: [],
            willReplaceContent: []
        }, this.scrollToElement = null, this.options = void 0, this.plugins = [], this.transition = {}, this.cache = void 0, this.currentPageUrl = n(), this.delegatedListeners = {}, this.boundPopStateHandler = void 0, this.loadPage = H, this.performPageLoad = R, this.leavePage = T, this.renderPage = M, this.replaceContent = A, this.enterPage = w, this.triggerEvent = x, this.delegateEvent = o, this.on = $, this.off = _, this.updateTransition = N, this.shouldSkipTransition = W, this.getAnimationPromises = k, this.getPageData = L, this.fetchPage = C, this.getAnchorElement = E, this.log = ()=>{}, this.use = q, this.unuse = D, this.findPlugin = I, this.getCurrentUrl = n, this.cleanupAnimationClasses = f, this.defaults = {
            animateHistoryBrowsing: !1,
            animationSelector: '[class*="transition-"]',
            cache: !0,
            containers: [
                "#swup"
            ],
            ignoreVisit: function(t, e) {
                let { el: n  } = void 0 === e ? {} : e;
                return !!n?.closest("[data-no-swup]");
            },
            linkSelector: "a[href]",
            plugins: [],
            resolveUrl: (t)=>t,
            requestHeaders: {
                "X-Requested-With": "swup",
                Accept: "text/html, application/xhtml+xml"
            },
            skipPopStateHandling: (t)=>"swup" !== t.state?.source
        }, this.options = {
            ...this.defaults,
            ...t
        }, this.boundPopStateHandler = this.popStateHandler.bind(this), this.cache = new v(this), this.enable();
    }
    enable() {
        "undefined" != typeof Promise ? (this.delegatedListeners.click = o(this.options.linkSelector, "click", this.linkClickHandler.bind(this)), window.addEventListener("popstate", this.boundPopStateHandler), g(document.documentElement, this.options.containers), this.options.plugins.forEach((t)=>this.use(t)), s(), this.triggerEvent("enabled"), document.documentElement.classList.add("swup-enabled"), this.triggerEvent("pageView")) : console.warn("Promise is not supported");
    }
    destroy() {
        this.delegatedListeners.click.destroy(), window.removeEventListener("popstate", this.boundPopStateHandler), this.cache.empty(), this.options.plugins.forEach((t)=>{
            this.unuse(t);
        }), a("[data-swup]").forEach((t)=>{
            t.removeAttribute("data-swup");
        }), this.off(), this.triggerEvent("disabled"), document.documentElement.classList.remove("swup-enabled");
    }
    shouldIgnoreVisit(t, e) {
        let { el: n  } = void 0 === e ? {} : e;
        const { origin: i , url: s , hash: o  } = p.fromUrl(t);
        return i !== window.location.origin || !(!n || !this.triggerWillOpenNewWindow(n)) || !!this.options.ignoreVisit(s + o, {
            el: n
        });
    }
    linkClickHandler(t) {
        const e = t.delegateTarget, { href: i , url: s , hash: o  } = p.fromElement(e);
        if (this.shouldIgnoreVisit(i, {
            el: e
        })) return;
        if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return void this.triggerEvent("openPageInNewTab", t);
        if (0 !== t.button) return;
        if (this.triggerEvent("clickLink", t), t.preventDefault(), !s || s === n()) return void this.handleLinkToSamePage(s, o, t);
        if (this.isSameResolvedUrl(s, n())) return;
        this.scrollToElement = o || null;
        const r = e.getAttribute("data-swup-transition") || void 0;
        this.performPageLoad({
            url: s,
            customTransition: r
        });
    }
    handleLinkToSamePage(t, e, n) {
        if (e) {
            if (this.triggerEvent("samePageWithHash", n), !E(e)) return console.warn(`Element for offset not found (#${e})`);
            s(t + e);
        } else this.triggerEvent("samePage", n);
    }
    triggerWillOpenNewWindow(t) {
        return !!t.matches('[download], [target="_blank"]');
    }
    popStateHandler(t) {
        if (this.options.skipPopStateHandling(t)) return;
        if (this.isSameResolvedUrl(n(), this.currentPageUrl)) return;
        const e = t.state?.url ?? location.href;
        if (this.shouldIgnoreVisit(e)) return;
        const { url: i , hash: s  } = p.fromUrl(e);
        s ? this.scrollToElement = s : t.preventDefault(), this.triggerEvent("popState", t), this.options.animateHistoryBrowsing || (document.documentElement.classList.remove("is-animating"), f()), this.performPageLoad({
            url: i,
            event: t
        });
    }
    resolveUrl(t) {
        if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
        const e = this.options.resolveUrl(t);
        return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
    }
    isSameResolvedUrl(t, e) {
        return this.resolveUrl(t) === this.resolveUrl(e);
    }
}

},{"delegate-it":"8XKdG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XKdG":[function(require,module,exports) {
/** Keeps track of raw listeners added to the base elements to avoid duplication */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    var _a, _b;
    if (!wanted && !ledger.has(baseElement)) return false;
    const elementMap = (_a = ledger.get(baseElement)) !== null && _a !== void 0 ? _a : new WeakMap();
    ledger.set(baseElement, elementMap);
    if (!wanted && !ledger.has(baseElement)) return false;
    const setups = (_b = elementMap.get(callback)) !== null && _b !== void 0 ? _b : new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) setups.add(setup);
    else setups.delete(setup);
    return existed && wanted;
}
function isEventTarget(elements) {
    return typeof elements.addEventListener === "function";
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) target = target.parentElement;
    if (target instanceof Element && event.currentTarget instanceof Element) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) return closest;
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(base, selector, type, callback, options) {
    // Handle Selector-based usage
    if (typeof base === "string") base = document.querySelectorAll(base);
    // Handle Array-like based usage
    if (!isEventTarget(base)) {
        const subscriptions = Array.prototype.map.call(base, (element)=>delegate(element, selector, type, callback, options));
        return {
            destroy () {
                for (const subscription of subscriptions)subscription.destroy();
            }
        };
    }
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === "object" ? options.capture : options);
    const listenerFn = (event)=>{
        const delegateTarget = safeClosest(event, selector);
        if (delegateTarget) {
            event.delegateTarget = delegateTarget;
            callback.call(baseElement, event);
        }
    };
    // Drop unsupported `once` option https://github.com/fregante/delegate-it/pull/28#discussion_r863467939
    if (typeof options === "object") delete options.once;
    const setup = JSON.stringify({
        selector,
        type,
        capture
    });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    const delegateSubscription = {
        destroy () {
            baseElement.removeEventListener(type, listenerFn, options);
            editLedger(false, baseElement, callback, setup);
        }
    };
    if (!isAlreadyListening) baseElement.addEventListener(type, listenerFn, options);
    return delegateSubscription;
}
exports.default = delegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4V73i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Navigation {
    constructor(){
        this.leftNav = document.getElementById("left-nav");
        this.centerNav = document.getElementById("center-nav");
        this.rightNav = document.getElementById("right-nav");
        this.launching = true;
        this.initialize();
    }
    initialize() {
        const activateAnimation = sessionStorage.getItem("activateAnimation");
        console.log(window.location.pathname);
        if (activateAnimation === null) {
            // If it's the first visit, run the animation and set the session storage variable
            sessionStorage.setItem("activateAnimation", "true");
            window.addEventListener("load", ()=>{
                console.log("first time on page, doing whole animation");
                this.leftNav.dataset.status = "waiting";
                this.centerNav.dataset.status = "waiting";
                this.rightNav.dataset.status = "waiting";
            });
            this.rightNav.onanimationend = ()=>{
                if (this.launching) {
                    this.leftNav.dataset.status = "activating";
                    this.centerNav.dataset.status = "activating";
                    this.rightNav.dataset.status = "activating";
                    console.log("status changed to activating");
                    this.launching = false;
                }
            };
            document.getElementById("right-nav-right-box").onanimationend = ()=>{
                console.log("Intro animations completed");
                this.leftNav.dataset.status = "activated";
                this.centerNav.dataset.status = "activated";
                this.rightNav.dataset.status = "activated";
            };
            // add an event listener to the beforeunload event to remove the sessionStorage item on page unload
            window.addEventListener("beforeunload", ()=>{
                if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("/index.html")) sessionStorage.removeItem("activateAnimation");
            });
        } else {
            // If it's not the first visit, skip the animation and set the dataset status to "activated"
            this.leftNav.dataset.status = "activated";
            this.centerNav.dataset.status = "activated";
            this.rightNav.dataset.status = "activated";
        }
    }
    destroy() {
        window.removeEventListener("load", ()=>{
            console.log("first time on page, doing whole animation");
            this.leftNav.dataset.status = "waiting";
            this.centerNav.dataset.status = "waiting";
            this.rightNav.dataset.status = "waiting";
        });
        this.rightNav.onanimationend = null;
        document.getElementById("right-nav-right-box").onanimationend = null;
        this.leftNav.dataset.status = "";
        this.centerNav.dataset.status = "";
        this.rightNav.dataset.status = "";
    }
}
exports.default = Navigation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYjW6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class RandomImageFocus {
    constructor(){
        this.row = document.querySelector(".row");
        this.images = document.querySelectorAll(".photo");
        this.focusedIndex = null;
        this.intervalId = null;
        this.isPaused = false;
        this.focusRandomImage = this.focusRandomImage.bind(this);
        this.toggleAnimation = this.toggleAnimation.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.initialize();
    }
    focusRandomImage() {
        if (this.focusedIndex !== null) this.images[this.focusedIndex].classList.remove("focused");
        let index;
        do index = Math.floor(Math.random() * this.images.length);
        while (index === this.focusedIndex);
        this.images[index].classList.add("focused");
        this.focusedIndex = index;
    }
    toggleAnimation() {
        if (this.isPaused) {
            this.intervalId = setInterval(this.focusRandomImage, 3000);
            this.toggleButton.textContent = "Pause Animation";
            this.isPaused = false;
        } else {
            clearInterval(this.intervalId);
            if (this.focusedIndex !== null) this.images[this.focusedIndex].classList.remove("focused");
            this.toggleButton.textContent = "Resume Animation";
            this.isPaused = true;
        }
    }
    handleMouseEnter() {
        clearInterval(this.intervalId);
        if (this.focusedIndex !== null) this.images[this.focusedIndex].classList.remove("focused");
    }
    handleMouseLeave() {
        if (!this.isPaused) this.intervalId = setInterval(this.focusRandomImage, 3000);
    }
    initialize() {
        // this.toggleButton = document.querySelector('#toggle-button');
        // this.toggleButton.addEventListener('click', this.toggleAnimation);
        this.row.addEventListener("mouseenter", this.handleMouseEnter);
        this.row.addEventListener("mouseleave", this.handleMouseLeave);
        this.intervalId = setInterval(this.focusRandomImage, 3000);
    }
    destroy() {
        clearInterval(this.intervalId);
        // this.toggleButton.removeEventListener('click', this.toggleAnimation);
        this.row.removeEventListener("mouseenter", this.pauseAnimation);
        this.row.removeEventListener("mouseleave", this.resumeAnimation);
    }
}
exports.default = RandomImageFocus;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82j8t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BorderGenerator {
    constructor(){
        this.projects = document.querySelectorAll(`.project`);
        this.generateTails();
        console.log("BorderGenerator generated");
    }
    generateTails() {
        this.projects.forEach((project)=>{
            [
                `top`,
                `right`,
                `bottom`,
                `left`
            ].forEach((side)=>{
                const tail = document.createElement(`div`);
                tail.classList.add(`tail`, side);
                project.appendChild(tail);
            });
        });
    }
}
exports.default = BorderGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5nrFl","gMIi3"], "gMIi3", "parcelRequire1b85")

//# sourceMappingURL=index.63091604.js.map
