import { useState } from "react";

export default function Accordion(props){

    const [isActive, setIsActive] = useState(props.i===0?true:false);


    return(
            <div className="accordion">
                <div className="title" onClick={()=>{setIsActive(!isActive)}}>
                  <div>{props.title}</div>
                  <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="body">{props.body}</div>}
            </div>
    )
}