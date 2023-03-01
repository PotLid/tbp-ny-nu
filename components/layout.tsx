import {motion} from 'framer-motion'
import {NavBar, Return} from "@/components/nav";
export function SubLayout({children, title}: {children: React.ReactNode, title?: string | null}) {
    return (
        <motion.div
            initial={{ transform: "translateY(.25rem)", opacity: 0 }}
            animate={{ transform: "translateY(0)", opacity: 1 }}
            exit={{ transform: "translateY(.25rem)", opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 325,
                damping: 40,
            }}
        >
            {children}
            <Return />
        </motion.div>
    )
}

export function MainLayout({children, title}: {children: React.ReactNode, title?: string}) {
    return (
        <motion.div
            initial={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
            animate={{ filter: "blur(0)", transform: "scale(1)", opacity: 1 }}
            exit={{ filter: "blur(.1rem)",transform: "scale(.95)", opacity: 0 }}
            transition={{
                    type: "spring",
                    stiffness: 325,
                    damping: 40,
                }}
        >
            <NavBar />
            {children}
        </motion.div>
    )
}