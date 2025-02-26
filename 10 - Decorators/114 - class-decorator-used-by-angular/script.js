"use strict";
// Class Decorator in Angular Way - Example
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(htmlCode, selector) {
    return function (constructor) {
        var htmlEl = document.getElementById(selector);
        var data = new constructor();
        htmlCode = htmlCode.replace("{{numberOfOrder}}", data.numberOfOrder);
        htmlCode = htmlCode.replace("{{nextOrder}}", data.nextOrder);
        htmlEl.innerHTML = htmlCode;
    };
}
var Order = /** @class */ (function () {
    function Order() {
        this.numberOfOrder = 684;
        this.nextOrder = 685;
    }
    Order = __decorate([
        Component("\n    <h1>Orders ={{numberOfOrder}}  </h1>\n    <p> next order #{{nextOrder}} </p>\n    ", "orderDiv")
    ], Order);
    return Order;
}());
