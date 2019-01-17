import {observable, action, runInAction} from 'mobx'
export interface IAppState {
  timer: number;
  setTimer: () => void;
  list: any;
  fetchData: any;
}

class AppState {
  @observable public timer = 0
  @observable public list:any = []
  @observable public state = 'pending'

  @action.bound
  public setTimer() {
    this.timer ++
  }
  @action
  public async fetchData() {
    try {
      this.list = []
      debugger
      const response = await fetch('https://api.github.com/repos/typecho-fans/plugins/contents/')
      const data = await response.json()
      runInAction(() => {
        this.state = 'done'
        this.list = data
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
        throw error
      })
    }
  }
}
export default new AppState()
