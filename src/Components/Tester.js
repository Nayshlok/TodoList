import React from 'react';
import Testing from './OpenButton';

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
      <Testing listenAction={doSomething} title="Choose a Checklist"/>
    </div>
  )
}

