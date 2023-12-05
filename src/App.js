import NavigationBar from "./components/NavigationBar"
import Trending from "./components/Trending"
import Intro from "./components/Intro"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>

    </div>
    
  )
}

export default App;
