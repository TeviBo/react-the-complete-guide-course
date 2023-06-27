import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   useEffect(() => {
      const fetchMeals = async () => {
         const response = await fetch("https://react-http-c847a-default-rtdb.firebaseio.com/meals.json");

         if (!response.ok) {
            throw new Error("Something went wrong!");
         }
         const responseData = await response.json();

         const loadedMeals = [];

         for (const key in responseData) {
            loadedMeals.push({
               id: key,
               name: responseData[key].name,
               description: responseData[key].description,
               price: responseData[key].price
            });
         }

         setMeals(loadedMeals);
         setIsLoading(false);
      };

      fetchMeals().catch((err) => {
         setIsLoading(false);
         setError(err.message);
      });
   }, []);

   if (isLoading) {
      return (
         <section className={classes.MealsLoading}>
            <p>Loading...</p>
         </section>
      );
   }
   if (error) {
      return (
         <section className={classes.MealsError}>
            <p>An error has ocurred. Message: {error}</p>
         </section>
      );
   }

   const mealsList = meals.map(({ id, name, description, price }) => <MealItem key={id} id={id} name={name} description={description} price={price} />);

   return (
      <section className={classes.meals}>
         <Card>
            <ul>{mealsList}</ul>
         </Card>
      </section>
   );
};

export default AvailableMeals;
