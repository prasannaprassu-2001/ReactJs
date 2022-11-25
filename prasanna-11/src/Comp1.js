import React from 'react'
import Comp2 from "./Comp2"
let Comp1=()=>{
let st_Name='Chana';
let st_fee=40000;

    return <div>
<Comp2 prop1={st_Name}  prop2={st_fee}/>

    </div>
}
export default Comp1