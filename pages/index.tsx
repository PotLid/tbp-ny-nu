import {MainLayout} from "@/components/layout";
import {NavBar} from "@/components/nav";
import Footer from "@/components/Footer/footer";
import {globalClass} from "@/styles/styles";

import Image from "next/image";

import tbpLogo from './logo-bg.png';

export default function Home() {

    return (
        <MainLayout className="relative z-10">
            <header className="relative flex flex-col items-center max-w-full text-center" style={{backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 25%, rgba(0,0,0,0) 55%)"}}>
                <div className="w-[5.5rem] h-[5.5rem] leading-[5.5rem] order border-white rounded-full">
                    <Image src={tbpLogo} alt="Tau Beta Pi Logo" />
                </div>
                <div className={`max-w-full border-solid border-white border-y ${globalClass}`}>
                    <div className="px-12 py-8 max-h-[40rem] overflow-hidden">
                        <h1 className="text-4xl font-semibold mb-4 leading-[1.3] tracking-[.5rem] uppercase">
                            TBP New York Nu
                        </h1>
                        <p className="text-[.8rem] leading-[2] tracking-[.2rem]">
                            A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                            for free under the <a href="https://html5up.net/license">Creative Commons</a> license.
                        </p>
                    </div>
                </div>
                <NavBar/>
            </header>
            <Footer/>
        </MainLayout>
    )
}
