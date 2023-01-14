import React, { useState } from 'react';
import NovaVisita from '../components/Form/Button/NovaVisita';

export default function Dashboard() {
    const [count, setCount] = useState(0);
    return (

        <div>
            <div className="mt-5 md:col-span-2 md:mt-0 text-2xl" >
                <h1 className='text-5xl'>{count}</h1>
                <h2>Visitas Recebidas</h2>
                <NovaVisita/>
                
            </div>
        </div>
    )
}
