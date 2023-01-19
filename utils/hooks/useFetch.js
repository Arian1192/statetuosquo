import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(dataFetched => {
                setLoading(false)
                setData(dataFetched)
            })
            .catch(e => {
                setError(e)
            })
    },[url])

    return {data, loading , error}
}

// Probar el Coustom-Hook
export const useFetch2 = (route, method, body = null, headers = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const options = {
            method: method,
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
                'Content-type' : 'application/json',
                'Accept': 'application/json',
                ...headers
            }
        }
    
        try{
            const response = fetch(url, options)
            setLoading(true)
            if(response.status >=200 && response.status < 300){
                const dataFetched = response.json()
                setLoading(false)
                setData(dataFetched)
            }else{
                return Promise.reject()
            }
        }catch(e){
            setError(e)
        }

        return [data, loading, error]
    }, [body, headers, method , data, loading, error])
}


/*
Este custom hook no va a permitir pasarle una url y que nos devuelva la data
tambien tenemos disponible un loading mientras esperamos la data y un error
por si rompe la conexión.
* */