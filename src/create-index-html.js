
export default (fonts = [{}], family = fonts[0].family) => {

  const paragraphs = fonts.map(font =>
`<p style="font-family:'${family}',monospace;font-weight:${font.weight};font-style:${font.style};">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789,.!?</p>`
  )

  return `
<!doctype html>
<html lang="en">
<title>${family}</title>
<link rel="stylesheet" href="index.css">
${paragraphs.join('\n')}
</html>
  `

}
