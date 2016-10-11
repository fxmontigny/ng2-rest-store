!function(e){function r(e,r,t){e in l||(l[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,u=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var l=0;l<i.dependencies.length;++l)i.dependencies[l]===o&&i.setters[l](a)}return o.locked=!1,r},r.name);o.setters=u.setters,o.execute=u.execute;for(var s=0,d=r.normalizedDeps.length;d>s;s++){var f,c=r.normalizedDeps[s],v=l[c],m=p[c];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=i(c),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[s]&&o.setters[s](f)}}}function o(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(d)for(var n in r)"default"!==n&&a(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,c(t,"__useDefault",{value:!0}),t}function a(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&c(e,t,n)}catch(o){return e[t]=r[t],!1}}function u(r,t){var n=l[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(l[d]?u(d,t):i(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function i(e){if(m[e])return m[e];if("@node/"==e.substr(0,6))return m[e]=o(v(e.substr(6)));var r=l[e];if(!r)throw"Module "+e+" not present.";return n(l[e]),u(e,[]),l[e]=void 0,r.declarative&&c(r.module.exports,"__esModule",{value:!0}),m[e]=r.declarative?r.module.exports:r.esModule}var l={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},d=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(f){d=!1}var c;!function(){try{Object.defineProperty({},"a",{})&&(c=Object.defineProperty)}catch(e){c=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var p={},v="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,m={"@empty":{}};return function(e,t,n,a){return function(u){u(function(u){for(var l=0;l<t.length;l++)(function(e,r){r&&r.__esModule?m[e]=r:m[e]=o(r)})(t[l],arguments[l]);a({register:r});var s=i(e[0]);if(e.length>1)for(var l=1;l<e.length;l++)i(e[l]);return n?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.register("2", ["3"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1;
    var __extends, Model;
    return {
        setters:[
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("Model", Model = (function (_super) {
                __extends(Model, _super);
                function Model(json) {
                    _super.call(this);
                    this._autoUpdate = true;
                    this._alwaysPushAll = false;
                    this._fields = [];
                    this.init(json);
                    this.initEnv(json);
                }
                Model.prototype.initEnv = function (json) {
                    this._fields = json.fields;
                    if (json.hasOwnProperty('data'))
                        this._data = json.data;
                    if (json.hasOwnProperty('store'))
                        this._store = json.store;
                };
                Model.prototype.id = function () {
                    return this._data.hasOwnProperty("id") ? this._data.id : null;
                };
                Model.prototype.match = function (jsonSearch) {
                    for (var i in jsonSearch) {
                        if (this._data.hasOwnProperty(i) == false || this._data[i] != jsonSearch[i])
                            return false;
                    }
                    return true;
                };
                // set key of json
                Model.prototype.set = function (key, value) {
                    if (typeof key == "object")
                        this._data = Object["assign"](this._data, key);
                    else {
                        if (this._data.hasOwnProperty(key))
                            this._data[key] = value;
                        else
                            console.error("Your property doesn't exist.");
                    }
                    if (this._autoUpdate == true)
                        this.update();
                };
                // update server with new informations
                Model.prototype.update = function () {
                    var _this = this;
                    var json = {};
                    //check diff
                    if (this._alwaysPushAll || this._lastData == null)
                        json = this._data;
                    else {
                        var lgt = this._fields.length;
                        for (var i = 0; i < lgt; i++) {
                            var field = this._fields[i];
                            if (this._data.hasOwnProperty(field) && this._lastData.hasOwnProperty(field) && this._data[field] != this._lastData[field])
                                json[field] = this._data[field];
                        }
                    }
                    //at the end
                    this._lastData = this._data;
                    return new Promise(function (resolve, reject) {
                        //push
                        _this.proxy.put(json, { customPath: "/" + _this.id() })
                            .then(function (data) {
                            resolve(data);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Model.prototype.getData = function () {
                    return this._data;
                };
                Model.prototype.create = function () {
                    var _this = this;
                    this._lastData = this._data;
                    return new Promise(function (resolve, reject) {
                        //push
                        _this.proxy.post(_this._data)
                            .then(function (data) {
                            resolve(data);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Model.prototype.modify = function (params) {
                    var _this = this;
                    this._data = params;
                    return new Promise(function (resolve, reject) {
                        _this.update()
                            .then(function (data) {
                            _this._data = Object["assign"](_this._data, data);
                            resolve(_this);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Model.prototype.remove = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        //push
                        _this.proxy.delete({ customPath: "/" + _this.id() })
                            .then(function () {
                            resolve();
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                return Model;
            }(main_1.Main)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGVsLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUFJLFNBQVMsRUFNRixLQUFLOzs7Ozs7O1lBTlosU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN0RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDO1lBRVMsbUJBQUEsS0FBSyxHQUFHLENBQUMsVUFBVSxNQUFNO2dCQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixlQUFlLElBQUk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFD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
$__System.register("4", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Proxy;
    return {
        setters:[],
        execute: function() {
            exports_1("Proxy", Proxy = (function () {
                function Proxy(json) {
                    this._serverProtocol = "http";
                    this._headers = {};
                    this._mapping = {
                        put: "PUT",
                        post: "POST",
                        get: "GET",
                        delete: "DELETE"
                    };
                    this.updateProperties(json);
                }
                Proxy.prototype.updateProperties = function (json) {
                    this._config = json;
                    if (json != null && json.hasOwnProperty('url'))
                        this._serverUrl = json["url"];
                    else
                        this._serverUrl = window.location.host;
                    if (json != null && json.hasOwnProperty('headers'))
                        this._headers = json["headers"];
                    if (json != null && json.hasOwnProperty('protocol'))
                        this._serverProtocol = json["protocol"];
                    if (json != null && json.hasOwnProperty('pathName'))
                        this._serverPathName = json["pathName"];
                    else
                        console.error("Set a path name");
                };
                Proxy.prototype.addHeader = function (xhr) {
                    for (var key in this._headers) {
                        xhr.setRequestHeader(key, this._headers[key]);
                    }
                };
                Proxy.prototype.getXMLHttpRequest = function () {
                    var xhr = null;
                    if (window["XMLHttpRequest"] || window["ActiveXObject"]) {
                        if (window["ActiveXObject"]) {
                            try {
                                xhr = new ActiveXObject("Msxml2.XMLHTTP");
                            }
                            catch (e) {
                                xhr = new ActiveXObject("Microsoft.XMLHTTP");
                            }
                        }
                        else {
                            xhr = new XMLHttpRequest();
                        }
                    }
                    else {
                        console.error("Your browser doesn't support XMLHTTPRequest.");
                        return null;
                    }
                    return xhr;
                };
                Proxy.prototype.getServerUrl = function (options) {
                    options = options || null;
                    var url = this._serverProtocol;
                    url += "://" + this._serverUrl;
                    url += "/" + this._serverPathName;
                    if (options != null && options.hasOwnProperty('customPath'))
                        url += options["customPath"];
                    if (options != null && options.hasOwnProperty('filters'))
                        url += "?" + Object.keys(options.filters).map(function (k) {
                            return encodeURIComponent(k) + "=" + encodeURIComponent(options.filters[k]);
                        }).join('&');
                    return url;
                };
                Proxy.prototype.get = function (options) {
                    var _this = this;
                    options = options || null;
                    return new Promise(function (resolve, reject) {
                        var xhr = _this.getXMLHttpRequest();
                        xhr.open(_this._mapping["get"], _this.getServerUrl(options), true);
                        _this.addHeader(xhr);
                        xhr.onload = function () {
                            if (this.status >= 200 && this.status < 300) {
                                resolve(JSON.parse(xhr.response));
                            }
                            else {
                                reject({
                                    status: this.status,
                                    statusText: xhr.statusText
                                });
                            }
                        };
                        xhr.onerror = function () {
                            reject({
                                status: this.status,
                                statusText: xhr.statusText
                            });
                        };
                        xhr.send();
                    });
                };
                Proxy.prototype.put = function (datas, options) {
                    var _this = this;
                    options = options || null;
                    return new Promise(function (resolve, reject) {
                        var xhr = _this.getXMLHttpRequest();
                        xhr.open(_this._mapping["put"], _this.getServerUrl(options), true);
                        _this.addHeader(xhr);
                        xhr.onload = function () {
                            if (this.status >= 200 && this.status < 300) {
                                resolve(JSON.parse(xhr.response));
                            }
                            else {
                                reject({
                                    status: this.status,
                                    statusText: xhr.statusText
                                });
                            }
                        };
                        xhr.onerror = function () {
                            reject({
                                status: this.status,
                                statusText: xhr.statusText
                            });
                        };
                        xhr.send(JSON.stringify(datas));
                    });
                };
                Proxy.prototype.post = function (datas, options) {
                    var _this = this;
                    options = options || null;
                    return new Promise(function (resolve, reject) {
                        var xhr = _this.getXMLHttpRequest();
                        xhr.open(_this._mapping["post"], _this.getServerUrl(options), true);
                        _this.addHeader(xhr);
                        xhr.onload = function () {
                            if (this.status >= 200 && this.status < 300) {
                                resolve(JSON.parse(xhr.response));
                            }
                            else {
                                reject({
                                    status: this.status,
                                    statusText: xhr.statusText
                                });
                            }
                        };
                        xhr.onerror = function () {
                            reject({
                                status: this.status,
                                statusText: xhr.statusText
                            });
                        };
                        xhr.send(JSON.stringify(datas));
                    });
                };
                Proxy.prototype.delete = function (options) {
                    var _this = this;
                    options = options || null;
                    return new Promise(function (resolve, reject) {
                        var xhr = _this.getXMLHttpRequest();
                        xhr.open(_this._mapping["delete"], _this.getServerUrl(options), true);
                        _this.addHeader(xhr);
                        xhr.onload = function () {
                            if (this.status >= 200 && this.status < 300) {
                                resolve(JSON.parse(xhr.response));
                            }
                            else {
                                reject({
                                    status: this.status,
                                    statusText: xhr.statusText
                                });
                            }
                        };
                        xhr.onerror = function () {
                            reject({
                                status: this.status,
                                statusText: xhr.statusText
                            });
                        };
                        xhr.send();
                    });
                };
                return Proxy;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3h5LnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQVcsS0FBSzs7OztZQUFMLG1CQUFBLEtBQUssR0FBRyxDQUFDO2dCQUNoQixlQUFlLElBQUk7b0JBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7b0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHO3dCQUNaLEdBQUcsRUFBRSxLQUFLO3dCQUNWLElBQUksRUFBRSxNQUFNO3dCQUNaLEdBQUcsRUFBRSxLQUFLO3dCQUNWLE1BQU0sRUFBRSxRQUFRO3FCQUNuQixDQUFDO29CQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsSUFBSTtvQkFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLElBQUk7d0JBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FB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
$__System.register("3", ["4"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var proxy_service_1;
    var Main;
    return {
        setters:[
            function (proxy_service_1_1) {
                proxy_service_1 = proxy_service_1_1;
            }],
        execute: function() {
            exports_1("Main", Main = (function () {
                function Main() {
                    this.createAppGlobal();
                }
                Main.prototype.init = function (json) {
                    if (json.hasOwnProperty('proxy'))
                        this.proxy = new proxy_service_1.Proxy(json.proxy);
                };
                Main.prototype.createAppGlobal = function () {
                    if (window.hasOwnProperty("app") == false)
                        window["app"] = {};
                };
                return Main;
            }()));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUNXLElBQUk7Ozs7Ozs7WUFBSixrQkFBQSxJQUFJLEdBQUcsQ0FBQztnQkFDZjtvQkFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxJQUFJO29CQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUJBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRztvQkFDN0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzNCLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBQzs7OztBQUNMLGt2Q0FBa3ZDIn0=
$__System.register("5", ["3"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1;
    var __extends, Config;
    return {
        setters:[
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("Config", Config = (function (_super) {
                __extends(Config, _super);
                function Config() {
                    _super.call(this);
                    this.init();
                }
                Config.prototype.init = function () {
                    if (window["app"].hasOwnProperty("_config") == false)
                        window["app"]["_config"] = {};
                };
                Config.prototype.setConfig = function (json) {
                    window["app"]["_config"] = Object["assign"](window["app"]["_config"], json);
                };
                Config.prototype.getConfig = function (key) {
                    if (window["app"]["_config"].hasOwnProperty(key))
                        return window["app"]["_config"][key];
                    return null;
                };
                return Config;
            }(main_1.Main)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFBSSxTQUFTLEVBTUYsTUFBTTs7Ozs7OztZQU5iLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLENBQUMsQ0FBQztZQUVTLG9CQUFBLE1BQU0sR0FBRyxDQUFDLFVBQVUsTUFBTTtnQkFDakMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDMUI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNoQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHO29CQUNwQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQzt3QkFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsSUFBSTtvQkFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hGLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUc7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQztnQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxXQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Ozs7QUFDVCxrNERBQWs0RCJ9
$__System.register("6", ["3", "2", "5"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var main_1, model_service_1, config_1;
    var __extends, Store;
    return {
        setters:[
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (model_service_1_1) {
                model_service_1 = model_service_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            __extends = (this && this.__extends) || function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            exports_1("Store", Store = (function (_super) {
                __extends(Store, _super);
                function Store(json) {
                    _super.call(this);
                    this._id = "";
                    this._fields = [];
                    this._datas = [];
                    this._defaultConfig = new config_1.Config();
                    if (json.hasOwnProperty('proxy') == false && this._defaultConfig.getConfig("proxy") != null)
                        json.proxy = this._defaultConfig.getConfig("proxy");
                    if (json.hasOwnProperty('proxy'))
                        json.proxy.pathName = json.id;
                    this.init(json);
                    this.initEnv(json);
                }
                Store.get = function (id) {
                    if (window.hasOwnProperty('app') && window["app"].hasOwnProperty('stores') && window["app"]["stores"].hasOwnProperty(id))
                        return window["app"]["stores"][id];
                    return null;
                };
                Store.prototype.checkEnv = function (json) {
                    if (json.hasOwnProperty('id') == false) {
                        console.error("set id key");
                        return false;
                    }
                    else if (window.hasOwnProperty('app') && window["app"].hasOwnProperty(json.id)) {
                        console.error("your id already exist");
                        return false;
                    }
                    return true;
                };
                Store.prototype.initEnv = function (json) {
                    if (this.checkEnv(json)) {
                        this._id = json.id;
                        if (window["app"].hasOwnProperty("stores") == false)
                            window["app"]["stores"] = {};
                        window["app"]["stores"][json.id] = this;
                    }
                };
                Store.prototype.load = function (options) {
                    var _this = this;
                    options = options || null;
                    var storage = true;
                    if (options != null && options.hasOwnProperty('customPath'))
                        storage = false;
                    return new Promise(function (resolve, reject) {
                        _this.proxy.get(options)
                            .then(function (datas) {
                            if (storage) {
                                //auto init fields
                                if (datas.length != 0 && _this._fields.length == 0) {
                                    for (var i in datas[0])
                                        _this._fields.push(i);
                                }
                                _this.setDatas(datas);
                                resolve(_this._datas);
                            }
                            else {
                                resolve(datas);
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Store.prototype.setDatas = function (json) {
                    var length = json.length;
                    for (var i = 0; i < length; i++) {
                        var item = json[i], model = new model_service_1.Model({
                            fields: this._fields,
                            proxy: this.proxy._config,
                            data: item,
                            store: this
                        });
                        this._datas.push(model);
                    }
                };
                Store.prototype.id = function () {
                    return this._id;
                };
                Store.prototype.getAt = function (index) {
                    return this._datas[index];
                };
                Store.prototype.findBy = function (jsonSearch) {
                    var length = this._datas.length;
                    for (var i = 0; i < length; i++) {
                        var m = this._datas[i];
                        if (m.match(jsonSearch))
                            return m;
                    }
                    return null;
                };
                Store.prototype.findIndexBy = function (jsonSearch) {
                    var length = this._datas.length;
                    for (var i = 0; i < length; i++) {
                        var m = this._datas[i];
                        if (m.match(jsonSearch))
                            return i;
                    }
                    return null;
                };
                Store.setDefaultProxy = function (json) {
                    var conf = new config_1.Config();
                    conf.setConfig({ proxy: json });
                };
                Store.prototype.add = function (params, options) {
                    var _this = this;
                    options = options || null;
                    var model = new model_service_1.Model({
                        fields: this._fields,
                        proxy: this.proxy._config,
                        data: params,
                        store: this
                    });
                    return new Promise(function (resolve, reject) {
                        model.create()
                            .then(function (data) {
                            if (options == null || options.hasOwnProperty('mergeLocalAndRemote') == false || options.mergeLocalAndRemote == true)
                                data = Object["assign"](data, params);
                            resolve(_this.saveData(data));
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    });
                };
                Store.prototype.modify = function (params) {
                    if (params.hasOwnProperty('id') == false) {
                        return new Promise(function (resolve, reject) {
                            reject("set a id");
                        });
                    }
                    else {
                        var element = this.findBy({ id: params.id });
                        if (element == null) {
                            return new Promise(function (resolve, reject) {
                                reject("your element do not exist");
                            });
                        }
                        else
                            return element.modify(params);
                    }
                };
                Store.prototype.saveData = function (data) {
                    var createdElement = false;
                    if (data.hasOwnProperty('id') == false) {
                        data.id = this._id + new Date().getTime() + Math.random();
                        createdElement = true;
                    }
                    if (createdElement == false) {
                        var length_1 = this._datas.length;
                        for (var i = 0; i < length_1; i++) {
                            var item = this._datas[i];
                            if (item.id() == data.id) {
                                item._data = data;
                                return item;
                            }
                        }
                    }
                    var model = new model_service_1.Model({
                        fields: this._fields,
                        proxy: this.proxy._config,
                        data: data,
                        store: this
                    });
                    this._datas.push(model);
                    return model;
                };
                Store.prototype.remove = function (json) {
                    var _this = this;
                    var index = this.findIndexBy({
                        id: json.id
                    });
                    return new Promise(function (resolve, reject) {
                        if (index == null) {
                            reject("your element do not exist");
                        }
                        else {
                            var element = _this.getAt(index);
                            element.remove()
                                .then(function () {
                                _this._datas.splice(index, 1);
                                resolve(null);
                            }).catch(function (err) {
                                reject(err);
                            });
                        }
                    });
                };
                return Store;
            }(main_1.Main)));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JlLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUFJLFNBQVMsRUFRRixLQUFLOzs7Ozs7Ozs7Ozs7O1lBUlosU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN0RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekYsQ0FBQyxDQUFDO1lBSVMsbUJBQUEsS0FBSyxHQUFHLENBQUMsVUFBVSxNQUFNO2dCQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixlQUFlLElBQUk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7b0JBQ25D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
$__System.register("1", ["2", "6"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (model_service_1_1) {
                exportStar_1(model_service_1_1);
            },
            function (store_service_1_1) {
                exportStar_1(store_service_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmcyLXN0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4WEFBOFgifQ==
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});