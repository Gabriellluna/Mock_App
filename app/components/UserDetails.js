"use client"

import api from "@/app/services/api"
import { useParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import Error from "./error";
import UserNavigation from "./userNavigation";
import Link from "next/link"

export default function UserDetails() {
    const params = useParams()
    const router = useRouter()
    const [user, setUser] = useState() //variávei de estado que guarda o usuário qeu vem da api de acordo com o id passado pela url
    const [error, setError] = useState({ isError: false, textError: "" }) //variável de estado que guarda status do erro e o respectvo texto do erro

    const getUser = useCallback(async () => { //função que busca na api os dados de um usuário específico com base no id
        try {
            //tenta fazer a requisição e guardar a resposta na variável user, com setUser
            const response = await api.get(`users/${params.id}`)
            setUser(response.data)
        } catch (error) {
            //caso haja algum erro na requisição entra aqui, onde será alterado o valor de erro, com setError. Inserindo true para isError e a mensage do erro no textError.
            console.log("ENTROU NO CATCH aqui")
            setError({ isError: true, textError: error.toString() })
        }
    }, [])

    useEffect(() => { //garante que getUser vai ser executada assim que o componente for montado
        getUser()
    }, [])

    if (!user && !error.isError) { // caso não tenha usuário salvo e isError de error seja falso, mostra carregando...
        return <p className="p-6 text-center text-gray-500">Carregando...</p>
    }


    if (error.isError) { // caso isError de error seja true, mostra a mensagem de erro guardada em error
        return <Error textError={error.textError} />
    }

    return ( //retorno dos dados do usuário selecionado
        <div className="bg-gray-200 h-full min-h-dvh">
            <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow" >
                <div className="flex justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-4">
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
                    <Link href='/'>
                        <button className="text-blue-900 cursor-pointer">Voltar</button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
                    <div>
                        <h3 className="text-sm text-gray-500">E-mail</h3>
                        <p className="text-gray-900">{user.email}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Telefone</h3>
                        <p className="text-gray-900">{user.phone}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Endereço</h3>
                        <p className="text-gray-900">{user.address}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Ocupação</h3>
                        <p className="text-gray-900">{user.occupation}</p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">Data de nascimento</h3>
                        <p className="text-gray-900">
                            {new Date(user.age).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-500">ID</h3>
                        <p className="text-gray-900">#{user.id}</p>
                    </div>
                </div>
            </section>
            <UserNavigation userId={user.id} />
        </div>
    )
}