import {MainLayout} from "@/components/layout";
import {NavBar} from "@/components/NavBar";
import Footer from "@/components/Footer/footer";


import Image from "next/image";

import tbpLogo from './logo-bg.png';

export default function Home( {isLoaded} : {isLoaded?: boolean} ) {
    return (
        <MainLayout className="relative z-10">
            <header className="relative flex flex-col items-center max-w-full text-center" style={{backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 25%, rgba(0,0,0,0) 55%)"}}>
                <div className="w-[5.5rem] h-[5.5rem] leading-[5.5rem] order border-white rounded-full">
                    <Image src={tbpLogo} alt="Tau Beta Pi Logo" />
                </div>
                <div className="max-w-full border-solid border-white border-y landing-line-vertical">
                    <div className={`px-12 py-8 max-h-[40rem] overflow-hidden landing-inner ${isLoaded ? "" : "landing-inner-init"}`}>
                        <h1 className="landing-header">
                            TBP NY Nu
                        </h1>
                        <p className="landing-desc">
                            Welcome to the Tau Beta Pi New York Nu Chapter<br />
                            Learn more about <a className="custom-anchor" rel="noopener noreferrer" target="_blank" href="https://www.tbp.org/home.cfm">Tau Beta Pi</a>
                        </p>
                    </div>
                </div>
                <NavBar/>
            </header>
            <Footer/>
        </MainLayout>
    )
}
