import React from "react";
function Tooolbar(props){
    return(
     <div className="toolbar">
         <i className="fa fa-asterisk" aria-hidden="true"></i>
         {props.text}
         <i className={props.icon} onClick={props.onClick}/>
     </div>
    )
}
export default Tooolbar;