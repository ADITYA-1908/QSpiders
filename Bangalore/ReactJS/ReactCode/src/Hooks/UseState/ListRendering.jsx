

const employees = [{ id: 1, name: "Tom" }, { id: 2, name: "cat" }, { id: 3, name: "Jerry" }]
const ListRendering = () => {
    return (
        <>
            <section className="fluid-container text-center mt-2">
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-body">
                                {
                                    employees.map((e) => <h1 key={e.id}>{e.name}</h1>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ListRendering