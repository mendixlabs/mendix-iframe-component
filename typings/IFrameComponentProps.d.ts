/**
 * This file was generated from IFrameComponent.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export type MiscLoadingEnum = "notSet" | "auto" | "eager" | "lazy";

export type MiscReferrerPolicyEnum = "notSet" | "noReferrer" | "noReferrerWhenDowngrade" | "origin" | "orginWhenCrossOrigin" | "sameOrigin" | "strictOrigin" | "strictOriginWhenCrossOrigin" | "unsafeUrl";

export type MiscSandboxEnum = "notSet" | "allowForms" | "allowModals" | "allowOrientationLock" | "allowPointerLock" | "allowPopups" | "allowPopupsToEscapeSandbox" | "allowPresentation" | "allowSameOrigin" | "allowScripts" | "allowStorageAccessByUserActivation" | "allowTopNavigation" | "allowTopNavigationByUserActivation";

export interface IFrameComponentContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    urlExpression: DynamicValue<string>;
    srcExpression?: DynamicValue<string>;
    uiSizeWidth?: DynamicValue<string>;
    uiSizeHeight?: DynamicValue<string>;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandbox: MiscSandboxEnum;
    miscAllowExpression?: DynamicValue<string>;
    onLoad?: ActionValue;
    onMouseOver?: ActionValue;
    onMouseOut?: ActionValue;
}

export interface IFrameComponentPreviewProps {
    class: string;
    style: string;
    urlExpression: string;
    srcExpression: string;
    uiSizeWidth: string;
    uiSizeHeight: string;
    miscLoading: MiscLoadingEnum;
    miscReferrerPolicy: MiscReferrerPolicyEnum;
    miscSandbox: MiscSandboxEnum;
    miscAllowExpression: string;
    onLoad: {} | null;
    onMouseOver: {} | null;
    onMouseOut: {} | null;
}
