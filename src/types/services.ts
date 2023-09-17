export interface Analytics {
  track: (eventName: string, payload: any) => void
  identify: (uniqueId: string, payload: any) => void
  init: () => void
}
