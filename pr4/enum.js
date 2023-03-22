var simple;
(function (simple) {
    simple[simple["atr1"] = 1] = "atr1";
    simple[simple["atr2"] = 2] = "atr2";
    simple[simple["atr3"] = 3] = "atr3";
})(simple || (simple = {}));
document.getElementById("ans1").innerHTML = "".concat(simple[1], "  ").concat(simple[2], " ").concat(simple[3]);
var str;
(function (str) {
    str["val1"] = "macbook";
    str["val2"] = "play station";
    str["val3"] = "xbox";
    str["val4"] = "intel";
})(str || (str = {}));
document.getElementById('ans4').innerHTML = "the value of string enum is ".concat(str.val1);
var bool;
(function (bool) {
    bool[bool["f"] = 0] = "f";
    bool["t"] = "yes";
})(bool || (bool = {}));
document.getElementById("ans2").innerHTML = "value of bool enum is ".concat(bool.f, " and ").concat(bool.t);
var cnt;
(function (cnt) {
    cnt[cnt["a"] = 0] = "a";
    cnt[cnt["b"] = 1] = "b";
    cnt[cnt["c"] = 2] = "c";
})(cnt || (cnt = {}));
function init(obj) {
    return obj.a;
}
var i = init(cnt);
document.getElementById("ans3").innerHTML = "the value of const enum is ".concat(i);
