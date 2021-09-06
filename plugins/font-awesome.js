import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  // faCheck,
  // faUserSecret,
  // faChevronUp,
  // faChevronLeft,
  // faChevronRight,
  // faTag,
  // faRedo,
  // faQuestion,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  // faUserSecret,
  // faCheck,
  // faChevronUp,
  // faChevronLeft,
  // faChevronRight,
  // faTag,
  // faRedo,
  // faQuestion,
  faTimes,
])

Vue.component('Fa2', FontAwesomeIcon)
