import React, { useEffect, useState } from 'react';

const Services = () => {
  const api = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const json = await response.json();
      console.log(json);
      setProducts(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5 pt-2">
      <div className="mt-5 mb-5">
        <h3 className="text-center text-decoration-underline link-underline-danger fw-bold link-offset-2 ">
          Products
        </h3>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => {
          const { id, title, price, image } = product;
          return (
            <div className="col mb-4" key={id}>
              <div className="card h-100 d-flex flex-column">
                <img src={image} className="card-img-top" alt="Product" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                </div>
                <div className="mt-auto card-footer text-center fw-bolder">
                  <p className="card-text">$ : {price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
