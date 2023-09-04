import { Links } from "./Links"

export const RegisterLinks=()=>{
    const data=[{"link":1},{"link":2},{"link":3},{"link":4},{"link":5},{"link":6},{"link":7}]
   return(
    <>
    <div>
        <div>
          <h2></h2>
        </div>
        <div>
           {data.map((link)=>{
            return(
                <div>
              <Links data={link.link}></Links>
           </div>
            )
           })}
        </div>
    </div>
    </>
   )
}