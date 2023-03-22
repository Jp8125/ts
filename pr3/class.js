var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class demo
var c1 = /** @class */ (function () {
    function c1(input) {
        this.arg1 = input;
    }
    return c1;
}());
var obj1 = new c1("this is class one");
document.getElementById("o/p").innerHTML = "".concat(obj1.arg1);
//inheritance 
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.moved = function (steps) {
        document.getElementById("simple").innerHTML = "the human moved ".concat(steps, " steps");
    };
    return animal;
}());
var human = /** @class */ (function (_super) {
    __extends(human, _super);
    function human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    human.prototype.learn = function (language) {
        // console.log(`the human learn ${language} language`)
        document.getElementById("inheritance").innerHTML = "the human learn ".concat(language, " language");
    };
    return human;
}(animal));
var h1 = new human();
h1.moved(10);
h1.learn("hindi");
// constuctors
var con = /** @class */ (function () {
    function con(str, num) {
        this.name = str;
        this.age = num;
    }
    return con;
}());
var p1 = new con("jhon", 23);
document.getElementById("constructor").innerHTML = "the value initialize by constructor is ".concat(p1.name, " and ").concat(p1.age);
var mexmple = /** @class */ (function () {
    function mexmple(val) {
        this.name = val;
    }
    mexmple.prototype.conc = function (str2) {
        this.name = this.name + str2;
    };
    return mexmple;
}());
var v1 = new mexmple("string1");
v1.conc("that is");
console.log("the concated string is: " + v1.name);
