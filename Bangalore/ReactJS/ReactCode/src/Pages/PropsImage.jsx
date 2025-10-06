import PropsImgCard from "../Components/PropsImgCard"

const PropsImage = () => {
    return (
        <section className="mt-10 ml-10">
            <div className="flex flex-row gap-5">
                <PropsImgCard name="Samsung" />
                <PropsImgCard name="Apple" />
                <PropsImgCard name="Oneplus" />
                <PropsImgCard name="Realme" />
            </div>
        </section>
    )
}

export default PropsImage