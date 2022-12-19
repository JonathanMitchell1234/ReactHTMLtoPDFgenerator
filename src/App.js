import MyComponent from "./API";
import MyHeader from "./components/header";
import './App.css';
import AboutGrid from "./components/body"


document.body.className = "anim_gradient";

function App() {
  return (
		<div className="App">
			<MyHeader />
			<MyComponent />
			<AboutGrid />
		</div>
  );
}

export default App;
