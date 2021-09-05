export default {
  getImageUrl(image) {
    if (image?.includes('http')) {
      return image
    }
    return `/img/${image}`
  },
  isMobile() {
    const m =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    return m
  },
  openUrl(url) {
    if (url?.includes('http')) {
      return window.open(url, '_blank')
    }
    // eslint-disable-next-line no-undef
    $nuxt?.$router?.push(url)
  },
  getClearPhone(phone, woFirstSym = false) {
    if (!phone) return phone
    const buf = phone
      ?.toString()
      ?.replaceAll(' ', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '')
      .replaceAll('+', '')
    if (!woFirstSym) {
      return buf
    } else {
      return buf.substring(1, buf.length)
    }
  },
}
