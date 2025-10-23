import { Component } from "react";
import MountingChild1 from "./MountigChild1";

class MountingParent extends Component {
    constructor(props) {
        super(props)
        console.log("Parent constructure")
    }
    componentDidMount() {
        console.log("Parent component didi mount")
    }
    render() {
        console.log("Parent render Method")
        return (
            <>
                <h1>Parent Retunn statement</h1>
                <MountingChild1 />
            </>
        )
    }
}
export default MountingParent;