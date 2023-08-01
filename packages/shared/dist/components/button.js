"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomButton = void 0;
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const CustomButton = (props) => {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: props === null || props === void 0 ? void 0 : props.onClick, activeOpacity: 0.6, style: [styles.mainContainer, props === null || props === void 0 ? void 0 : props.buttonstyle] },
        react_1.default.createElement(react_native_1.Text, { style: [props.textStyle] }, props === null || props === void 0 ? void 0 : props.title)));
};
exports.CustomButton = CustomButton;
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
