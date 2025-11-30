import { useContext } from "react"
import { LoanInputContext } from "./contexts/LoanInputContext"

export default function InputComponent() {

    const inputContext = useContext(LoanInputContext)
    return(

        <>
            <label>{inputContext.inputName}</label>
                <input
                type="number"
                value={inputContext.inputValue}
                onChange={(e)=> {
                    inputContext.handleChange(e.target.value)
                    }}
                placeholder={`What is your ${inputContext.inputName} : `}
                />

        </>
    )
    
}
