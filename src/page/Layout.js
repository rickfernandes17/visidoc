import ButtonSubimit from "../components/Form/Button/ButttonSubmit";
import InputLogotipo from "../components/Form/Input/InputLogotipo";
import InputText from "../components/Form/Input/InputText";
import TextArea from "../components/Form/Input/TextArea";

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
export default function Layout() {
    return (
        <>
            <div className="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                {/* Input Nome Cabeçalho */}

                                <InputText label="Nome do Cabeçalho" nome="cabecalho" />
                                
                                <InputText label="Titulo" nome="titulo" />

                                <InputLogotipo/>

                                <TextArea nome="conteudo" label="Corpo Conteudo"/>

                                <InputText label="Rodapé" nome="rodape"/>

                            </div>
                        </div>
                        <ButtonSubimit/>
                    </div>
                </form>
            </div>
        </>
    )
}
