const vegetablesData=[
    {
        "_id": "VEG009",
        "name": {
          "en": "potato",
          "hi": "आलू"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Uttar Pradesh",
              "hi": "उत्तर प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with well-drained loamy soil",
              "hi": "ठंडी जलवायु और अच्छी जल निकासी वाली दोमट मिट्टी"
            }
          },
          {
            "state": {
              "en": "Himachal Pradesh",
              "hi": "हिमाचल प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with sandy loam soil",
              "hi": "ठंडी जलवायु और बलुई दोमट मिट्टी"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Late Blight",
              "hi": "लेट ब्लाइट"
            },
            "symptoms": {
              "en": "Dark brown lesions and leaf wilting",
              "hi": "गहरे भूरे धब्बे और पत्तियों का सूखना"
            },
            "management": {
              "en": "Use resistant varieties and practice crop rotation",
              "hi": "प्रतिरोधी किस्मों का उपयोग करें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Chlorothalonil",
              "hi": "क्लोरोथालोनिल"
            },
            "recommended_for": {
              "en": "Fungal diseases",
              "hi": "फफूंद रोग"
            },
            "application_method": {
              "en": "Apply during early stages of disease",
              "hi": "रोग के प्रारंभिक चरण में छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2lSE03-6PUbuxhb1mL2UK27vTJEfoiKR6Q&s",
          "alt_text": {
            "en": "Fresh potatoes",
            "hi": "ताज़ा आलू"
          }
        }
      }, {
        "_id": "VEG003",
        "name": {
          "en": "Tomato",
          "hi": "टमाटर"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["March", "April", "May"],
          "hi": ["मार्च", "अप्रैल", "मई"]
        },
        "most_effective_month": {
          "en": "April",
          "hi": "अप्रैल"
        },
        "agricultural_season": {
          "en": "Kharif",
          "hi": "खरीफ"
        },
        "states": [
          {
            "state": {
              "en": "Andhra Pradesh",
              "hi": "आंध्र प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Warm climate with fertile soil",
              "hi": "गर्म जलवायु और उपजाऊ मिट्टी"
            }
          },
          {
            "state": {
              "en": "Punjab",
              "hi": "पंजाब"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with adequate sunlight",
              "hi": "मध्यम जलवायु और पर्याप्त धूप"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Blight",
              "hi": "ब्लाइट"
            },
            "symptoms": {
              "en": "Dark spots on leaves and fruit rot",
              "hi": "पत्तियों पर काले धब्बे और फलों का सड़ना"
            },
            "management": {
              "en": "Use resistant varieties and crop rotation",
              "hi": "प्रतिरोधी किस्मों का उपयोग करें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Fosetyl-Al",
              "hi": "फोसेटिल-एएल"
            },
            "recommended_for": {
              "en": "Fungal infections and Blight",
              "hi": "फफूंद संक्रमण और ब्लाइट"
            },
            "application_method": {
              "en": "Apply as foliar spray during early growth",
              "hi": "प्रारंभिक वृद्धि के दौरान पत्तियों पर छिड़काव करें"
            }
          }
        ],
        "image": {
            "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WM7FFwlzDpgJcCH-zADkVSy-ywUjthbHdA&s",
          "alt_text": {
            "en": "Fresh tomatoes",
            "hi": "ताज़े टमाटर"
          }
        }
      },{
        "_id": "VEG008",
        "name": {
          "en": "onion",
          "hi": "प्याज"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Maharashtra",
              "hi": "महाराष्ट्र"
            },
            "atmospheric_conditions": {
              "en": "Warm climate with sandy loam soil",
              "hi": "गर्म जलवायु और बलुई दोमट मिट्टी"
            }
          },
          {
            "state": {
              "en": "Gujarat",
              "hi": "गुजरात"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with good drainage",
              "hi": "मध्यम जलवायु और अच्छी जल निकासी"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Downy Mildew",
              "hi": "डाउन मिल्ड्यू"
            },
            "symptoms": {
              "en": "Yellowing of leaves and stunted growth",
              "hi": "पत्तियों का पीला होना और वृद्धि रुकना"
            },
            "management": {
              "en": "Use resistant varieties and improve air circulation",
              "hi": "प्रतिरोधी किस्मों का उपयोग करें और वायु संचलन सुधारें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Thiram",
              "hi": "थिराम"
            },
            "recommended_for": {
              "en": "Fungal diseases",
              "hi": "फफूंद रोग"
            },
            "application_method": {
              "en": "Apply before planting",
              "hi": "बीज डालने से पहले छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "",
          "alt_text": {
            "en": "Fresh onions",
            "hi": "ताज़ा प्याज"
          }
        }
      },{
        "_id": "VEG004",
        "name": {
          "en": "Cabbage",
          "hi": "पत्ता गोभी"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["September", "October", "November"],
          "hi": ["सितंबर", "अक्टूबर", "नवंबर"]
        },
        "most_effective_month": {
          "en": "October",
          "hi": "अक्टूबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Himachal Pradesh",
              "hi": "हिमाचल प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with rich soil",
              "hi": "ठंडी जलवायु और समृद्ध मिट्टी"
            }
          },
          {
            "state": {
              "en": "Uttarakhand",
              "hi": "उत्तराखंड"
            },
            "atmospheric_conditions": {
              "en": "Temperate climate with moderate rainfall",
              "hi": "समशीतोष्ण जलवायु और मध्यम वर्षा"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Diamondback Moth",
              "hi": "हीरा-पीठ मथ"
            },
            "symptoms": {
              "en": "Webbing on leaves and feeding damage",
              "hi": "पत्तियों पर जाले और भोजन के कारण क्षति"
            },
            "management": {
              "en": "Use neem oil and introduce natural predators",
              "hi": "नीम के तेल का उपयोग करें और प्राकृतिक शिकारियों को लाएँ"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Bacillus thuringiensis",
              "hi": "बेसिलस थुरिंजिएंसिस"
            },
            "recommended_for": {
              "en": "Caterpillar control",
              "hi": "कैटरपिलर नियंत्रण"
            },
            "application_method": {
              "en": "Spray on affected plants during evening hours",
              "hi": "संक्रमित पौधों पर शाम के समय छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yDdr3ogpfN_nBfPjK4Z93BBKwj-dOEkOQQ&s",
          "alt_text": {
            "en": "Fresh cabbage",
            "hi": "ताज़ा पत्ता गोभी"
          }
        }
      },{
        "_id": "VEG005",
        "name": {
          "en": "Carrot",
          "hi": "गाजर"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Himachal Pradesh",
              "hi": "हिमाचल प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with well-drained sandy soil",
              "hi": "ठंडी जलवायु और अच्छी जल निकासी वाली बलुई मिट्टी"
            }
          },
          {
            "state": {
              "en": "Punjab",
              "hi": "पंजाब"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with adequate sunlight",
              "hi": "मध्यम जलवायु और पर्याप्त धूप"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Carrot Fly",
              "hi": "गाजर मक्खी"
            },
            "symptoms": {
              "en": "Wilting plants and tunnels in roots",
              "hi": "सूखते पौधे और जड़ों में सुरंगें"
            },
            "management": {
              "en": "Use floating row covers and crop rotation",
              "hi": "फ्लोटिंग रो कवर का उपयोग करें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Pyrethrin",
              "hi": "पाइरेथ्रिन"
            },
            "recommended_for": {
              "en": "Insect control, including Carrot Fly",
              "hi": "कीट नियंत्रण, जिसमें गाजर मक्खी शामिल है"
            },
            "application_method": {
              "en": "Spray on plants during early morning or late evening",
              "hi": "सुबह के समय या शाम के समय पौधों पर छिड़काव करें"
            }
          }
        ],
        "image": {
            "url":"https://t3.ftcdn.net/jpg/06/96/16/28/360_F_696162889_ozm1ifklVTJLw6haAz4JdFffICVgX32P.jpg",
            "alt_text": {
            "en": "Fresh carrots",
            "hi": "ताज़ी गाजर"
          }
        }
      },{
        "_id": "VEG006",
        "name": {
          "en": "Spinach",
          "hi": "पालक"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Madhya Pradesh",
              "hi": "मध्य प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with fertile soil",
              "hi": "ठंडी जलवायु और उपजाऊ मिट्टी"
            }
          },
          {
            "state": {
              "en": "Gujarat",
              "hi": "गुजरात"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with good irrigation",
              "hi": "मध्यम जलवायु और अच्छी सिंचाई"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Downy Mildew",
              "hi": "डाउन मिल्ड्यू"
            },
            "symptoms": {
              "en": "Yellowing of leaves and stunted growth",
              "hi": "पत्तियों का पीला होना और वृद्धि रुकना"
            },
            "management": {
              "en": "Use resistant varieties and improve air circulation",
              "hi": "प्रतिरोधी किस्मों का उपयोग करें और वायु संचलन सुधारें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Neem oil",
              "hi": "नीम का तेल"
            },
            "recommended_for": {
              "en": "Insect pests and fungal diseases",
              "hi": "कीट और फफूंद रोग"
            },
            "application_method": {
              "en": "Dilute and spray on affected areas",
              "hi": "पानी में घोलकर प्रभावित क्षेत्रों पर छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://th.bing.com/th/id/OIP.86_g0ntuIVJQTfjq6bCDWAHaER?w=329&h=189&c=7&r=0&o=5&pid=1.7",
          "alt_text": {
            "en": "Fresh spinach",
            "hi": "ताज़ा पालक"
          }
        }
      },{
        "_id": "VEG007",
        "name": {
          "en": "Cauliflower",
          "hi": "फूलगोभी"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["September", "October", "November"],
          "hi": ["सितंबर", "अक्टूबर", "नवंबर"]
        },
        "most_effective_month": {
          "en": "October",
          "hi": "अक्टूबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Haryana",
              "hi": "हरियाणा"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with fertile soil",
              "hi": "ठंडी जलवायु और उपजाऊ मिट्टी"
            }
          },
          {
            "state": {
              "en": "Punjab",
              "hi": "पंजाब"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with good irrigation",
              "hi": "मध्यम जलवायु और अच्छी सिंचाई"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Bacterial Soft Rot",
              "hi": "बैक्टीरियल सॉफ्ट रॉट"
            },
            "symptoms": {
              "en": "Water-soaked lesions and decay",
              "hi": "पानी से भरे धब्बे और सड़न"
            },
            "management": {
              "en": "Avoid overhead watering and practice crop rotation",
              "hi": "ऊपर से पानी देने से बचें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Copper fungicides",
              "hi": "कॉपर फफूंदनाशक"
            },
            "recommended_for": {
              "en": "Bacterial and fungal diseases",
              "hi": "बैक्टीरियल और फफूंद रोग"
            },
            "application_method": {
              "en": "Apply before disease onset",
              "hi": "रोग की शुरुआत से पहले छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://th.bing.com/th/id/OIP.9dJZzXQzeQbqDiqqJgieWwHaEK?w=312&h=180&c=7&r=0&o=5&pid=1.7",
          "alt_text": {
            "en": "Fresh cauliflower",
            "hi": "ताज़ा फूलगोभी"
          }
        }
      },{
        "_id": "VEG010",
        "name": {
          "en": "Radish",
          "hi": "मूली"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Rabi",
          "hi": "रबी"
        },
        "states": [
          {
            "state": {
              "en": "Madhya Pradesh",
              "hi": "मध्य प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool climate with well-drained soil",
              "hi": "ठंडी जलवायु और अच्छी जल निकासी वाली मिट्टी"
            }
          },
          {
            "state": {
              "en": "Punjab",
              "hi": "पंजाब"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with fertile soil",
              "hi": "मध्यम जलवायु और उपजाऊ मिट्टी"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Flea Beetle",
              "hi": "फ्ली बीटल"
            },
            "symptoms": {
              "en": "Small holes in leaves and stunted growth",
              "hi": "पत्तियों में छोटे छिद्र और वृद्धि रुकना"
            },
            "management": {
              "en": "Use row covers and crop rotation",
              "hi": "रो कवर का उपयोग करें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Sevin",
              "hi": "सेविन"
            },
            "recommended_for": {
              "en": "Insect control",
              "hi": "कीट नियंत्रण"
            },
            "application_method": {
              "en": "Spray on affected plants",
              "hi": "प्रभावित पौधों पर छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://thegardenprepper.com/wp-content/uploads/2021/03/how-to-grow-white-radish-from-cutting.jpg",
          "alt_text": {
            "en": "Fresh radishes",
            "hi": "ताज़ी मूली"
          }
        }
      },{
        "_id": "VEG012",
        "name": {
          "en": "Pumpkin",
          "hi": "कद्दू"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["October", "November", "December"],
          "hi": ["अक्टूबर", "नवंबर", "दिसंबर"]
        },
        "most_effective_month": {
          "en": "November",
          "hi": "नवंबर"
        },
        "agricultural_season": {
          "en": "Kharif",
          "hi": "खरीफ"
        },
        "states": [
          {
            "state": {
              "en": "Madhya Pradesh",
              "hi": "मध्य प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Warm climate with fertile soil",
              "hi": "गर्म जलवायु और उपजाऊ मिट्टी"
            }
          },
          {
            "state": {
              "en": "Uttar Pradesh",
              "hi": "उत्तर प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with good drainage",
              "hi": "मध्यम जलवायु और अच्छी जल निकासी"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Powdery Mildew",
              "hi": "पाउडरी मिल्ड्यू"
            },
            "symptoms": {
              "en": "White powdery spots on leaves",
              "hi": "पत्तियों पर सफेद पाउडरी धब्बे"
            },
            "management": {
              "en": "Improve air circulation and use resistant varieties",
              "hi": "वायु संचलन सुधारें और प्रतिरोधी किस्मों का उपयोग करें"
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
              "en": "Insect pests and fungal diseases",
              "hi": "कीट और फफूंद रोग"
            },
            "application_method": {
              "en": "Apply every 7-14 days",
              "hi": "हर 7-14 दिन में छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://th.bing.com/th/id/OIP.UoVPYbGnAWBgCiCY8o9MEAHaE7?rs=1&pid=ImgDetMain",
          "alt_text": {
            "en": "Fresh pumpkins",
            "hi": "ताज़ा कद्दू"
          }
        }
      },{
        "_id": "VEG015",
        "name": {
          "en": "Shimla Mirch",
          "hi": "शिमला मिर्च"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["March", "April", "May"],
          "hi": ["मार्च", "अप्रैल", "मई"]
        },
        "most_effective_month": {
          "en": "April",
          "hi": "अप्रैल"
        },
        "agricultural_season": {
          "en": "Kharif",
          "hi": "खरीफ"
        },
        "states": [
          {
            "state": {
              "en": "Himachal Pradesh",
              "hi": "हिमाचल प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Cool and moist climate with well-drained soil",
              "hi": "ठंडी और नम जलवायु, अच्छी जल निकासी वाली मिट्टी"
            }
          },
          {
            "state": {
              "en": "Madhya Pradesh",
              "hi": "मध्य प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Warm climate with good soil fertility",
              "hi": "गर्म जलवायु और अच्छी मिट्टी की उर्वरता"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Bacterial Spot",
              "hi": "बैक्टीरियल स्पॉट"
            },
            "symptoms": {
              "en": "Dark lesions on leaves and fruits",
              "hi": "पत्तियों और फलों पर काले धब्बे"
            },
            "management": {
              "en": "Use resistant varieties and practice crop rotation",
              "hi": "प्रतिरोधी किस्मों का उपयोग करें और फसल चक्रीकरण करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Copper Fungicide",
              "hi": "कॉपर फंगिसाइड"
            },
            "recommended_for": {
              "en": "Fungal diseases",
              "hi": "फफूंद रोग"
            },
            "application_method": {
              "en": "Spray before the onset of symptoms",
              "hi": "लक्षण प्रकट होने से पहले छिड़काव करें"
            }
          }
        ],
        "image": {
          "url": "https://th.bing.com/th/id/OIP.IoY6mRsa7jTZ-40rdT8mnAHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7",
          "alt_text": {
            "en": "Fresh bell peppers",
            "hi": "ताज़ी शिमला मिर्च"
          }
        }
      },{
        "_id": "VEG016",
        "name": {
          "en": "Brinjal",
          "hi": "बैंगन"
        },
        "type": "Vegetable",
        "suitable_months": {
          "en": ["May", "June", "July"],
          "hi": ["मई", "जून", "जुलाई"]
        },
        "most_effective_month": {
          "en": "July",
          "hi": "जुलाई"
        },
        "agricultural_season": {
          "en": "Kharif",
          "hi": "खरीफ"
        },
        "states": [
          {
            "state": {
              "en": "Tamil Nadu",
              "hi": "तमिलनाडु"
            },
            "atmospheric_conditions": {
              "en": "Warm and humid climate with loamy soil",
              "hi": "गर्म और आर्द्र जलवायु, दोमट मिट्टी"
            }
          },
          {
            "state": {
              "en": "Uttar Pradesh",
              "hi": "उत्तर प्रदेश"
            },
            "atmospheric_conditions": {
              "en": "Moderate climate with good drainage",
              "hi": "मध्यम जलवायु और अच्छी जल निकासी"
            }
          }
        ],
        "diseases": [
          {
            "name": {
              "en": "Fruit and Shoot Borer",
              "hi": "फल और शूट कीट"
            },
            "symptoms": {
              "en": "Holes in fruits and wilting shoots",
              "hi": "फलों में छेद और पत्तियों का सूखना"
            },
            "management": {
              "en": "Use pheromone traps and insecticides",
              "hi": "फेरोमोन जाल और कीटनाशकों का उपयोग करें"
            }
          }
        ],
        "pesticides": [
          {
            "name": {
              "en": "Endosulfan",
              "hi": "एंडोसल्फान"
            },
            "recommended_for": {
              "en": "Insect pests",
              "hi": "कीट"
            },
            "application_method": {
              "en": "Apply every 15 days",
              "hi": "हर 15 दिन में छिड़काव करें"
            }
          }
        ],
        "image": {
            "url":"https://th.bing.com/th/id/OIP.__riaz0D2lGY8ORJq7BElQHaE5?w=284&h=188&c=7&r=0&o=5&pid=1.7",
          "alt_text": {
            "en": "Fresh brinjals",
            "hi": "ताज़ा बैंगन"
          }
        }
      }
      
      
      
      
      
      
      
      
      
      

      
]

export default vegetablesData;
 
