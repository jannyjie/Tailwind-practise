import axios from 'axios'

axios.defaults.timeout = 50000

axios.interceptors.request.use(config => {
  // ...
  return config
}, error => {
  return Promise.error(error)
})

function getName() {
    return axios.get(`https://vue-lessons-api.herokuapp.com/courses/list`)
}

export {
    getName
}



