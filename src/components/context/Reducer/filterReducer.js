const filterReducer = (state,action) => {
    

    switch (action.type) {

       case "LOAD_FLITER_PRODUCTS":
        return {
            ...state,
            filter_products:action.paylaod,
            all_products: action.paylaod,

        }

        default:
             return state;
    }


};

export default filterReducer;