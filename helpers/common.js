export default {
  getImageUrl(image) {
    if (image?.includes('http')) {
      return image
    }
    return `/img/${image}`
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
