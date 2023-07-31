import React, { useState } from "react";

function App() {

  const readGoogleSheet = () => {

    fetch('https://sheet2api.com/v1/qtrYQuBZSjuv/googlehowto')
      .then((response) => response.json())
      .then((data) => console.log(data));

  }

  return (
    <React.Fragment>
      <button onClick={() => { readGoogleSheet() }}>react</button>
    </React.Fragment>
  );
}

export default App;
