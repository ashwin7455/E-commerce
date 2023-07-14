//all the data of feature product page is stored in usereducer hook . And from there the we get the data on the main feature product page and we use map method for calling
const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING"){
  //     return{
  //         ...state,
  //         isLoading : true,
  //     };
  // }

  // if (action.type === "API_ERROR"){
  //     return{
  //         ...state,
  //         isLoading: false,
  //         isError:true,

  //     }
  // }
  switch (action.type) {
    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case " SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case " API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case " SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case " SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      // console.log(state);
      return {...state};
  }
};

export default ProductReducer;
