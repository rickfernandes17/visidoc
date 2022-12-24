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
export default function MeusDados() {
    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1 bg-gray-100 shadow ">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Meus dados</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                                Nome
                                            </label>
                                            <input
                                                type="text"
                                                name="nome"
                                                id="nome"
                                                autoComplete="given-name"
                                                placeholder="Nome"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="creci" className="block text-sm font-medium text-gray-700">
                                                Creci
                                            </label>
                                            <input
                                                type="text"
                                                name="creci"
                                                id="creci"
                                                autoComplete="family-name"
                                                placeholder="Creci"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                E-mail
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                autoComplete="email"
                                                placeholder="E-mail"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                                                Telefone
                                            </label>
                                            <input
                                                type="text"
                                                name="telefone"
                                                id="telefone"
                                                autoComplete="telefone"
                                                placeholder="Telefone"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
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
