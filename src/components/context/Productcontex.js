import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext()
 
const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError:false,
    products: [],
    featureProducts:[],
}

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    )

 const getProducts=  async(url) => {
   const res = await axios.get(url)
   const products = await res.data;
   console.log(products)
 }



  useEffect(() => {
  getProducts(API);
},[])


    return <AppContext.Provider value ={{ myName: "ashwin" }}>
        {children}
        </AppContext.Provider>
}

//custom hooks
const useProductContext = () => {
    return useContext(AppContext)
}


export {AppProvider , AppContext , useProductContext    };