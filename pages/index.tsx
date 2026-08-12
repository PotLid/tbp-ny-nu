import {MainLayout} from "@/components/layout";
import {NavBar} from "@/components/NavBar";
import Footer from "@/components/Footer/footer";


import Image from "next/image";

import tbpLogo from '@/static/images/tbp_symbol_white.svg';

export default function Home( {isLoaded} : {isLoaded?: boolean} ) {
    return (
        <MainLayout className="relative z-10">
            <header className="relative flex flex-col items-center max-w-full text-center landing-gradient" style={{backgroundImage: "radial-gradient(rgba(0,0,0,0.25) 25%, rgba(0,0,0,0) 55%)"}}>
                <div className="w-22 h-22 p-2.5 leading-22 border-2 border-white rounded-full">
                    <Image className="p-1.5 border border-white rounded-full" src={tbpLogo} alt="Tau Beta Pi Logo" />
                </div>
                <div className="max-w-full border-solid border-white border-y landing-line-vertical">
                    <div className={`px-12 py-8 max-h-160 overflow-hidden landing-inner ${isLoaded ? "" : "landing-inner-init"}`}>
                        <h1 className="landing-header">
                            TBP NY Nu
                        </h1>
                        <p className="landing-desc">
                            Welcome to the Tau Beta Pi New York Nu Chapter<br />
                            Learn more about TBP <a className="custom-anchor" rel="noopener noreferrer" target="_blank" href="https://www.tbp.org">Here</a>
                        </p>
                    </div>
                </div>
                <NavBar/>
            </header>
            <Footer/>
        </MainLayout>
    )
}
