/* tslint:disable:no-unused-variable */
// tslint:disable:jsx-no-multiline-js
import { View } from 'react-native';
import Button from '../index.native';
import WhiteSpace from '../../white-space/index.native';
import WingBlank from '../../wing-blank/index.native';
import React from 'react';
/* tslint:disable:no-console */
export default () => (React.createElement(View, { style: { flex: 1 } },
    React.createElement(WingBlank, null,
        React.createElement(WhiteSpace, { style: {
                marginTop: 40,
            } }),
        React.createElement(Button, null, "default"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { disabled: true }, "default disabled"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { type: "primary" }, "primary"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { type: "primary", loading: true }, "primary"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { type: "primary", disabled: true }, "primary disabled"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { type: "warning" }, "warning"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { type: "warning", disabled: true }, "warning disabled"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { loading: true, whiteLoading: false }, "loading button"),
        React.createElement(WhiteSpace, null),
        React.createElement(Button, { activeStyle: false }, "\u65E0\u70B9\u51FB\u53CD\u9988"),
        React.createElement(WhiteSpace, null),
        React.createElement(View, { style: { flexDirection: "row", } },
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(Button, { type: "tab" }, "\u9001\u9910")),
            React.createElement(View, { style: { flex: 1 } },
                React.createElement(Button, { type: "tab", tabSelected: true }, "\u81EA\u53D6"))),
        React.createElement(WhiteSpace, null),
        React.createElement(WingBlank, { style: {
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            } },
            React.createElement(Button, { type: "tab" }, "Home"),
            React.createElement(Button, { type: "tab" }, "Work"),
            React.createElement(Button, { type: "tab", tabSelected: true }, "Other")),
        React.createElement(WingBlank, { style: {
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            } },
            React.createElement(Button, { type: "ghost" }, "ghost"),
            React.createElement(Button, { type: "ghost", disabled: true }, "ghost disabled"),
            React.createElement(Button, { type: "ghost", size: "small" }, "ghost"))),
    React.createElement(Button, { type: "bottom", style: { bottom: 0, position: 'absolute' } }, "bottom")));
//# sourceMappingURL=basic.native.js.map