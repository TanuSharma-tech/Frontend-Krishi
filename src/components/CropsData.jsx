import React, { useState } from "react";
import Fruits from "../data/Fruits.js";
import cropsDatat from "../data/Food.js"
import vegetablesData from "../data/vegetables.js"
import Flower from "../data/flowers";
const CropsData = () => {
  var cropsData = [];
  const [language, setLanguage] = useState("en");
  var cropsList = {};
  const cropList = {
    en: [
      "Rice",
      "Wheat",
      "Chickpea",
      "Kidney Bean",
      "Black Gram",
      "Pigeon Pea",
      "Green Gram",
    ],
    hi: ["चावल", "गेहूं", "चना", "राजमा", "उड़द", "अरहर", "मूंग"],
  };
  const vegatablesList = {
    en: [
      "potato",
      "tomato",
      "onion",
      "Cabbage",
      "Carrot",
      "Spinach",
      "Cauliflower",
      "Radish",
      "Pumpkin",
      "Shimla Mirch",
      "Brinjal",
    ],
    hi: [
      "आलू",
      "टमाटर",
      "प्याज",
      "पत्ता गोभी",
      "गाजर",
      "पालक",
      "फूलगोभी",
      "मूली",
      "कद्दू",
      "शिमला मिर्च",
      "बैंगन",
    ],
  };
   const FlowerList = {
     en: [
       "Rose",
       "Marigold",
       "Jasmine",
       "Lotus",
       "Hibiscus",
       "Daisy",
       "Gerbera",
       "Tuberose",
       "Sunflower",
       "Bougainvillea",
       "Zinnia",
     ],
     hi: [
       "गुलाब",
       "गेंदा",
       "चमेली",
       "कमल",
       "गुड़हल",
       "गुलबहार",
       "गेरबेरा",
       "रजनीगंधा",
       "सूरजमुखी",
       "बौगनविलिया",
       "जिन्निया",
     ],
   };

  const fruitList = {
    en: ["Grapes"],
    hi: ["अंगूर"],
  };
   if (window.location.pathname == "/crops") {
     cropsData = cropsDatat;
     cropsList = cropList;
   } else if (window.location.pathname == "/fruits") {
     cropsData = Fruits;
     cropsList = fruitList;
   } else if (window.location.pathname == "/vegetables") {
     cropsData = vegetablesData;
     cropsList = vegatablesList;
  }
  else if (window.location.pathname == "/flowers") {
    cropsData = Flower;
    cropsList = FlowerList;
  }
 
  const [selectedCrop, setSelectedCrop] = useState(""); // For selected crop
  const [filteredCrops, setFilteredCrops] = useState(cropsData); // Initially showing all crops
  console.log(window.location.pathname);
 
    
    


  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleCropChange = (event) => {
    const selectedCropName = event.target.value;
    setSelectedCrop(selectedCropName);

    // Filter crops based on the selected crop
    if (selectedCropName === "") {
      setFilteredCrops(cropsData); // Show all crops if no selection is made
    } else {
      const filtered = cropsData.filter(
        (crop) => crop.name[language] === selectedCropName
      );
      setFilteredCrops(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === "en" ? "Crop Advisor" : "फसल सलाहकार"}
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() =>
              handleLanguageChange(language === "en" ? "hi" : "en")
            }
            className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            {language === "en" ? "Switch to Hindi" : "Switch to English"}
          </button>
        </div>

        {/* Crop Select Dropdown */}
        <div className="mb-6">
          <label className="mr-4 font-semibold">
            {language === "en" ? "Select Crop:" : "फसल चुनें:"}
          </label>
          <select
            onChange={handleCropChange}
            value={selectedCrop}
            className="p-2 border rounded-md"
          >
            <option value="">
              {language === "en" ? "All Crops" : "सभी फसलें"}
            </option>
            {cropsList[language].map((cropName) => (
              <option key={cropName} value={cropName}>
                {cropName}
              </option>
            ))}
          </select>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          {language === "en" ? "Crop List" : "फसल सूची"}
        </h2>
        {console.log(typeof(imgt))}
    
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCrops.map((crop) => (
            <li
              key={crop._id}
              className="bg-white p-6 rounded-lg shadow-lg"
               style={{
              // backgroundImage: `url('${crop.image.url}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent'
            }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {crop.name?.[language]}
              </h3>
              {crop.agricultural_season?.[language] && (
                <p className="text-gray-700 mb-2">
                  {language === "en" ? "Agricultural Season:" : "फ़सल मौसम:"}{" "}
                  {crop.agricultural_season[language]}
                </p>
              )}
              {crop.suitable_months?.[language] && (
                <p className="text-gray-700 mb-2">
                  {language === "en" ? "Suitable Months:" : "उपयुक्त महीने:"}{" "}
                  {crop.suitable_months[language].join(", ")}
                </p>
              )}
              {crop.most_effective_month?.[language] && (
                <p className="text-gray-700 mb-2">
                  {language === "en"
                    ? "Most Effective Month:"
                    : "सबसे प्रभावी महीना:"}{" "}
                  {crop.most_effective_month[language]}
                </p>
              )}
              {crop.states && crop.states.length > 0 && (
                <p className="text-gray-700 mb-2">
                  {language === "en" ? "States:" : "राज्य:"}{" "}
                  {crop.states
                    .map((state) => state.state?.[language])
                    .join(", ")}
                </p>
              )}

              {crop.diseases && crop.diseases.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Diseases:" : "बीमारियाँ:"}
                  </h4>
                  <ul className="list-disc pl-5">
                    {crop.diseases.map((disease) => (
                      <li key={disease.name[language]}>
                        <b>{disease.name?.[language]}</b>
                        <p>
                          {language === "en" ? "Symptoms:" : "लक्षण:"}{" "}
                          {disease.symptoms?.[language]}
                        </p>
                        <p>
                          {language === "en" ? "Management:" : "प्रबंधन:"}{" "}
                          {disease.management?.[language]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {crop.pesticides && crop.pesticides.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Pesticides:" : "कीटनाशक:"}
                  </h4>
                  <ul className="list-disc pl-5">
                    {crop.pesticides.map((pesticide) => (
                      <li key={pesticide.name[language]}>
                        <b>{pesticide.name?.[language]}</b>
                        <p>
                          {language === "en"
                            ? "Recommended for:"
                            : "के लिए अनुशंसित:"}{" "}
                          {pesticide.recommended_for?.[language]}
                        </p>
                        <p>
                          {language === "en"
                            ? "Application Method:"
                            : "अनुप्रयोग विधि:"}{" "}
                          {pesticide.application_method?.[language]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {crop.sowing_method?.[language] && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Sowing Method:" : "बुआई विधि:"}
                  </h4>
                  <p>{crop.sowing_method[language]}</p>
                </div>
              )}

              {crop.water_requirement?.[language] && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Water Requirement:" : "जल आवश्यकता:"}
                  </h4>
                  <p>{crop.water_requirement[language]}</p>
                </div>
              )}

              {crop.maturity_days?.[language] && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Maturity Days:" : "परिपक्वता दिन:"}
                  </h4>
                  <p>{crop.maturity_days[language]}</p>
                </div>
              )}

              {crop.soil && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">
                    {language === "en" ? "Soil Details:" : "मिट्टी विवरण:"}
                  </h4>
                  {crop.soil.suitable_soil_texture?.[language] && (
                    <p>
                      {language === "en" ? "Soil Type:" : "मिट्टी का प्रकार:"}{" "}
                      {crop.soil.suitable_soil_texture[language]}
                    </p>
                  )}
                  {crop.soil.pH_range?.[language] && (
                    <p>
                      {language === "en" ? "pH Range:" : "pH रेंज:"}{" "}
                      {crop.soil.pH_range[language]}
                    </p>
                  )}
                  {crop.soil.nutrient_requirements?.[language] && (
                    <p>
                      {language === "en"
                        ? "Nutrient Requirements:"
                        : "पोषक तत्व आवश्यकताएँ:"}{" "}
                      {crop.soil.nutrient_requirements[language]}
                    </p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CropsData;
