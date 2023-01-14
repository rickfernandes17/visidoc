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
import ButtonSubimit from "../components/Form/Button/ButttonSubmit"
import GaleriaImagem from "../components/GaleriaImagem"
import InputFile from "../components/Form/Input/InputFile"
import InputText from "../components/Form/Input/InputText"

export default function Local() {
    const [cep, setCep] = useState([])

    useEffect(() => {
        fetch("https://viacep.com.br/ws/16905020/json/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCep(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="w-full">
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">

                                <InputText nome="localizacao" label="Localização" />
                                <InputText nome="cep" label="CEP" />

                                {/* Input Nome Cabeçalho */}
                                <InputText nome="endereco" label="Endereço" />
                                <InputText nome="numero" label="Número" />
                                <InputText nome="complemento" label="Complemento" />

                                <InputFile nome="foto" label="Adicionar Foto"/>
                            </div>
                        </div>
                        <ButtonSubimit />
                    </div>
                </form>
            </div>
            <GaleriaImagem/>
        </div>
    )
}
