import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import {Background} from "@/components/Background";
import Head from "next/head";
import {useEffect, useState} from "react";
import {useWindowSize} from "@/hooks/useWindowSize";

export default function App({Component, pageProps, router}: AppProps) {
    const [isLoaded, setLoaded] = useState(false);
    const [initialHeight, setHeight] = useState(0)
    const [,windowHeight] = useWindowSize()

    useEffect(()=>{
        setLoaded(true)
        setHeight(window.innerHeight)
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main style={{height: windowHeight === 0 ? initialHeight : windowHeight, overflowY: "scroll" }}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                >
                    <Component {...pageProps} isLoaded={isLoaded} key={router.asPath}/>
                </AnimatePresence>
                <Background isMain={router.asPath === "/"}/>
            </main>
        </>

    )
}
