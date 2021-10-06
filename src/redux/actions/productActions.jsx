import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstant";
import axios from 'axios'
export const productList = () => async (dispatch) => {

    try {

        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('http://localhost/and_shop_ecommerce_app/api-fetch-all.php')
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payLoad: error.message })


    }
}


export const getProductDetail = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQUEST })

        const {data} = await axios.get('http://localhost/and_shop_ecommerce_app/api-fetch-all.php?id='+productId)

        dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data})
    }
    catch (error) {
        dispatch({ type: PRODUCT_DETAIL_FAIL })
    }
}