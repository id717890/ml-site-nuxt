import types from '~/store/types'

export default async ({ store }) => {
  // if (!process.server) {
  const { accessToken } = store?.state?.auth
  if (!accessToken) {
    try {
      await store?.dispatch(`auth/${types.AUTH_JWT_ACTION}`, {}, { root: true })
    } catch (e) {
      console.error('jwt middleware', e)
    }
  }
  // }
}
