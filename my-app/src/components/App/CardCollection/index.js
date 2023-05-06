import Card from "./Card";
import "./CardCollection.css";

function CardCollection({ myStoreData }) {
  if (!myStoreData) {
    return <div>Loading...</div>;
  }

  // console.log(filteredData);
  return (
    <div className="card-collection card-conatiner">
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
