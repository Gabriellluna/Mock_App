"use client"

import { useEffect, useState } from "react";
import Header from "./components/header";
import UsersList from "./components/usersList";
import api from "./services/api";

export default function Home() {

  const [users, setUsers] = useState()

  const getUsers = async () => {
    try {
      const response = await api.get('/users')
      console.log("Dataa: ", response.data)
      setUsers(response.data)
    } catch (error) {
      console.error("Erro: ", error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    console.log("Users: ", users)
  }, [users])

  return (
    <div>
      <Header />
      <UsersList users={users} />
    </div>
  );
}
