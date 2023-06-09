import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, description, id, linkType }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">
        {linkType === "public" ? (
          <Link to={`/products/${id}`}>{name}</Link>
        ) : (
          <Link to={`/u/products/${id}`}>{name}</Link>
        )}
      </h3>
      <p className="text-gray-600 mb-2">Price: {price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Index = ({ products, linkType }) => {
  return (
    <div className="max-w-4xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
      {products?.length &&
        products.map((product, index) => (
          <ProductCard key={index} {...product} linkType={linkType} />
        ))}
    </div>
  );
};

export default Index;
