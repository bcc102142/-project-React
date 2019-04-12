
import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Recommend from './recommend/Recommend'
import Albums from './albums/Albums.jsx'
import Catalogs from './catalogs/Catalogs.jsx'


function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '音单',sub:'1' },
  { title: '推荐',sub:'2' },
  { title: '分类',sub:'3' },
];

const TabExample = () => (
  <div className="flex1" style={{flex:'0 0 auto'}}>
    <StickyContainer >
      <Tabs tabs={tabs}
        initialPage={1}
        renderTabBar={renderTabBar}
        swipeable={false}
      >
        <div style={{height: 'auto'}}>
         <Albums></Albums> 
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
        <Recommend></Recommend>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto' }}>
        <Catalogs></Catalogs>
      
        </div>
      </Tabs>
    </StickyContainer>
  </div>
);

export default TabExample;