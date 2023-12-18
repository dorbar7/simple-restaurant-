import { Component } from "react";
import "./ClockEx.css";

interface ClockExProps {
    format: string; // 24h / 12h
}

interface ClockExState {
    time: string;
}

// class ClockEx extends Component { // No Props, No State
// class ClockEx extends Component<ClockExProps> { // Only Props, No State
// class ClockEx extends Component<{}, ClockExState> { // No Props, Only State
class ClockEx extends Component<ClockExProps, ClockExState> { // Also Props and State

    private timerId: number; // For ending the time.

    public constructor(props: ClockExProps) {
        super(props);

        // Init state is always in the ctor:
        this.state = {
            time: ""
        };
    }

    // Lifecycle Hooks:

    // useEffect performing once - perform onc when component is ready for use
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {

            // Update state: 
            this.setState({ time: this.getTime() });

        }, 1000);
    }

    private getTime(): string {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour12: this.props.format === "12h" });
        return time;
    }

    // // Perform whenever props or state changes:
    // public componentDidUpdate(prevProps: Readonly<ClockExProps>, prevState: Readonly<ClockExState>, snapshot?: any): void {
    // }

    private showTime1(): void {
        alert(this.getTime());
    }

    private showTime2 = () => {
        alert(this.getTime());
    }

    public render(): JSX.Element {
        return (
            <div className="ClockEx Box">
                <span> {this.state.time} </span>
                <button onClick={this.showTime1.bind(this)}> 🕑 </button>
                <button onClick={this.showTime2}> 🕑 </button>
            </div>
        );
    }

    // Perform before component destroyed.
    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }
}

export default ClockEx;
