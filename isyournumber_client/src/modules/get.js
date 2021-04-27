import axios from 'axios'

export function getRanks() {
    return axios.get('http://10.0.2.2:7500/rank')
    .catch((error) => console.log(error))
}