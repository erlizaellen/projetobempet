import CardClinica from "../CardClinica"
import Footer from "../Footer"

import Header from "../Header"

export default function PageWrapper({children}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            <Header/>
            <div className="W-full h-full min-h-screen bg-gradient-to-t from-[#a7e2b6c9] to-[#5bf356c2] pb-10">
                {children}
                
            </div>
           
            <Footer/>
        </div>
    )
}