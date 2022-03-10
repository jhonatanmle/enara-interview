
import { HomeProvider } from './Context/home-context'
import Home from './Pages/Home'

function App() {

  return (
    <HomeProvider>
      <Home/>
    </HomeProvider>
  )
}

export default App
