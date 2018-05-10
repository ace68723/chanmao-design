import React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default.native';
class WingBlank extends React.Component {
    render() {
        const { size, style, children } = this.props;
        const margin = varibles[`h_spacing_${size}`];
        return (React.createElement(View, { style: [{ marginLeft: margin, marginRight: margin }, style] }, children));
    }
}
WingBlank.defaultProps = {
    size: 'lg',
};
export default WingBlank;
//# sourceMappingURL=index.native.js.map