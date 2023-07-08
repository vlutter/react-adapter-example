"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var react_1 = require("react");
var Test = function (props) {
    var items = props.items;
    (0, react_1.useEffect)(function () {
        console.log(items);
    }, []);
    return <></>;
};
exports.Test = Test;
