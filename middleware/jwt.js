import types from '~/store/types'

export default async ({ store }) => {
  const { accessToken } = store?.state?.auth
  if (!accessToken) {
    try {
      await store?.dispatch(`auth/${types.AUTH_JWT_ACTION}`, {}, { root: true })
    } catch (e) {
      console.error('jwt middleware', e)
    }
  }
}
