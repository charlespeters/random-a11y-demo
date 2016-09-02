import { get } from 'axios'

const API = 'https://randoma11y.com/stats/'

class Colors {
  constructor (x) {
    this.random(x)
  }

  style (y, z) {
    const body = document.querySelector('body')

    body.style.backgroundColor = y
    body.style.color = z
  }

  // store (x) {
  //   return localforage.setItem('random', x).then(() => {
  //     localforage.getItem('random')
  //   })
  // }

  // checkStore () {
  //   let store = 0
  //   return store
  // }

  random (x) {
    return get(x).then((r) => {
      const data = r.data.most_active_20
      const i = Math.floor(Math.random() * 20)

      const clrv = {
        color_one: data[i].color_one,
        color_two: data[i].color_two
      }

      // this.store(clrv)

      this.style(clrv.color_one, clrv.color_two)
    }).catch((err) => {
      const fallback = {
        color_one: '#001F3F',
        color_two: '#FF4136'
      }

      console.warn(`${err}: API is down`)

      this.style(fallback.color_one, fallback.color_two)
    })
  }
}

export default new Colors(API)
