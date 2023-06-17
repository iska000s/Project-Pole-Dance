import React from "react";

const container = document.getElementById("app");
const root = createRoot(container);

const App = () => {
    return(
        <h1> app komponent</h1>
    )
}

root.render(<App/>);
