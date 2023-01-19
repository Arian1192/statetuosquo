export default async function apiWrapper(route, method, body, headers){
    body = body || undefined;
    const url = `http://localhost:3000/api/${route}`;
    const options = {
        method: method,
        mode: "cors",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    }
    try{
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }catch (e) {
        console.log(e)
    }

}

