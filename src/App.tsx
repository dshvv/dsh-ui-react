import Toast from "./components/Toast";
import Button from "./components/Button";

function App() {
  const clickBtn = ()=>{
    Toast.show('你好');
  }
  return (
    <div className="App">
      <Button onClick={clickBtn}>按钮</Button>
    </div>
  );
}

export default App;
