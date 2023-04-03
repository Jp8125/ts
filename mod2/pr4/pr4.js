var basics;
(function (basics) {
    let v1=basics["prop"] = 5;
    basics[v1] = "prop";
    basics[basics["prop1"] = 6] = "prop1";
    basics[basics["prop2"] = 4] = "prop2";
})(basics || (basics = {}));
console.log(`prop:${basics['prop']}  prop1:${basics['prop1']}  prop2:${basics['prop2']}`);
var string_;
(function (string_) {
    string_["product1"] = "macbook";
    string_["product2"] = "play station";
    string_["product3"] = "xbox";
    string_["product4"] = "intel";
})(string_ || (string_ = {}));
console.log(`the value of string enum is ${string_.product1}  ${string_.product2}  ${string_.product3}  ${string_.product4}`);
var bool__;
(function (bool__) {
    bool__[bool__["false"] = 0] = "false";
    bool__["true"] = "yes";
})(bool__ || (bool__ = {}));
console.log(`value of bool enum is ${bool__[0]} and ${bool__["yes"]}`);
var cnst;
(function (cnst) {
    cnst[cnst["a_let"] = 0] = "a_let";
    cnst[cnst["b_let"] = 1] = "b_let";
    cnst[cnst["c_let"] = 2] = "c_let";
})(cnst || (cnst = {}));
function init(obj) {
    return obj['a_let'];
}
let i = init(cnst);
console.log(`the value of const enum is ${i}`);
