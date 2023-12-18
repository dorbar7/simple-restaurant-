import "./Discount.css";

function Discount(): JSX.Element {

    const percent = 10; // Demo for getting discount from server...

    return (
        <div className="Discount Box">
			<span>Only now - {percent}% discount on all products!</span>
        </div>
    );
}

export default Discount;
