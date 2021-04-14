import { createElement, ReactElement } from "react";
import { IFrameComponentPreviewProps } from "../typings/IFrameComponentProps";

declare function require(name: string): string;

const preview = (_props: IFrameComponentPreviewProps): ReactElement => {
    return <div />;
};

export default preview;

export function getPreviewCss(): string {
    return require("./ui/IFrameComponent.scss");
}
