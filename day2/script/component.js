"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (config) {
    return function (TargetClass) {
        let tc = new TargetClass();
        return class {
            title = tc.title;
            power = config.power;
            selector = config.selector;
            template = config.template;
        };
    };
};
let MyComp = class MyComp {
    title = "Welcome to your life";
};
MyComp = __decorate([
    Component({
        power: 10,
        selector: "app-root",
        template: `
        <div>
            <h2>{{ title }}</h2>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ul>
            <h3>Power is : {{ power }}</h3>
        </div>
    `
    })
], MyComp);
