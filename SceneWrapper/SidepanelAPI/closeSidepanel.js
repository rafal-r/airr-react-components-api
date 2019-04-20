import React from "react";
import ReactDOM from "react-dom";
import { SceneWrapper, Sidepanel } from "airr-react";
import SimpleView, { SimpleViewName } from "../../src/views/SimpleView";
import "airr-react/dist/airr-react.css";

class CustomSidepanel extends Sidepanel {
    content() {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    paddingTop: "2rem",
                    color: "white",
                    backgroundColor: "purple"
                }}
            >
                I am the Sidepanel
                <br />
                <button onClick={this.props.hideSidepanel}>hide me</button>
            </div>
        );
    }
}
export default class SimpleScene extends SceneWrapper {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: SimpleViewName,
            sidepanel: {
                type: CustomSidepanel,
                props: {
                    side: "top",
                    hideSidepanel: this.hideSidepanel,
                    enabled: false,
                    sizeFactor: 1 / 3,
                    animationTime: 200
                }
            },
            views: [this.getFreshViewConfig(SimpleViewName)]
        };
    }

    viewsConfig = {
        [SimpleViewName]: {
            type: SimpleView,
            props: {
                name: SimpleViewName
            }
        }
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
