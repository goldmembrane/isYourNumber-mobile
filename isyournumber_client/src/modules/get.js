import axios from 'axios'

export function getRanks() {
    return axios.get('http://localhost:7500/rank')
    .catch((error) => console.log(error))
}