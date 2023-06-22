import { useState, useEffect } from 'react'
import './App.css'
import { socket } from './socket'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [testEvent, setTestEvent] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onTestEvent(value) {
      setTestEvent(value)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('TEST', onTestEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onTestEvent)
    }
  }, [])

  return (
    <>
      <h1>{isConnected ? 'Connected!' : 'Not Connected...'}</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>{testEvent}</p>
      </div>
    </>
  )
}

export default App
