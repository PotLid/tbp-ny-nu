import {MainLayout} from "@/components/layout";
import {NavBar} from "@/components/nav";
import Footer from "@/components/Footer/footer";

export default function Home() {
    return (
        <MainLayout className="relative z-10">
            <div className="relative">
                landing
                <NavBar/>
            </div>
            <Footer/>
        </MainLayout>
    )
}
