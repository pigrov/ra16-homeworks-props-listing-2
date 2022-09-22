import React from "react";

function Listing(props) {
  const { items } = props;

  console.log(items);

  const listing = items
    .filter((nottFilteredItem) => nottFilteredItem.state === "active")
    .map((item) => {
      const leftClass =
        item.quantity <= 10
          ? "item-quantity level-low"
          : item.quantity <= 20
          ? "item-quantity level-medium"
          : "item-quantity level-high";

      const currencyCode =
        item.currency_code === "USD"
          ? "$"
          : item.currency_code === "EUR"
          ? "€"
          : "£";

      return (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage?.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title.length > 50
                ? item.title.substring(50) + "..."
                : item.title}
            </p>
            <p className="item-price">
              {currencyCode}
              {item.price}
            </p>
            <p className={leftClass}>{item.quantity} left</p>
          </div>
        </div>
      );
    });

  return <div className="item-list">{listing}</div>;
}

export default Listing;
