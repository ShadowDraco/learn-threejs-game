const testHandler = (io, socket, payload) => {
  console.log('Test event payload:', payload)
}

module.exports = { testHandler }
