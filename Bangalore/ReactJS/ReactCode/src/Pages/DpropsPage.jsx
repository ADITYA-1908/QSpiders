import DpropsCard from "../Components/DpropsCard";

const items = [
    { id: 101, name: "Samsung", desc: "Samsung mobile phone" },
    { id: 102, name: "Apple", desc: "Apple mobile phone" },
    { id: 103, name: "RealMe", desc: "RealMe mobile phone" },
    { id: 104, name: "OnePlus", desc: "OnePlus mobile phone" },
]

const DpropsPage = () => {
    return (
        <section className="mt-12  px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {items.map((item) => (
                    <DpropsCard key={item.id} obj={item} />
                ))}
            </div>
        </section>
    );
};

export default DpropsPage;
