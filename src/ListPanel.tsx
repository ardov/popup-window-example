import './App.scss'
import { openSideScreen } from './openPopupWindow'
import { Node, data as response } from './data'
import { useCallback, useState } from 'react'
import { Mention } from './Mention'

const convertData = (array: Node[]) =>
  array.map(({ attributes }) => ({
    url: attributes.url,
    title: attributes.title,
    visibility: attributes.visibility,
    keywords: attributes.keywords.length,
    links: attributes.domainMentionsInLinkCount,
    textMentions: attributes.brandMentionsInTextCount,
  }))

const data = convertData(response)

export default function ListPanel() {
  const [win, setWin] = useState<Window | null>(null)
  // const [current, setCurrent] = useState<string>('')
  const firstPage = data.slice(0, 30)

  const handleOpen = useCallback(
    (url: string) => {
      if (!win || win.closed) {
        const child = openSideScreen(url)
        setWin(child)
      } else {
        win.location.replace(url)
      }
      window.focus()
      // setCurrent(url)
    },
    [win]
  )
  // const handleRate = (url: string) => {
  //   if (url === current) {
  //     const child = openPopupWindow(url, '')
  //     setWin(child)
  //   } else if (win !== null) {
  //     win.location.replace(url)
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleOpen(window.location.origin + '/#empty')
  //   }, 1000)
  // }, [handleOpen])

  return (
    <div className="app">
      <div className="main">
        <div className="head">
          <Progress max={data.length} value={70} />
        </div>
        {firstPage.map(data => (
          <Mention
            data={data}
            key={data.url}
            onOpen={handleOpen}
            // onRate={handleRate}
          />
        ))}
      </div>
    </div>
  )
}
export const searchFor = 'company'

function Progress(props: { max: number; value: number }) {
  const { max, value } = props
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#dee3e5',
        borderRadius: 6,
        overflow: 'hidden',
        padding: 4,
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: (value / max) * 100 + '%',
          backgroundColor: '#0071bc55',
          height: '100%',
          transition: '.5s ease-in-out',
          transformOrigin: 'center left',
          animation: 'expandWidth .5s ease-in-out 1',
        }}
      />
      <span style={{ width: '100%', textAlign: 'center', display: 'block' }}>
        {max - value} mentions left to define
      </span>
    </div>
  )
}
