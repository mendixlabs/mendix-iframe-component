import { createElement, ReactElement } from "react";

import { IFrameComponentContainerProps } from "../typings/IFrameComponentProps";

import "./ui/IFrameComponent.scss";
import classNames from "classnames";
import Iframe from "react-iframe";
import { IIframe } from "react-iframe/types";
import { enumReferrer, enumSandbox, executeAction, getDynamicValue } from "./util";

const DEFAULT_CLASSNAME = "mendix-iframe-component";

const IFrameComponent = ({
    urlExpression,
    srcExpression,
    uiSizeWidth,
    uiSizeHeight,
    miscLoading,
    miscSandbox,
    miscReferrerPolicy,
    miscAllowExpression,
    onLoad,
    onMouseOver,
    onMouseOut,
    class: className,
    style: styles,
    name
}: IFrameComponentContainerProps): ReactElement => {
    // const url = urlExpression.status === ValueStatus.Available ? urlExpression.value : "";
    const url = getDynamicValue("", urlExpression);
    const src = getDynamicValue(null, srcExpression);
    const width = getDynamicValue(undefined, uiSizeWidth);
    const height = getDynamicValue(undefined, uiSizeHeight);
    const loading = miscLoading === "notSet" ? undefined : miscLoading;
    const allow = getDynamicValue(undefined, miscAllowExpression);
    const referrerpolicy = enumReferrer(miscReferrerPolicy);
    const sandbox = enumSandbox(miscSandbox);

    if ((!url || url === null) && !src) {
        return <div className={classNames(DEFAULT_CLASSNAME, name, "no-valid-source")} />;
    }

    const iframeProps: IIframe = {
        url,
        className,
        width,
        height,
        loading,
        sandbox,
        referrerpolicy,
        allow,
        styles,
        onLoad: () => executeAction(onLoad),
        onMouseOver: () => executeAction(onMouseOver),
        onMouseOut: () => executeAction(onMouseOut)
    };

    if (src !== null) {
        iframeProps.src = src;
    }

    return <Iframe {...iframeProps} />;
};

export default IFrameComponent;
