import Head from "next/head";
import {motion} from 'framer-motion'
import {Return} from "@/components/nav";
import {title as metaTitle} from "@/lib/info";


export function Article({children}:{children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
    )
}

export function SubLayout({children, title}: {children: React.ReactNode, title?: string | null}) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | ${metaTitle}` : metaTitle}</title>
            </Head>
            <motion.div
                initial={{ transform: "translateY(.25rem)", opacity: 0 }}
                animate={{ transform: "translateY(0)", opacity: 1 }}
                exit={{ transform: "translateY(.25rem)", opacity: 0 }}
                transition={{
                    type: "ease",
                    duration: .325,
                }}
            >
                {children}
                <Return />
            </motion.div>
        </>
    )
}

export function MainLayout({children, title}: {children: React.ReactNode, title?: string}) {
    return (
        <>
            <Head>
                <title>{title ? `${metaTitle} | ${title}` : metaTitle}</title>
            </Head>
            <motion.div
                initial={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
                animate={{ filter: "blur(0)", transform: "scale(1)", opacity: 1 }}
                exit={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
                transition={{
                    type: "ease",
                    duration: .325,
                }}
            >
                {children}
            </motion.div>
        </>

    )
}
