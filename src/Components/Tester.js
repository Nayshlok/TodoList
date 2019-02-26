import React from 'react';
import OpenButton from './OpenButton';
import Checklist from './CheckList';

const checkListData = [
  {
    id: 'item1',
    text: 'Do one'
  },
  {
    id: 'item2',
    text: 'Do two'
  },
  {
    id: 'item3',
    text: 'Do three'
  },
  {
    id: 'item4',
    text: 'Do four'
  }
]

const selectedIds = [
  'item1',
  'item3'
]

function doSomething(item){
  alert('Something: ' + item);
}

export default function Tester(){
  return (
    <div>
      <Checklist items={checkListData} selectedIds={selectedIds} checkAction={doSomething}/>
      <OpenButton listenAction={doSomething} title="Choose a Checklist"/>
    </div>
  )
}

