import React from "react";
import { ViewWrapper } from "airr-react";

export const SimpleViewName = "simple-view";
export default class SimpleView extends ViewWrapper {
    content = () => {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                {" "}
                {this.props.handleButtonClick && (
                    <button
                        onClick={this.props.handleButtonClick}
                        style={{
                            fontSize: "2rem"
                        }}
                    >
                        Click me
                    </button>
                )}
            </div>
        );
    };
}
