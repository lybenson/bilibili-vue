window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

const QuadEaseIn = (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b

const scrollTo = (end, time = 800) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const b = scrollTop
  const c = end - b
  const d = time
  let start = null

  return new Promise((resolve, reject) => {
    function step (timeStamp) {
      if (start === null) start = timeStamp
      const progress = timeStamp - start
      if (progress < time) {
        const st = QuadEaseIn(progress, b, c, d)
        document.body.scrollTop = st
        document.documentElement.scrollTop = st
        window.requestAnimationFrame(step)
      } else {
        document.body.scrollTop = end
        document.documentElement.scrollTop = end
        resolve(end)
      }
    }
    window.requestAnimationFrame(step)
  })
}

const scrollToTop = (time) => {
  time = typeof time === 'number' ? time : 800
  return scrollTo(0, time)
}

const scrollToElem = (elem, time, offset) => {
  const top = elem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
  return scrollTo(top - (offset || 0), time)
}

export default {
  methods: {
    scrollToTop,
    scrollToElem,
    scrollTo
  }
}
