import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Login from "./Hooks/UseState/Signin";
import Signup from './Hooks/UseState/Signup';
import CounterComponent from './reduxToolkit/CounterComponent';
import store from './reduxToolkit/Store/store';
function App() {
  const [page, setPage] = useState("");

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
      {/* <TodoList /> */}

      {/*2. useEffect */}
      {/* <Product /> */}

      {/* //!Class based component */}
      {/* <ClassBased name={"aditya"} /> */}
      {/* <ListFetch /> */}

      {/* //!Life cycle methods */}
      {/* <MountingParent /> */}

      {/* //!React routing */}
      {/* layout(about,contact,home,navbar,pagenotfound),user(auth) */}
      {/* <BrowserRouter>
          <Routes>
            <Route path='/'/>
          </Routes>
      </BrowserRouter> */}

      {/* //!useReduce */}
      {/* <ReduceCount /> */}
      {/* <ReduceObject /> */}
      {/* <ReduceForm /> */}

      {/* //!React redux */}
      {/* <Provider store={store}>
        <ReduxComponent />
        <FormComponent />
      </Provider> */}

      {/* //!ReduxToolkit */}
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </>
  )
}

export default App
