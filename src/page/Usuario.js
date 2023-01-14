import ButtonSubimit from "../components/Form/Button/ButttonSubmit";
import InputText from "../components/Form/Input/InputText";
import { useParams } from 'react-router-dom';


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
export default function Usuario() {
    const { id } = useParams();

    return (
        <>
            <div className="">
                
                <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">

                                <InputText label="Nome" nome="nome" />
                                
                                <InputText label="E-mail" nome="email" />

                                <InputText label="Telefone" nome="telefone" />

                            </div>
                        </div>
                        <ButtonSubimit />
                    </div>
                </form>
            </div>
        </>
    )
}
