import './asset/Style/App.scss'
import Sidebar from './Components/sidebar/Sidebar';
import Content from './Components/content/Content';
import Provider from './Components/Provider/Provider';
const App = () => {
  return (
    <Provider>
      <Sidebar />
      <Content />
    </Provider>
  )
}

export default App