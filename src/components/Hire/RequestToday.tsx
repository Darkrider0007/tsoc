import HireFromUs from "@/assets/HireFromUs"
import Icons from "@/assets/Icons"


function RequestToday() {
    return (
        <div className="flex flex-row justify-between bg-Alice_Blue rounded-lg mx-20 h-[278px]" >
            <div className="flex flex-col w-[50%] items-start p-10">
                <img src={HireFromUs.Writing} alt="writing" className="w-[520px] h-full object-contain rounded-l-lg" />
                <button className="bg-Cobalt_Blue text-white font-sans font-medium text-lg items-center justify-center rounded-lg py-2 px-4 mt-4 flex flex-row">Request Talent Today

                    <img src={Icons.LeftArrow} alt="left-arrow" className="w-6 h-6 ml-2" />
                </button>

            </div>
            <img src={HireFromUs.Hirinig1} alt="writing" className="w-[520px] h-full object-cover rounded-l-lg" />
        </div>
    )
}

export default RequestToday