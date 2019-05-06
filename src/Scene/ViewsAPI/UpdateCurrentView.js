import React from "react";
import ReactDOM from "react-dom";
import { Scene } from "airr-react";
import HelloWorld, { HelloWorldViewName } from "../../views/HelloWorldView";

import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: HelloWorldViewName,
            views: [this.getFreshViewConfig(HelloWorldViewName)]
        };
    }

    updateCurrentView = e => {
        this.changeView(HelloWorldViewName, {
            children: (
                <h2 style={{ textAlign: "center" }}>
                    The button was removed and this header was render instead.
                    <br />
                    Background color also changed.
                </h2>
            ),
            style: { backgroundColor: "yellow" }
        });
    };

    viewsConfig = {
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                children: (
                    <button
                        onClick={this.updateCurrentView}
                        style={{ fontSize: "2rem" }}
                    >
                        Click me
                    </button>
                )
            }
        }
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
