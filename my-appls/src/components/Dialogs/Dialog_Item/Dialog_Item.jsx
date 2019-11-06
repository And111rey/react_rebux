import React from 'react';
import { NavLink } from "react-router-dom"


const Dialog_Item = (props) => {
    return(
        <div className="item">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
} 



export { Dialog_Item }