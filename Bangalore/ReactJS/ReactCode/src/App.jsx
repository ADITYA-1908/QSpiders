import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import ListRendering from './Hooks/UseState/ListRendering';

function App() {

  return (
    <>
      <Header />
      {/* //! By using Array */}
      {/* <Images /> */}
      {/* //! By using props */}
      {/* <PropsImage /> */}
      {/* //!By usig destructuring  */}
      {/* <DpropsPage /> */}
      {/* //! Event handaling */}
      {/* <Event /> */}
      {/* //!Hooks */}

      {/* 1.useState */}
      {/* <UsestateHooks /> */}
      {/* <Table /> */}
      <ListRendering />




    </>
  )
}

export default App
