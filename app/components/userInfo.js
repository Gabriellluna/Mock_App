import Link from "next/link"
import Image from "next/image";
import api from "../services/api";

export default function UserInfo({ user, onDelete }) {//componente que renderiza na tela informações do objeto user recebido por props

    const handleDelete = async () => { //função que deleta um usuário pelo id respectivo
        try {
            await api.delete(`/users/${user.id}`)
            onDelete()
        } catch (error) {
            console.error("Deu erro aqui: ", error)
        }
    }

    return (
        <li className="flex items-start justify-between gap-4 border-t border-gray-200 p-4 hover:bg-gray-50">
            <div className="flex items-start gap-3">
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                    <strong className="block text-gray-900">
                        {user.name}{" "}
                        <span className="text-sm font-normal text-gray-500">
                            @{user.username}
                        </span>
                    </strong>
                    <p className="text-sm text-gray-600">
                        {user.email} • {user.phone.split(" x")[0]}
                    </p>
                    <p className="text-sm text-gray-600">{user.address}</p>
                    <p className="text-sm text-gray-600">
                        {user.occupation} • Nascimento:{" "}
                        {new Date(user.age).toLocaleDateString("pt-BR", {
                            timeZone: "UTC",
                        })}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-around self-stretch">
                <span className="text-xs text-gray-400">#{user.id}</span>
                <Link href={`/details/${user.id}`}>
                    <span className="text-gray-800">Ver Detalhes</span>
                </Link>
                <span className="text-gray-800 cursor-pointer" onClick={() => handleDelete()}>Remover</span>
            </div>
        </li>
    )
}