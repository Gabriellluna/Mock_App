//componente de exibição de carregamento na requisição, que recebe a mensagem de carregamento como props
export default function Loading({textLoading}) {
    return (
        <div className="bg-gray-100 flex justify-center align-center p-5 border border-black-500">
            <span className="text-black-800 w-full text-center p-4">{textLoading}</span>
        </div>
    )
}