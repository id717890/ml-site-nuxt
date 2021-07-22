import redirects from '../../static/redirects.json'

export default (req, res, next) => {
  if (!redirects) {
    next()
  } else {
    const redirect = redirects.find(
      (r) =>
        decodeURI(r.from.toLowerCase()) === decodeURI(req.url.toLowerCase())
    )
    if (redirect) {
      // console.log(`redirect: ${redirect.from} => ${redirect.to}`)
      res.writeHead(301, { Location: redirect.to })
      res.end()
    } else {
      next()
    }
  }
}
