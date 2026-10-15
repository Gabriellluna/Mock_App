import api from "@/app/services/api"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function UserDetails() {

    const params = useParams()
    const [user, setUser] = useState([])
    const getUser = async () => {
        try {
            const response = await api.get(`users/${params.id}`)
            console.log("response: ", response)
            setUser(response.data)
        } catch (error) {
            console.error("Erro: ", error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <section className="mx-auto my-6 max-w-3xl rounded-md bg-white shadow">
            <>
                <h1>{user.name}</h1>
            </>
        </section>
    );
}