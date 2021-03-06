export class API{
    static saveData(body){
        return fetch(
            `http://127.0.0.1:8000/api/data/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        ).then(resp => resp.json())
    }

    static getData(){
        return fetch(
            `http://127.0.0.1:8000/api/data/`).then(resp => resp.json())
    }

    static adminLogin(body){
        return fetch(
            `http://127.0.0.1:8000/auth/`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }
        ).then( resp => resp.json())
    }
}