import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MainContent from "./components/MainContent";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children: [
      {
        path:"/",
        element:<MainContent/>,
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ],
  }
])

function App() {

  return (

    <Provider store={store}>
    <>
    {/* <h1 className="font-bold">App</h1> */}
    {/* <Head/> */}
    <RouterProvider router={appRouter}/>
    </>
    </Provider>
  );
}

export default App;
 