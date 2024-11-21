import { useEffect, useState } from "react";
import ProductsSidebar from "./ProductsSidebar/ProductsSidebar";
import axios from "axios";
import { FaFaceFrownOpen } from "react-icons/fa6";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [brand, setbrand] = useState("");
  const [Loding, setLoding] = useState(true);

  console.log(sort, brand, search);

  useEffect(() => {
    const fetch = async () => {
      axios
        .get(
          `https://fastsarvar.vercel.app/allPodak?name=${search}&price=${sort}$brand=${brand}`
        )
        .then((res) => {
          setProducts(res.data);
          setLoding(false);
        });
    };

    fetch();
  }, [brand, search, sort]);

  console.log(products);
  const hedelsearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = " ";
  };
  return (
    <div className=" grid grid-cols-12 ">
      <div className=" col-span-2 border-2 min-h-screen">
        <ProductsSidebar
          setSort={setSort}
          setbrand={setbrand}
          hedelsearch={hedelsearch}
          products={products}
        ></ProductsSidebar>
      </div>
      <div className="col-span-10 ml-20">
        {Loding ? (
          <div className="text-center mt-72">
            <span className="loading loading-spinner loading-lg"></span>{" "}
          </div>
        ) : products ? (
          <div className="grid grid-cols-3 gap-7 items-center ">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-base-100  shadow-xl mb-10 mt-10 "
              >
                <figure>
                  <img src={product.img} className="object-cover h-48 w-full" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.name.lenght < 50
                      ? `${product.name}`
                      : `${product.name.slice(0, 35)}...`}
                  </h2>
                  <p>
                    {product.short_description.lenght < 50
                      ? `${product.short_description}`
                      : `${product.short_description.slice(0, 50)}...`}
                  </p>
                  <div className="card-actions justify-start flex-col gap-4">
                    <div className=" text-[16px] font-bold ">
                      Price: ${product.price}
                    </div>
                    <div className="text-[16px] font-bold">
                      {" "}
                      brand : {product.brand}
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary">Wishlist</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-3xl font-bold text-center w-full flex flex-col justify-center mt-60">
            <div className="mb-4 flex justify-center text-yellow-400">
              <FaFaceFrownOpen size={100} />
            </div>
            <h1> No products </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
