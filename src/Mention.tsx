import { useState } from 'react'
import { searchFor } from './App'

export function Mention({
  data,
  onOpen,
}: {
  data: { title: string; url: string }
  onOpen: (url: string) => void
}) {
  const [win, setWin] = useState<Window>()
  const [sentiment, setSentiment] = useState(null)
  const { title, url } = data
  const displayUrl = url
    .replace('https://www.', '')
    .replace('http://www.', '')
    .replace('https://', '')
    .replace('http://', '')
  const [domain, ...rest] = displayUrl.split('/')
  const path = '/' + rest.join('/')

  const handleClick = (e: any) => {
    e.preventDefault()
    onOpen(`${url}#:~:text=${searchFor}`)
  }
  const setReaction = (sent: any) => () => {
    if (win !== undefined) {
      win.close()
      setWin(undefined)
    }
    if (sent === sentiment) setSentiment(null)
    else setSentiment(sent)
  }

  return (
    <div className={`mention ${sentiment ? 'mention__done' : ''}`}>
      <a
        className="link"
        href={`${url}#:~:text=${searchFor}`}
        onClick={handleClick}
      >
        <div className="title">{title}</div>
        <div className="url">
          <span className="domain">{domain}</span>
          <span className="path">{path}</span>
        </div>
      </a>

      <div className="buttons">
        <button
          onClick={setReaction('positive')}
          className={
            'btn ' +
            (sentiment
              ? sentiment === 'positive'
                ? 'selected'
                : 'disabled'
              : '')
          }
        >
          👍
        </button>
        <button
          onClick={setReaction('neutral')}
          className={
            'btn ' +
            (sentiment
              ? sentiment === 'neutral'
                ? 'selected'
                : 'disabled'
              : '')
          }
        >
          😶
        </button>
        <button
          onClick={setReaction('negative')}
          className={
            'btn ' +
            (sentiment
              ? sentiment === 'negative'
                ? 'selected'
                : 'disabled'
              : '')
          }
        >
          👎
        </button>
      </div>
    </div>
  )
}
