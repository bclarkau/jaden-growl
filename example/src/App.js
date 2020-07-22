import React from 'react'

import { Growl, useGrowl } from 'jaden-growl'
import 'jaden-growl/dist/index.css'

const App = () => {
  const [active, setActive] = useGrowl()

  return <div className="App">
    <header className="App-header">
      <a className="App-link" href="#" onClick={() => void setActive(true)}>Click here to activate the growl</a>
    </header>
    <Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" timeout={2000} />
  </div>
}

export default App
