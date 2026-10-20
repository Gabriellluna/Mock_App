"use client";

import UserDetails from "@/app/components/UserDetails";
import { Suspense } from "react"

export default function UserPage() {

    return (
        <>
            <Suspense> {/* Adicionei essa tag porque foi sugerido no navegador pelo próprio React Compiler */}
                <UserDetails/> {/* Componente com informações de um único usuário */}
            </Suspense>
        </>
    )
}