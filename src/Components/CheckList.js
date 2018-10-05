import React from 'react';

function CheckList({ items,  selectedIds, checkAction }){

  const checkBoxes = items.map(item => {
    const selected = selectedIds.some(id => id === item.id);
    return (
      <span>
        <input 
          id={item.id}
          key={item.id}
          type="checkbox"
          checked={selected}
          onChange={() => checkAction(item)}/>
        <label htmlFor={item.id}>{item.text}</label>
      </span>
    )
  })

  return (
    <div>
      Hi there
      {checkBoxes}
    </div>
  )
}

export default CheckList;