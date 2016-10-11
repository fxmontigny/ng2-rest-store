import {Main} from "./main";
import {Model} from "./model.service";
import {Config} from "./config";

export class Store extends Main {
    _id: string = "";
    _fields: Array<any> = [];
    _datas: Array<any> = [];
    _defaultConfig: any = new Config();

    constructor(json) {
        super();

        if (json.hasOwnProperty('proxy') == false && this._defaultConfig.getConfig("proxy") != null)
            json.proxy = this._defaultConfig.getConfig("proxy");
        if (json.hasOwnProperty('proxy'))
            json.proxy.pathName = json.id;

        this.init(json);
        this.initEnv(json);
    }

    static get(id) {
        if(window.hasOwnProperty('app') && window["app"].hasOwnProperty('stores') && window["app"]["stores"].hasOwnProperty(id))
            return window["app"]["stores"][id];

        return null;
    }

    checkEnv(json) {
        if (json.hasOwnProperty('id') == false) {
            console.error("set id key");
            return false;
        } else if (window.hasOwnProperty('app') && window["app"].hasOwnProperty(json.id)) {
            console.error("your id already exist");
            return false;
        }

        return true;
    }

    initEnv(json) {
        if (this.checkEnv(json)) {
            this._id = json.id;
            if(window["app"].hasOwnProperty("stores") == false)
                window["app"]["stores"] = {};
            window["app"]["stores"][json.id] = this;
        }
    }

    load(options?) {
        options = options || null;
        let storage = true;
        if (options != null && options.hasOwnProperty('customPath'))
            storage = false;

        return new Promise((resolve, reject) => {
            this.proxy.get(options)
                .then(datas => {
                    if (storage) {
                        //auto init fields
                        if (datas.length != 0 && this._fields.length == 0) {
                            for (let i in datas[0])
                                this._fields.push(i);
                        }

                        this.setDatas(datas);
                        resolve(this._datas)
                    } else {
                        resolve(datas);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    setDatas(json) {
        let length = json.length;
        for (let i = 0; i < length; i++) {
            let item = json[i], model = new Model({
                fields: this._fields,
                proxy: this.proxy._config,
                data: item,
                store: this
            });

            this._datas.push(model);
        }
    }

    id() {
        return this._id;
    }

    getAt(index) {
        return this._datas[index];
    }

    findBy(jsonSearch) {
        let length = this._datas.length;
        for (let i = 0; i < length; i++) {
            let m = this._datas[i];
            if (m.match(jsonSearch))
                return m;
        }

        return null;
    }

    findIndexBy(jsonSearch) {
        let length = this._datas.length;
        for (let i = 0; i < length; i++) {
            let m = this._datas[i];
            if (m.match(jsonSearch))
                return i;
        }

        return null;
    }

    static setDefaultProxy(json) {
        var conf = new Config();
        conf.setConfig({proxy: json});
    }

    add(params, options?) {
        options = options || null;

        let model = new Model({
            fields: this._fields,
            proxy: this.proxy._config,
            data: params,
            store: this
        });

        return new Promise((resolve, reject) => {
            model.create()
                .then(data => {
                    if (options == null || options.hasOwnProperty('mergeLocalAndRemote') == false || options.mergeLocalAndRemote == true)
                        data = Object["assign"](data, params);

                    resolve(this.saveData(data));
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    modify(params) {
        if (params.hasOwnProperty('id') == false) {
            return new Promise((resolve, reject) => {
                reject("set a id");
            });
        } else {
            let element = this.findBy({id: params.id});
            if (element == null) {
                return new Promise((resolve, reject) => {
                    reject("your element do not exist");
                });
            } else
                return element.modify(params);
        }
    }

    saveData(data) {
        let createdElement = false;
        if (data.hasOwnProperty('id') == false) {
            data.id = this._id + new Date().getTime() + Math.random();
            createdElement = true;
        }

        if (createdElement == false) {
            let length = this._datas.length;
            for (let i = 0; i < length; i++) {
                let item = this._datas[i];
                if (item.id() == data.id) {
                    item._data = data;
                    return item;
                }
            }
        }

        let model = new Model({
            fields: this._fields,
            proxy: this.proxy._config,
            data: data,
            store: this
        });

        this._datas.push(model);
        return model;
    }

    remove(json) {
        let index = this.findIndexBy({
            id: json.id
        });

        return new Promise((resolve, reject) => {
            if (index == null) {
                reject("your element do not exist");
            } else {
                let element = this.getAt(index);
                element.remove()
                    .then(()=> {
                        this._datas.splice(index, 1);
                        resolve(null);
                    }).catch(err => {
                    reject(err);
                });
            }
        });
    }
}
