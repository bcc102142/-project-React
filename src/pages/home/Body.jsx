
import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Recommend from './recommend/Recommend'

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '音单' },
  { title: '推荐' },
  { title: '分类' },
];

const TabExample = () => (
  <div className="flex1">
    <StickyContainer >
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
        swipeable={false}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
          <Recommend></Recommend>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
  </div>
);

export default TabExample;