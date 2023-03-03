import "./index.css";

export default function Product(props) {
    const {id, imageUrl, name, description, price} = props

    return (
        <div
            key={id}
            className={"product"}
        >
            <img
                src={imageUrl}
                alt={`Image of ${name}`}
                className={"image-product"}
            />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
            <div>
                <button
                    className="snipcart-add-item"
                    data-item-id={id}
                    data-item-image={imageUrl}
                    data-item-name={name}
                    data-item-url="/"
                    data-item-price={price}
                >
                    See More
                </button>
            </div>
        </div>
    );
}