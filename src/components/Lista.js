import { Link } from 'react-router-dom'
function Lista() {
    return (
        <div class="flex flex- hover:shadow-xl border-y m-2 border-l-4 border-l-cyan-500">
            <div className="flex-none px-4">01</div>
            <div className="flex-auto">02</div>
            <div className="
            flex-none px-4
            bg-cyan-500 
            text-gray-100 
            rounded-tr
            rounded-br
            ">
                <Link to="/usuario/1">Acessar</Link></div>
        </div>
    )
}

export default Lista