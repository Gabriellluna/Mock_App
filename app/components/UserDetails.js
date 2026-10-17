"use client"

import api from "@/app/services/api"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function UserDetails() {
    const params = useParams()
    const [user, setUser] = useState(null)

    const getUser = async () => {
        try {
            const response = await api.get(`users/${params.id}`)
            setUser(response.data)
        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    if (!user) {
        return <p className="p-6 text-center text-gray-500">Carregando...</p>
    }

    return (
        <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
            <div className="flex items-center gap-4 border-b border-gray-200 p-6">
                <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
                    <p className="text-gray-500">@{user.username}</p>
                </div>
            </div>

            <dl className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                <div>
                    <dt className="text-sm text-gray-500">E-mail</dt>
                    <dd className="text-gray-900">{user.email}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Telefone</dt>
                    <dd className="text-gray-900">{user.phone}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Endereço</dt>
                    <dd className="text-gray-900">{user.address}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Ocupação</dt>
                    <dd className="text-gray-900">{user.occupation}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Data de nascimento</dt>
                    <dd className="text-gray-900">
                        {new Date(user.age).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                    </dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">ID</dt>
                    <dd className="text-gray-900">#{user.id}</dd>
                </div>
            </dl>
        </section>
    )
}