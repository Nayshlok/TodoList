import React from 'react';
import electron from 'electron';

const { dialog } = electron.remote;

async function openDialogue(title){
  const path = await dialog.showOpenDialog({title: title});
  return path.filePaths;
}

function OpenButton({ listenAction, title }){

  return (
    <div>
      <button onClick={() => listenAction(await openDialogue(title))}>Open</button>
    </div>
  )
}

export default OpenButton;