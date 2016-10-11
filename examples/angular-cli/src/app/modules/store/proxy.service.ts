export class Proxy {
    private _serverUrl: string;
    private _serverProtocol: string = "http";
    private _serverPathName: string;
    private _headers: any = {};
    private _mapping: any = {
        put: "PUT",
        post: "POST",
        get: "GET",
        delete: "DELETE"
    };
    _config: any;

    constructor(json) {
        this.updateProperties(json);
    }

    updateProperties(json) {
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
    }

    addHeader(xhr) {
        for (let key in this._headers) {
            xhr.setRequestHeader(key, this._headers[key]);
        }
    }

    getServerUrl(options?) {
        options = options || null;

        let url = this._serverProtocol;
        url += "://" + this._serverUrl;
        url += "/" + this._serverPathName;

        if (options != null && options.hasOwnProperty('customPath'))
            url += options["customPath"];
        if (options != null && options.hasOwnProperty('filters'))
            url += "?" + Object.keys(options.filters).map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(options.filters[k]);
                }).join('&');

        return url;
    }

    get(options?) {
        options = options || null;

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(this._mapping["get"], this.getServerUrl(options), true);
            this.addHeader(xhr);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
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
    }

    put(datas, options?) {
        options = options || null;

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(this._mapping["put"], this.getServerUrl(options), true);
            this.addHeader(xhr);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
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
    }

    post(datas, options?) {
        options = options || null;

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(this._mapping["post"], this.getServerUrl(options), true);
            this.addHeader(xhr);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
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
    }

    delete(options?) {
        options = options || null;

        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(this._mapping["delete"], this.getServerUrl(options), true);
            this.addHeader(xhr);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(JSON.parse(xhr.response));
                } else {
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
    }
}
