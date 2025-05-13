export default function Header(){
    return(
        <div className="w-full h-screen flex">
            <div className="w-full h-[40px] bg-[#5bf356c2]">
                <h1>bem pet</h1>
                <button onClick={()=>window.location.href="/pagamento"} className=""> Pagamento</button>
            </div>


        </div>
    )
}