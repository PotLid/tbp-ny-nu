import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import {Background} from "@/components/Background";
import Head from "next/head";
import {useEffect, useState} from "react";

export default function App({Component, pageProps, router}: AppProps) {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(true);
    }, [])


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                >
                    <Component {...pageProps} isLoaded={isLoaded} key={router.asPath}/>
                </AnimatePresence>
                <Background isLoaded={isLoaded} isMain={router.asPath === "/"}/>
            </main>
        </>

    )
}
