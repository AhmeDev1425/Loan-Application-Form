export default function LoanForm() {

  return (
    <div className="loan-container">
      <h1>Loan Request</h1>
      {/* name - phone - age Check employee - salary   */}
      <form 
      // onSubmit={} 
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="loan-input">
          <label>Full Name</label>

          <input
            type="text"
            // value={}
            // onChange={}
            placeholder="What is your full name: "
          />
        </div>

        <div className="loan-input">
          <label>Age</label>
          <input
            type="number"
            // value={}
            // onChange={}
            placeholder="What is your age: "
          />
          </div>

        <div className="loan-input">
          <label>Phone</label>
          <input
            type="number"
            // value={}
            // onChange={}
            placeholder="What is your phone number: "
          />
        </div>

        <div className="loan-input">
          <label>Salary</label>
          <input
            type="number"
            // value={}
            // onChange={}
            placeholder="What is your phone number: "
          />
        </div>

        <div className="checkbox-container">
          <label>
          <input
            type="checkbox"
            // checked={}
            // onChange={}
            />
              I,m an Employee </label>
        </div> 

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}
