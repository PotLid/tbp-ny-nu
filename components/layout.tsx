import Head from "next/head";
import {motion} from 'framer-motion'
import {title as metaTitle} from "@/lib/info";


export function Article({children}:{children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    )
}

function Frame({children, className}:{children: React.ReactNode | null, className?: string}){
    return (
        <div className={`antialiased px-8 py-12 z-10 min-h-screen w-full h-full relative flex flex-col items-center ${className}`}>
            {children}
        </div>
    )
}

export function SubLayout({children, title, className}: {children: React.ReactNode, title?: string, className?: string}) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | ${metaTitle}` : metaTitle}</title>
            </Head>
            <motion.div
                className={className}
                initial={{ transform: "translateY(.75rem)", opacity: 0 }}
                animate={{ transform: "translateY(0)", opacity: 1 }}
                exit={{ transform: "translateY(.75rem)", opacity: 0 }}
                transition={{
                    type: "ease-in-out",
                    duration: .325,
                }}
            >
                <Frame className="justify-center">
                    {children}
                </Frame>
            </motion.div>
        </>
    )
}

export function MainLayout({children, title, className}: {children: React.ReactNode, title?: string, className?: string}) {
    return (
        <>
            <Head>
                <title>{title ? `${metaTitle} | ${title}` : metaTitle}</title>
            </Head>
            <motion.div
                className={className}
                initial={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
                animate={{ filter: "blur(0)", transform: "scale(1)", opacity: 1 }}
                exit={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
                transition={{
                    type: "ease-in-out",
                    duration: .325,
                }}
            >
                <Frame className="justify-between before:content-[''] before:block">
                    {children}
                </Frame>
            </motion.div>
        </>

    )
}
