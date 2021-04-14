import { DynamicValue, ValueStatus, ActionValue } from "mendix";
import { MiscReferrerPolicyEnum, MiscSandboxEnum } from "../../typings/IFrameComponentProps";

type ReferrerType =
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";

type SandboxType =
    | "allow-forms"
    | "allow-modals"
    | "allow-orientation-lock"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-presentation"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-storage-access-by-user-activation"
    | "allow-top-navigation"
    | "allow-top-navigation-by-user-activation";

const enumReferrerMap: { [key: string]: ReferrerType } = {
    noReferrer: "no-referrer",
    noReferrerWhenDowngrade: "no-referrer-when-downgrade",
    origin: "origin",
    orginWhenCrossOrigin: "origin-when-cross-origin",
    sameOrigin: "same-origin",
    strictOrigin: "strict-origin",
    strictOriginWhenCrossOrigin: "strict-origin-when-cross-origin",
    unsafeUrl: "unsafe-url"
};

const sandboxMap: { [key: string]: SandboxType } = {
    allowForms: "allow-forms",
    allowModals: "allow-modals",
    allowOrientationLock: "allow-orientation-lock",
    allowPointerLock: "allow-pointer-lock",
    allowPopups: "allow-popups",
    allowPopupsToEscapeSandbox: "allow-popups-to-escape-sandbox",
    allowPresentation: "allow-presentation",
    allowSameOrigin: "allow-same-origin",
    allowScripts: "allow-scripts",
    allowStorageAccessByUserActivation: "allow-storage-access-by-user-activation",
    allowTopNavigation: "allow-top-navigation",
    allowTopNavigationByUserActivation: "allow-top-navigation-by-user-activation"
};

export const enumReferrer = (value: MiscReferrerPolicyEnum): ReferrerType | undefined => {
    if (value === "notSet") {
        return undefined;
    }
    return enumReferrerMap[value];
};

export const enumSandbox = (value: MiscSandboxEnum): SandboxType | undefined => {
    if (value === "notSet") {
        return undefined;
    }
    return sandboxMap[value];
};

export const getDynamicValue = <P, T>(alternative: P, dynamicValue?: DynamicValue<T>): T | P => {
    if (dynamicValue && dynamicValue.status === ValueStatus.Available) {
        return dynamicValue.value;
    }
    return alternative;
};

export const executeAction = (action?: ActionValue): void => {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
};
