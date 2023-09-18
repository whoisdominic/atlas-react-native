import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"

export const reactotron = Reactotron.configure({
  name: "Atlas",
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    editor: false, // there are more options to editor
    overlay: true, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect()

export default reactotron
