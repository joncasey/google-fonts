import fs from 'fs'
import http from 'http'
import https from 'https'
import { parse } from 'url'

const fetch = (url, init) => new Promise((resolve, reject) => {
  let m = http
  let o = { ...parse(url), ...init }
  if (o.protocol === 'https:') {
    m = https
    o.rejectUnauthorized = false
  }
  const req = m.request(o, res => resolve(Object.assign(res, fetchResponse)))
  req.on('error', reject)
  if (o.body) req.write(o.body)
  req.end()
})

const multiFetch = (url, inits) => Promise.all(
  inits.map(init => fetch(url, init))
)

const fetchResponse = {
  save (toFile) {
    return new Promise((resolve) => {
      let file = fs.createWriteStream(toFile)
      file.on('finish', resolve)
      this.pipe(file)
    })
  },
  text () {
    return new Promise((resolve) => {
      const a = []
      this.on('data', d => a.push(d))
      this.on('end', () => resolve(a.join('')))
    })
  }
}

export default fetch
export { multiFetch }