import types from '~/store/types'

export default async ({ store }) => {
  const { config } = store?.state?.app
  if (!config) {
    await store?.dispatch(`app/${types.GET_APP_CONFIG}`, {}, { root: true })
    // commit(`app/${types.SET_APP_CONFIG_LOADING}`, true, { root: true })
    // setTimeout(async () => {
    // commit(`app/${types.SET_APP_CONFIG}`, result, { root: true })
    // commit(`app/${types.SET_APP_CONFIG_LOADING}`, false, { root: true })
    // console.log('got cfg', mockConfig)
    // console.log(result)
  }
}
