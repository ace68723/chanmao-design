import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ActionSheet, Button } from 'antd-mobile';
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.showActionSheet = () => {
            const BUTTONS = [
                'Operation1',
                'Operation2',
                'Operation3',
                'Delete',
                'Cancel',
            ];
            ActionSheet.showActionSheetWithOptions({
                title: 'Title',
                message: 'Description',
                options: BUTTONS,
                cancelButtonIndex: 4,
                destructiveButtonIndex: 3,
            }, (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
        };
        this.showShareActionSheet = () => {
            const opts = {
                message: 'Message to go with the shared url',
                title: 'Share Actionsheet',
            };
            if (Platform.OS === 'ios') {
                opts.url = 'https://www.chanmao.ca/';
                opts.tintColor = '#ff0000';
                opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter'];
            }
            ActionSheet.showShareActionSheetWithOptions(opts, (success, method) => {
                let text;
                if (success) {
                    text = `Shared with ${method}`;
                }
                else {
                    text = 'Did not share';
                }
                this.setState({ text });
            });
        };
        this.state = {
            clicked: 'none',
            text: '',
        };
    }
    render() {
        return (React.createElement(View, { style: { marginTop: 30 } },
            React.createElement(View, { style: [{ padding: 8 }] },
                React.createElement(Button, { onClick: this.showActionSheet }, "showActionSheet")),
            React.createElement(Text, { style: [{ padding: 8 }] },
                "clicked button: ",
                this.state.clicked),
            React.createElement(View, { style: [{ padding: 8 }] },
                React.createElement(Button, { onClick: this.showShareActionSheet }, "showShareActionSheet")),
            React.createElement(Text, { style: [{ padding: 8 }] }, this.state.text)));
    }
}
export const title = 'ActionSheet';
export const description = 'ActionSheet example';
//# sourceMappingURL=basic.native.js.map