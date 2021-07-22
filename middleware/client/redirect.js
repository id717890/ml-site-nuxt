import redirects from '~/static/redirects.json'

export default ({ route, redirect }) => {
  // console.log(redirects)
  if (!redirects) return
  const r = redirects.find(
    (r) =>
      decodeURI(r?.from?.toLowerCase()) ===
      decodeURI(route?.path?.toLowerCase())
  )
  // console.log(decodeURI(route?.path?.toLowerCase()))
  // console.log(r)

  if (r) {
    return redirect(r.to)
  }
  //   next()
  // } else {
  //   const redirect = redirects.find(
  //     (r) =>
  //       decodeURI(r.from.toLowerCase()) === decodeURI(req.url.toLowerCase())
  //   )
  //   if (redirect) {
  //     // console.log(`redirect: ${redirect.from} => ${redirect.to}`)
  //     res.writeHead(301, { Location: redirect.to })
  //     res.end()
  //   } else {
  //     next()
  //   }
  // }
}
