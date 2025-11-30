
import OverlayApp from './OverlayApp'
import { useState } from "react";
import PhoneInput from './PhoneInput'

export default function LoanForm() {
  const [showModel, setShowModel]  = useState(false)
  const [showError, setShowError]  = useState(false)
  const [loanInputs, setLoanInputs] = useState(
    {
      name:"",
      phone:"",
      age:"",
      isEmployee:"false", 
      salary:""

    }
  )
  
  function handlePhoneInput(value) {
    setLoanInputs({...loanInputs, phone:value})
  }
  
  

  return (
    <>
      <div className="loan-container">
        <h1>Loan Request</h1>

        <form 
        onSubmit={(e)=>{
          e.preventDefault()
          if (loanInputs.name){

            setShowModel(true)
            return
          }

          setShowError(true)
          }
        } 

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
            <PhoneInput handleChange={handlePhoneInput}/>
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
            // disabled={!(loanInputs.name && loanInputs.age && loanInputs.salary)}
            type="submit">Submit Request</button>
        </form>
      </div>
      
      <div
        onClick={()=>{
        showModel === true? setShowModel(false):""
        showError === true? setShowError(false):""
        console.log("aaaaaaaaaaa",showModel)

        }}
      >
        <OverlayApp isVisable={showModel} isError={showError}/>
      </div>
    </>

  );
}
