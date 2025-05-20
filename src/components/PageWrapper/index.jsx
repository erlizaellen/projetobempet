import CardClinica from "../CardClinica"
import Footer from "../Footer"

import Header from "../Header"

export default function PageWrapper({children}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            <Header/>
            <div className="W-full h-full min-h-screen bg-gradient-to-t from-[#9ec9a9c9] to-[#5bf356c2]">
                {children}
                
            </div>
            <Footer/>
        </div>
    )
}