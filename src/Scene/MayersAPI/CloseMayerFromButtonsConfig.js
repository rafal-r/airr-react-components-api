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
                {
                    type: View,
                    props: {
                        name: "view-1",
                        children: (
                            <div className="foo-wrap">content of the view</div>
                        )
                    }
                }
            ]
        };
    }

    componentDidMount() {
        super.componentDidMount();

        this.openMayer({
            name: "mayer1",
            appearFrom: "top",
            leaveTo: "top",
            children: <div>the content of the mayer</div>,
            buttons: [
                {                  
                    children: <span>i do nothing</span>
                },
                {
                    close: true,
                    children: <span>i can close mayer</span>
                }
            ]
        });
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
