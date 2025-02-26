"use strict";
// Generics Classes
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    Pair.prototype.getKey = function () {
        return this.key;
    };
    Pair.prototype.getValue = function () {
        return this.value;
    };
    return Pair;
}());
var p1 = new Pair("Name", "Navin");
var p2 = new Pair("Id", 101);
var p3 = new Pair("IsManager", false);
//# sourceMappingURL=script.js.map