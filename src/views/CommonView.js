import React from "react";
import { View } from "airr-react";

export const CommonViewNameTpl = "common-view-*";
const viewClass = "common-view";

export const getNextCommonViewName = views => {
    return CommonViewNameTpl.replace("*", views.length + 1);
};

export const countCommonViews = views => {
    return views.reduce((prev, curr) => {
        if (curr.type === CommonView) {
            prev += 1;
        }

        return prev;
    }, 0);
};

export default class CommonView extends View {
    content() {
        const content =
            typeof this.props.children === "function"
                ? this.props.children()
                : this.props.children;

        return <div className={viewClass}>{content}</div>;
    }
}
