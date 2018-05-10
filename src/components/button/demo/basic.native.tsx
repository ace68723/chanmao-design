/* tslint:disable:no-unused-variable */
// tslint:disable:jsx-no-multiline-js
import { View } from 'react-native';
import Button from '../index.native';
import WhiteSpace from '../../white-space/index.native';
import WingBlank from '../../wing-blank/index.native';
import React from 'react';

/* tslint:disable:no-console */
export default () => (
  <View style={{flex:1}}>
    <WingBlank>
      <WhiteSpace  style={{
        marginTop: 40,
      }}/>
      <Button>default</Button>
      <WhiteSpace />
      <Button disabled>default disabled</Button>
      <WhiteSpace />

      <Button type="primary" >primary</Button>
      <WhiteSpace />
      <Button type="primary" loading >primary</Button>
      <WhiteSpace />
      <Button type="primary" disabled>
        primary disabled
      </Button>
      <WhiteSpace />

      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disabled>
        warning disabled
      </Button>
      <WhiteSpace />

      <Button loading whiteLoading={false}>loading button</Button>

      <WhiteSpace />

      <Button activeStyle={false}>无点击反馈</Button>
      <WhiteSpace />
      {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}
      <View style={{flexDirection:"row",  }}>
        <View style={{flex:1}}>
            <Button type="tab" >送餐</Button>
        </View>
        <View style={{flex:1}}>
            <Button type="tab" tabSelected={true}>自取</Button>
        </View>
      </View>
      <WhiteSpace />
      <WingBlank
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button type="tab" >Home</Button>

        <Button type="tab" >Work</Button>

        <Button type="tab" tabSelected>Other</Button>

      </WingBlank>
      <WingBlank
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button type="ghost">ghost</Button>
        <Button type="ghost" disabled>
          ghost disabled
        </Button>
        <Button type="ghost" size="small">
          ghost
        </Button>
      </WingBlank>

    </WingBlank>
    <Button type="bottom" style={{bottom:0,position:'absolute'}} >bottom</Button>
  </View>
);
