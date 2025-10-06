const Images = () => {
    const products = [
        { name: "Samsung", desc: "Lorem ipsum dolor sit amet.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s" },
        { name: "Apple", desc: "Lorem ipsum dolor sit amet.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s" },
        { name: "OnePlus", desc: "Lorem ipsum dolor sit amet.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s" },
        { name: "Realme", desc: "Lorem ipsum dolor sit amet.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s" },
    ];

    return (
        <section className="mt-10 ml-10">
            <div className="flex flex-row gap-5">
                {products.map((product, index) => (
                    <div key={index} className="card w-70 bg-gray-400 p-3">
                        <div className="img mb-2">
                            <a href="#">
                                <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" />
                            </a>
                        </div>
                        <div className="font-bold text-center mb-2">
                            {product.name}
                        </div>
                        <div className="text-white mb-2">
                            <p>{product.desc}</p>
                        </div>
                        <div className="mt-2 text-center">
                            <button className="bg-yellow-300 p-2 rounded-xl">Buy now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Images;
