// tslint:disable:jsx-no-multiline-js
import { WhiteSpace } from 'antd-mobile';
import React from 'react';
import { Text, View } from 'react-native';
const PlaceHolder = (props) => (React.createElement(View, Object.assign({ style: {
        backgroundColor: '#fff',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    } }, props),
    React.createElement(Text, { style: { color: '#bbb' } }, "Block")));
export default class WhiteSpaceExample extends React.Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(WhiteSpace, { size: "xs" }),
            React.createElement(PlaceHolder, null),
            React.createElement(WhiteSpace, { size: "sm" }),
            React.createElement(PlaceHolder, null),
            React.createElement(WhiteSpace, null),
            React.createElement(PlaceHolder, null),
            React.createElement(WhiteSpace, { size: "lg" }),
            React.createElement(PlaceHolder, null),
            React.createElement(WhiteSpace, { size: "xl" }),
            React.createElement(PlaceHolder, null)));
    }
}
//# sourceMappingURL=basic.native.js.map