import { useState, useEffect } from 'react'
import './App.scss'
import { socket } from './socket'
import ThreeCanvas from './three/ThreeCanvas'
import { Container } from '@chakra-ui/react'

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
      <Container paddingY={5} margin={0} maxWidth={'full'}>
        <h1>
          {isConnected ? 'Connected!' : 'Not Connected...'}
          <p>{testEvent}</p>
        </h1>
        <ThreeCanvas />
      </Container>
    </>
  )
}

export default App
