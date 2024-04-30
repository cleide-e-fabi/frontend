import axios from "axios";
import { ProductsContainer } from "../components/Products/Products.styles";
import { useState, useEffect } from "react";

export default function Products() {

  const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

// const options = {
//   method: 'GET',
//   url: 'https://accounts.cartpanda.com/api/fafgf/products',
//   params: {'': ''},
//   headers: {
//     Authorization: 'Bearer fdgfdgdfgf'
//   }
// };

const fetchDataOnClick = async () => {
  try {

    const headers = {
      'Authorization': 'Bearer dfsfsd'
    };
    const response = await axios.get('https://accounts.cartpanda.com/api/v3/fanaiana/products', { headers });

    console.log('dados', response.data);

  } catch (err) {
    console.log('erro:', err);
  }
};
  return <ProductsContainer>
    <button onClick={fetchDataOnClick}>requisicao</button>
  </ProductsContainer>;
}
