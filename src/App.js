import React, { useState } from 'react';
import Preview from "./component/Preview";
import Toolbar from "./component/Toolbar";
import Editor from "./component/Editor";
import placeholder from "./component/plac";

function App() {

const[markdown,setMarkdow]=useState(placeholder);
const[editorMaximized,setmaximize]=useState(false);
const[previewMaximize,setpreviewmax]=useState(false);

function handleChange(e){
  setMarkdow(e.target.value);
}
function handleEditorMaximize(){
  setmaximize(!editorMaximized);
}
function handlePreviewMaximize(){
  setpreviewmax(!previewMaximize);
}

const classes=editorMaximized?['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
:previewMaximize?['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
             :['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

  return (
    <div >
    <div className={classes[0]}>
          <Toolbar
            icon={classes[2]}
            onClick={handleEditorMaximize}
            text='Editor'
          />
          <Editor markdown={markdown} onChange={handleChange} />
        </div>
        <div className='converter' />
        <div className={classes[1]}>
          <Toolbar
            icon={classes[2]}
            onClick={handlePreviewMaximize}
            text='Previewer'
          />
          <Preview markdown={markdown} />
        </div>
      </div>
  );
}

export default App;
