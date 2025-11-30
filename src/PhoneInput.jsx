
export default function PhoneInput({value, handleChange}) {

    return(

        <>
            <label>Phone</label>
                <input
                type="number"
                value={value}
                onChange={(e)=> {
                    handleChange(e.target.value)
                    }}
                placeholder="What is your phone number: "
                />

        </>
    )
    
}