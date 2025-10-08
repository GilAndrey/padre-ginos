import { Component } from "react";
import { Link } from "@tanstack/react-router";
import PizzaOfTheDay from "./PizzaOfTheDay";

class ErrorBoundary extends Component {
    state = { hasError: false};
    constructor(props) {
        super(props);

        this.celebrateError = this.celebrateError.bind(this)
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught some stupid error", error, info)
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    componentDidUpdate() {
    }

    celebrateError = () => {
        this.setState({
            celeration: "lol"
        });
    }
    render () {
        if (this.state.hasError) {
            return (
                <div onClick={this.celebrateError} className="error-boundary">
                    <h2>Uh oh!</h2>
                    <p>
                        There was an error with this page. <Link to="/"> Click here </Link>
                        to go back to the home page.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

function EBWithHook() {
    const potd = PizzaOfTheDay()
    return <ErrorBoundary potd={potd} />
}

export default ErrorBoundary;