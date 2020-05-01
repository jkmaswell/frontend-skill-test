import velocity from 'velocity-animate'

export default {
  methods: {
    fade (el, done) {
      velocity(el, { opacity: 0 }, { complete: done })
    },
    fadeIn (el, done) {
      velocity(el, { opacity: 0 }, { delay: 30 })
      velocity(el, { opacity: 1 }, { complete: done })
    },
    fadeInLeft (el, done) {
      velocity(el, { opacity: 0 }, { delay: 30 })
      velocity(el, { opacity: 1, translateX: '-20px' }, { complete: done })
    },
    fadeInRight (el, done) {
      velocity(el, { opacity: 0, translateX: '-100px' }, { duration: 100, delay: 30 })
      velocity(el, { opacity: 1, translateX: '20px' }, { complete: done })
    },
    fadeInRightDelay (el, done) {
      velocity(el, { opacity: 0, translateX: '-100px' }, { duration: 100, delay: 200 })
      velocity(el, { opacity: 1, translateX: '20px' }, { complete: done })
    },
    fadeInUp (el, done) {
      velocity(el, { opacity: 0, translateY: '20px' }, { delay: 50 })
      velocity(el, { opacity: 1, translateY: '0px' }, { complete: done })
    },
    fadeOut (el, done) {
      velocity(el, { opacity: 0 }, { complete: done })
    },
    fadeOutUp (el, done) {
      velocity(el, { opacity: 0, translateY: '-20px' }, { complete: done })
    },
    fadeOutLeft (el, done) {
      velocity(el, { opacity: 1, translateX: '20px' }, { duration: 100, delay: 30 })
      velocity(el, { opacity: 0, translateX: '-300px' }, { complete: done })
    },
    fadeOutLeftDelay (el, done) {
      velocity(el, { opacity: 1, translateX: '20px' }, { duration: 100, delay: 300 })
      velocity(el, { opacity: 0, translateX: '-300px' }, { complete: done })
    },
    fadeOutRight (el, done) {
      velocity(el, { opacity: 1 }, { delay: 30 })
      velocity(el, { opacity: 0, translateX: '20px' }, { complete: done })
    },
    fadeOutRightDelay (el, done) {
      velocity(el, { opacity: 1 }, { delay: 120 })
      velocity(el, { opacity: 0, translateX: '20px' }, { complete: done })
    },
    scaleUp (el, done) {
      velocity(el, { opacity: 0, scale: 0 }, { duration: 40 })
      velocity(el, { opacity: 1, scale: 1 }, { complete: done })
    },
    scaleDown (el, done) {
      velocity(el, { opacity: 1, scale: 1 }, { duration: 40 })
      velocity(el, { opacity: 0, scale: 0 }, { complete: done })
    },
  },
}
