import PageWrapper from "@/components/PageWrapper";

export default function vantagens() {
    return (
        <PageWrapper>
            <div className="w-full h-full flex items-center justify-center rounded-b-xl">
                <div className="w-[550px] h-[90vh] rounded-xl bg-[#fef598]">
                    <div className="font-bold text-[#18cf12] text-[50px] flex items-center justify-center">Vantagens</div>
                    <div className="w-full h-[90%] bg-amber-700">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                    <div className="w-full h-[10%] bg-[#15dd40]  flex justify-center items-center border border-[#ce1bb0] rounded-b-xl">
                        <button className="text-white text-[30px]">Assinar</button>
                    </div>
                </div>

            </div>
        </PageWrapper>
    )
}