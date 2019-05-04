import React from "react";
import ReactDOM from "react-dom";
import { SceneWrapper } from "airr-react";
import HelloWorld, {
    viewName as HelloWorldViewName
} from "../../views/HelloWorld";
import CommonView, {
    getNextCommonViewName2,
    viewNameTpl as CommonViewNameTpl
} from "../../views/CommonView";
import "airr-react/dist/airr-react.css";

export default class SimpleScene extends SceneWrapper {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            activeViewName: HelloWorldViewName,
            views: this.props.views && [
                this.getFreshViewConfig(CommonViewNameTpl),
                this.getFreshViewConfig(HelloWorldViewName)
            ]
        };
    }

    goToAnotherView = e => {
        const firstViewName = this.state.views[0].props.name;

        this.changeView(firstViewName, {
            children: (
                <h2 style={{ textAlign: "center" }}>
                    We moved back to previous view.
                </h2>
            )
        });
    };

    viewsConfig = {
        [HelloWorldViewName]: {
            type: HelloWorld,
            props: {
                name: HelloWorldViewName,
                title: "This is Title in navbar",
                children: (
                    <button
                        onClick={this.goToAnotherView}
                        style={{ fontSize: "2rem" }}
                    >
                        Click me
                    </button>
                )
            }
        },
        [CommonViewNameTpl]: {
            type: CommonView,
            nameGenerator: getNextCommonViewName2,
            props: { name: null },
            sceneProps: {
                //to change scene state when needed (eg. when activated)
            }
        }
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SimpleScene />, rootElement);
