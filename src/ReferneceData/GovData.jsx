import React, { useEffect, useRef, useState } from "react";
// import marketData from "../data/GovData";

// List of all 75 districts in Uttar Pradesh
// const districts = [
//   "Agra",
//   "Aligarh",
//   "Ambedkar Nagar",
//   "Amethi",
//   "Amroha",
//   "Auraiya",
//   "Azamgarh",
//   "Badaun",
//   "Baghpat",
//   "Bahraich",
//   "Balrampur",
//   "Banda",
//   "Barabanki",
//   "Bareilly",
//   "Basti",
//   "Bijnor",
//   "Budaun",
//   "Bulandshahr",
//   "Chandauli",
//   "Chitrakoot",
//   "Deoria",
//   "Etah",
//   "Etawah",
//   "Farrukhabad",
//   "Fatehpur",
//   "Firozabad",
//   "Gautam Buddha Nagar",
//   "Ghazipur",
//   "Gonda",
//   "Gorakhpur",
//   "Hamirpur",
//   "Hapur",
//   "Hardoi",
//   "Hathras",
//   "Jalaun",
//   "Jaunpur",
//   "Jhansi",
//   "Kannauj",
//   "Kanpur Dehat",
//   "Kanpur Nagar",
//   "Kasganj",
//   "Kaushambi",
//   "Kushinagar",
//   "Lakhimpur Kheri",
//   "Lalitpur",
//   "Lucknow",
//   "Maharajganj",
//   "Mahoba",
//   "Manipur",
//   "Mathura",
//   "Mau",
//   "Mirzapur",
//   "Mohammadabad",
//   "Moradabad",
//   "Muzaffarnagar",
//   "Pilibhit",
//   "Pratapgarh",
//   "Raebareli",
//   "Rampur",
//   "Saharanpur",
//   "Sambhal",
//   "Sant Ravidas Nagar",
//   "Shahjahanpur",
//   "Shamli",
//   "Shravasti",
//   "Siddharthnagar",
//   "Sitapur",
//   "Sonbhadra",
//   "Sultanpur",
//   "Unnao",
//   "Varanasi",
// ];

const GovData = () => {
  const selectedDistrict = useRef("");
  const [marketData, setmarketData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [districts, setAllDistrict] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const data =
          (await fetch(
            "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdc3b564546246a772a26393094f5645&offset=0&limit=all&format=csv&format=json",
            { method: "GET" }
          ).then((response) => {
            return response.json();
          })) || [];

        setmarketData(
          data.records.filter((item) => {
            return item.state === "Uttar Pradesh";
          })
        );

        const allDistrict = data.records
          .filter((item) => {
            return item.state === "Uttar Pradesh";
          })
          .map((item) => item.district);

        const uniqueDistrict = [...new Set(allDistrict)];
        setAllDistrict(uniqueDistrict);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
    //  console.log(filteredData);
  }, []);

  const handleDistrictChange = (e) => {
    const district = selectedDistrict.current.value;
    // console.log(district)
    // setSelectedDistrict(district);
    // console.log(marketData)
    // Filter the market data based on the selected district
    // console.log(selectedDistrict);

    if (district) {
      console.log(district);
      let filtered = marketData.filter((item) => {
        if (item.district.trim() == district) {
          return item;
        }
      });
      setFilteredData([...filtered]);
      console.log(marketData, selectedDistrict.current.value);
    } else {
      setFilteredData(marketData); // Show all data if no district is selected
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-5 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Market Data</h1>
      <label
        htmlFor="districtSelect"
        className="block text-lg font-medium mb-2"
      >
        Select District:
      </label>
      <select
        id="districtSelect"
        ref={selectedDistrict}
        onChange={handleDistrictChange}
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 mb-6"
      >
        <option value="">All Districts</option>
        {districts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>

      <div id="results">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <p className="font-semibold">
                <strong>Commodity:</strong> {item?.commodity}
              </p>
              <p>
                <strong>Variety:</strong> {item?.variety}
              </p>
              <p>
                <strong>commodity:</strong> {item?.commodity}
              </p>
              <p>
                <strong>Market:</strong> {item?.market}
              </p>
              <p>
                <strong>Grade:</strong> {item?.grade}
              </p>
              <p>
                <strong>Arrival Date:</strong> {item?.arrival_date}
              </p>
              <p>
                <strong>Price Range:</strong> {item?.min_price} -{" "}
                {item.max_price} (Modal Price: {item?.modal_price})
              </p>
              <p>
                <strong>district:</strong> {item?.district}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p className="text-red-500">No data found.</p>
        )}
      </div>
    </div>
  );
};

export default GovData;
