import {useLayoutEffect, useState} from "react";
import {WindowSize} from "@/hooks/types";
import {useIsomorphicEffect} from "@/hooks/useIsomorphicEffect";

export function useWindowSize(): WindowSize {
    const [size, setSize] =  useState<WindowSize>([0, 0])
    const isomorphicEffect = useIsomorphicEffect()

    isomorphicEffect(()=>{
        function updateSize() {
            // setSize([window.innerWidth, window.innerHeight])
            setSize([window.innerWidth, document.documentElement.offsetHeight])
        }
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, []);

    return size
}
