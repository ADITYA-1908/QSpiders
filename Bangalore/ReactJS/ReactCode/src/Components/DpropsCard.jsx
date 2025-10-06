const DpropsCard = ({ obj }) => {
    const { name, desc } = obj;

    return (
        <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden w-64 hover:shadow-xl transition-shadow duration-300">

            <div className="overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA57j0yUuZGUXVFU6I1L_cE98ZqKXTPmdcLg&s"
                    alt={name}
                    className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                <p className="text-gray-300 text-center mb-4">{desc}</p>
                <div className="flex justify-center">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DpropsCard;
