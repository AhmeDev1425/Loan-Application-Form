
export default function InputComponent({value, handleChange, inputName}) {

    return(

        <>
            <label>{inputName}</label>
                <input
                type="number"
                value={value}
                onChange={(e)=> {
                    handleChange(e.target.value)
                    }}
                placeholder={`What is your ${inputName} : `}
                />

        </>
    )
    
}
