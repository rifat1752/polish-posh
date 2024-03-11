import bg from "../../../assets/images/banner-bg.png";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const product = { photoURL, name, brandName, type, price, description };

    console.log(product);
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  };
  return (
    <div
      className="hero min-h-screen w-full "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: " contain ",
        backgroundPosition: "right",
      }}
    >
      <div className="hero-content  flex-col  ">
        <div className="text-center  lg:text-left">
          <h1 className="text-5xl font-bold">Add Product</h1>
          <p></p>
        </div>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="PhotoUrl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
