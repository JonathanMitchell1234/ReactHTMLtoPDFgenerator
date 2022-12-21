import MyComponent from "./API";
import MyHeader from "./components/header";
import './App.css';
import AboutGrid from "./components/body"
import MyFooter from "./components/footer"


document.body.className = "anim_gradient";

function App() {
  return (
		<div className="App">
			<MyHeader />
			<MyComponent />
			<AboutGrid />
			<MyFooter / >
		</div>
  );
}

export default App;
