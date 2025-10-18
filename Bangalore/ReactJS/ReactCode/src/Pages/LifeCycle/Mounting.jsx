import { Component } from "react";

class Mounting extends Component {
    constructor(props) {
        super(props)
        console.log("Parent constructure")
    }
    componentDidMount() {
        console.log("Parent component didi mount")
    }
    render() {
        console.log("render Method")
        return (
            <>
                <h1>Retunn statement</h1>
            </>
        )
    }
}
export default Mounting;