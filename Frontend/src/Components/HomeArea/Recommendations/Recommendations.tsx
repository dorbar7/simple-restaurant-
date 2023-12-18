import { SyntheticEvent } from "react";
import notifyService from "../../../Services/NotifyService";
import "./Recommendations.css";

function Recommendations(): JSX.Element {

    function first(): void {
        notifyService.success("Irish Coffee");
    }

    function second(args: SyntheticEvent): void {
        console.log(args);
        console.log(args.target);
        console.log((args.target as HTMLButtonElement).innerHTML);
        notifyService.success("Americano");
    }

    function third(item: string): void {
        notifyService.success(item);
    }

    function showAverage(): void {
        const arr = [10, 20, 30, 40];
        let sum = 0;
        for(let i = 0; i < arr.length - 1; i++) {
            sum += arr[i];
        }
        const avg = sum / arr.length;
        notifyService.success("Average: " + avg);
    }

    return (
        <div className="Recommendations Box">
            <span>Recommendations: </span>
            <button onClick={first}>First</button>
            <button onClick={second}>Second</button>
            <button onClick={() => third("Ice Cream Coffee")}>Third</button>
            <button onClick={showAverage}>Average</button>
        </div>
    );
}

export default Recommendations;
