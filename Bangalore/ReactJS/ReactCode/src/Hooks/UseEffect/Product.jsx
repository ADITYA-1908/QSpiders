import UseFetchApi from "../CustomHooks/UseFetchApi";

const Product = () => {
    const [items, setItems] = UseFetchApi();

    function handleRatingFilter() {
        const filtered = items.filter((item) => item.rating.rate > 4);
        setItems(filtered);
    }

    function handleInput(e) {
        const query = e.target.value.toLowerCase();
        const filtered = items.filter((item) =>
            item.title.toLowerCase().includes(query)
        );
        setItems(filtered);
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Product List</h2>

            <div className="text-center mb-3">
                <input
                    type="text"
                    placeholder="Search items"
                    onChange={handleInput}
                    className="form-control w-50 mx-auto"
                />
            </div>

            <div className="text-center mb-3">
                <button onClick={handleRatingFilter} className="btn btn-primary">
                    5⭐
                </button>
            </div>

            <div className="row">
                {items.length > 0 ? (
                    items.map(({ id, title, price, image, rating }) => (
                        <div key={id} className="col-md-3 mb-4">
                            <div className="card p-3 h-100 shadow-sm">
                                <img
                                    src={image}
                                    alt={title}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "contain" }}
                                />
                                <div className="card-body">
                                    <h6 className="card-title">{title}</h6>
                                    <p className="card-text">💰 Price: ${price}</p>
                                    <p className="card-text">
                                        ⭐ Rating: {rating?.rate} ({rating?.count})
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h5 className="text-center text-secondary">Loading products...</h5>
                )}
            </div>
        </div>
    );
};

export default Product;
