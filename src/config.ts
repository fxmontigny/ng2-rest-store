import {Main} from "./main";

export class Config extends Main {
    constructor() {
        super();

        this.init();
    }

    init() {
        if (window["app"].hasOwnProperty("_config") == false)
            window["app"]["_config"] = {};
    }

    setConfig(json) {
        window["app"]["_config"] = Object["assign"](window["app"]["_config"], json);
    }

    getConfig(key) {
        if (window["app"]["_config"].hasOwnProperty(key))
            return window["app"]["_config"][key];

        return null;
    }
}
