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
  public componentDidMount() {
    this.props.appState.fetchData()
  }
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
        <ul>
          {this.props.appState.list.length > 0 && this.props.appState.list.map((item: any, index:number) => (
            <li key={item.sha}>
              <span>{item.name}</span>
              <span>{item.path}</span>
              <span>{item.size}</span>
              <span>{item.url}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
