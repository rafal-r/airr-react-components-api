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

	updateScene = e => {
		this.changeView(
			HelloWorldViewName,
			{
				children: (
					<h2 style={{ textAlign: "center" }}>
						The scene was altered. Navbar was added.
					</h2>
				)
			},
			{
				navbar: true,
				style: { backgroundColor: "green" }
			}
		);
	};

    viewsConfig = {
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                title: "This is Title in navbar",
                children: (
                    <button
                        onClick={this.updateScene}
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
