const api = require('../api')
const log = (message) => { console.log(message) }

api.byId(21028)
.then(response => log(JSON.stringify(response)))