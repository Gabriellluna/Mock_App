"use client"

import { useEffect, useMemo, useState } from "react";
import Header from "./components/header";
import UsersList from "./components/usersList";
import api from "./services/api";

export default function Home() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("")
  const [error, setError] = useState({ isError: false, textError: "" })

  const getUsers = async () => {
    try {
      const response = await api.get('/users')
      console.log("Dataa: ", response.data)
      setUsers(response.data)
    } catch (error) {
      console.error("Erro: ", error)
      setError((prevError) => ({ isError: !prevError.isError, textError: error.toString() }))
    } finally {
      setLoading(false)
    }

  }

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  }, [filter, users])

  useEffect(() => {
    getUsers()
  }, [loading])

  return (
    <div className="bg-gray-200 h-full min-h-dvh">
      <Header handleChange={handleChange} />
      {
        error.isError ?
          <span className="text-red-800 w-full text-center">{error.textError}</span>
          :
          <UsersList users={filteredUsers} loading={loading} />
      }
    </div>
  );
}
