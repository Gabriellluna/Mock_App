"use client"
import { useEffect, useState } from "react"
import api from "../services/api"
import { useRouter } from "next/navigation"
import Error from "./error"

export default function UserNavigation({ userId }) {

    const [ids, setIds] = useState()
    const router = useRouter()
    const [error, setError] = useState({ isError: false, textError: "" }) //variável de estado que guarda status do erro e o respectvo texto do erro
    const getUsers = async () => { //função que busca na api os dados dos usuários cadastrados
        try {
            //tenta fazer a requisição e guardar a resposta na variável users, com setUsers
            const response = await api.get('/users')
            const ids = response.data.map(user => user.id)
            console.log("asassIds: ", ids)
            setIds(ids)
        } catch (error) {
            console.error("Erro: ", error)
            setError((prevError) => ({ isError: !prevError.isError, textError: error.toString() }))
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const handlePrev = () => {//vai para o usuário anterior
        if (ids.indexOf(userId) !== 0) { //verifica se o id não ocupa o primeiro index da lista de ids
            router.push(`/details/${ids[ids.indexOf(userId) - 1]}`)//caso não ocupe, passa para o item anterior do array de ids, resultando em uma nova url
        } else {//caso ocupe
            router.push(`/details/${ids[ids.length - 1]}`)//vai para último item da lista
        }
    }

    const handleNext = () => {//vai para o próximo usuário
        if (ids.indexOf(userId) !== ids.length - 1) { //verifica se o id não ocupa o último index da lista de ids
            router.push(`/details/${ids[ids.indexOf(userId) + 1]}`) //caso não ocupe, passa para o próximo item do array de ids, resultando em uma nova url
        } else {//caso ocupe
            router.push(`/details/${ids[0]}`)//volta para o primeiro item da lista
        }
    }

    return (
        <>
            {
                error.isError ?
                    <Error textError={error.textError} />
                    :
                    <div className="w-full flex justify-center p-6">
                        <div className="flex gap-100">
                            <h1 className="text-gray-800 cursor-pointer" onClick={() => handlePrev()}>Anterior</h1>
                            <h1 className="text-gray-800 cursor-pointer" onClick={() => handleNext()}>Próximo</h1>
                        </div>
                    </div>
            }
        </>
    )
}