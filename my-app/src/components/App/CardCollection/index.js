import Card from "./Card";
import "./CardCollection.css";

function CardCollection({ myStoreData }) {
  return (
    <div className="card-collection">
      {myStoreData && // if myStoreData is truthy, then render the following:
        myStoreData.map((item) => {
          return ( 
            <Card 
              key={item.id}
              category={item.category}
              title={item.title}
              imageSrc={item.image}
              rating={item.rating.rate}
              price={item.price}
            />
          );
        })}
    </div>
  );
}

export default CardCollection;
