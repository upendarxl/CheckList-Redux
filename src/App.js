import './App.css';
import Todo from "./toDo";
import {Provider} from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store ={store}>
        <Todo/>
    </Provider>
    
  );
}

export default App;