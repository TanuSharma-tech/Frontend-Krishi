import React, { useState } from "react";

// Crop dat

 import cropsData from '../data/Food.js';

// Month names in English and Hindi
const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  hi: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ],
};


// const Meta = () => {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [filteredCrops, setFilteredCrops] = useState([]);

//   const handleMonthChange = (month) => {
//     setSelectedMonth(month);
//     filterCrops(month, language);
//   };

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     filterCrops(selectedMonth, lang);
//   };

//   const filterCrops = (month, lang) => {
//     const filtered = cropsData.filter((crop) => {
//       return crop.suitable_months[lang].includes(month);
//     });
//     setFilteredCrops(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">
//           {language === "en" ? "Crop Advisor" : "फसल सलाहकार"}
//         </h1>
//         <div className="flex justify-between items-center mb-6">
//           <select
//             value={selectedMonth}
//             onChange={(e) => handleMonthChange(e.target.value)}
//             className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           >
//             <option value="">{language === "en" ? "Select Month" : "महीना चुनें"}</option>
//             {months[language].map((month, index) => (
//               <option key={index} value={month}>
//                 {month}
//               </option>
//             ))}
//           </select>

//           <button
//             onClick={() => handleLanguageChange(language === "en" ? "hi" : "en")}
//             className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
//           >
//             {language === "en" ? "Switch to Hindi" : "Switch to English"}
//           </button>
//         </div>

//         <h2 className="text-2xl font-semibold mb-4">
//           {language === "en" ? "Crop List" : "फसल सूची"}
//         </h2>

//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filteredCrops.map((crop) => (
//             <li key={crop._id} className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-semibold mb-2">
//                 {crop.name[language]}
//               </h3>
//               <p className="text-gray-700 mb-2">
//                 {language === "en" ? "Suitable Months:" : "उपयुक्त महीने:"}{" "}
//                 {crop.suitable_months[language].join(", ")}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 {language === "en"
//                   ? "Most Effective Month:"
//                   : "सबसे प्रभावी महीना:"}{" "}
//                 {crop.most_effective_month[language]}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 {language === "en" ? "Agricultural Season:" : "फ़सल मौसम:"}{" "}
//                 {crop.agricultural_season[language]}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 {language === "en" ? "States:" : "राज्य:"}{" "}
//                 {crop.states.map((state) => state.state[language]).join(", ")}
//               </p>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Diseases:" : "बीमारियाँ:"}
//                 </h4>
//                 <ul className="list-disc pl-5">
//                   {crop.diseases.map((disease) => (
//                     <li key={disease.name[language]}>
//                       <b>{disease.name[language]}</b>
//                       <p>
//                         {language === "en" ? "Symptoms:" : "लक्षण:"}{" "}
//                         {disease.symptoms[language]}
//                       </p>
//                       <p>
//                         {language === "en" ? "Management:" : "प्रबंधन:"}{" "}
//                         {disease.management[language]}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Pesticides:" : "कीटनाशक:"}
//                 </h4>
//                 <ul className="list-disc pl-5">
//                   {crop.pesticides.map((pesticide) => (
//                     <li key={pesticide.name[language]}>
//                       <b>{pesticide.name[language]}</b>
//                       <p>
//                         {language === "en"
//                           ? "Recommended for:"
//                           : "के लिए अनुशंसित:"}{" "}
//                         {pesticide.recommended_for[language]}
//                       </p>
//                       <p>
//                         {language === "en"
//                           ? "Application Method:"
//                           : "अनुप्रयोग विधि:"}{" "}
//                         {pesticide.application_method[language]}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Sowing Method:" : "बुआई विधि:"}
//                 </h4>
//                 <p>{crop.sowing_method[language]}</p>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Water Requirement:" : "जल आवश्यकता:"}
//                 </h4>
//                 <p>{crop.water_requirement[language]}</p>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Maturity Days:" : "परिपक्वता दिन:"}
//                 </h4>
//                 <p>{crop.maturity_days[language]}</p>
//               </div>

//               <div className="mb-4">
//                 <h4 className="text-lg font-semibold mb-2">
//                   {language === "en" ? "Soil Details:" : "मिट्टी विवरण:"}
//                 </h4>
//                 <p>
//                   {language === "en" ? "Soil Type:" : "मिट्टी का प्रकार:"}{" "}
//                   {crop.soil.suitable_soil_texture[language]}
//                 </p>
//                 <p>
//                   {language === "en" ? "pH Range:" : "pH रेंज:"}{" "}
//                   {crop.soil.pH_range[language]}
//                 </p>
//                 <p>
//                   {language === "en"
//                     ? "Nutrient Requirements:"
//                     : "पोषक तत्व आवश्यकताएँ:"}{" "}
//                   {crop.soil.nutrient_requirements[language]}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Meta;



const cropsList = {
  en: [
    "Rice",
    "Wheat",
    "Chickpea",
    "Kidney Bean",
    "Black Gram",
    "Pigeon Pea",
    "Green Gram",
  ],
  hi: ["चावल", "गेहूं", "चने", "राजमा", "काले चने", "तुअर", "हरे चने"],
};

const Meta = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [language, setLanguage] = useState("en");
  const [filteredCrops, setFilteredCrops] = useState([]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    filterCrops(month, language);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    filterCrops(selectedMonth, lang);
  };

  const filterCrops = (month, lang) => {
    const filtered = cropsData.filter((crop) => {
      // Check if the crop name is in the defined crops list
      const cropName = crop.name[lang];
      const isCropIncluded = cropsList[lang].includes(cropName);

      // Check if the month is suitable for the crop
      const isSuitableMonth = crop.suitable_months[lang].includes(month);

      return isCropIncluded && isSuitableMonth;
    });
    setFilteredCrops(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          {language === "en" ? "Crop Advisor" : "फसल सलाहकार"}
        </h1>
        <div className="flex justify-between items-center mb-6">
          <select
            value={selectedMonth}
            onChange={(e) => handleMonthChange(e.target.value)}
            className="block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">
              {language === "en" ? "Select Month" : "महीना चुनें"}
            </option>
            {months[language].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>

          <button
            onClick={() =>
              handleLanguageChange(language === "en" ? "hi" : "en")
            }
            className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            {language === "en" ? "Switch to Hindi" : "Switch to English"}
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          {language === "en" ? "Crop List" : "फसल सूची"}
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCrops.map((crop) => (
            <li key={crop._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                {crop.name[language]}
              </h3>
              <p className="text-gray-700 mb-2">
                {language === "en" ? "Suitable Months:" : "उपयुक्त महीने:"}{" "}
                {crop.suitable_months[language].join(", ")}
              </p>
              <p className="text-gray-700 mb-2">
                {language === "en"
                  ? "Most Effective Month:"
                  : "सबसे प्रभावी महीना:"}{" "}
                {crop.most_effective_month[language]}
              </p>
              <p className="text-gray-700 mb-2">
                {language === "en" ? "Agricultural Season:" : "फ़सल मौसम:"}{" "}
                {crop.agricultural_season[language]}
              </p>
              <p className="text-gray-700 mb-2">
                {language === "en" ? "States:" : "राज्य:"}{" "}
                {crop.states.map((state) => state.state[language]).join(", ")}
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Diseases:" : "बीमारियाँ:"}
                </h4>
                <ul className="list-disc pl-5">
                  {crop.diseases.map((disease) => (
                    <li key={disease.name[language]}>
                      <b>{disease.name[language]}</b>
                      <p>
                        {language === "en" ? "Symptoms:" : "लक्षण:"}{" "}
                        {disease.symptoms[language]}
                      </p>
                      <p>
                        {language === "en" ? "Management:" : "प्रबंधन:"}{" "}
                        {disease.management[language]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Pesticides:" : "कीटनाशक:"}
                </h4>
                <ul className="list-disc pl-5">
                  {crop.pesticides.map((pesticide) => (
                    <li key={pesticide.name[language]}>
                      <b>{pesticide.name[language]}</b>
                      <p>
                        {language === "en"
                          ? "Recommended for:"
                          : "के लिए अनुशंसित:"}{" "}
                        {pesticide.recommended_for[language]}
                      </p>
                      <p>
                        {language === "en"
                          ? "Application Method:"
                          : "अनुप्रयोग विधि:"}{" "}
                        {pesticide.application_method[language]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Sowing Method:" : "बुआई विधि:"}
                </h4>
                <p>{crop.sowing_method[language]}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Water Requirement:" : "जल आवश्यकता:"}
                </h4>
                <p>{crop.water_requirement[language]}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Maturity Days:" : "परिपक्वता दिन:"}
                </h4>
                <p>{crop.maturity_days[language]}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Soil Details:" : "मिट्टी विवरण:"}
                </h4>
                <p>
                  {language === "en" ? "Soil Type:" : "मिट्टी का प्रकार:"}{" "}
                  {crop.soil.suitable_soil_texture[language]}
                </p>
                <p>
                  {language === "en" ? "pH Range:" : "pH रेंज:"}{" "}
                  {crop.soil.pH_range[language]}
                </p>
                <p>
                  {language === "en"
                    ? "Nutrient Requirements:"
                    : "पोषक तत्व आवश्यकताएँ:"}{" "}
                  {crop.soil.nutrient_requirements[language]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Meta;
