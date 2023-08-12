import './App.css';
import Img from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Tag from './Components/moviecard';

function App() {

  return (
    <div className="App">
    <Tag name="Why are there so many Web3 startups?" poster={Img} />
    <Tag name="What Marriage Means to Me" poster={Img2}/>
  </div>
  );
}

export default App;