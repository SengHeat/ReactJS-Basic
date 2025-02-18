

import Greeting, {GreetingAndParamenter} from "./components/greeting";
import Greeting1 from "./components/learn/index";

function App() {
  return (
    <div>
      <Greeting1/>
      <Greeting/>
      <GreetingAndParamenter text="Hello World" index="0"/>
    </div>
  )
}

export default App
