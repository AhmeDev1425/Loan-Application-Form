// import React, { useState } from "react";

export default function OverlayApp(props) {
  if (props.isVisable){
    return (
      <>
        {(
            <div className="overlay">
                <div className="overlay-message">Requestion has sent ✅</div>
            </div>
        )}
        
      </>
    );
  }
  if (props.isError){
    return (
      <>
        {(
            <div className="overlay">
                <div className="overlay-message">Requestion cannot sent ××××</div>
            </div>
        )}
        
      </>
    );
  }
  }
