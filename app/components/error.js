//componente de exibição de erros de requisição, que recebe a mensagem de erro como props
export default function Error({textError}) {
    return (
        <div className="bg-red-100 flex justify-center align-center p-5 border border-red-500">
            <span className="text-red-800 w-full text-center p-4">{textError}</span>
        </div>
    )
}