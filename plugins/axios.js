export default function ({ $axios, redirect, store }) {
  $axios.onRequest(
    (config) => {
      // console.log('axios plug onRequest', config)
      // // eslint-disable-next-line no-undef
      const { accessToken } = store?.state?.auth
      // console.log('accessToken', accessToken)
      if (accessToken) {
        $axios.setToken(accessToken, 'Bearer')
        // config.headers.Authorization = 'Bearer ' + accessToken
      }
      // // TODO - удалить это условие для проверки refresh_token
      // // if (config.url !== 'api/site/GetCampaigns')
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
