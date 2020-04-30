import velocity from 'velocity-animate'

export default {
  methods: {
    fade (el, done) {
      velocity(el, { opacity: 0 }, { complete: done })
    },
    fadeIn (el, done) {
      velocity(el, { opacity: 0 }, { delay: 50 })
      velocity(el, { opacity: 1 }, { complete: done })
    },
    fadeInLeft (el, done) {
      velocity(el, { opacity: 0 }, { delay: 50 })
      velocity(el, { opacity: 1, translateX: '-20px' }, { complete: done })
    },
    fadeInUp (el, done) {
      velocity(el, { opacity: 0, translateY: '20px' }, { delay: 80 })
      velocity(el, { opacity: 1, translateY: '0px' }, { complete: done })
    },
    fadeOutUp (el, done) {
      velocity(el, { opacity: 0, translateY: '-20px' }, { complete: done })
    },
  },
}
