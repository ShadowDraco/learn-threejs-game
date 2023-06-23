import { useState, useEffect } from 'react'
import './App.scss'
import { socket } from './socket'
import ThreeCanvas from './three/ThreeCanvas'

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [testEvent, setTestEvent] = useState([])

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
      <ThreeCanvas />
      <div className='card'>
        <p>{testEvent}</p>
      </div>
    </>
  )
}

export default App
