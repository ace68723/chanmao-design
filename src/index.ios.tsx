/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
//, StyleSheet , Text, View
import React from 'react';
// import Button from 'antd-mobile/lib/Button';
// import { Button } from 'antd-mobile';
// import ActionSheet from './components/action-sheet/demo/basic.native';
import ButtonBasic from './components/button/demo/basic.native';
export interface Props { }
export interface State { }

// const styles: any = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5
//   }
// })

export default class chanmao_design extends React.Component<Props, State> {
  render() {
    return (

      <ButtonBasic/>
      // <View style={styles.container}>
      //
      //   <Button>showActionSheet</Button>
      //   {/* <Button><Text>basic button</Text></Button> */}
      //   <Text style={styles.welcome}>
      //     Welcome to React Native! (in TypeScript2)
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

AppRegistry.registerComponent('chanmao_design', () => chanmao_design);
