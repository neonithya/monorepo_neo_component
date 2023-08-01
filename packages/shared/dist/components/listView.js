"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const ListView = (props) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.mainContainer },
        react_1.default.createElement(react_native_1.Text, null, props === null || props === void 0 ? void 0 : props.id),
        react_1.default.createElement(react_native_1.Text, null, props === null || props === void 0 ? void 0 : props.name)));
};
exports.ListView = ListView;
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        backgroundColor: "green",
        margin: 20,
        padding: 10,
        width: "80%",
    },
});
