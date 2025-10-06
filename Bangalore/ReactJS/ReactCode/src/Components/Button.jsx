
const Button = (props) => {
    const { children, fn } = props
    return (
        <>
            <button className="bg-green-100 text-center h-4 w-4" onClick={fn}>{children}</button>
        </>
    )
}

export default Button