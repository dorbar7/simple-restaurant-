import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = [
        { id: 1, name: "Ice Cream", price: 10 },
        { id: 2, name: "Pavlova", price: 15 },
        { id: 3, name: "Eclair", price: 12 },
        { id: 4, name: "Apple Pie", price: 18 },
    ];

    return (
        <div className="Desserts Box">

            {items.map(item => <span key={item.id}> {item.name} ({item.price}) | </span>)}

        </div>
    );
}

export default Desserts;
