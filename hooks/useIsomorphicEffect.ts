import {useEffect, useLayoutEffect} from "react";

export function useIsomorphicEffect(){
    return typeof window !== 'undefined' ? useLayoutEffect : useEffect
}
