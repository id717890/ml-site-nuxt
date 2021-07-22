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
}
