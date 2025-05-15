export default function Footer() {  
    return(
        <div className="w-full h-auto flex  bg-[#5bf356c2]">
             <div className="w-[50%]">
                   <div className="w-full h-[200px] flex ml-16  gap-8 cursor-pointer">
                    <img src= "/bempetlogo.png" onClick={() => window.location.href = "/"}  alt="" />
                    <img 
                    className="w-[200px] h-[200px]  p-8 ml-30 rounded-full flex item-center justify-center "
                    src="/img/insta.png" alt="" />
                     <img 
                    className="w-[200px] h-[200px]  p-8 ml-30 rounded-full flex item-center justify-center "
                    src="/img/face.png" alt="" />
                    </div>
                    
              </div>
            
            

        </div>
    )
}
