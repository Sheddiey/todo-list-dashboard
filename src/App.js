import './App.css';
import Content from './Layout/Content/Content';
import Slidebar from './Layout/Slidebar/Slidebar';

function App() {
  return (
    <div className="App flex">
      <Slidebar />
      <Content />
    </div>
  );
}

export default App;
