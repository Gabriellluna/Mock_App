"use client";

import UserDetails from "@/app/components/UserDetails";
import { Suspense } from "react"

export default function UserPage() {

    

    return (
        <>
            <Suspense>
                <UserDetails/>
            </Suspense>
        </>
    )
}