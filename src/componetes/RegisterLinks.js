import { useState } from "react"
export const RegisterLinks=()=>{
    const [arrow,setArrow]=useState(false);
    function arrowFun(){
        setArrow(!arrow);
    }
   return(
    <>
    <div>
        <div>
          <h2></h2>
        </div>
        <div>
           <div>
                <h3>Event1</h3>
             {arrow?<div onClick={()=>arrowFun()}><span class="material-symbols-outlined">
expand_less
</span></div>:<div onClick={()=>arrowFun()}><span class="material-symbols-outlined">keyboard_arrow_down</span></div>}
           </div>
        </div>
    </div>
    </>
   )
}