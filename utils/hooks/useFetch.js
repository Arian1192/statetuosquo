import { useState, useEffect, useRef } from 'react'



export const useFetch = (url, method, body = undefined) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const bodyHTTP = useRef(undefined);

    useEffect(() => {
        setLoading(true);
        const options = {
            method: method,
            if(method = "GET") {
                body = bodyHTTP.current;
            },
            headers: {
                "Content-type": "application/json"
            }
        };
        fetch(url, options)
            .then((res) => res.json())
            .then((dataFetched) => {
                setLoading(false);
                setData(dataFetched);
            })
            .catch((e) => {
                setError(e);
            });
    }, [url]);

    return { data, loading, error };
};

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
                'Content-type': 'application/json',
                'Accept': 'application/json',
                ...headers
            }
        }

        try {
            const fetchData = () => {
                const response = fetch(route, options)
                setLoading(true)
                if (response.status >= 200 && response.status < 300) {
                    const dataFetched = response.json()
                    setLoading(false)
                    setData(dataFetched)
                } else {
                    return Promise.reject()
                }
            }
        } catch (e) {
            setError(e)
        }
        fetchData()
        return { data, loading, error }
    }, [route, body, headers, method, data, loading, error])
}


/*
Este custom hook no va a permitir pasarle una url y que nos devuelva la data
tambien tenemos disponible un loading mientras esperamos la data y un error
por si rompe la conexión.
* */