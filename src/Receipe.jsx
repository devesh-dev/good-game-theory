import { useEffect, useState } from "react";
import axios from "axios";

const BeerCard = ({ beer }) => {
  return (
    <>
      <div class="grid grid-cols-3 gap-4 p-5 ">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold font-bebas tracking-wider bg-red-200 rounded-sm">
            {beer.id}. {beer.name}
          </h1>
          <h3>{beer.tagline}</h3>
          <img
            className="max-w-sm mx-auto my-4 rounded-lg shadow h-[12rem]"
            src={beer.image_url}
            alt="Chocolate Cake"
          />

          <h3 className="text-sm font-semibold mb-2 ">
            Alcohol By Volume: {beer.abv}
          </h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            International Bitterness Units: {beer.ibu}
          </h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Final gravity: {beer.target_fg}
          </h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Original gravity: {beer.target_og}
          </h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            European Brewery Convention: {beer.ebc}
          </h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Standard Reference Method: {beer.srm}
          </h3>
          <h3 className="text-sm font-semibold mb-2"> pH: {beer.ph}</h3>
          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Attenuation Level: {beer.attenuation_level}
          </h3>

          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Volume: {beer.volume.value} {beer.volume.unit}
          </h3>

          <h3 className="text-sm font-semibold mb-2">
            {" "}
            Boil Volume: {beer.boil_volume.value} {beer.boil_volume.unit}
          </h3>

          <h2 className="text-xl font-semibold mb-2 italic underline font-libre">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-4">
            <h2>Malt:</h2>
            {beer.ingredients.malt.map((malt) => (
              <li className="mb-2" key={malt.id}>
                {malt.name} - {malt.amount.value} {malt.amount.unit}
              </li>
            ))}

            <h2>Hops:</h2>
            {beer.ingredients.hops.map((hops) => (
              <li className="mb-2" key={hops.id}>
                {hops.name} - {hops.amount.value} {hops.amount.unit}
              </li>
            ))}

            <h2>Yeast: </h2>
            <li className="mb-2">{beer.ingredients.yeast}</li>
            {/* Add more ingredients here */}
          </ul>

          {/* METHODS */}
          <h2 className="text-xl font-semibold mb-2 italic underline font-libre">
            Method
          </h2>
          <ul className="list-disc list-inside mb-4">
            {beer.method.mash_temp.map((mash_temp) => (
              <li className="mb-2">
                {" "}
                Max Temp: {mash_temp.temp.value} {mash_temp.temp.unit}{" "}
                {mash_temp.duration}
              </li>
            ))}
            {
              <li className="mb-2">
                Fermentation: {beer.method.fermentation.temp.value}{" "}
                {beer.method.fermentation.temp.unit}
              </li>
            }
          </ul>
          {/* METHODS */}

          <h2 className="text-xl font-semibold font-libre mb-2 italic underline">
            Food Pairing
          </h2>
          {beer.food_pairing.map((pairing) => (
            <li>{pairing}</li>
          ))}

          <h2 className="text-xl font-semibold mb-2 italic underline font-libre">
            Instructions
          </h2>

          <ol className="list-decimal list-inside mb-6">
            <li className="mb-2">
              {beer.volume.value} {beer.volume.unit}
            </li>
            <li className="mb-2">
              In a large bowl, sift together the flour, cocoa powder, baking
              powder, and baking soda.
            </li>
            <li className="mb-2">
              In another bowl, whisk together the sugar and eggs until well
              combined.
            </li>
            <li className="mb-2">
              Add the wet ingredients to the dry ingredients and mix until
              smooth.
            </li>
            <li className="mb-2">
              Divide the batter evenly between the prepared pans.
            </li>
            {/* Add more instructions here  */}
          </ol>

          <p className="text-gray-700 mb-4">{beer.brewers_tips}</p>
        </div>
      </div>
    </>
  );
};

const Receipe = () => {
  const [beers, setBeers] = useState([]);

  //  API CALLING
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      console.log(response.data);
      setBeers(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {beers.map((beer) => (
        <div key={beer.id}>
          <BeerCard key={beer.id} beer={beer} />
        </div>
      ))}
    </>
  );
};

export default Receipe;
