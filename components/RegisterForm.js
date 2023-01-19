import React,{useContext, useEffect} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import jwt_decode from 'jwt-decode'

const RegisterForm = () => {
    const [state, setState] = useContext(AuthContext)
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            const decoded = jwt_decode(token)
            setState({ ...state, username: decoded.username, email: decoded.email, id: decoded.id })
        } else {
            setState({ ...state, username: "", email: "", id: "" })
        }
    }, [])


    return (
        <div>
            <h1>{state.name}</h1>
            <h1>{state.username}</h1>
        </div>
    )
}

export default RegisterForm