function InputFile({nome,label}) {
    return (
        <>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor={nome} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <input
                    type="file"
                    name={nome}
                    id={nome}
                    autoComplete={nome}
                    placeholder={label}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </>
    )
}
export default InputFile