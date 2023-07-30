import React, { useState } from "react";

function App() {

  const readGoogleSheet = () => {

    fetch('https://sheetdb.io/api/v1/5rctxpm3syzj9')
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
