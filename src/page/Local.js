/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState, useEffect } from "react"
import InputText from "../components/InputText"

export default function Local() {
    const [cep, setCep] = useState([])

    // useEffect(() => {
    //     fetch("https://viacep.com.br/ws/16905020/json/", {
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             setCep(data)
    //         })
    //         .catch((err) => console.log(err))
    // }, [])

    return (
        <>
            <div className=" mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 bg-gray-100 shadow ">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 py-5">Local</h3>
                            <p className="mt-1 text-sm text-gray-600"></p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <InputText nome="cep" label="CEP"/>

                                        {/* Input Nome Cabeçalho */}
                                        <InputText nome="endereco" label="Endereço" />
                                        <InputText nome="numero" label="Número" />
                                    </div>
                                </div>
                                <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Salvar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
