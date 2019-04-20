import createIndexHTML from './create-index-html'
import fetch from './fetch'
import fs from 'fs'

export default async (Font, toFolder) => {
  const results = []

  const save = (file, data) => {
    if (fs.existsSync(file)) {
      results.push(`exist ${file}`)
      return
    }
    fs.writeFileSync(file, data)
    results.push(`saved ${file}`)
  }

  if (!fs.existsSync(toFolder)) {
    fs.mkdirSync(toFolder)
  }

  for (let font of Font.fonts) {
    for (let [type, remote] of Object.entries(font.src)) {
      if (type === 'local') continue

      const localName = `${font.src.local}.${remote.split('.').pop()}`
      const local = `${toFolder}/${localName}`

      if (fs.existsSync(local)) {
        results.push(`exist ${local}`)
        continue
      }

      let r = await fetch(remote)
      await r.save(local)
      results.push(`saved ${local}`)
    }
  }

  save(`${toFolder}/index.css`, Font.css)
  save(`${toFolder}/index.html`, createIndexHTML(Font.fonts))
  return results
}
