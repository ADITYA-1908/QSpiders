import { Component } from "react";

class MountingChild1 extends Component {
    constructor(props) {
        super(props)
        console.log("Child constructure")
    }
    componentDidMount() {
        console.log("Child component didi mount")
    }
    render() {
        console.log("child render Method")
        return (
            <>
                <h1>Child Retunn statement</h1>
            </>
        )
    }
}
export default MountingChild1;