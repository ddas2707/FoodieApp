import { API_URL, restaurantList, swiggy_api_URL } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState(restaurantList)

  useEffect(() => {
    getRestaurant();
  }, [])

  async function getRestaurant() {
    try {
      const response = await fetch(swiggy_api_URL, {
        headers: {
          'x-cors-api-key': 'temp_a5b639608c9f9a018c41d3398c48c0e1',
        }
      });
      const json = await response.json();
      console.log(json)
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setRestaurants(resData);
      setFilteredList(resData);
    } catch (error) {
      console.log(error);
    }
  }
  // async function getRestaurants() {

  //   const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.478849&lng=73.819062&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     , {
  //       headers: {
  //         'x-cors-api-key': 'temp_a5b639608c9f9a018c41d3398c48c0e1',
  //       }
  //     });
  //   const json = await data.json();
  //   console.log(json)
  //   setRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  // }



  console.log(filteredList)
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setFilteredList(data);
          }}
        >
          Search
        </button>
      </div>

      {restaurants.length === 0 ? (<Shimmer />) : (
        <div className="restaurant-list">
          {filteredList.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            );
          })}
        </div>
      )}


    </>
  );
};

export default Body;
