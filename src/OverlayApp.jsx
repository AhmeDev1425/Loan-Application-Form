import React, { useState } from "react";

export default function OverlayApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOverlay(true);

    setTimeout(() => {
      setShowOverlay(false);
      setName("");
      setEmail("");
    }, 2000);
  };

  return (
    <>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-message">Requestion has sent ✅</div>
        </div>
      )}
      {/* <div className="app-container">
        <h2>Simple Form</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </>
  );
}
