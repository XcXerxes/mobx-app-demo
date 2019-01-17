import {observable, action} from 'mobx'

export interface IAppState {
  timer: number;
  setTimer: () => void;
}

class AppState {
  @observable public timer = 0

  @action.bound
  public setTimer() {
    this.timer ++
  }
}
export default new AppState()
