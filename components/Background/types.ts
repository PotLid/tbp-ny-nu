import {FunctionComponent} from "react";

type BackgroundProps = {
    isMain: boolean,
    className?: string | null,
    isLoaded?: boolean,
}

export type BackgroundComponent = FunctionComponent<BackgroundProps>
