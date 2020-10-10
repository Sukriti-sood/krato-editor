import React from "react";

let marked=require('marked')


    
function Preview(props){


    return(
        <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)
      }}
      id='preview'
    />
    )
}
export default Preview;