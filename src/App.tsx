import * as React from 'react'
import './App.css'

import logo from './logo.svg'

import {observer} from 'mobx-react'
import {IAppState} from './mobx/store'

type Props = {
  appState: IAppState;
}

@observer
class App extends React.PureComponent<Props> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.appState.timer}
        </p>
        <button onClick={() => this.props.appState.setTimer()}>增加</button>
      </div>
    )
  }
}

export default App
