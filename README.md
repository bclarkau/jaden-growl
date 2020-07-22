# jaden-growl

> Test for Jaden Digital

[![NPM](https://img.shields.io/npm/v/jaden-growl.svg)](https://www.npmjs.com/package/jaden-growl) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add jaden-growl
```

## Usage

```jsx
import React, { Component } from 'react'

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
```

## License

MIT © [bclarkau](https://github.com/bclarkau)
