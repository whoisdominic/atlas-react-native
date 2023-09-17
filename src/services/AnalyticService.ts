import { Analytics } from "types"

export class AnalyticService implements Analytics {
  constructor() {
    this.init()
  }

  init() {}
  identify(uniqueId: string, payload: any) {}
  track(eventName: string, payload: any) {}
}
