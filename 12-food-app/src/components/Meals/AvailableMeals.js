import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    let mealsArray = [];
    fetch(
      "https://react-project-9abcd-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    )
      .then(response => response.json())
      .then(response => {
        for (const key in response) {
          mealsArray.push({
            id: response[key].id,
            description: response[key].description,
            name: response[key].name,
            price: response[key].price,
          });
        }
        setDUMMY_MEALS(mealsArray);
        setIsLoading(false)
      });
  }, []);

  if(isLoading) {
    return ( <section>
      <p>Loading...</p>
    </section>)
  
  }

  const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
