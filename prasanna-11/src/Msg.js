let Msg=()=>{
   let student_Name="Vidya";
 let student_Address="Bangalore";
 let student_Details={
    contact:987654321,
    reg:1985187,
    fees:25000
        } 
return <div>
<h1> {student_Name} </h1> 
 <h1>{student_Address}</h1>
<h1>{student_Details.contact}</h1>
<label> <input type = "text"/><h2>{student_Details.fees}</h2></label>
 </div>
}
export default Msg