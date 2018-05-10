var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// tslint:disable:no-empty
import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import buttonStyle from './style/index.native';
const buttonStyles = StyleSheet.create(buttonStyle);
export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.onPressIn = (...arg) => {
            this.setState({ pressIn: true });
            if (this.props.onPressIn) {
                this.props.onPressIn(...arg);
            }
        };
        this.onPressOut = (...arg) => {
            this.setState({ pressIn: false });
            if (this.props.onPressOut) {
                this.props.onPressOut(...arg);
            }
        };
        this.onShowUnderlay = (...arg) => {
            this.setState({ touchIt: true });
            if (this.props.onShowUnderlay) {
                this.props.onShowUnderlay(...arg);
            }
        };
        this.onHideUnderlay = (...arg) => {
            this.setState({ touchIt: false });
            if (this.props.onHideUnderlay) {
                this.props.onHideUnderlay(...arg);
            }
        };
        this.state = {
            pressIn: false,
            touchIt: false,
        };
    }
    render() {
        // TODO: replace `TouchableHighlight` with `TouchableWithoutFeedback` in version 1.1.0
        // for using setNativeProps to improve performance
        const _a = this.props, { size = 'large', type = 'default', disabled, activeStyle, onClick, style, styles, loading, whiteLoading, tabSelected } = _a, restProps = __rest(_a, ["size", "type", "disabled", "activeStyle", "onClick", "style", "styles", "loading", "whiteLoading", "tabSelected"]);
        // can not understand this line.
        // tslint:disable-next-line:variable-name
        const _styles = styles;
        //  unnecessary see line: 134
        // [
        //   'activeOpacity',
        //   'underlayColor',
        //   'onPress',
        //   'onPressIn',
        //   'onPressOut',
        //   'onShowUnderlay',
        //   'onHideUnderlay',
        // ].forEach(prop => {
        //   if (restProps.hasOwnProperty(prop)) {
        //     delete restProps[prop];
        //   }
        // });
        const textStyle = [
            _styles[`${size}RawText`],
            _styles[`${type}RawText`],
            disabled && _styles[`${type}DisabledRawText`],
            this.state.pressIn && _styles[`${type}HighlightText`],
            tabSelected && _styles[`${type}SelectedRawText`],
        ];
        const wrapperStyle = [
            _styles.wrapperStyle,
            _styles[`${size}Raw`],
            _styles[`${type}Raw`],
            disabled && _styles[`${type}DisabledRaw`],
            this.state.pressIn && activeStyle && _styles[`${type}Highlight`],
            activeStyle && this.state.touchIt && activeStyle,
            tabSelected && _styles[`${type}SelectedRaw`],
            style,
        ];
        const underlayColor = StyleSheet.flatten(_styles[activeStyle ? `${type}Highlight` : `${type}Raw`]).backgroundColor;
        const loadingImage = whiteLoading ? require('./style/images/loading_dots_white.gif') : require('./style/images/loading_dots_orange.gif');
        return (React.createElement(TouchableHighlight, Object.assign({ style: wrapperStyle, disabled: disabled }, restProps, { activeOpacity: 1, underlayColor: underlayColor, onPress: (e) => onClick && onClick(e), onPressIn: this.onPressIn, onPressOut: this.onPressOut, onShowUnderlay: this.onShowUnderlay, onHideUnderlay: this.onHideUnderlay }),
            React.createElement(View, { style: _styles.container }, loading ? (
            // tslint:disable-next-line:jsx-no-multiline-js
            React.createElement(Image, { source: loadingImage, style: { width: 45, height: 15 } })) : React.createElement(Text, { style: textStyle, allowFontScaling: false }, this.props.children))));
    }
}
Button.defaultProps = {
    pressIn: false,
    disabled: false,
    activeStyle: {},
    loading: false,
    onClick: (_) => { },
    onPressIn: (_) => { },
    onPressOut: (_) => { },
    onShowUnderlay: (_) => { },
    onHideUnderlay: (_) => { },
    styles: buttonStyles,
};
//# sourceMappingURL=index.native.js.map