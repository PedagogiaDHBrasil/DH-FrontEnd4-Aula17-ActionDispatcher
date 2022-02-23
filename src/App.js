import { useSelector, useDispatch } from 'react-redux';

function App() {
  const result = useSelector(state => state);
  const dispatch = useDispatch();

  function depositar(quantia) {
    return {
      type: 'depositar',
      payload: quantia,
    };
  }

  function sacar(quantia) {
    return {
      type: 'sacar',
      payload: quantia,
    };
  }

  return (
    <div className="App">
      <button type="button" onClick={() => dispatch(depositar(Math.random() * 1000))}>Depositar</button>
      <button type="button" onClick={() => dispatch(sacar(Math.random() * 1000))}>Sacar</button>
    </div>
  );
}

export default App;
