import React, { useState } from "react";
import "./a.css";


// Crop dat
const cropsData = [
  {
    _id: "RICE001",
    name: {
      en: "Rice",
      hi: "चावल",
    },
    type: "Cereal",
    suitable_months: {
      en: ["June", "July", "August"],
      hi: ["जून", "जुलाई", "अगस्त"],
    },
    most_effective_month: {
      en: "July",
      hi: "जुलाई",
    },
    agricultural_season: {
      en: "Kharif (Monsoon)",
      hi: "खरीफ (मानसून)",
    },
    states: [
      {
        state: {
          en: "Punjab",
          hi: "पंजाब",
        },
        atmospheric_conditions: {
          en: "High temperature, high humidity",
          hi: "अधिक तापमान, अधिक आर्द्रता",
        },
      },
      {
        state: {
          en: "Haryana",
          hi: "हरियाणा",
        },
        atmospheric_conditions: {
          en: "Moderate temperature, moderate humidity",
          hi: "मध्यम तापमान, मध्यम आर्द्रता",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Blast",
          hi: "ब्लास्ट",
        },
        symptoms: {
          en: "Lesions on leaves and neck",
          hi: "पत्तियों और गर्दन पर घाव",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
      {
        name: {
          en: "Leaf Folder",
          hi: "लीफ फोल्डर",
        },
        symptoms: {
          en: "Folded leaves",
          hi: "मुड़े हुए पत्ते",
        },
        management: {
          en: "Use insecticides, maintain hygiene",
          hi: "कीटनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Fungicide X",
          hi: "फफूँदनाशक एक्स",
        },
        recommended_for: {
          en: "Blast, Leaf Folder",
          hi: "ब्लास्ट, लीफ फोल्डर",
        },
        application_method: {
          en: "Spray every 15 days",
          hi: "हर 15 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Transplanting",
      hi: "प्रत्यारोपण",
    },
    water_requirement: {
      en: "High",
      hi: "अधिक",
    },
    maturity_days: {
      en: "120-150",
      hi: "120-150",
    },
    soil: {
      type: {
        en: "Alluvial, Clay Loam",
        hi: "अल्यूवियल, क्ले लूम",
      },
      pH_range: {
        en: "5.5-7.5",
        hi: "5.5-7.5",
      },
      nutrient_requirements: {
        en: "Nitrogen, Phosphorus, Potassium",
        hi: "नाइट्रोजन, फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Clay Loam",
        hi: "सैंडी लूम, क्ले लूम",
      },
    },
  },
  {
    _id: "WHEAT001",
    name: {
      en: "Wheat",
      hi: "गेहूं",
    },
    type: "Cereal",
    suitable_months: {
      en: ["October", "November", "December"],
      hi: ["अक्टूबर", "नवंबर", "दिसंबर"],
    },
    most_effective_month: {
      en: "November",
      hi: "नवंबर",
    },
    agricultural_season: {
      en: "Rabi (Winter)",
      hi: "रबी (सर्दी)",
    },
    states: [
      {
        state: {
          en: "Punjab",
          hi: "पंजाब",
        },
        atmospheric_conditions: {
          en: "Cool temperature, low humidity",
          hi: "ठंडा तापमान, कम आर्द्रता",
        },
      },
      {
        state: {
          en: "Haryana",
          hi: "हरियाणा",
        },
        atmospheric_conditions: {
          en: "Moderate temperature, moderate humidity",
          hi: "मध्यम तापमान, मध्यम आर्द्रता",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Powdery Mildew",
          hi: "पाउडरी मिल्ड्यू",
        },
        symptoms: {
          en: "White powder on leaves",
          hi: "पत्तियों पर सफेद पाउडर",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
      {
        name: {
          en: "Leaf Rust",
          hi: "लीफ रस्ट",
        },
        symptoms: {
          en: "Orange-red spots on leaves",
          hi: "पत्तियों पर नारंगी-लाल धब्बे",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Fungicide Y",
          hi: "फफूँदनाशक वाई",
        },
        recommended_for: {
          en: "Powdery Mildew, Leaf Rust",
          hi: "पाउडरी मिल्ड्यू, लीफ रस्ट",
        },
        application_method: {
          en: "Spray every 15 days",
          hi: "हर 15 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Direct Sowing",
      hi: "सीधा बीजाई",
    },
    water_requirement: {
      en: "Moderate",
      hi: "मध्यम",
    },
    maturity_days: {
      en: "120-150",
      hi: "120-150",
    },
    soil: {
      type: {
        en: "Alluvial, Loam",
        hi: "अल्यूवियल, लूम",
      },
      pH_range: {
        en: "6.0-8.0",
        hi: "6.0-8.0",
      },
      nutrient_requirements: {
        en: "Nitrogen, Phosphorus, Potassium",
        hi: "नाइट्रोजन, फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Clay Loam",
        hi: "सैंडी लूम, क्ले लूम",
      },
    },
  },
  {
    _id: "CHICKPEA001",
    name: {
      en: "Chickpea",
      hi: "चना",
    },
    type: "Pulse",
    suitable_months: {
      en: ["October", "November", "December"],
      hi: ["अक्टूबर", "नवंबर", "दिसंबर"],
    },
    most_effective_month: {
      en: "November",
      hi: "नवंबर",
    },
    agricultural_season: {
      en: "Rabi (Winter)",
      hi: "रबी (सर्दी)",
    },
    states: [
      {
        state: {
          en: "Madhya Pradesh",
          hi: "मध्य प्रदेश",
        },
        atmospheric_conditions: {
          en: "Cool temperature, low humidity",
          hi: "ठंडा तापमान, कम आर्द्रता",
        },
      },
      {
        state: {
          en: "Rajasthan",
          hi: "राजस्थान",
        },
        atmospheric_conditions: {
          en: "Moderate temperature, moderate humidity",
          hi: "मध्यम तापमान, मध्यम आर्द्रता",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Fusarium Wilt",
          hi: "फ्यूजेरियम विल्ट",
        },
        symptoms: {
          en: "Yellowing of leaves, wilting",
          hi: "पत्तियों का पीला होना, मुरझाना",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
      {
        name: {
          en: "Powdery Mildew",
          hi: "पाउडरी मिल्ड्यू",
        },
        symptoms: {
          en: "White powder on leaves",
          hi: "पत्तियों पर सफेद पाउडर",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Fungicide Z",
          hi: "फफूँदनाशक जेड",
        },
        recommended_for: {
          en: "Fusarium Wilt, Powdery Mildew",
          hi: "फ्यूजेरियम विल्ट, पाउडरी मिल्ड्यू",
        },
        application_method: {
          en: "Spray every 15 days",
          hi: "हर 15 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Direct Sowing",
      hi: "सीधा बीजाई",
    },
    water_requirement: {
      en: "Moderate",
      hi: "मध्यम",
    },
    maturity_days: {
      en: "90-120",
      hi: "90-120",
    },
    soil: {
      type: {
        en: "Alluvial, Loam",
        hi: "अल्यूवियल, लूम",
      },
      pH_range: {
        en: "6.0-8.0",
        hi: "6.0-8.0",
      },
      nutrient_requirements: {
        en: "Nitrogen, Phosphorus, Potassium",
        hi: "नाइट्रोजन, फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Clay Loam",
        hi: "सैंडी लूम, क्ले लूम",
      },
    },
  },
  {
    _id: "KIDNEYBEAN001",
    name: {
      en: "Kidney Bean",
      hi: "राजमा",
    },
    type: "Pulse",
    suitable_months: {
      en: ["April", "May", "June"],
      hi: ["अप्रैल", "मई", "जून"],
    },
    most_effective_month: {
      en: "May",
      hi: "मई",
    },
    agricultural_season: {
      en: "Kharif (Monsoon)",
      hi: "खरीफ (मानसून)",
    },
    states: [
      {
        state: {
          en: "Uttarakhand",
          hi: "उत्तराखंड",
        },
        atmospheric_conditions: {
          en: "Cool temperature, high humidity",
          hi: "ठंडा तापमान, अधिक आर्द्रता",
        },
      },
      {
        state: {
          en: "Himachal Pradesh",
          hi: "हिमाचल प्रदेश",
        },
        atmospheric_conditions: {
          en: "Moderate temperature, moderate humidity",
          hi: "मध्यम तापमान, मध्यम आर्द्रता",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Powdery Mildew",
          hi: "पाउडरी मिल्ड्यू",
        },
        symptoms: {
          en: "White powder on leaves",
          hi: "पत्तियों पर सफेद पाउडर",
        },
        management: {
          en: "Use fungicides, maintain hygiene",
          hi: "फफूँदनाशक का उपयोग करें, स्वच्छता बनाए रखें",
        },
      },
      {
        name: {
          en: "Root Rot",
          hi: "रूट रॉट",
        },
        symptoms: {
          en: "Soft, rotting roots",
          hi: "नरम, सड़ते हुए जड़",
        },
        management: {
          en: "Improve drainage, avoid waterlogging",
          hi: "निकासी में सुधार करें, जलभराव से बचें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Fungicide X",
          hi: "फफूँदनाशक एक्स",
        },
        recommended_for: {
          en: "Powdery Mildew, Root Rot",
          hi: "पाउडरी मिल्ड्यू, रूट रॉट",
        },
        application_method: {
          en: "Spray every 15 days",
          hi: "हर 15 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Direct Sowing",
      hi: "सीधा बीजाई",
    },
    water_requirement: {
      en: "High",
      hi: "अधिक",
    },
    maturity_days: {
      en: "120-150",
      hi: "120-150",
    },
    soil: {
      type: {
        en: "Alluvial, Loam",
        hi: "अल्यूवियल, लूम",
      },
      pH_range: {
        en: "6.0-8.0",
        hi: "6.0-8.0",
      },
      nutrient_requirements: {
        en: "Nitrogen, Phosphorus, Potassium",
        hi: "नाइट्रोजन, फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Clay Loam",
        hi: "सैंडी लूम, क्ले लूम",
      },
    },
  },
  {
    _id: "BLACKGRAM001",
    name: {
      en: "Black Gram",
      hi: "उड़द",
    },
    type: "Pulse",
    suitable_months: {
      en: ["July", "August", "September"],
      hi: ["जुलाई", "अगस्त", "सितंबर"],
    },
    most_effective_month: {
      en: "August",
      hi: "अगस्त",
    },
    agricultural_season: {
      en: "Kharif (Monsoon)",
      hi: "खरीफ (मानसून)",
    },
    states: [
      {
        state: {
          en: "Maharashtra",
          hi: "महाराष्ट्र",
        },
        atmospheric_conditions: {
          en: "Warm and humid climate",
          hi: "गरम और आर्द्र जलवायु",
        },
      },
      {
        state: {
          en: "Madhya Pradesh",
          hi: "मध्य प्रदेश",
        },
        atmospheric_conditions: {
          en: "Warm climate with moderate rainfall",
          hi: "मध्यम वर्षा के साथ गरम जलवायु",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Leaf Curl",
          hi: "पत्ती मरोड़",
        },
        symptoms: {
          en: "Curled leaves and stunted growth",
          hi: "पत्तियों का मरोड़ना और अवरुद्ध वृद्धि",
        },
        management: {
          en: "Use insecticides, maintain field hygiene",
          hi: "कीटनाशकों का उपयोग करें, खेत की स्वच्छता बनाए रखें",
        },
      },
      {
        name: {
          en: "Yellow Mosaic Virus",
          hi: "पीला मोज़ेक वायरस",
        },
        symptoms: {
          en: "Yellow patches on leaves",
          hi: "पत्तियों पर पीले धब्बे",
        },
        management: {
          en: "Use virus-free seeds, apply appropriate insecticides",
          hi: "वायरस-मुक्त बीजों का उपयोग करें, उपयुक्त कीटनाशक लगाएँ",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Insecticide Z",
          hi: "कीटनाशक जेड",
        },
        recommended_for: {
          en: "Leaf Curl, Yellow Mosaic Virus",
          hi: "पत्ती मरोड़, पीला मोज़ेक वायरस",
        },
        application_method: {
          en: "Spray every 10 days",
          hi: "हर 10 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Direct Sowing",
      hi: "सीधी बुवाई",
    },
    water_requirement: {
      en: "Moderate",
      hi: "मध्यम",
    },
    maturity_days: {
      en: "90-120",
      hi: "90-120",
    },
    soil: {
      type: {
        en: "Loam, Clay Loam",
        hi: "लूम, क्ले लूम",
      },
      pH_range: {
        en: "6.5-7.5",
        hi: "6.5-7.5",
      },
      nutrient_requirements: {
        en: "Phosphorus, Potassium",
        hi: "फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Silty Clay",
        hi: "सैंडी लूम, सिल्टी क्ले",
      },
    },
  },
  {
    _id: "PIGEONPEA001",
    name: {
      en: "Pigeon Pea",
      hi: "अरहर",
    },
    type: "Pulse",
    suitable_months: {
      en: ["June", "July", "August"],
      hi: ["जून", "जुलाई", "अगस्त"],
    },
    most_effective_month: {
      en: "July",
      hi: "जुलाई",
    },
    agricultural_season: {
      en: "Kharif (Monsoon)",
      hi: "खरीफ (मानसून)",
    },
    states: [
      {
        state: {
          en: "Uttar Pradesh",
          hi: "उत्तर प्रदेश",
        },
        atmospheric_conditions: {
          en: "Hot climate with moderate rainfall",
          hi: "गरम जलवायु और मध्यम वर्षा",
        },
      },
      {
        state: {
          en: "Maharashtra",
          hi: "महाराष्ट्र",
        },
        atmospheric_conditions: {
          en: "Warm and humid climate",
          hi: "गरम और आर्द्र जलवायु",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Wilt",
          hi: "विल्ट",
        },
        symptoms: {
          en: "Sudden wilting of leaves",
          hi: "पत्तियों का अचानक मुरझाना",
        },
        management: {
          en: "Use disease-free seeds, apply fungicides",
          hi: "रोग-मुक्त बीजों का उपयोग करें, फफूँदनाशक का उपयोग करें",
        },
      },
      {
        name: {
          en: "Sterility Mosaic",
          hi: "बांझपन मोज़ेक",
        },
        symptoms: {
          en: "Stunted growth and sterility in pods",
          hi: "अवरुद्ध वृद्धि और फलियों में बांझपन",
        },
        management: {
          en: "Use resistant varieties, spray appropriate insecticides",
          hi: "प्रतिरोधी किस्मों का उपयोग करें, उपयुक्त कीटनाशकों का छिड़काव करें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Insecticide P",
          hi: "कीटनाशक पी",
        },
        recommended_for: {
          en: "Wilt, Sterility Mosaic",
          hi: "विल्ट, बांझपन मोज़ेक",
        },
        application_method: {
          en: "Spray every 10-15 days",
          hi: "हर 10-15 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Drilling",
      hi: "ड्रिलिंग",
    },
    water_requirement: {
      en: "Low",
      hi: "कम",
    },
    maturity_days: {
      en: "160-180",
      hi: "160-180",
    },
    soil: {
      type: {
        en: "Loamy, Well-drained",
        hi: "लूम, अच्छी तरह से निकासी वाली",
      },
      pH_range: {
        en: "6.0-7.0",
        hi: "6.0-7.0",
      },
      nutrient_requirements: {
        en: "Phosphorus, Potassium",
        hi: "फॉस्फोरस, पोटैशियम",
      },
      suitable_soil_texture: {
        en: "Sandy Loam, Clay Loam",
        hi: "सैंडी लूम, क्ले लूम",
      },
    },
  },
  {
    _id: "GREENGRAM001",
    name: {
      en: "Green Gram",
      hi: "मूंग",
    },
    type: "Pulse",
    suitable_months: {
      en: ["March", "April", "May", "June"],
      hi: ["मार्च", "अप्रैल", "मई", "जून"],
    },
    most_effective_month: {
      en: "April",
      hi: "अप्रैल",
    },
    agricultural_season: {
      en: "Zaid (Summer)",
      hi: "ज़ैद (ग्रीष्मकाल)",
    },
    states: [
      {
        state: {
          en: "Rajasthan",
          hi: "राजस्थान",
        },
        atmospheric_conditions: {
          en: "Hot and dry climate",
          hi: "गरम और शुष्क जलवायु",
        },
      },
      {
        state: {
          en: "Punjab",
          hi: "पंजाब",
        },
        atmospheric_conditions: {
          en: "Warm climate with moderate rainfall",
          hi: "गरम जलवायु के साथ मध्यम वर्षा",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Anthracnose",
          hi: "एंथ्रेक्नोज़",
        },
        symptoms: {
          en: "Dark lesions on leaves",
          hi: "पत्तियों पर गहरे धब्बे",
        },
        management: {
          en: "Use disease-free seeds, apply fungicides",
          hi: "रोग-मुक्त बीजों का उपयोग करें, फफूँदनाशकों का उपयोग करें",
        },
      },
      {
        name: {
          en: "Bacterial Blight",
          hi: "बैक्टीरियल ब्लाइट",
        },
        symptoms: {
          en: "Water-soaked spots on leaves",
          hi: "पत्तियों पर पानी से भरे धब्बे",
        },
        management: {
          en: "Use resistant varieties, spray copper fungicides",
          hi: "प्रतिरोधी किस्मों का उपयोग करें, कॉपर फफूँदनाशक छिड़कें",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Fungicide Y",
          hi: "फफूँदनाशक वाई",
        },
        recommended_for: {
          en: "Anthracnose, Bacterial Blight",
          hi: "एंथ्रेक्नोज़, बैक्टीरियल ब्लाइट",
        },
        application_method: {
          en: "Spray every 12 days",
          hi: "हर 12 दिन में छिड़काव करें",
        },
      },
    ],
    sowing_method: {
      en: "Broadcasting",
      hi: "छिटकाव",
    },
    water_requirement: {
      en: "Moderate",
      hi: "मध्यम",
    },
    maturity_days: {
      en: "60-70",
      hi: "60-70",
    },
    soil: {
      type: {
        en: "Loamy, Sandy",
        hi: "लूम, रेतीली",
      },
      pH_range: {
        en: "6.5-7.5",
        hi: "6.5-7.5",
      },
      nutrient_requirements: {
        en: "Nitrogen, Phosphorus",
        hi: "नाइट्रोजन, फॉस्फोरस",
      },
      suitable_soil_texture: {
        en: "Loamy, Sandy",
        hi: "लूम, रेतीली",
      },
    },
  },
];


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

// function Meta() {
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
//     <div>
//       <h1>{language === "en" ? "Crop Advisor" : "फसल सलाहकार"}</h1>
//       <div>
//         <select
//           value={selectedMonth}
//           onChange={(e) => handleMonthChange(e.target.value)}
//         >
//           <option value="">Select Month</option>
//           {months[language].map((month, index) => (
//             <option key={index} value={month}>
//               {month}
//             </option>
//           ))}
//         </select>
//         <button
//           onClick={() => handleLanguageChange(language === "en" ? "hi" : "en")}
//         >
//           {language === "en" ? "Switch to Hindi" : "Switch to English"}
//         </button>
//       </div>
//       <h2>{language === "en" ? "Crop List" : "फसल सूची"}</h2>
//       <ul>
//         {filteredCrops.map((crop) => (
//           <li key={crop._id}>
//             <h3>{crop.name[language]}</h3>
//             <p>
//               {language === "en" ? "Suitable Months:" : "उपयुक्त महीने:"}{" "}
//               {crop.suitable_months[language].join(", ")}
//             </p>
//             <p>
//               {language === "en"
//                 ? "Most Effective Month:"
//                 : "सबसे प्रभावी महीना:"}{" "}
//               {crop.most_effective_month[language]}
//             </p>
//             <p>
//               {language === "en" ? "agricultural_season:" : "फ़सल मौसम:"}{" "}
//               {crop.agricultural_season[language]}
//             </p>
//             <p>
//               {language === "en" ? "States:" : "राज्य:"}{" "}
//               {crop.states.map((state) => state.state[language]).join(", ")}
//             </p>
//             <h4>{language === "en" ? "Diseases:" : "बीमारियाँ:"}</h4>
//             <ul>
//               {crop.diseases.map((disease) => (
//                 <li key={disease.name[language]}>
//                   <b>{disease.name[language]}</b>
//                   <p>
//                     {language === "en" ? "Symptoms:" : "लक्षण:"}{" "}
//                     {disease.symptoms[language]}
//                   </p>
//                   <p>
//                     {language === "en" ? "Management:" : "प्रबंधन:"}{" "}
//                     {disease.management[language]}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//             <h4>{language === "en" ? "Pesticides:" : "कीटनाशक:"}</h4>
//             <ul>
//               {crop.pesticides.map((pesticide) => (
//                 <li key={pesticide.name[language]}>
//                   <b>{pesticide.name[language]}</b>
//                   <p>
//                     {language === "en"
//                       ? "Recommended for:"
//                       : "के लिए अनुशंसित:"}{" "}
//                     {pesticide.recommended_for[language]}
//                   </p>
//                   <p>
//                     {language === "en"
//                       ? "Application Method:"
//                       : "अनुप्रयोग विधि:"}{" "}
//                     {pesticide.application_method[language]}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//             <p>
//               <h4> {language === "en" ? "sowing_method:" : "बुआई विधि:"} </h4>
//               {crop.sowing_method[language]}
//             </p>

//             <p>
//               <h4>
//                 {" "}
//                 {language === "en" ? "water_requirement:" : "जल_आवश्यकता:"}{" "}
//               </h4>
//               {crop.water_requirement[language]}
//             </p>

//             <ul>
//               <p>
//                 <h4>
//                   {" "}
//                   {language === "en" ? "maturity_days:" : "परिपक्वता_दिन:"}{" "}
//                 </h4>
//                 {crop.maturity_days[language]}
//               </p>

//               <p>
//                 <h4> {language === "en" ? "soil:" : "मिट्टी:"} </h4>
//                 {crop.soil[language]}
//               </p>

//               <p>
//                 <h4> {language === "en" ? "pH_range:" : "pH_रेंज:"} </h4>
//                 {crop.soil.pH_range[language]}
//               </p>

//               <p>
//                 <h4>
//                   {" "}
//                   {language === "en"
//                     ? "nutrient_requirements:"
//                     : "पोषक तत्व_आवश्यकताएँ:"}{" "}
//                 </h4>
//                 {crop.soil.nutrient_requirements[language]}
//               </p>
//               <li>
//                 <h4>
//                   {" "}
//                   {language === "en"
//                     ? "suitable_soil_texture:"
//                     : "उपयुक्त_मिट्टी_बनावट:"}{" "}
//                 </h4>
//                 {crop.soil.suitable_soil_texture[language]}
//               </li>
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// export default Meta;


//maine kiya hai ye comment out
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
      return crop.suitable_months[lang].includes(month);
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
            <option value="">{language === "en" ? "Select Month" : "महीना चुनें"}</option>
            {months[language].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>

          <button
            onClick={() => handleLanguageChange(language === "en" ? "hi" : "en")}
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