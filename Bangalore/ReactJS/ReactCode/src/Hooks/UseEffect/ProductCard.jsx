
const ProductCard = ({ product }) => {
    let { id, title, price, image, rating } = product;
    return (
        <>
            <div key={id} className="col-md-3 mb-4">
                <div className="card p-3 h-100">
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
        </>
    )
}

export default ProductCard