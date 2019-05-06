import React from "react";
import ReactDOM from "react-dom";
import { Scene, View } from "airr-react";
import "airr-react/dist/airr-react.css";
import "../../css/common.css";

export default class SimpleScene extends Scene {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: "view-1",
            views: [
                this.getFreshViewConfig("view-1"),
                this.getFreshViewConfig("view-2")
            ]
        };
    }

    goToAnotherView = e => {
        this.changeView("view-2");
    };

    viewsConfig = {
        "view-1": {
            type: View,
            props: {
                name: "view-1",
                children: (
                    <div className="foo-wrap"><button
                        onClick={this.goToAnotherView}
                        style={{ fontSize: "2rem" }}
                    >
                        Click me
                    </button></div>
                )
            }
        },
        "view-2": {
            type: View,
            props: { name: "view-2", children: <div className="foo-wrap">another view content</div> }
        }
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
