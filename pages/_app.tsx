import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {AnimatePresence} from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
      <main className="flex flex-col w-[100vh] h-[100vh]">
          <AnimatePresence mode="wait" initial={false} >
              <Component {...pageProps} key={router.asPath}/>
          </AnimatePresence>
      </main>
  )
}
