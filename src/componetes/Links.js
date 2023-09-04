import { useState } from "react";
export const Links=(props)=>{
    const {link}=props.data;
    const [arrow,setArrow]=useState(false);
    function arrowFun(){
        setArrow(!arrow);
    }
    return(
        <>
          <h3>Event1{link}</h3>
             {arrow?<div onClick={()=>arrowFun()}><span class="material-symbols-outlined">
expand_less
</span> 
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeYMTXDyDF6TIqnss8MC5G6AoTU1-H1q0qHZEsJDEFnuZ1Ywg/viewform?usp=sf_link">clk</a></div>:
<div onClick={()=>arrowFun()}>
<span class="material-symbols-outlined">keyboard_arrow_down</span></div>}
        </>
    )
}