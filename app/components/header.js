import { useEffect, useRef } from "react";

export default function Header({ handleChange }) {

    const search = useRef(null)

    useEffect(() => {
        search.current.focus() //insere o foco no input de filtro assim que o componente é carregado
    }, [])

    return (
        <header className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
            <h1 className="text-2xl font-bold text-blue-800">
                Listagem de Usuários
            </h1>

            <div className="relative w-full sm:w-72">

                <input
                    onChange={ () => handleChange(event) }
                    type="text"
                    ref={search}
                    placeholder="Buscar usuário..."
                    className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
            </div>
        </header>
    );
}