import React from "react";
import ReactDOM from "react-dom";
import { SceneWrapper, Sidepanel } from "airr-react";
import SimpleView, { SimpleViewName } from "../../src/views/SimpleView";
import "airr-react/dist/airr-react.css";

const SidepanelContent = (
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
    </div>
);
const SidepanelConfig = {
    type: Sidepanel,
    props: {
        side: "top",
        children: SidepanelContent,
        enabled: false,
        sizeFactor: 1 / 3,
        animationTime: 200
    }
};

export default class SimpleScene extends SceneWrapper {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: SimpleViewName,
            sidepanel: SidepanelConfig,
            views: [this.getFreshViewConfig(SimpleViewName)]
        };
    }

    handleButtonClick = () => {
        return this.openSidepanel();
    };

    viewsConfig = {
        [SimpleViewName]: {
            type: SimpleView,
            props: {
                name: SimpleViewName,
                openSidepanel: this.openSidepanel
            }
        }
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
