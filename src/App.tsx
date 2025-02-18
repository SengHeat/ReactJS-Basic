
import Greeting, {Component1, GreetingAndParamenter} from "./components/greeting/index"
import { Component } from "./components/greeting/index"

function App() {

  return (
    <div>
       <Greeting />
       <Component/>
       <Component1 text="Hello React with TypeScript" />;
       <GreetingAndParamenter text="Hello React with TypeScript" index="24" />
       </div>
  )
}

export default App
