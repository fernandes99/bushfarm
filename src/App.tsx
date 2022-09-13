import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { Leafs } from "./components/leafs";
import { Navigation } from "./components/navigation";
import { HomePage } from "./pages/home";

import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import { RootState } from "./store";
import { setNotify } from "./store/reducers/global";

export const App = () => {
  const dispatch = useDispatch();
  const global = useSelector((state: RootState) => state.global);

  useEffect(() => {
    if (!global.notify.show) return;

    dispatch(setNotify({ show: false }));

    const options: ToastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }

    toast.success(global.notify.message, options);
  }, [global.notify.show])

  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      <Leafs />
      <ToastContainer />
    </>
  );
}

export default App;