"use strict";

var _colors = _interopRequireDefault(require("colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv$slice = process.argv.slice(2),
    _process$argv$slice2 = _slicedToArray(_process$argv$slice, 2),
    number1 = _process$argv$slice2[0],
    number2 = _process$argv$slice2[1];

var num1 = parseInt(number1);
var num2 = parseInt(number2);

function primeNumber(num1) {
  if (num1 > 1) {
    for (var y = 2; y <= Math.sqrt(num1); y++) {
      if (num1 % y == 0) {
        return false;
      }
    }

    return true;
  }
}

function numderOutput(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return console.log("".concat(_colors["default"].red("Error: Задан только 1 аргумент или аргумент не является числом")));
  }

  var numbers = [];

  for (num1; num1 <= num2; num1++) {
    if (primeNumber(num1)) {
      numbers.push(num1);
    }
  }

  if (numbers.length === 0) {
    return console.log("".concat(_colors["default"].red("Error: Нет простых чисел в данном диапазоне")));
  }

  numbers.forEach(function (num, index) {
    if (!((index + 1) % 3)) {
      console.log(_colors["default"].red(num));
    } else if (!(index % 3)) {
      console.log(_colors["default"].green(num));
    } else {
      console.log(_colors["default"].yellow(num));
    }
  });
}

numderOutput(num1, num2);