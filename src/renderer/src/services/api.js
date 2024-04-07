import  axios  from "axios";

export const ApiCI4 = axios.create({
    baseURL: "http://localhost:8080"
})

ApiCI4.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('u')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = token
    return config
  })