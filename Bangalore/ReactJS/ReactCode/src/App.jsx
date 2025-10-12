import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Login from './Hooks/UseState/Signin';
import Signup from './Hooks/UseState/Signup';

function App() {
  const [page, setPage] = useState("signin");

  return (
    <>
      <Header setPage={setPage} />
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
      {/* <ListRendering /> */}
      <div className=" mt-4">
        {page === "signin" && <Login />}
        {page === "signup" && <Signup />}
      </div>
      {/* <Signup /> */}





    </>
  )
}

export default App
