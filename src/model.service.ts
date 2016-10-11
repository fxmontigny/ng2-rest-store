import {Main} from "./main";

export class Model extends Main {
    private _autoUpdate: boolean = true;
    private _alwaysPushAll: boolean = false;
    private _lastData: any;
    private _data: any;
    private _fields: Array<any> = [];
    private _store: any;

    constructor(json) {
        super();

        this.init(json);
        this.initEnv(json);
    }

    initEnv(json) {
        this._fields = json.fields;

        if (json.hasOwnProperty('data'))
            this._data = json.data;
        if (json.hasOwnProperty('store'))
            this._store = json.store;
    }

    id() {
        return this._data.hasOwnProperty("id") ? this._data.id : null;
    }

    match(jsonSearch) {
        for (let i in jsonSearch) {
            if (this._data.hasOwnProperty(i) == false || this._data[i] != jsonSearch[i])
                return false;
        }

        return true;
    }

    // set key of json
    set(key, value) {
        if (typeof key == "object")
            this._data = Object["assign"](this._data, key);
        else {
            if (this._data.hasOwnProperty(key))
                this._data[key] = value;
            else
                console.error("Your property doesn't exist.")
        }

        if (this._autoUpdate == true)
            this.update();
    }


    // update server with new informations
    update() {
        let json = {};
        //check diff
        if (this._alwaysPushAll || this._lastData == null)
            json = this._data;
        else {
            let lgt = this._fields.length;
            for (let i = 0; i < lgt; i++) {
                let field = this._fields[i];
                if (this._data.hasOwnProperty(field) && this._lastData.hasOwnProperty(field) && this._data[field] != this._lastData[field])
                    json[field] = this._data[field];
            }
        }

        //at the end
        this._lastData = this._data;

        return new Promise((resolve, reject) => {
            //push
            this.proxy.put(json, {customPath: "/" + this.id()})
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        });
    }

    getData() {
        return this._data;
    }

    create() {
        this._lastData = this._data;

        return new Promise((resolve, reject) => {
            //push
            this.proxy.post(this._data)
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                });
        });
    }

    modify(params) {
        this._data = params;

        return new Promise((resolve, reject) => {
            this.update()
                .then(data => {
                    this._data = Object["assign"](this._data, data);
                    resolve(this)
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    remove() {
        return new Promise((resolve, reject) => {
            //push
            this.proxy.delete({customPath: "/" + this.id()})
                .then(() => {
                    resolve()
                })
                .catch(err => {
                    reject(err)
                });
        });
    }
}
