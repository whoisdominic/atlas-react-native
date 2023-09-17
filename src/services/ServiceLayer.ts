import { AnalyticService } from "./AnalyticService"
import { PlaceholderService } from "./PlaceholderService"

class ServiceLayer {
  placeholder: PlaceholderService
  analytics: AnalyticService
  constructor() {
    this.placeholder = new PlaceholderService()
    this.analytics = new AnalyticService()
  }
}

export const serviceLayer = new ServiceLayer()
