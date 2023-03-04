import {useLayoutEffect, useState} from "react";
import {WindowSize} from "@/hooks/types";

export function useWindowSize(): WindowSize {
    const [size, setSize] = useState<WindowSize>([0,0])
    useLayoutEffect(()=>{
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, []);
    return size
}
