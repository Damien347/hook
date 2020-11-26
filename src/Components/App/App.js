import './App.css';

import FunctionState from '../StateFunction/FunctionState';
import TodoList from '../StateFunction/TodoList';
import CycleLife from '../CycleLife/CycleLife';
import WillUnmount from '../CycleLife/WillUnmount';
import Arbre from '../UseContext/Arbre';

function App() {
  return (
    <div className="App">
      <FunctionState />
      <TodoList />
      <CycleLife />
      <WillUnmount />
      <Arbre />
    </div>
  );
}

export default App;
