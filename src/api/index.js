import axios from 'axios'

const osrsItemApi = '/api/catalogue/detail.json'
const rsBuddyItemSummary = '/summary.json'

const osrs = axios.create({
    baseURL: 'http://services.runescape.com/m=itemdb_oldschool',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

const rsBuddy = axios.create({
    baseURL: 'https://rsbuddy.com/exchange',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export default {
    byId: id => {
        return new Promise((resolve, reject) => {
            osrs.get(osrsItemApi, {
                    params: {
                        item: id
                    }
                })
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error) => {
                    reject(error)
                })
        });
    },
    byKeyword: keyword => {
        return new Promise((resolve, reject) => {
            rsBuddy.get(rsBuddyItemSummary)
                .then((response) => {
                    let result = {}
                    let summary = response.data
                    Object.keys(summary).forEach(function (key) {
                        let item = summary[key]
                        if (item.name.indexOf(keyword) >= 0) {
                            result[key] = item
                        }
                    });
                    resolve(result)
                })
                .catch((error) => reject(error))
        })
    }
}