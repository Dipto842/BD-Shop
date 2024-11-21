/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";

const ProductsSidebar = ( {setSort ,setbrand,hedelsearch,products} ) => {
  const Hedelrised = ()=>{
    setSort(''),
    setbrand('')
    window.location.reload()
  }

  return (
    <div>
      <div className="mt-8  mr-7 ml-2">
        <h1 className="text-sm font-bold ml-3">Search</h1>
        <div className="ml-3 ">
        <form onSubmit={hedelsearch}>
        <input
            type="search"
            placeholder="Search"
            name="search"
            className=" h-[40px] border-2 input rounded-r-none    w-full input-bordered rounded-b-none rounded-l-md "
          />
          <button className=" border-2 h-[40px] btn-secondary w-full  btn rounded-y-md  rounded-t-none   flex items-center  ">
            
            Search
            <span className="inline-block">
              <CiSearch size={20} />
            </span>
          </button>
        </form>
          
        </div>
      </div>

      <div className=" mr-7 ml-2">
        <select className="select select-bordered w-full  mt-6  " onChange={(e)=>setSort(e.target.value)}>
          
          <option value={'asc'}>high price</option>
          <option value={'des'} >low price</option>
        </select>
      </div>
      <div className=" mr-7 ml-2">
        <select className="select select-bordered w-full  mt-6  " onChange={(e)=>setbrand(e.target.value)} >
          <option disabled selected>
          brand
          </option>
         
          {products.map(brand=> <option key={brand.brand} >{brand.brand}</option>)}
        </select>
      </div>
      <div className="mr-7 ml-2 "> 

      <button onClick={Hedelrised} className="btn btn-primary mt-5 w-full ">Reset</button>
      </div>
    </div>
  );
};

export default ProductsSidebar;
