import React from 'react';
import { View } from 'react-native';
import varibles from '../style/themes/default.native';
class WhiteSpace extends React.Component {
    render() {
        const { size, style } = this.props;
        return (React.createElement(View, { style: [{ height: varibles[`v_spacing_${size}`] }, style] }));
    }
}
WhiteSpace.defaultProps = {
    size: 'md',
};
export default WhiteSpace;
//# sourceMappingURL=index.native.js.map