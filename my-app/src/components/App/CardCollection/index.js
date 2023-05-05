import Card from "./Card";
import "./CardCollection.css";
import Rating from '@mui/material/Rating';

function CardCollection({ myStoreData }) {
  return (
    <div className="card-collection">
      {myStoreData &&
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
