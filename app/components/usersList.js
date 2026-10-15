import Image from "next/image";
import Link from "next/link";

export default function UsersList({ users, loading }) {
    return (
        <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
            <h2 className="p-4 text-base font-semibold text-gray-900">
                {
                    loading ?
                        'Carregando Usuários...'
                        :
                        `Usuários (${users.length})`
                }
            </h2>

            <ul>
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex items-start justify-between gap-4 border-t border-gray-200 p-4 hover:bg-gray-50"
                    >
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
                            <Link href={`/user/${user.id}`}>
                                <span className="text-gray-800">Ver Detalhes</span>
                            </Link>
                        </div>

                    </li>
                ))}
            </ul>
        </section>
    );
}