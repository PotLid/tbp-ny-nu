import {motion} from 'framer-motion'
import {NavBar, Return} from "@/components/nav";
export function SubLayout({children, title}: {children: React.ReactNode, title?: string | null}) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 320,
                damping: 40,
            }}
        >
            {children}
            <Return />
        </motion.div>
    )
}

export function MainLayout({children, title}: {children: React.ReactNode, title?: string | null}) {
    return (
        <motion.div
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0)", opacity: 1 }}
            exit={{ filter: "blur(10px)", opacity: 0 }}
            transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 40,
                }}
        >
            <NavBar />
            {children}
        </motion.div>
    )
}