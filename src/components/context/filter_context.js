import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontex"
import reducer  from "./Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_product : [],
    all_products : [],

}

export const FilterContextProvider = ({children}) => {
    
    const { Products } = useProductContext();
    
    const [state , dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        dispatch({type:"LOAD_FLITER_PRODUCTS", payload: Products})
    },[])

     return( <FilterContext.Provider value = {{...state}}>
     {children}
     </FilterContext.Provider>
     );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};








