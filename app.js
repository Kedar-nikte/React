import React, { Component, lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header";
import Body from "/src/components/Body";
import About from "/src/components/About";
import Contact from "/src/components/Contact";
import Error from "/src/components/Error";
import RestaurantMenu from "/src/components/RestMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "/src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "/src/utils/appStore";
import Cart from "/src/components/Cart";

//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt



const About = lazy(() => import("/src/components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);



//Higher order component is a function that takes a component and returns a component
//Higher order components are used to enhance the component
//Redux store is a big javascript object and it is kept in a global centre space
//Slicing in redux store is a logical block in order to access data for particular component in react application 
//By slicing the Redux store, you're essentially isolating the part of the state that a particular component needs to access or modify. 
//This helps in keeping your components more focused, modular, and efficient, as they only deal with the data they require.
//For example, if you have a shopping cart feature in your application, you might slice the Redux store to extract just
//the cart-related data (like items in the cart, total price, etc.) and pass it down to the relevant components, rather than passing the entire global state. 
//Selector is a hook in react