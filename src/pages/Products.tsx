// import axios from "axios";
import { ProductsContainer } from "../components/Products/Products.styles";
// import { useState, useEffect } from "react";

export default function Products() {

// const [productsList, setProductsList] = useState([]);
// const auth = "Vfk16Hi9uwSB7cnvfR2eEuWEjTFnlHxmCtH5gRwxhYPLGerZWbfk5zEqri9c";
// const URL = "https://accounts.cartpanda.com/api/fanaiana/products/2"
// const config = {
//     'headers': {
//         "Accept": "application/json",
//         "Authorization": `Bearer ${auth}`
//     }
// }
// useEffect(() => {
//     const promise = axios.get(URL, config)
//     promise.then((res) => setProductsList(res.data))
//     promise.catch((err)=>{alert(err.response.data.message)})
//     console.log(productsList);
// }, [])

  return <ProductsContainer>
  </ProductsContainer>;
}
