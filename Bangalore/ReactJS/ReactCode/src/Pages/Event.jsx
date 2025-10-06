
const Event = () => {
    function handleEvent1() {
        console.log("Hello")
    }
    function handleEvent2(name) {
        console.log(`hello ${name}`)
    }
    return (
        <section className='w-100 h-60 bg-gray-500 '>
            <div className="bg-yellow-300 w-auto h-20 text-4xl text-center">
                <h2>
                    Event handlers
                </h2>
            </div>
            <div className="flex justify- gap-3 p-4 ">
                <button className="bg-red-500 cursor-pointer" onClick={handleEvent1}>Submit</button>
                <br />
                <button className="bg-red-500 cursor-pointer" onClick={function () {
                    handleEvent2("Aditya")
                }}>Submit</button>
            </div>
        </section>
    )
}

export default Event