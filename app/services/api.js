import axios from "axios"; //importação de axios para requisições

const api = axios.create({
    baseURL: 'https://6acec205f338359cf1c3a973.mockapi.io', //url da api, que vai ser usada para montar os endpoints (EX: URL_BASE/users retorna usuários)
    timeout: 5000, //tempo limite para haver retorno da requisição, senão vai retornar erro de timeout
    headers: { //definição do tipo de retorno, um JSON
        "Content-Type" : "application/json"
    }
})

export default api