import './App.css';
import ParamEditor, { Model, Param } from './components/ParamEditor';

function App() {
  // Example params
  const params: Param[] = [
    {
      id: 1,
      name: 'Назначение',
      type: 'string',
    },
    {
      id: 2,
      name: 'Длина',
      type: 'string',
    },
  ];

  // Example model
  const exampleModel: Model = {
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное',
      },
      {
        paramId: 2,
        value: 'макси',
      },
    ],
  };
  return (
    <>
    <h1>Тестовое задание</h1>
    <ParamEditor params={params} model={exampleModel} />
    </>
  )
}

export default App;
