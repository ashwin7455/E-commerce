import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontex"
import reducer  from "./Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products : [],

}

export const FilterContextProvider = ({children}) => {
    
    const { products } = useProductContext();

    console.log(products)
    
    const [state , dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        dispatch({type:"LOAD_FLITER_PRODUCTS", payload: products})
    },[products])

     return( <FilterContext.Provider value = {{...state}}>
     {children}
     </FilterContext.Provider>
     );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};








