import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faUserSecret,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  faUserSecret,
  faCheck,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faTag,
])

Vue.component('Fa', FontAwesomeIcon)
