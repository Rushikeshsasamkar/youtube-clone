import {Button} from '@primer/react'
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Searchbar />
        
        <SideBar/>
        <Content/>
    </div>
  );
}

export default App;
