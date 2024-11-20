const Featuredproducts = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center mt-2">
        featured products
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="data:image/jpeg;base64,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"
              alt="Shoes"
                  className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="data:image/jpeg;base64,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"
              alt="Shoes"
                  className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Shoes"
                  className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Shoes"
                  className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Shoes"
                className="object-cover h-48 w-full"

            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
              alt="Shoes"
                className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        <div className="card bg-base-100  shadow-xl mb-6 mt-3">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
              alt="Shoes"
                  className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
          <button className="btn btn-primary">Odar</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Featuredproducts;
