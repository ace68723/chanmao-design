import classnames from 'classnames';
import React from 'react';
export default class WingBlank extends React.Component {
    render() {
        const { prefixCls, size, className, children, style } = this.props;
        const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);
        return (React.createElement("div", { className: wrapCls, style: style }, children));
    }
}
WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg',
};
//# sourceMappingURL=index.js.map