import './App.css';

import FunctionState from '../StateFunction/FunctionState';
import TodoList from '../StateFunction/TodoList';
import CycleLife from '../CycleLife/CycleLife';
import WillUnmount from '../CycleLife/WillUnmount';

function App() {
  return (
    <div className="App">
      <FunctionState />
      <TodoList />
      <CycleLife />
      <WillUnmount />
    </div>
  );
}

export default App;
