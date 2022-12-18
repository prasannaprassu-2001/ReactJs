import React from 'react'
let Comp2=(prop)=>{


    return <div>
<pre>{JSON.stringify (prop)}</pre>
<h3>Student_Name:{prop.prop1}</h3>
<h3>Student_fee:{prop.prop2}</h3>
    </div>
}
export default Comp2