import CardClinica from "../CardClinica"
import Footer from "../Footer"

import Header from "../Header"

export default function PageWrapper({children}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            <Header/>
            <div className="W-full h-full pb-20 bg-gradient-to-t from-[#d8e4dbc9] to-[#5bf356c2]">
                {children}
                
            </div>
            <Footer/>
        </div>
    )
}