import { AiFillPlusCircle } from "react-icons/ai";
export default function NovaVisita() {
    return (
        <>
            <a href="#" className="flex justify-center items-center select-none border-2 text-xl font-bold p-2 m-2 rounded-full shadow focus:outline-none focus:shadow-outline">

                <AiFillPlusCircle className='w-20 h-20  fill-green-500 stroke-green-500' />
                Nova Visita
            </a>
        </>
    )
}