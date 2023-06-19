import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer/productReducer";

const AppContext = createContext(); //YAHA PAR EK store bna liya gya hai

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {   //children refers to the app component  
  const [state, dispatch] = useReducer(reducer, initialState); //useReducer hook returns two elements of array i.e state and dispatch

  const getProducts = async (url) => { //The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains
    dispatch({ type: "SET_LOADING" });
    try {  //if for any reason we didn't get our data then show error ,we will do this by try and catch method
      const res = await axios.get(url); //we use axios here ,  Axios is a library that serves to create HTTP requests that are present externally. when we use axios then it will return promise //axios gives data in the data object.
      //whne we call api it give us a respnse (res)
      const products = await res.data; //await is like  " thoda ruk jao phele sara data aa jane do "
      dispatch({ type: "SET_API_DATA", payload: products }); //dispatch ka kaam hai -> kaam lagvana for that we used to declare the type means which type of work //PAYLOAD -> jo kaam humm kar rhe hai use krne k liye hume kaun kaun se data ki jarurt padegi here we use products
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //when we refresh or load a site data is already present there so we need something that make our api call automatic on a moment. For that we have useEffect hook in react js.

//MY 2ND API CALL FOR SINGLE PRODUCT
const getSingleProduct = async (url) => {
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const res = await axios.get(url);
    // console.log(res);
    const singleProduct = await res.data;
    // console.log(singleProduct);
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
}


  useEffect(() => {
    getProducts(API);
  }, []); // by passing array dependency , when we refresh our page then it will run for once only

  return (    //when we create a context we need a provider
    <AppContext.Provider value={{ ...state , getSingleProduct }}>
      {/* (...) spread operator */}

      {children}
    </AppContext.Provider>
  );
};

//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
