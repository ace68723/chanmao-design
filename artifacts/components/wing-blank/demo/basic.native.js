// tslint:disable:jsx-no-multiline-js
import { WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';
import { Text, View } from 'react-native';
const PlaceHolder = (props) => (React.createElement(View, Object.assign({ style: {
        backgroundColor: '#fff',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    } }, props),
    React.createElement(Text, { style: { color: '#bbb' } }, "Block")));
export default class WingBlankExample extends React.Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(WhiteSpace, null),
            React.createElement(WingBlank, null,
                React.createElement(PlaceHolder, null)),
            React.createElement(WhiteSpace, { size: "lg" }),
            React.createElement(WingBlank, { size: "md" },
                React.createElement(PlaceHolder, null)),
            React.createElement(WhiteSpace, { size: "lg" }),
            React.createElement(WingBlank, { size: "sm" },
                React.createElement(PlaceHolder, null))));
    }
}
//# sourceMappingURL=basic.native.js.map