"use client"

import { useEffect, useMemo, useState } from "react";
import Header from "./components/header";
import UsersList from "./components/usersList";
import api from "./services/api";
import Error from "./components/error";

export default function Home() {

  const [users, setUsers] = useState([]) //variávei de estado que guarda os usuários que vem da api
  const [loading, setLoading] = useState(true) //variável de estado usada para manipular a mensagem de carregamento na tela
  const [filter, setFilter] = useState("") //variável de estado que armazena o texto inserido no campo de filtro pelo usuário
  const [error, setError] = useState({ isError: false, textError: "" }) //variável de estado que guarda status do erro e o respectvo texto do erro
  const [reload, setReload] = useState(false)

  const getUsers = async () => { //função que busca na api os dados dos usuários cadastrados
    try {
      //tenta fazer a requisição e guardar a resposta na variável users, com setUsers
      const response = await api.get('/users')
      setUsers(response.data)
    } catch (error) {
      //caso haja algum erro na requisição entra aqui, onde será alterado o valor de erro, com setError. Inserindo true para isError e a mensage do erro no textError.
      console.error("Erro: ", error)
      setError((prevError) => ({ isError: !prevError.isError, textError: error.toString() }))
    } finally {
      //por fim, insere falso para loading, encerrando o período de mensagem de carregamento dos dados na tela
      setLoading(false)
    }
  }

  const handleUserDelete = () => {
    setLoading(true)
    setReload(prev => !prev)
  }

  const handleChange = (event) => {//função que armazena no filter os dados vindos em tempo real do input de Header
    setFilter(event.target.value)
  }

  const searchedUsers = useMemo(() => { //função que filtra os usuários que tenham algum trecho em comum com o texto digitado no campo de filtro de Header
    return users.filter(user => user.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  }, [filter, users])

  useEffect(() => { //garante que getUsers vai ser executada assim que o componente for montado
    getUsers()
  }, [reload])

  return (
    <>
      <div className="bg-gray-200 h-full min-h-dvh">
        <Header handleChange={handleChange} />
        {
          error.isError ? //se houver mensagem de erro mostra o componente de erro, que recebe dinâmicamente o texto armazenado em error
            <Error textError={error.textError} />
            : //caso não haja erro, exibe o componente que contém todos os usuários vindos da api
            <UsersList users={searchedUsers} loading={loading} deleteUser={handleUserDelete} />
        }
      </div>
    </>
  );
}
