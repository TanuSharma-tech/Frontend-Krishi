const Fruits = [
  {
    _id: "grapes_unique_id",
    name: {
      en: "Grapes",
      hi: "अंगूर",
    },
    type: "Fruit",
    suitable_months: {
      en: ["February", "March", "April"],
      hi: ["फरवरी", "मार्च", "अप्रैल"],
    },
    most_effective_month: {
      en: "March",
      hi: "मार्च",
    },
    agricultural_season: {
      en: "Spring",
      hi: "वसंत",
    },
    states: [
      {
        state: {
          en: "Maharashtra",
          hi: "महाराष्ट्र",
        },
        atmospheric_conditions: {
          en: "Hot and dry",
          hi: "गरम और शुष्क",
        },
      },
      {
        state: {
          en: "Karnataka",
          hi: "कर्नाटक",
        },
        atmospheric_conditions: {
          en: "Warm and humid",
          hi: "गरम और आर्द्र",
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
          en: "White powdery coating on leaves",
          hi: "पत्तियों पर सफेद पाउडर की परत",
        },
        management: {
          en: "Sulfur sprays",
          hi: "सल्फर स्प्रे",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Sulfur",
          hi: "सल्फर",
        },
        recommended_for: {
          en: "Powdery mildew",
          hi: "पाउडरी मिल्ड्यू",
        },
        application_method: {
          en: "Foliar spray",
          hi: "पत्तियों पर छिड़काव",
        },
      },
    ],
  },
  {
    _id: "orange_unique_id",
    name: {
      en: "Orange",
      hi: "संतरा",
    },
    type: "Fruit",
    suitable_months: {
      en: ["November", "December", "January"],
      hi: ["नवंबर", "दिसंबर", "जनवरी"],
    },
    most_effective_month: {
      en: "December",
      hi: "दिसंबर",
    },
    agricultural_season: {
      en: "Winter",
      hi: "सर्दी",
    },
    states: [
      {
        state: {
          en: "Madhya Pradesh",
          hi: "मध्य प्रदेश",
        },
        atmospheric_conditions: {
          en: "Cool and dry climate",
          hi: "शीतल और शुष्क मौसम",
        },
      },
      {
        state: {
          en: "Nagpur",
          hi: "नागपुर",
        },
        atmospheric_conditions: {
          en: "Warm and semi-arid",
          hi: "गरम और अर्ध-शुष्क",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Citrus Canker",
          hi: "साइट्रस कैंकर",
        },
        symptoms: {
          en: "Yellow lesions on leaves and fruit",
          hi: "पत्तियों और फलों पर पीले धब्बे",
        },
        management: {
          en: "Copper-based sprays",
          hi: "तांबा आधारित छिड़काव",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Imidacloprid",
          hi: "इमिडाक्लोप्रिड",
        },
        recommended_for: {
          en: "Aphids and Whiteflies",
          hi: "एफिड्स और सफेद मक्खियाँ",
        },
        application_method: {
          en: "Soil drenching",
          hi: "मिट्टी में छिड़काव",
        },
      },
    ],
  },
  {
    _id: "apple_unique_id",
    name: {
      en: "Apple",
      hi: "सेब",
    },
    type: "Fruit",
    suitable_months: {
      en: ["September", "October", "November"],
      hi: ["सितंबर", "अक्टूबर", "नवंबर"],
    },
    most_effective_month: {
      en: "October",
      hi: "अक्टूबर",
    },
    agricultural_season: {
      en: "Autumn",
      hi: "पतझड़",
    },
    states: [
      {
        state: {
          en: "Himachal Pradesh",
          hi: "हिमाचल प्रदेश",
        },
        atmospheric_conditions: {
          en: "Cold and temperate",
          hi: "ठंडा और समशीतोष्ण",
        },
      },
      {
        state: {
          en: "Jammu and Kashmir",
          hi: "जम्मू और कश्मीर",
        },
        atmospheric_conditions: {
          en: "Cool and dry",
          hi: "शीतल और शुष्क",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Apple Scab",
          hi: "सेब का स्कैब",
        },
        symptoms: {
          en: "Dark lesions on leaves and fruit",
          hi: "पत्तियों और फलों पर काले धब्बे",
        },
        management: {
          en: "Use of fungicides",
          hi: "फफूंदनाशी का उपयोग",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Mancozeb",
          hi: "मैनकोज़ेब",
        },
        recommended_for: {
          en: "Fungal diseases",
          hi: "फंगल रोग",
        },
        application_method: {
          en: "Foliar spray",
          hi: "पत्तियों पर छिड़काव",
        },
      },
    ],
  },
  {
    _id: "banana_unique_id",
    name: {
      en: "Banana",
      hi: "केला",
    },
    type: "Fruit",
    suitable_months: {
      en: ["June", "July", "August"],
      hi: ["जून", "जुलाई", "अगस्त"],
    },
    most_effective_month: {
      en: "July",
      hi: "जुलाई",
    },
    agricultural_season: {
      en: "Monsoon",
      hi: "मानसून",
    },
    states: [
      {
        state: {
          en: "Tamil Nadu",
          hi: "तमिलनाडु",
        },
        atmospheric_conditions: {
          en: "Warm and humid",
          hi: "गर्म और आर्द्र",
        },
      },
      {
        state: {
          en: "Maharashtra",
          hi: "महाराष्ट्र",
        },
        atmospheric_conditions: {
          en: "Hot and semi-arid",
          hi: "गरम और अर्ध-शुष्क",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Panama Wilt",
          hi: "पनामा विल्ट",
        },
        symptoms: {
          en: "Wilting of leaves and plant",
          hi: "पत्तियों और पौधों का मुरझाना",
        },
        management: {
          en: "Soil fumigation",
          hi: "मिट्टी का धूमन",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Carbofuran",
          hi: "कार्बोफ्यूरान",
        },
        recommended_for: {
          en: "Nematodes",
          hi: "निमेटोड",
        },
        application_method: {
          en: "Soil application",
          hi: "मिट्टी में आवेदन",
        },
      },
    ],
  },
  {
    _id: "mango_unique_id",
    name: {
      en: "Mango",
      hi: "आम",
    },
    type: "Fruit",
    suitable_months: {
      en: ["April", "May", "June"],
      hi: ["अप्रैल", "मई", "जून"],
    },
    most_effective_month: {
      en: "May",
      hi: "मई",
    },
    agricultural_season: {
      en: "Summer",
      hi: "गर्मी",
    },
    states: [
      {
        state: {
          en: "Maharashtra",
          hi: "महाराष्ट्र",
        },
        atmospheric_conditions: {
          en: "Hot and dry climate",
          hi: "गरम और सूखा मौसम",
        },
      },
      {
        state: {
          en: "Uttar Pradesh",
          hi: "उत्तर प्रदेश",
        },
        atmospheric_conditions: {
          en: "Warm and humid",
          hi: "गर्म और आर्द्र",
        },
      },
    ],
    diseases: [
      {
        name: {
          en: "Anthracnose",
          hi: "एन्थ्रेक्नोज",
        },
        symptoms: {
          en: "Dark spots on leaves and fruit",
          hi: "पत्तियों और फलों पर काले धब्बे",
        },
        management: {
          en: "Use copper-based fungicide",
          hi: "तांबा आधारित कवकनाशी का उपयोग",
        },
      },
    ],
    pesticides: [
      {
        name: {
          en: "Chlorpyrifos",
          hi: "क्लोरपाइरिफोस",
        },
        recommended_for: {
          en: "Mango hoppers",
          hi: "आम के हॉपर्स",
        },
        application_method: {
          en: "Spraying during early growth",
          hi: "प्रारंभिक वृद्धि के दौरान छिड़काव",
        },
      },
    ],
    },
  
  {
    "_id": "6",
    "name": {
      "en": "Guava",
      "hi": "अमरूद"
    },
    "type": "Fruit",
    "suitable_months": {
      "en": ["August", "September", "October", "November", "December", "January", "February", "March"],
      "hi": ["अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर", "जनवरी", "फरवरी", "मार्च"]
    },
    "most_effective_month": {
      "en": "November",
      "hi": "नवंबर"
    },
    "agricultural_season": {
      "en": "Monsoon and Winter",
      "hi": "मानसून और सर्दी"
    },
    "states": [
      {
        "state": {
          "en": "Uttar Pradesh",
          "hi": "उत्तर प्रदेश"
        },
        "atmospheric_conditions": {
          "en": "Moderate temperature with well-drained soil",
          "hi": "मध्यम तापमान के साथ अच्छी जल निकासी वाली मिट्टी"
        }
      },
      {
        "state": {
          "en": "Bihar",
          "hi": "बिहार"
        },
        "atmospheric_conditions": {
          "en": "Warm climate and moist soil",
          "hi": "गर्म जलवायु और नम मिट्टी"
        }
      }
    ],
    "diseases": [
      {
        "name": {
          "en": "Wilt",
          "hi": "विल्ट"
        },
        "symptoms": {
          "en": "Yellowing of leaves, plant death",
          "hi": "पत्तियों का पीला पड़ना, पौधे की मृत्यु"
        },
        "management": {
          "en": "Use resistant varieties, proper drainage",
          "hi": "प्रतिरोधी किस्मों का उपयोग, उचित जल निकासी"
        }
      }
    ],
    "pesticides": [
      {
        "name": {
          "en": "Copper Oxychloride",
          "hi": "कॉपर ऑक्सीक्लोराइड"
        },
        "recommended_for": {
          "en": "Wilt disease control",
          "hi": "विल्ट रोग नियंत्रण"
        },
        "application_method": {
          "en": "Spray on affected areas",
          "hi": "प्रभावित क्षेत्रों पर छिड़काव"
        }
      }
    ]
  },
  {
    "_id": "7",
    "name": {
      "en": "Pomegranate",
      "hi": "अनार"
    },
    "type": "Fruit",
    "suitable_months": {
      "en": ["June", "July", "August", "September"],
      "hi": ["जून", "जुलाई", "अगस्त", "सितंबर"]
    },
    "most_effective_month": {
      "en": "August",
      "hi": "अगस्त"
    },
    "agricultural_season": {
      "en": "Summer and Monsoon",
      "hi": "गर्मी और मानसून"
    },
    "states": [
      {
        "state": {
          "en": "Maharashtra",
          "hi": "महाराष्ट्र"
        },
        "atmospheric_conditions": {
          "en": "Dry and arid with good sunlight",
          "hi": "सूखा और शुष्क, अच्छी धूप के साथ"
        }
      }
    ],
    "diseases": [
      {
        "name": {
          "en": "Bacterial Blight",
          "hi": "जीवाणु धब्बा"
        },
        "symptoms": {
          "en": "Leaf spots, fruit decay",
          "hi": "पत्तियों पर धब्बे, फलों का सड़ना"
        },
        "management": {
          "en": "Apply Copper fungicides",
          "hi": "कॉपर फफूंदनाशी का प्रयोग करें"
        }
      }
    ],
    "pesticides": [
      {
        "name": {
          "en": "Mancozeb",
          "hi": "मैंकोज़ेब"
        },
        "recommended_for": {
          "en": "Bacterial Blight control",
          "hi": "जीवाणु धब्बा नियंत्रण"
        },
        "application_method": {
          "en": "Spray on leaves and fruits",
          "hi": "पत्तियों और फलों पर छिड़काव"
        }
      }
    ]
  },
      {
          "_id": "8",
          "name": {
              "en": "Papaya",
              "hi": "पपीता"
          },
          "type": "Fruit",
          "suitable_months": {
              "en": ["February", "March", "April", "May", "June", "July", "August", "September", "October"],
              "hi": ["फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर"]
          },
          "most_effective_month": {
              "en": "July",
              "hi": "जुलाई"
          },
          "agricultural_season": {
              "en": "Monsoon and Summer",
              "hi": "मानसून और गर्मी"
          },
          "states": [
              {
                  "state": {
                      "en": "Maharashtra",
                      "hi": "महाराष्ट्र"
                  },
                  "atmospheric_conditions": {
                      "en": "Warm and humid",
                      "hi": "गर्म और आर्द्र"
                  }
              },
              {
                  "state": {
                      "en": "West Bengal",
                      "hi": "पश्चिम बंगाल"
                  },
                  "atmospheric_conditions": {
                      "en": "Humid tropical",
                      "hi": "उष्णकटिबंधीय आर्द्र"
                  }
              }
          ],
          "diseases": [
              {
                  "name": {
                      "en": "Papaya Ring Spot",
                      "hi": "पपीता रिंग स्पॉट"
                  },
                  "symptoms": {
                      "en": "Yellowing and mosaic on leaves",
                      "hi": "पत्तियों पर पीले धब्बे और मोज़ेक"
                  },
                  "management": {
                      "en": "Use virus-free seeds, rogue infected plants",
                      "hi": "वायरस-मुक्त बीजों का उपयोग करें, संक्रमित पौधों को हटाएं"
                  }
              }
          ],
          "pesticides": [
              {
                  "name": {
                      "en": "Neem Oil",
                      "hi": "नीम का तेल"
                  },
                  "recommended_for": {
                      "en": "Insect control",
                      "hi": "कीट नियंत्रण"
                  },
                  "application_method": {
                      "en": "Spray on infected plants",
                      "hi": "संक्रमित पौधों पर छिड़काव"
                  }
              }
          ]
   
      },
          

];

export default Fruits;