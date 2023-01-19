import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect, useLayoutEffect } from 'react'
import { useRouter } from "next/router"

const DashboardUser = () => {

    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.isUserLoggedIn()
    }, [])

    return (
        <div>DashboardUser</div>
    )
}

export default DashboardUser