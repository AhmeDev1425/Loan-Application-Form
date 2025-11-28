
// import OverlayApp from './OverlayApp'
import { useState } from "react";

export default function LoanForm() {

  const [loanInputs, setLoanInputs] = useState(
    {
      name:"",
      phone:"",
      age:"",
      isEmployee:"false", 
      salary:""

    }
  )

  return (
    <>
      <div className="loan-container">
        <h1>Loan Request</h1>
        <form 
        // onSubmit={} 
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="loan-input">
            <label>Full Name</label>

            <input
              type="text"
              value={loanInputs.name}
              onChange={(e)=> {setLoanInputs({...loanInputs,name:e.target.value})}}
              placeholder="What is your full name: "
            />
          </div>

          <div className="loan-input">
            <label>Phone</label>
            <input
              type="number"
              value={loanInputs.phone}
              onChange={(e)=> {setLoanInputs({...loanInputs,phone:e.target.value})}}
              placeholder="What is your phone number: "
            />
          </div>


          <div className="loan-input">
            <label>Age</label>
            <input
              type="number"
              value={loanInputs.age}
              onChange={(e)=> {setLoanInputs({...loanInputs,age:e.target.value})}}
              placeholder="What is your age: "
            />
            </div>

          <div className="loan-input">
            <label>Salary</label>
            <input
              type="number"
              value={loanInputs.salary}
              onChange={(e)=> {setLoanInputs({...loanInputs,salary:e.target.value})}}

              placeholder="What is your phone number: "
            />
          </div>

          <div className="checkbox-container">
            <label>
            <input
              type="checkbox"
              checked={!!loanInputs.isEmployee}
              onChange={(e)=> {setLoanInputs({...loanInputs,isEmployee:e.target.checked})}}

              />
                I,m an Employee </label>
          </div> 

          <button 
            disabled={!(loanInputs.name && loanInputs.age && loanInputs.salary)}
            type="submit">Submit Request</button>
        </form>
      </div>
      
      <div>
        {/* <OverlayApp/> */}
      </div>
    </>

  );
}
