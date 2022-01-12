export function openList(url: string, width: number) {
  // @ts-ignore
  let { availLeft = 0, availTop = 0 } = window.screen
  let { availHeight, availWidth } = window.screen

  return window.open(
    url,
    '',
    makeOptionString({
      top: availTop,
      height: availHeight,
      width: Math.min(availWidth, width),
      left: availLeft,
    })
  )
}

export function openSideScreen(url: string) {
  // @ts-ignore
  let { availLeft = 0, availTop = 0 } = window.screen
  let { availHeight, availWidth } = window.screen

  const winW = window.outerWidth
  const winX = window.screenX
  const freeSpaceLeft = winX - availLeft
  const freeSpaceRight = availLeft + availWidth - (winX + winW)

  let width: number
  let left: number

  if (freeSpaceLeft > freeSpaceRight) {
    width = freeSpaceLeft
    left = availLeft
  } else {
    width = freeSpaceRight
    left = availLeft + availWidth - freeSpaceRight
  }
  return window.open(
    url,
    '',
    makeOptionString({ top: availTop, height: availHeight, width, left })
  )
}

function makeOptionString({ width = 100, height = 100, top = 0, left = 0 }) {
  let opts = {
    toolbar: 'no',
    location: 'no',
    directories: 'no',
    status: 'no',
    menubar: 'no',
    resizable: 'no',
    copyhistory: 'no',
    width,
    height,
    top,
    left,
  }
  return Object.entries(opts)
    .map(keyval => keyval.join('='))
    .join(', ')
}
