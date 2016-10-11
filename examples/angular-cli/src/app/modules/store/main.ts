import {Proxy} from "./proxy.service";

export class Main {
    proxy: any;

    constructor() {
        this.createAppGlobal();
    }

    init(json) {
        if (json.hasOwnProperty('proxy'))
            this.proxy = new Proxy(json.proxy);
    }

    createAppGlobal() {
        if (window.hasOwnProperty("app") == false)
            window["app"] = {};
    }
}
