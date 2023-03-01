import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import {Background} from "@/components/Background";
import Head from "next/head";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.asPath}/>
                </AnimatePresence>
                <Background isMain={router.asPath === "/"}/>
            </main>
        </>

    )
}
