import React from 'react'

let Function=(props)=>{


return <div>
<pre>{JSON.stringify (props)}</pre>
<h3>Account_Name:{props.info.acc_Name}</h3>
<h3>Account_Number:{props.info.acc_Number}</h3>
</div>
}
export default Function