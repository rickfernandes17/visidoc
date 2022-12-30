function InputLogotipo() {
    return (
        <>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Logotipo
                </label>
                <input
                    type="file"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Logotipo"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <img src="https://via.placeholder.com/150X50" alt="Logotipo" />
            </div>
        </>
    )
}
export default InputLogotipo