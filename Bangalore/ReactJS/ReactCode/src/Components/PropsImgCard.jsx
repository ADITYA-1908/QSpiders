const PropsImgCard = ({ name, img, description }) => {
    return (
        <div className="max-w-xs bg-white rounded-xl">

            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s"}
                    alt={name}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">{name}</h2>
                <p className="text-gray-600 text-sm text-center">{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quam?"}</p>

                {/* Button */}
                <div className="mt-8 flex justify-center">
                    <button className="pt-7 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 shadow-md hover:shadow-lg transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropsImgCard;
