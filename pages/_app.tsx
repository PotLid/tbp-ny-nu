import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {AnimatePresence} from "framer-motion";
import {Background} from "@/components/Background";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <main>
            <div className="antialiased relative flex flex-col justify-center items-center px-8 py-12 z-10 min-h-screen w-full">
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.asPath}/>
                </AnimatePresence>
            </div>
            <Background isMain={router.asPath === "/"} />
        </main>
    )
}
