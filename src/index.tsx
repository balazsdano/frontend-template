import * as React from "react";
import ReactDOM from "react-dom";

function init() {
    const container = document.getElementById("container");

    if (container == null) {
        throw Error("App container not found");
    }

    renderApp(container);
}

function renderApp(container: Element) {
    ReactDOM.render(<MainComponent />, container);
}

function MainComponent() {
    return (
        <div>Hello, World!</div>
    );
}

init();

