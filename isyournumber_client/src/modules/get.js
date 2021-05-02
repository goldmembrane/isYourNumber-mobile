import axios from 'axios'

export function getRanks() {
    return axios.get('http://3.34.95.28:7500/rank')
    .catch((error) => console.log(error))
}