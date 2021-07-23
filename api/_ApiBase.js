// import Vue from 'vue'
import axios from 'axios'
import appconfig from '~/appconfig'

const Axios = axios.create({
  baseURL: appconfig.apiUrl,
  headers: {},
})

Axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-undef
    const { accessToken } = $nuxt?.$store?.state?.auth
    if (accessToken) {
      config.headers.Authorization = 'Bearer ' + accessToken
    }
    // TODO - удалить это условие для проверки refresh_token
    // if (config.url !== 'api/site/GetCampaigns')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default Axios
