import MyComponent from "./API";
import MyHeader from "./components/header";
import './App.css';


document.body.className = "anim_gradient";

function App() {
  return (
		<div className="App">
			<MyHeader />
			<MyComponent />
		</div>
  );
}

export default App;
