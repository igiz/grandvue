import axios from 'axios'

const baseUrl = 'http://services.runescape.com/m=itemdb_oldschool';
const itemApiEndPoint = "/api/catalogue/detail.json";
const headers = { headers: {'Content-Type': 'application/json'}}

const osrs = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: headers
});

export const findById = id => {
    return new Promise((resolve, reject) => {
        osrs.get(itemApiEndPoint, {
            params: {
                item: id
            }
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error);
        })
    });
}