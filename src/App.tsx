import './App.scss'
import { openList } from './openPopupWindow'
import { useState } from 'react'
import ListPanel from './ListPanel'

export const searchFor = 'company'

const listUrl = window.location.origin + '/#list'

export default function App() {
  if (window.location.hash === '#empty') return <h1>Empty state</h1>
  if (window.location.hash === '#list') {
    console.log('#list')

    return <ListPanel />
    // return <h1>Empty state</h1>;
  }
  return <Start />
}

function Start() {
  const [win, setWin] = useState<Window | null>(null)
  const openRateMode = () => {
    if (!win || win.closed) {
      const child = openList(listUrl, 320)
      setWin(child)
    } else win.focus()
  }
  return (
    <div className="app">
      <div className="main">
        <button onClick={openRateMode}>Go To Rate Mode</button>
      </div>
    </div>
  )
}
