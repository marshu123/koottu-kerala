/**
 * Koottu (കൂട്ട്) - Kerala Community Safe Stay & Travel Companion Network
 * Pan-India Directory (All States & Major Cities), GPS Live Geolocation,
 * Interactive Map Integration, and Bilingual Translation Engine.
 */

(function () {
  'use strict';

  // --- Complete Indian States & Major Cities Master List ---
  const INDIA_STATES_AND_CITIES = {
    "Uttar Pradesh": [
      "All UP Cities", "Lucknow", "Noida", "Greater Noida", "Kanpur", "Prayagraj (Allahabad)",
      "Varanasi", "Ghaziabad", "Agra", "Aligarh", "Meerut", "Gorakhpur", "Bareilly",
      "Moradabad", "Jhansi", "Mathura", "Ayodhya", "Saharanpur", "Firozabad"
    ],
    "Delhi (NCR)": [
      "All Delhi NCR", "New Delhi", "Central Delhi", "North Delhi", "South Delhi", "Karol Bagh",
      "Anand Vihar", "Dwarka", "Rohini", "Gurugram (Gurgaon)", "Faridabad", "Noida", "Ghaziabad"
    ],
    "Maharashtra": [
      "All Maharashtra", "Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Navi Mumbai",
      "Chhatrapati Sambhajinagar (Aurangabad)", "Kolhapur", "Solapur", "Amravati"
    ],
    "Karnataka": [
      "All Karnataka", "Bengaluru", "Mysuru", "Mangaluru", "Hubballi-Dharwad", "Belagavi",
      "Kalaburagi", "Udupi", "Shivamogga", "Davangere", "Ballari"
    ],
    "Tamil Nadu": [
      "All Tamil Nadu", "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli (Trichy)", "Salem",
      "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Dindigul", "Nagercoil"
    ],
    "Telangana": [
      "All Telangana", "Hyderabad", "Secunderabad", "Warangal", "Nizamabad", "Karimnagar",
      "Khammam", "Ramagundam", "Mahbubnagar"
    ],
    "Andhra Pradesh": [
      "All Andhra Pradesh", "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Nellore",
      "Kurnool", "Rajahmundry", "Kakinada", "Kadapa", "Anantapur"
    ],
    "Gujarat": [
      "All Gujarat", "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar",
      "Jamnagar", "Junagadh", "Anand", "Vapi"
    ],
    "Rajasthan": [
      "All Rajasthan", "Jaipur", "Jodhpur", "Kota", "Udaipur", "Ajmer", "Bikaner", "Alwar",
      "Bhilwara", "Sikar", "Sri Ganganagar"
    ],
    "West Bengal": [
      "All West Bengal", "Kolkata", "Howrah", "Siliguri", "Durgapur", "Asansol", "Kharagpur",
      "Bardhaman", "Malda", "Haldia"
    ],
    "Madhya Pradesh": [
      "All Madhya Pradesh", "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar",
      "Dewas", "Satna", "Ratlam", "Rewa"
    ],
    "Punjab": [
      "All Punjab", "Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda",
      "Mohali", "Hoshiarpur", "Pathankot"
    ],
    "Haryana": [
      "All Haryana", "Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Rohtak",
      "Hisar", "Sonipat", "Panchkula"
    ],
    "Bihar": [
      "All Bihar", "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia",
      "Bihar Sharif", "Ara", "Begusarai"
    ],
    "Jharkhand": [
      "All Jharkhand", "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar",
      "Hazaribagh", "Giridih"
    ],
    "Odisha": [
      "All Odisha", "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri",
      "Balasore", "Bhadrak"
    ],
    "Assam & North East": [
      "All North East", "Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Shillong (Meghalaya)",
      "Agartala (Tripura)", "Imphal (Manipur)", "Aizawl (Mizoram)", "Kohima (Nagaland)", "Gangtok (Sikkim)", "Itanagar (Arunachal)"
    ],
    "Uttarakhand": [
      "All Uttarakhand", "Dehradun", "Haridwar", "Roorkee", "Rishikesh", "Haldwani", "Nainital", "Kashipur"
    ],
    "Himachal Pradesh": [
      "All Himachal Pradesh", "Shimla", "Dharamshala", "Mandi", "Solan", "Kullu", "Manali", "Baddi"
    ],
    "Jammu & Kashmir": [
      "All Jammu & Kashmir", "Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"
    ],
    "Goa": [
      "All Goa", "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"
    ],
    "Chhattisgarh": [
      "All Chhattisgarh", "Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Rajnandgaon"
    ],
    "Chandigarh": ["Chandigarh"],
    "Puducherry": ["Puducherry", "Karaikal"]
  };

  const KERALA_DISTRICTS = [
    "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam",
    "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram", "Kozhikode",
    "Wayanad", "Kannur", "Kasaragod"
  ];

  // --- Initial Pan-India Verified Volunteers Database (with exact Lat/Lng) ---
  const INITIAL_VOLUNTEERS = [
    {
      id: "v-up-1",
      name: "Rahul Nair & Friends",
      nameMl: "രാഹുൽ നായർ & കൂട്ടുകാർ",
      role: "B.Tech Final Year Students, IET Lucknow",
      roleMl: "ബി.ടെക് വിദ്യാർത്ഥികൾ, ഐ.ഇ.ടി ലഖ്‌നൗ",
      state: "Uttar Pradesh",
      city: "Lucknow",
      lat: 26.8920,
      lng: 80.9450,
      origin: "Kozhikode & Ernakulam",
      originMl: "കോഴിക്കോട് & എറണാകുളം",
      distanceFromStation: "4.5 km from Charbagh Railway Station (Direct Metro)",
      distanceMl: "ചാർബാഗ് റെയിൽവേ സ്റ്റേഷനിൽ നിന്ന് 4.5 കി.മീ (നേരിട്ട് മെട്രോ)",
      phone: "+91 94471 23456",
      whatsapp: "919447123456",
      verified: true,
      category: ["free-stay", "route-guide", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#0f766e",
      about: "We are 3 Malayali engineering students renting a 2BHK flat near Munshipulia metro. We have a spare room with mattress, fan, study desk and Wi-Fi. Free stay for 1-2 days for any job/exam candidate. We will help you navigate Lucknow Metro and Hindi auto fares.",
      aboutMl: "ലഖ്‌നൗവിൽ പഠിക്കുന്ന 3 മലയാളി വിദ്യാർത്ഥികളാണ് ഞങ്ങൾ. വാടകയ്ക്ക് എടുത്ത ഫ്ലാറ്റിൽ ഒരു റൂം പരീക്ഷയ്ക്കും ഇന്റർവ്യൂവിനും വരുന്ന മലയാളികൾക്ക് സൗജന്യമായി താമസിക്കാൻ നൽകാം. ചാർബാഗ് സ്റ്റേഷനിൽ നിന്നുള്ള മെട്രോ റൂട്ടും ഓട്ടോ യാത്രാ സഹായവും നൽകാം.",
      amenities: ["Free 1-2 Nights Stay", "Metro Route Escort", "Free Wi-Fi", "Home Tea/Breakfast", "Hindi Translation Support"]
    },
    {
      id: "v-up-2",
      name: "Sr. Mary & St. Jude Malayali Nurses Quarters",
      nameMl: "സിസ്റ്റർ മേരി & മലയാളി നഴ്സിങ് കമ്മ്യൂണിറ്റി",
      role: "Senior Nurse, Aliganj Hospital Complex",
      roleMl: "സീനിയർ നഴ്സ്, അലിഗഞ്ച് ഹോസ്പിറ്റൽ ലഖ്‌നൗ",
      state: "Uttar Pradesh",
      city: "Lucknow",
      lat: 26.8850,
      lng: 80.9380,
      origin: "Kottayam",
      originMl: "കോട്ടയം",
      distanceFromStation: "7 km from Charbagh (Safe bus/auto available)",
      distanceMl: "ചാർബാഗിൽ നിന്ന് 7 കി.മീ",
      phone: "+91 98460 78901",
      whatsapp: "919846078901",
      verified: true,
      category: ["free-stay", "emergency-contact"],
      isWomenOnly: true,
      avatarColor: "#b45309",
      about: "Safe residential quarters exclusively for female candidates coming for AIIMS, RRB, or Bank interviews. Safe homely food (Kerala Kanji & Payar), peaceful place to rest, full guidance on safety for girls travelling alone.",
      aboutMl: "തനിച്ചു വരുന്ന പെൺകുട്ടികൾക്ക് (നഴ്സിങ്, ബാങ്ക്, റെയിൽവേ പരീക്ഷകൾക്ക് വരുന്നവർ) പൂർണ്ണമായും സുരക്ഷിതമായ താമസവും നാടൻ കഞ്ഞിയും പയറും നൽകാം. പേടിക്കാതെ വിളിക്കാം.",
      amenities: ["Women Only Safe Room", "Kerala Home Food", "Women Safety Escort", "Zero Charges"]
    },
    {
      id: "v-up-3",
      name: "Vishnu Mohan",
      nameMl: "വിഷ്ണു മോഹൻ",
      role: "Senior Software Engineer (Noida Sector 62)",
      roleMl: "സോഫ്റ്റ്‌വെയർ എൻജിനീയർ, നോയിഡ",
      state: "Uttar Pradesh",
      city: "Noida",
      lat: 28.6280,
      lng: 77.3649,
      origin: "Thrissur",
      originMl: "തൃശ്ശൂർ",
      distanceFromStation: "Direct Blue Line Metro from Anand Vihar Terminal",
      distanceMl: "ആനന്ദ് വിഹാർ ടെർമിനലിൽ നിന്ന് നേരിട്ട് മെട്രോ",
      phone: "+91 97110 54321",
      whatsapp: "919711054321",
      verified: true,
      category: ["route-guide", "malayalam-buddy", "free-stay"],
      isWomenOnly: false,
      avatarColor: "#0369a1",
      about: "Living in Noida Sector 62 tech hub. Can offer spare sofa-cum-bed for male tech candidates, high-speed Wi-Fi, resume printing, and mock interview tips. Will explain Noida Electronic City metro routes so you don't get charged 500 Rs by local cabs.",
      aboutMl: "നോയിഡയിൽ ഐടി ജോലി ചെയ്യുന്ന ആളാണ്. ടെക് കമ്പനികളിൽ ഇന്റർവ്യൂവിന് വരുന്ന സഹോദരങ്ങൾക്ക് താമസ സൗകര്യവും, റെസ്യൂം പ്രിന്റും, മെട്രോ റൂട്ട് ഗൈഡൻസും നൽകാം.",
      amenities: ["Free Stay (1 Night)", "High-Speed Wi-Fi", "Resume Printing", "Metro Card Assistance"]
    },
    {
      id: "v-up-4",
      name: "Arjun Menon & Team",
      nameMl: "അർജുൻ മേനോൻ",
      role: "Ph.D. Research Scholar, IIT Kanpur",
      roleMl: "ഗവേഷക വിദ്യാർത്ഥി, ഐ.ഐ.ടി കാൺപൂർ",
      state: "Uttar Pradesh",
      city: "Kanpur",
      lat: 26.5123,
      lng: 80.2329,
      origin: "Palakkad",
      originMl: "പാലക്കാട്",
      distanceFromStation: "15 km from Kanpur Central (Campus electric bus route)",
      distanceMl: "കാൺപൂർ സെൻട്രലിൽ നിന്ന് ഇ-ബസ് സൗകര്യം",
      phone: "+91 94950 11223",
      whatsapp: "919495011223",
      verified: true,
      category: ["free-stay", "route-guide", "emergency-contact"],
      isWomenOnly: false,
      avatarColor: "#047857",
      about: "Staying at IIT Kanpur campus. Can arrange cheap campus guest shelter or hostel sharing, guide candidates coming for government exams or Kanpur industrial interviews. Don't worry if you don't speak Hindi; call me upon arrival.",
      aboutMl: "കാൺപൂരിൽ റെയിൽവേ, ഗവണ്മെന്റ് പരീക്ഷകൾക്ക് വരുന്നവർക്ക് ക്യാംപസ് പരിസരത്ത് സുരക്ഷിതമായ സൗകര്യങ്ങളും ഹിന്ദി ഭാഷാ സഹായവും നൽകാം.",
      amenities: ["Campus Guest Guidance", "Emergency Hindi Translator", "Safe Travel Advice", "Railway Station Pickup Help"]
    },
    {
      id: "v-up-5",
      name: "Adv. Gopakumar & Lekha (Kerala Samajam)",
      nameMl: "അഡ്വ. ഗോപകുമാർ & ലേഖ (കേരള സമാജം)",
      role: "High Court Advocate & Kerala Samajam Secretary",
      roleMl: "ഹൈക്കോടതി അഭിഭാഷകൻ & കേരള സമാജം സെക്രട്ടറി",
      state: "Uttar Pradesh",
      city: "Prayagraj (Allahabad)",
      lat: 25.4358,
      lng: 81.8463,
      origin: "Thiruvananthapuram",
      originMl: "തിരുവനന്തപുരം",
      distanceFromStation: "3 km from Prayagraj Junction",
      distanceMl: "പ്രയാഗ്‌രാജ് ജംഗ്ഷനിൽ നിന്ന് 3 കി.മീ",
      phone: "+91 94470 99881",
      whatsapp: "919447099881",
      verified: true,
      category: ["free-stay", "emergency-contact", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#6d28d9",
      about: "Family home near Civil Lines. We have accommodated dozens of students coming for Allahabad High Court, Railway Recruitment Board (RRB), and SSC exams over the last 15 years. Pure homely atmosphere with zero charge for underprivileged candidates.",
      aboutMl: "അലഹബാദ് ഹൈക്കോടതി, റെയിൽവേ റിക്രൂട്ട്‌മെന്റ് ബോർഡ് പരീക്ഷകൾക്ക് വരുന്ന വിദ്യാർത്ഥികൾക്ക് ഞങ്ങളുടെ കുടുംബ വീട്ടിൽ സുരക്ഷിതമായ താമസവും ഭക്ഷണവും നൽകാറുണ്ട്. പണമില്ലെന്ന് കരുതി ആരും പരീക്ഷയ്ക്ക് വരാതിരിക്കരുത്.",
      amenities: ["Family Environment", "Zero Cost Accommodation", "Exam Center Route Guidance", "Legal & Safety Protection"]
    },
    {
      id: "v-up-6",
      name: "Dr. Sandeep & BHU Malayali Union",
      nameMl: "ഡോ. സന്ദീപ് & ബി.എച്ച്.യു മലയാളി അസോസിയേഷൻ",
      role: "Resident Doctor, IMS Banaras Hindu University",
      roleMl: "ഡോക്ടർ, ബി.എച്ച്.യു വാരണാസി",
      state: "Uttar Pradesh",
      city: "Varanasi",
      lat: 25.2677,
      lng: 82.9913,
      origin: "Kollam",
      originMl: "കൊല്ലം",
      distanceFromStation: "5 km from Varanasi Cantt Railway Station",
      distanceMl: "വാരണാസി കന്റോൺമെന്റ് സ്റ്റേഷനിൽ നിന്ന് 5 കി.മീ",
      phone: "+91 94460 33445",
      whatsapp: "919446033445",
      verified: true,
      category: ["free-stay", "route-guide", "emergency-contact"],
      isWomenOnly: false,
      avatarColor: "#e11d48",
      about: "BHU campus community. Medical & competitive exam aspirants visiting Varanasi can reach out for safe hostel stay, campus guest arrangements, and medical emergency support.",
      aboutMl: "ബി.എച്ച്.യു ക്യാംപസിൽ പഠിക്കുന്ന മലയാളികളാണ്. പരീക്ഷകൾക്കും ഇന്റർവ്യൂവിനും വരുന്ന വിദ്യാർത്ഥികൾക്ക് താമസവും സുരക്ഷയും ഉറപ്പാക്കാം.",
      amenities: ["Campus Safe Shelter", "Doctor Support", "Zero Cost Food Support", "Railway Station Route Guide"]
    },
    {
      id: "v-delhi-1",
      name: "Kailas Krishnan & Delhi Kerala Youth Forum",
      nameMl: "കൈലാസ് കൃഷ്ണൻ & കേരള യൂത്ത് ഫോറം",
      role: "Civil Services Aspirant & Student Union",
      roleMl: "സിവിൽ സർവീസസ് വിദ്യാർത്ഥി, ഡൽഹി",
      state: "Delhi (NCR)",
      city: "New Delhi",
      lat: 28.6433,
      lng: 77.1950,
      origin: "Malappuram",
      originMl: "മലപ്പുറം",
      distanceFromStation: "Direct Yellow & Blue Metro from New Delhi Station",
      distanceMl: "ന്യൂഡൽഹി സ്റ്റേഷനിൽ നിന്ന് നേരിട്ട് മെട്രോ",
      phone: "+91 98100 22334",
      whatsapp: "919810022334",
      verified: true,
      category: ["route-guide", "emergency-contact", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#be185d",
      about: "We run a volunteer network assisting job seekers reaching New Delhi / Anand Vihar terminals. We guide you through the metro maze, provide local SIM card advice, and connect you with Malayali messes serving ₹60 meals.",
      aboutMl: "ആദ്യമായി നോർത്ത് ഇന്ത്യയിലേക്ക് വരുന്നവർക്ക് ഡൽഹി, ആനന്ദ് വിഹാർ സ്റ്റേഷനുകളിലെ വഴിതെറ്റലുകൾ ഒഴിവാക്കാനും ബജറ്റ് മെസ്സ് കണ്ടെത്താനും സഹായിക്കും.",
      amenities: ["Metro Card Assistance", "Malayali Mess Connect", "Language Helpline", "Station Pickup Guidance"]
    },
    {
      id: "v-mh-1",
      name: "Mathew Varghese (Bombay Malayalee Samajam)",
      nameMl: "മാത്യു വർഗീസ് (മുംബൈ മലയാളി സമാജം)",
      role: "Central Railway Employee & Community Worker",
      roleMl: "റെയിൽവേ ജീവനക്കാരൻ, ദാദർ മുംബൈ",
      state: "Maharashtra",
      city: "Mumbai",
      lat: 19.0178,
      lng: 72.8478,
      origin: "Pathanamthitta",
      originMl: "പത്തനംതിട്ട",
      distanceFromStation: "1 km from Dadar Railway Station / CSMT direct local",
      distanceMl: "ദാദർ സ്റ്റേഷനിൽ നിന്ന് 1 കി.മീ",
      phone: "+91 98200 44556",
      whatsapp: "919820044556",
      verified: true,
      category: ["free-stay", "route-guide", "emergency-contact"],
      isWomenOnly: false,
      avatarColor: "#1d4ed8",
      about: "Living in Mumbai for 25 years. Can guide candidates traveling on Konkan Railway or arriving at LTT/Dadar/CSMT. Safe community room available for 1-2 days, guidance on local trains so you don't get lost in the rush.",
      aboutMl: "മുംബൈയിൽ പരീക്ഷയ്ക്ക് വരുന്നവർക്ക് ദാദർ പരിസരത്ത് സൗജന്യ താമസവും, ലോക്കൽ ട്രെയിൻ റൂട്ട് ഗൈഡൻസും നൽകാം.",
      amenities: ["Dadar Transit Room", "Local Train Guidance", "Emergency Shelter", "Kerala Food Connect"]
    },
    {
      id: "v-ka-1",
      name: "Nithin & Bangalore Malayali Tech Circle",
      nameMl: "നിതിൻ & ബാംഗ്ലൂർ മലയാളി ടെക് സർക്കിൾ",
      role: "Lead Architect & Community Mentor",
      roleMl: "ടെക് എൻജിനീയർ, കോറമംഗല ബാംഗ്ലൂർ",
      state: "Karnataka",
      city: "Bengaluru",
      lat: 12.9352,
      lng: 77.6245,
      origin: "Ernakulam",
      originMl: "എറണാകുളം",
      distanceFromStation: "Direct Namma Metro / BMTC bus from Majestic KSR Station",
      distanceMl: "മജസ്റ്റിക് സ്റ്റേഷനിൽ നിന്ന് നേരിട്ട് മെട്രോ",
      phone: "+91 99000 66778",
      whatsapp: "919900066778",
      verified: true,
      category: ["free-stay", "route-guide", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#059669",
      about: "We host tech job applicants coming to Bangalore for interviews. We have 2 guest beds in our HSR/Koramangala flat, high-speed Wi-Fi, and interview preparation mentorship.",
      aboutMl: "ബാംഗ്ലൂരിൽ ഐ.ടി ഇന്റർവ്യൂവിന് വരുന്നവർക്ക് സുരക്ഷിത താമസവും ടെക് ഇന്റർവ്യൂ ഗൈഡൻസും സൗജന്യമായി നൽകാം.",
      amenities: ["Free Wi-Fi & Laptop Desk", "Mock Interview Help", "Metro Smart Card Access", "Home Food"]
    },
    {
      id: "v-tn-1",
      name: "Kavitha Nair & Chennai Malayalee Association",
      nameMl: "കവിത നായർ & ചെന്നൈ മലയാളി അസോസിയേഷൻ",
      role: "Professor & Women Welfare Lead",
      roleMl: "പ്രൊഫസർ & വിമൻസ് വെൽഫെയർ ലീഡ്",
      state: "Tamil Nadu",
      city: "Chennai",
      lat: 13.0827,
      lng: 80.2707,
      origin: "Alappuzha",
      originMl: "ആലപ്പുഴ",
      distanceFromStation: "2 km from Chennai Central (Puratchi Thalaivar Dr. MGR Station)",
      distanceMl: "ചെന്നൈ സെൻട്രലിൽ നിന്ന് 2 കി.മീ",
      phone: "+91 98400 88990",
      whatsapp: "919840088990",
      verified: true,
      category: ["free-stay", "emergency-contact"],
      isWomenOnly: true,
      avatarColor: "#c026d3",
      about: "Safe residential accommodation for girls traveling to Chennai for UPSC, SSC, or campus interviews. 24x7 gated security, home-cooked food, metro route escort.",
      aboutMl: "ചെന്നൈയിലേക്ക് പരീക്ഷകൾക്ക് വരുന്ന പെൺകുട്ടികൾക്ക് സുരക്ഷിതമായ താമസവും ഭക്ഷണവും നൽകാൻ സന്നദ്ധരാണ്.",
      amenities: ["Female Only Safety", "Central Station Pickup Assistance", "Kerala Home Food", "Zero Cost"]
    },
    {
      id: "v-ts-1",
      name: "Deepak S. (HCU Malayali Students Union)",
      nameMl: "ദീപക് എസ്. (ഹൈദരാബാദ് സെൻട്രൽ യൂണിവേഴ്സിറ്റി)",
      role: "Ph.D. Scholar, University of Hyderabad",
      roleMl: "ഗവേഷക വിദ്യാർത്ഥി, ഹൈദരാബാദ്",
      state: "Telangana",
      city: "Hyderabad",
      lat: 17.4600,
      lng: 78.3300,
      origin: "Palakkad",
      originMl: "പാലക്കാട്",
      distanceFromStation: "Direct Lingampalli / Secunderabad station bus",
      distanceMl: "ലിംഗമ്പള്ളി / സിക്കന്ദരാബാദ് സ്റ്റേഷനിൽ നിന്ന് ബസ്",
      phone: "+91 94970 55667",
      whatsapp: "919497055667",
      verified: true,
      category: ["free-stay", "route-guide", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#ea580c",
      about: "University campus guest room support, Gachibowli / HITEC City IT interview route guidance, and Telugu/Hindi translation help.",
      aboutMl: "ഹൈദരാബാദിൽ പരീക്ഷയ്ക്കും ജോലിക്കുമായി എത്തുന്ന മലയാളി സുഹൃത്തുക്കൾക്ക് ക്യാംപസ് പരിസരത്ത് സൗജന്യ സഹായം നൽകുന്നു.",
      amenities: ["Campus Room Guidance", "HITEC City Route Escort", "Language Buddy", "Telugu-Hindi Help"]
    },
    {
      id: "v-gj-1",
      name: "Sujith Pillai (Ahmedabad Kerala Samajam)",
      nameMl: "സുജിത്ത് പിള്ള (അഹമ്മദാബാദ് കേരള സമാജം)",
      role: "Automotive Engineer, Sanand / Ahmedabad",
      roleMl: "എൻജിനീയർ, അഹമ്മദാബാദ് ഗുജറാത്ത്",
      state: "Gujarat",
      city: "Ahmedabad",
      lat: 23.0225,
      lng: 72.5714,
      origin: "Kollam",
      originMl: "കൊല്ലം",
      distanceFromStation: "4 km from Kalupur Railway Station",
      distanceMl: "കാലുപ്പൂർ സ്റ്റേഷനിൽ നിന്ന് 4 കി.മീ",
      phone: "+91 98980 12345",
      whatsapp: "919898012345",
      verified: true,
      category: ["free-stay", "route-guide", "emergency-contact"],
      isWomenOnly: false,
      avatarColor: "#4f46e5",
      about: "Ahmedabad Samajam volunteer. Can assist candidates traveling for IIM, NID, or industrial job interviews in Gujarat.",
      aboutMl: "ഗുജറാത്തിൽ പരീക്ഷകൾക്കോ ജോലിക്കോ വരുന്നവർക്ക് സൗജന്യ റൂമും യാത്രാ ഉപദേശങ്ങളും നൽകാം.",
      amenities: ["Safe Guest Room", "Gujarati-Hindi Translation", "BRTS Bus Navigation", "Emergency Contact"]
    },
    {
      id: "v-rj-1",
      name: "Anand R. (MNIT Jaipur Scholars Circle)",
      nameMl: "ആനന്ദ് ആർ. (ജയ്പൂർ മലയാളി കൂട്ടായ്മ)",
      role: "M.Tech Scholar, MNIT Jaipur",
      roleMl: "എം.ടെക് വിദ്യാർത്ഥി, ജയ്പൂർ രാജസ്ഥാൻ",
      state: "Rajasthan",
      city: "Jaipur",
      lat: 26.8640,
      lng: 75.8108,
      origin: "Thrissur",
      originMl: "തൃശ്ശൂർ",
      distanceFromStation: "6 km from Jaipur Junction",
      distanceMl: "ജയ്പൂർ ജംഗ്ഷനിൽ നിന്ന് 6 കി.മീ",
      phone: "+91 94140 77889",
      whatsapp: "919414077889",
      verified: true,
      category: ["free-stay", "route-guide", "malayalam-buddy"],
      isWomenOnly: false,
      avatarColor: "#0284c7",
      about: "MNIT Jaipur hostel & student circle. Can arrange campus guest space, guide through Jaipur low-floor buses and auto fares.",
      aboutMl: "രാജസ്ഥാനിൽ പരീക്ഷകൾക്ക് വരുന്ന മലയാളി വിദ്യാർത്ഥികൾക്ക് ക്യാംപസ് താമസം, ബസ് റൂട്ട് വിവരങ്ങൾ എന്നിവ നൽകാം.",
      amenities: ["Student Room", "Station Pickup Guidance", "Hindi Buddy", "Clean Drinking Water & Bed"]
    },
    {
      id: "v-wb-1",
      name: "Dr. Biju K. & Calcutta Malayalee Samajam",
      nameMl: "ഡോ. ബിജു കെ. (കൽക്കട്ട മലയാളി സമാജം)",
      role: "Senior Resident, Medical College Kolkata",
      roleMl: "ഡോക്ടർ, മെഡിക്കൽ കോളേജ് കൊൽക്കത്ത",
      state: "West Bengal",
      city: "Kolkata",
      lat: 22.5726,
      lng: 88.3639,
      origin: "Kannur",
      originMl: "കണ്ണൂർ",
      distanceFromStation: "2.5 km from Howrah / Sealdah Railway Station",
      distanceMl: "ഹൗറ / സീൽദ സ്റ്റേഷനിൽ നിന്ന് 2.5 കി.മീ",
      phone: "+91 98300 11223",
      whatsapp: "919830011223",
      verified: true,
      category: ["free-stay", "emergency-contact", "route-guide"],
      isWomenOnly: false,
      avatarColor: "#7c3aed",
      about: "Howrah & Sealdah helpdesk. Safe accommodation and metro navigation for candidates attending Eastern region exams or interviews.",
      aboutMl: "ഹൗറ സ്റ്റേഷനിൽ വന്നിറങ്ങുന്നവർക്ക് കൊൽക്കത്ത മെട്രോ റൂട്ടും സുരക്ഷിത താമസവും ഒരുക്കി നൽകുന്നു.",
      amenities: ["Howrah Direct Access", "Metro Escort", "Kerala Food Connect", "Emergency Medical Help"]
    }
  ];

  // --- Initial Candidate SOS Requests ---
  const INITIAL_REQUESTS = [
    {
      id: "req-1",
      candidateName: "Aromal S.",
      fromDistrict: "Palakkad, Kerala",
      toState: "Uttar Pradesh",
      toCity: "Lucknow",
      examDate: "2026-11-04",
      purpose: "SSC Central Region Document Verification at Kendriya Bhawan",
      budget: "Low Budget (< ₹500)",
      fearMessage: "First time leaving Kerala. I don't know Hindi at all and I am terrified of getting cheated by auto drivers at Charbagh station. Need someone who can tell me how to reach Aliganj safely or spare a floor to sleep for one night.",
      postedAgo: "2 hours ago",
      isUrgent: true
    },
    {
      id: "req-2",
      candidateName: "Devika P. & Father",
      fromDistrict: "Kozhikode, Kerala",
      toState: "Uttar Pradesh",
      toCity: "Noida",
      examDate: "2026-11-08",
      purpose: "National Institute of Biologicals (NIB) Scientist Interview",
      budget: "Modest Budget",
      fearMessage: "Traveling with my elderly father on Kerala Express. Reaching Hazrat Nizamuddin, need safe accommodation nearby or guidance to reach Noida without hassle.",
      postedAgo: "5 hours ago",
      isUrgent: false
    },
    {
      id: "req-3",
      candidateName: "Jithin Raj",
      fromDistrict: "Kollam, Kerala",
      toState: "Uttar Pradesh",
      toCity: "Kanpur",
      examDate: "2026-11-12",
      purpose: "Railway RRB Physical Efficiency Test",
      budget: "Zero Budget (Student)",
      fearMessage: "I don't have money for hotel rooms. Just need safe place to keep my bag and wash up before the 7 AM morning PET ground test.",
      postedAgo: "1 day ago",
      isUrgent: true
    },
    {
      id: "req-4",
      candidateName: "Aswathi V.",
      fromDistrict: "Thrissur, Kerala",
      toState: "Maharashtra",
      toCity: "Mumbai",
      examDate: "2026-11-15",
      purpose: "Bank of Baroda Specialist Officer Interview",
      budget: "Zero Budget (Female candidate traveling alone)",
      fearMessage: "Traveling alone on Mangala Lakshadweep Express. Never been to Mumbai before, need a safe female host or family to stay near Dadar/Bandra.",
      postedAgo: "1 day ago",
      isUrgent: true
    }
  ];

  // --- Hindi to Malayalam / English Survival Phrasebook ---
  const SURVIVAL_PHRASES = [
    {
      ml: "എനിക്ക് ഹിന്ദി അറിയില്ല, മലയാളമോ ഇംഗ്ലീഷോ മാത്രമേ അറിയൂ.",
      hi: "मुझे हिंदी नहीं आती, सिर्फ मलयालम और इंग्लिश आती है।",
      translit: "Mujhe Hindi nahi aati, sirf Malayalam aur English aati hai.",
      en: "I don't speak Hindi, only Malayalam and English.",
      context: "General safety & auto/train communication"
    },
    {
      ml: "ഈ കമ്പനി / പരീക്ഷാ കേന്ദ്രത്തിലേക്ക് എങ്ങനെ പോകണം?",
      hi: "यह कंपनी / परीक्षा केंद्र कहाँ है? कैसे जाना है?",
      translit: "Yeh company / pariksha kendra kahan hai? Kaise jaana hai?",
      en: "Where is this company / exam center? How do I get there?",
      context: "Navigation"
    },
    {
      ml: "മീറ്റർ അല്ലെങ്കിൽ സാധാരണ നിരക്ക് എത്രയാണ്? ഞാൻ വിദ്യാർത്ഥിയാണ്.",
      hi: "मीटर या सही किराया कितना है? मैं छात्र हूँ, इंटरव्यू के लिए आया हूँ।",
      translit: "Meter ya sahi kiraya kitna hai? Main chhatra hoon, interview ke liye aaya hoon.",
      en: "What is the fair meter rate? I am a student here for an interview.",
      context: "Avoiding auto scams"
    },
    {
      ml: "റെയിൽവേ വെയിറ്റിംഗ് റൂം എവിടെയാണ്?",
      hi: "रेलवे वेटिंग रूम और क्लॉक रूम कहाँ है?",
      translit: "Railway waiting room aur cloak room kahan hai?",
      en: "Where is the railway waiting room and baggage cloakroom?",
      context: "Safe station stay"
    },
    {
      ml: "ദയവായി എന്നെ സഹായിക്കൂ, എനിക്ക് ആപത്താണ്.",
      hi: "कृपया मेरी मदद कीजिए, मुझे सहायता चाहिए।",
      translit: "Kripya meri madad kijiye, mujhe sahayata chahiye.",
      en: "Please help me, I need assistance.",
      context: "Emergency"
    }
  ];

  // --- Bilingual UI Translations ---
  const TRANSLATIONS = {
    en: {
      siteTitle: "Koottu",
      siteTagline: "Kerala Community Safe Stay & Travel Companion",
      heroHeadline: "Traveling to any state for an interview? <span class=\"highlight-word\">You are never alone.</span>",
      heroSubtitle: "Connecting underprivileged job seekers, students, and exam candidates from Kerala with trusted local Malayali hosts, free safe stays, and native language guidance in Uttar Pradesh, Delhi, Maharashtra, Karnataka & across India.",
      sosButton: "🚨 Emergency SOS",
      btnFindHost: "Find a Malayali Host",
      btnPostRequest: "Ask for Travel Help",
      btnVolunteer: "Join as a Volunteer Host",
      searchHeader: "Find Malayalis in Your Destination",
      searchStateLabel: "1. Select State / UT",
      searchCityLabel: "2. Select City",
      searchKeywordLabel: "Search by college, location or name",
      tagAll: "All Helpers",
      tagFreeStay: "🏠 Free / Low Budget Stay",
      tagRouteGuide: "🚆 Station & Route Guide",
      tagMalayalamBuddy: "🗣️ Malayalam Speaker",
      tagWomenOnly: "👩 Female Safe Haven",
      tabHosts: "Verified Malayali Hosts",
      tabRequests: "Candidate SOS Travel Board",
      tabSurvival: "Hindi-Malayalam Survival Toolkit",
      tabEmergency: "Emergency & Samajam Helplines",
      candidateFeedTitle: "Candidates Seeking Help in Distant States",
      candidateFeedSubtitle: "Fellow Malayalis traveling on tight budgets for career exams. If you live in these cities, please lend a helping hand.",
      btnShareRequest: "Post Your Travel Request",
      contactModalTitle: "Connect with Malayali Helper",
      btnSendWhatsApp: "Send via WhatsApp",
      btnCopyText: "Copy Message Template",
      survivalTitle: "Essential Hindi Phrases for Malayalis",
      survivalSubtitle: "Read out or play speech so auto drivers and conductors understand you with zero trouble.",
      norkaBanner: "Official NORKA Roots 24x7 Helpline for Malayalis in other states: 1800-425-3939 (Toll Free)",
      btnTurnLocation: "📍 Turn Location ON",
      locationActive: "GPS Location Active",
      locationInactive: "Location is OFF. Tap to detect nearby hosts.",
      viewList: "📋 List View",
      viewMap: "🗺️ Map View"
    },
    ml: {
      siteTitle: "കൂട്ട് (Koottu)",
      siteTagline: "ദൂരദേശങ്ങളിൽ മലയാളിക്ക് മലയാളി കൂട്ട്",
      heroHeadline: "മറുനാട്ടിലേക്ക് ഇന്റർവ്യൂവിന് പോകാൻ ഭയമുണ്ടോ? <span class=\"highlight-word\">നിങ്ങൾ ഒട്ടും തനിച്ചല്ല.</span>",
      heroSubtitle: "ഉത്തർപ്രദേശ്, ഡൽഹി, മഹാരാഷ്ട്ര, കർണാടക തുടങ്ങി ഇന്ത്യയിലെവിടെയും പരീക്ഷയ്ക്കും ഇന്റർവ്യൂവിനും പോകുന്ന സാധാരണക്കാരായ മലയാളി ഉദ്യോഗാർത്ഥികൾക്ക് സൗജന്യ താമസവും, വഴി സഹായവും, മലയാളത്തിലുള്ള തുണയും നൽകുന്ന സഹായ ശൃംഖല.",
      sosButton: "🚨 അടിയന്തര സഹായം (SOS)",
      btnFindHost: "സഹായിയെ കണ്ടെത്തൂ",
      btnPostRequest: "യാത്രാ സഹായം ചോദിക്കൂ",
      btnVolunteer: "സഹായിയായി രജിസ്റ്റർ ചെയ്യൂ",
      searchHeader: "നിങ്ങൾ പോകുന്ന സ്ഥലത്തെ മലയാളികളെ കണ്ടെത്തൂ",
      searchStateLabel: "1. സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
      searchCityLabel: "2. നഗരം തിരഞ്ഞെടുക്കുക",
      searchKeywordLabel: "കോളേജ്, ഏരിയ അല്ലെങ്കിൽ പേര് തിരയൂ",
      tagAll: "എല്ലാ സഹായികളും",
      tagFreeStay: "🏠 സൗജന്യ താമസം / കുറഞ്ഞ ചെലവ്",
      tagRouteGuide: "🚆 സ്റ്റേഷൻ & റൂട്ട് സഹായം",
      tagMalayalamBuddy: "🗣️ മലയാളം സംസാരിക്കുന്ന തുണ",
      tagWomenOnly: "👩 പെൺകുട്ടികൾക്ക് സുരക്ഷിത താമസം",
      tabHosts: "സഹായികളായ മലയാളികൾ",
      tabRequests: "സഹായം തേടുന്ന ഉദ്യോഗാർത്ഥികൾ",
      tabSurvival: "ഹിന്ദി-മലയാളം യാത്രാ ഗൈഡ്",
      tabEmergency: "അടിയന്തര ഫോൺ നമ്പറുകൾ & സമാജങ്ങൾ",
      candidateFeedTitle: "സഹായം തേടുന്ന മലയാളി ഉദ്യോഗാർത്ഥികൾ",
      candidateFeedSubtitle: "കയ്യിൽ പണമില്ലാതെ ദൂരദേശങ്ങളിലേക്ക് ജോലി തേടി പോകുന്ന സഹോദരങ്ങൾ. നിങ്ങൾ ഈ നഗരങ്ങളിൽ ഉണ്ടെങ്കിൽ ഒരു കൈത്താങ്ങാകൂ.",
      btnShareRequest: "നിങ്ങളുടെ യാത്രാ വിവരം പങ്കുവെക്കൂ",
      contactModalTitle: "മലയാളി സഹായിയുമായി ബന്ധപ്പെടുക",
      btnSendWhatsApp: "വാട്സാപ്പിൽ സന്ദേശം അയക്കൂ",
      btnCopyText: "സന്ദേശം കോപ്പി ചെയ്യൂ",
      survivalTitle: "റെയിൽവേ സ്റ്റേഷനിലും ഓട്ടോയിലും ആവശ്യമായ ഹിന്ദി വാക്യങ്ങൾ",
      survivalSubtitle: "ഓട്ടോക്കാരുടെ ചൂഷണം ഒഴിവാക്കാനും വഴി ചോദിക്കാനും ഇത് ഉപയോഗിക്കാം. ഓഡിയോ കേൾപ്പിച്ചു കൊടുക്കുകയും ചെയ്യാം.",
      norkaBanner: "മറുനാട്ടിലെ മലയാളികൾക്കായി നോർക്ക റൂട്ട്സ് 24 മണിക്കൂർ ടോൾ ഫ്രീ ഹെൽപ്പ് ലൈൻ: 1800-425-3939",
      btnTurnLocation: "📍 ലൊക്കേഷൻ ഓൺ ചെയ്യുക",
      locationActive: "ജിപിഎസ് ലൊക്കേഷൻ ഓൺ ആണ്",
      locationInactive: "ലൊക്കേഷൻ ഓഫാണ്. അടുത്തുള്ള സഹായികളെ കണ്ടെത്താൻ ക്ലിക്ക് ചെയ്യുക.",
      viewList: "📋 ലിസ്റ്റ് കാഴ്ച",
      viewMap: "🗺️ മാപ്പ് കാഴ്ച"
    }
  };

  // --- LocalStorage persistence ---
  let volunteers = JSON.parse(localStorage.getItem('koottu_volunteers_v2') || 'null');
  if (!volunteers || volunteers.length === 0) {
    volunteers = [...INITIAL_VOLUNTEERS];
    localStorage.setItem('koottu_volunteers_v2', JSON.stringify(volunteers));
  }

  let requests = JSON.parse(localStorage.getItem('koottu_requests_v2') || 'null');
  if (!requests || requests.length === 0) {
    requests = [...INITIAL_REQUESTS];
    localStorage.setItem('koottu_requests_v2', JSON.stringify(requests));
  }

  // --- State Variables ---
  let currentLang = localStorage.getItem('koottu_lang') || 'en';
  let currentTheme = localStorage.getItem('koottu_theme') || 'light';
  let currentSelectedState = 'all';
  let currentSelectedCity = 'all';
  let currentFilterCategory = 'all';
  let currentSearchQuery = '';
  let activeTab = 'hosts';
  let isLocationActive = false;
  let userGeoCoords = null; // { lat, lng }
  let currentViewMode = 'list'; // 'list' or 'map'
  let leafletMap = null;
  let mapMarkers = [];

  // --- DOM Elements ---
  const bodyEl = document.body;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const stateSelect = document.getElementById('stateSelect');
  const citySelect = document.getElementById('citySelect');
  const searchInput = document.getElementById('searchInput');
  const filterTagBtns = document.querySelectorAll('.filter-tag-btn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const hostsSection = document.getElementById('hostsSection');
  const requestsSection = document.getElementById('requestsSection');
  const survivalSection = document.getElementById('survivalSection');
  const emergencySection = document.getElementById('emergencySection');
  const hostsGrid = document.getElementById('hostsGrid');
  const requestsList = document.getElementById('requestsList');
  const survivalPhrasesList = document.getElementById('survivalPhrasesList');
  const btnTurnLocation = document.getElementById('btnTurnLocation');
  const locationStatusText = document.getElementById('locationStatusText');
  const gpsDot = document.getElementById('gpsDot');
  const btnListView = document.getElementById('btnListView');
  const btnMapView = document.getElementById('btnMapView');
  const interactiveMapContainer = document.getElementById('interactiveMapContainer');

  // Modals
  const contactModal = document.getElementById('contactModal');
  const postRequestModal = document.getElementById('postRequestModal');
  const volunteerModal = document.getElementById('volunteerModal');
  const sosModal = document.getElementById('sosModal');
  const ownerModal = document.getElementById('ownerModal');
  const ownerForm = document.getElementById('ownerForm');

  // --- Owner / Founder Profile State ---
  let ownerProfile = JSON.parse(localStorage.getItem('koottu_owner_profile') || 'null');
  if (!ownerProfile || ownerProfile.name === "Founder / Initiator") {
    ownerProfile = {
      name: "Marshid",
      district: "Kerala",
      phone: "+91 94470 00000",
      role: "Platform Creator & Kerala Community Lead",
      story: "അപരിചിതമായ സ്ഥലങ്ങളിലേക്ക് ഭയമില്ലാതെ യാത്ര ചെയ്യാം. വഴിയോ ഭാഷയോ അറിയാത്തതിന്റെ പേടിയും പണമില്ലായ്മയും മാറ്റാൻ ഓരോ സ്റ്റേഷനിലും കൂട്ടിന് മലയാളി സുഹൃത്തുക്കൾ നിങ്ങൾക്കൊപ്പമുണ്ട്."
    };
    localStorage.setItem('koottu_owner_profile', JSON.stringify(ownerProfile));
  }

  // --- Initialize App ---
  function init() {
    populateStateDropdowns();
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    setupEventListeners();
    renderOwnerProfile();
    renderVolunteers();
    renderRequests();
    renderSurvivalPhrases();

    // Check if user already enabled location previously
    const savedGeo = localStorage.getItem('koottu_user_geo');
    if (savedGeo) {
      try {
        userGeoCoords = JSON.parse(savedGeo);
        isLocationActive = true;
        updateLocationStatusUI(true, `Active (Lat: ${userGeoCoords.lat.toFixed(2)}, Lng: ${userGeoCoords.lng.toFixed(2)})`);
        calculateDistancesToVolunteers();
        renderVolunteers();
      } catch (e) {}
    }
  }

  // --- Populate Cascading State & City Dropdowns ---
  function populateStateDropdowns() {
    // 1. Search Bar State Dropdown
    if (stateSelect) {
      stateSelect.innerHTML = `<option value="all">All States & Union Territories (All India)</option>` +
        Object.keys(INDIA_STATES_AND_CITIES).map(st => `<option value="${st}">${st}</option>`).join('');
    }
    populateCityDropdown('all');

    // 2. Post Request Modal State Dropdown
    const reqStateSelect = document.getElementById('reqToState');
    if (reqStateSelect) {
      reqStateSelect.innerHTML = Object.keys(INDIA_STATES_AND_CITIES).map(st => `<option value="${st}">${st}</option>`).join('');
      updateReqCityDropdown(reqStateSelect.value);
      reqStateSelect.onchange = () => updateReqCityDropdown(reqStateSelect.value);
    }

    // 3. Post Request Kerala District Dropdown
    const reqFromDistrict = document.getElementById('reqFromDistrict');
    if (reqFromDistrict) {
      reqFromDistrict.innerHTML = KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');
    }

    // 4. Volunteer Modal State Dropdown
    const volStateSelect = document.getElementById('volState');
    if (volStateSelect) {
      volStateSelect.innerHTML = Object.keys(INDIA_STATES_AND_CITIES).map(st => `<option value="${st}">${st}</option>`).join('');
      updateVolCityDropdown(volStateSelect.value);
      volStateSelect.onchange = () => updateVolCityDropdown(volStateSelect.value);
    }

    // 5. Volunteer Origin District Dropdown
    const volOrigin = document.getElementById('volOrigin');
    if (volOrigin) {
      volOrigin.innerHTML = KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');
    }

    // 6. Owner Profile Kerala District Dropdown
    const ownerInputDistrict = document.getElementById('ownerInputDistrict');
    if (ownerInputDistrict) {
      ownerInputDistrict.innerHTML = KERALA_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');
    }
  }

  function populateCityDropdown(selectedState) {
    if (!citySelect) return;
    if (selectedState === 'all') {
      citySelect.innerHTML = `<option value="all">All Major Cities</option>`;
      citySelect.disabled = false;
      return;
    }

    const cities = INDIA_STATES_AND_CITIES[selectedState] || [];
    citySelect.innerHTML = cities.map(c => {
      const val = c.startsWith('All') ? 'all' : c;
      return `<option value="${val}">${c}</option>`;
    }).join('');
    citySelect.disabled = false;
  }

  function updateReqCityDropdown(selectedState) {
    const el = document.getElementById('reqToCity');
    if (!el) return;
    const cities = INDIA_STATES_AND_CITIES[selectedState] || [];
    el.innerHTML = cities.filter(c => !c.startsWith('All')).map(c => `<option value="${c}">${c}</option>`).join('');
  }

  function updateVolCityDropdown(selectedState) {
    const el = document.getElementById('volCity');
    if (!el) return;
    const cities = INDIA_STATES_AND_CITIES[selectedState] || [];
    el.innerHTML = cities.filter(c => !c.startsWith('All')).map(c => `<option value="${c}">${c}</option>`).join('');
  }

  // --- Haversine Distance Formula (km) ---
  function getDistanceInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Calculate distance for all volunteers from user's current GPS location
  function calculateDistancesToVolunteers() {
    if (!userGeoCoords) return;
    volunteers.forEach(v => {
      if (v.lat && v.lng) {
        v.distanceKm = getDistanceInKm(userGeoCoords.lat, userGeoCoords.lng, v.lat, v.lng);
      } else {
        v.distanceKm = 999999;
      }
    });
  }

  // --- Live Geolocation Toggle ---
  function toggleLiveLocation() {
    if (isLocationActive) {
      // Turn location OFF
      isLocationActive = false;
      userGeoCoords = null;
      localStorage.removeItem('koottu_user_geo');
      updateLocationStatusUI(false, currentLang === 'ml' ? 'ലൊക്കേഷൻ ഓഫാണ്' : 'Location is OFF');
      volunteers.forEach(v => delete v.distanceKm);
      renderVolunteers();
      showToast(currentLang === 'ml' ? 'ലൊക്കേഷൻ ഓഫ് ചെയ്തു' : 'GPS Location turned off');
      return;
    }

    // Turn location ON
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    updateLocationStatusUI(false, currentLang === 'ml' ? 'ലൊക്കേഷൻ കണ്ടെത്തുന്നു...' : 'Detecting your GPS location...');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userGeoCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        isLocationActive = true;
        localStorage.setItem('koottu_user_geo', JSON.stringify(userGeoCoords));
        updateLocationStatusUI(true, `GPS Active (${userGeoCoords.lat.toFixed(2)}° N, ${userGeoCoords.lng.toFixed(2)}° E)`);
        calculateDistancesToVolunteers();
        renderVolunteers();
        if (currentViewMode === 'map') {
          renderInteractiveMap();
        }
        showToast(currentLang === 'ml' ? 'നിങ്ങളുടെ ലൊക്കേഷൻ ഓൺ ചെയ്തു! അടുത്തുള്ള സഹായികളെ ക്രമീകരിച്ചു.' : 'Location ON! Sorted helpers by nearest distance to you.');
      },
      (err) => {
        console.warn('Geolocation error:', err);
        // Fallback simulation for demonstration if user denies permission
        userGeoCoords = { lat: 26.8467, lng: 80.9462 }; // Default to Lucknow, UP
        isLocationActive = true;
        localStorage.setItem('koottu_user_geo', JSON.stringify(userGeoCoords));
        updateLocationStatusUI(true, 'Location Active (Lucknow, UP Center)');
        calculateDistancesToVolunteers();
        renderVolunteers();
        showToast(currentLang === 'ml' ? 'ലൊക്കേഷൻ ഓൺ ചെയ്തു (ലഖ്‌നൗ സെന്റർ)' : 'Location ON: Set to destination hub (Lucknow, UP)');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  function updateLocationStatusUI(active, text) {
    if (btnTurnLocation) {
      btnTurnLocation.innerHTML = active
        ? `<span>📍</span> <span>${currentLang === 'ml' ? 'ലൊക്കേഷൻ: ഓൺ' : 'Location: ON'}</span>`
        : `<span>📍</span> <span>${currentLang === 'ml' ? 'ലൊക്കേഷൻ ഓൺ ചെയ്യുക' : 'Turn Location ON'}</span>`;
      if (active) btnTurnLocation.classList.add('active');
      else btnTurnLocation.classList.remove('active');
    }

    if (gpsDot) {
      if (active) gpsDot.classList.add('active');
      else gpsDot.classList.remove('active');
    }

    if (locationStatusText) {
      locationStatusText.textContent = text;
    }
  }

  // --- Theme Handler ---
  function applyTheme(theme) {
    currentTheme = theme;
    bodyEl.setAttribute('data-theme', theme);
    localStorage.setItem('koottu_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  // --- Language Handler ---
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('koottu_lang', lang);
    if (lang === 'ml') {
      bodyEl.classList.add('lang-ml');
    } else {
      bodyEl.classList.remove('lang-ml');
    }

    if (langToggleBtn) {
      langToggleBtn.innerHTML = lang === 'ml' ? '🇬🇧 English' : '🇮🇳 മലയാളം';
    }

    const t = TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });

    renderVolunteers();
    renderRequests();
  }

  // --- Render Volunteers Grid ---
  function renderVolunteers() {
    if (!hostsGrid) return;

    let filtered = volunteers.filter(v => {
      // State filter
      if (currentSelectedState !== 'all' && v.state !== currentSelectedState) {
        return false;
      }
      // City filter
      if (currentSelectedCity !== 'all' && v.city.toLowerCase() !== currentSelectedCity.toLowerCase()) {
        return false;
      }
      // Category tag filter
      if (currentFilterCategory !== 'all') {
        if (currentFilterCategory === 'women-only') {
          if (!v.isWomenOnly) return false;
        } else if (!v.category.includes(currentFilterCategory)) {
          return false;
        }
      }
      // Query filter
      if (currentSearchQuery.trim() !== '') {
        const q = currentSearchQuery.toLowerCase();
        const textToMatch = `${v.name} ${v.nameMl || ''} ${v.city} ${v.state} ${v.about} ${v.aboutMl || ''} ${v.role}`.toLowerCase();
        if (!textToMatch.includes(q)) return false;
      }
      return true;
    });

    // If location is active, sort by nearest distance
    if (isLocationActive && userGeoCoords) {
      filtered.sort((a, b) => (a.distanceKm || 999999) - (b.distanceKm || 999999));
    }

    if (filtered.length === 0) {
      hostsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 2.2rem; margin-bottom: 10px;">🤝</div>
          <h3 style="font-size: 1.2rem; font-weight: 700;">${currentLang === 'ml' ? 'സഹായികളെ കണ്ടെത്തിയില്ല' : 'No Volunteers Found for this Location / Filter'}</h3>
          <p style="color: var(--text-muted); margin-top: 6px; font-size: 0.9rem;">
            ${currentLang === 'ml' ? 'മറ്റ് നഗരങ്ങൾ പരിശോധിക്കുക, അല്ലെങ്കിൽ നിങ്ങളുടെ യാത്രാ വിവരം പോസ്റ്റ് ചെയ്യുക. ഞങ്ങളുടെ കമ്മ്യൂണിറ്റി സഹായിക്കാം.' : 'Try selecting another state or city, or post your travel request so nearby Malayalis can be notified.'}
          </p>
          <button class="btn-primary" onclick="window.KoottuApp.openPostRequestModal()" style="margin-top: 18px;">
            ${currentLang === 'ml' ? 'സഹായ അഭ്യർത്ഥന നൽകുക' : 'Post Travel Help Request'}
          </button>
        </div>
      `;
      if (currentViewMode === 'map') renderInteractiveMap(filtered);
      return;
    }

    hostsGrid.innerHTML = filtered.map(v => {
      const displayName = currentLang === 'ml' && v.nameMl ? v.nameMl : v.name;
      const displayRole = currentLang === 'ml' && v.roleMl ? v.roleMl : v.role;
      const displayAbout = currentLang === 'ml' && v.aboutMl ? v.aboutMl : v.about;
      const displayDistance = currentLang === 'ml' && v.distanceMl ? v.distanceMl : v.distanceFromStation;
      const displayOrigin = currentLang === 'ml' && v.originMl ? v.originMl : v.origin;

      const distanceDisplay = v.distanceKm !== undefined && isLocationActive
        ? `<span class="distance-pill">📍 ${v.distanceKm < 1 ? (v.distanceKm * 1000).toFixed(0) + ' m' : v.distanceKm.toFixed(1) + ' km'} away</span>`
        : '';

      const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(v.name + ', ' + v.city + ', ' + v.state)}`;

      return `
        <article class="host-card ${v.verified ? 'verified-border' : ''}" data-id="${v.id}">
          <div class="host-card-top">
            <div class="host-avatar" style="background: ${v.avatarColor || '#0f766e'};">
              ${displayName.substring(0, 2).toUpperCase()}
            </div>
            <div class="host-info-head">
              <div class="host-name-row">
                <h3 class="host-name">${displayName}</h3>
                ${v.verified ? `<span class="verified-badge">✓ ${currentLang === 'ml' ? 'വെരിഫൈഡ്' : 'Verified'}</span>` : ''}
                ${v.isWomenOnly ? `<span class="verified-badge" style="background:#fce7f3; color:#9d174d;">👩 ${currentLang === 'ml' ? 'പെൺകുട്ടികൾക്ക് മാത്രം' : 'Female Only'}</span>` : ''}
              </div>
              <p class="host-role-line">${displayRole}</p>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-top:6px;">
                <span class="host-location-badge">📍 ${v.city}, ${v.state}</span>
                ${distanceDisplay}
              </div>
            </div>
          </div>

          <p class="host-about-snippet">${displayAbout}</p>

          <div style="margin: 4px 0;">
            <button class="btn-voice-note" onclick="window.KoottuApp.playHostVoiceNote('${v.id}')">
              <span>▶️</span>
              <span>${currentLang === 'ml' ? 'വോയ്സ് കേൾക്കൂ' : 'Listen Host Voice'}</span>
            </button>
          </div>

          <div class="host-offerings-list">
            ${v.category.includes('free-stay') ? `<span class="offer-tag free-stay">🏠 ${currentLang === 'ml' ? 'സൗജന്യ താമസം' : 'Free Stay / Shelter'}</span>` : ''}
            ${v.category.includes('route-guide') ? `<span class="offer-tag">🚆 ${currentLang === 'ml' ? 'റൂട്ട് & മെട്രോ ഗൈഡ്' : 'Station & Route Guide'}</span>` : ''}
            ${v.category.includes('malayalam-buddy') ? `<span class="offer-tag">🗣️ ${currentLang === 'ml' ? 'മലയാളം സഹായം' : 'Malayalam Companion'}</span>` : ''}
            ${v.category.includes('emergency-contact') ? `<span class="offer-tag">🛡️ ${currentLang === 'ml' ? 'സുരക്ഷാ ഗൈഡൻസ്' : 'Emergency Shield'}</span>` : ''}
          </div>

          <div class="host-meta-details">
            <div class="meta-detail-row">
              <strong>${currentLang === 'ml' ? 'നാട്:' : 'Origin in Kerala:'}</strong> ${displayOrigin}
            </div>
            <div class="meta-detail-row">
              <strong>${currentLang === 'ml' ? 'സ്റ്റേഷൻ ദൂരം:' : 'Station Access:'}</strong> ${displayDistance}
            </div>
          </div>

          <div class="host-card-actions">
            <button class="btn-contact-whatsapp" onclick="window.KoottuApp.openContactModal('${v.id}')">
              <span>💬 ${currentLang === 'ml' ? 'മെസ്സേജ് അയക്കുക' : 'WhatsApp Contact'}</span>
            </button>
            <a href="${mapsDirectionsUrl}" target="_blank" rel="noopener noreferrer" class="btn-view-profile" style="text-decoration:none;">
              <span>🗺️ ${currentLang === 'ml' ? 'വഴി കാണുക' : 'Directions'}</span>
            </a>
          </div>
        </article>
      `;
    }).join('');

    if (currentViewMode === 'map') {
      renderInteractiveMap(filtered);
    }
  }

  // --- Render Interactive Map (Leaflet) ---
  function renderInteractiveMap(volunteersList) {
    if (!interactiveMapContainer) return;

    const listToRender = volunteersList || volunteers;

    if (typeof L === 'undefined') {
      interactiveMapContainer.innerHTML = `<div style="padding:40px; text-align:center;">Loading interactive map...</div>`;
      return;
    }

    if (!leafletMap) {
      leafletMap = L.map('interactiveMapContainer').setView([23.5, 78.5], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors | Koottu Safe Network'
      }).addTo(leafletMap);
    }

    // Clear old markers
    mapMarkers.forEach(m => leafletMap.removeLayer(m));
    mapMarkers = [];

    // Add user marker if GPS is active
    if (isLocationActive && userGeoCoords) {
      const userIcon = L.divIcon({
        className: 'user-map-pin',
        html: `<div style="background:#ef4444; width:18px; height:18px; border-radius:50%; border:3px solid white; box-shadow:0 0 10px rgba(239,68,68,0.8); animation:pulse-gps 1.5s infinite;"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });

      const userMarker = L.marker([userGeoCoords.lat, userGeoCoords.lng], { icon: userIcon })
        .addTo(leafletMap)
        .bindPopup(`<strong>📍 ${currentLang === 'ml' ? 'നിങ്ങളുടെ സ്ഥലം' : 'Your Live Location'}</strong>`);
      mapMarkers.push(userMarker);
    }

    // Add host markers
    const bounds = [];
    if (isLocationActive && userGeoCoords) bounds.push([userGeoCoords.lat, userGeoCoords.lng]);

    listToRender.forEach(v => {
      if (v.lat && v.lng) {
        bounds.push([v.lat, v.lng]);
        const pinColor = v.isWomenOnly ? '#db2777' : (v.category.includes('free-stay') ? '#0f766e' : '#d97706');
        const iconHtml = `<div style="background:${pinColor}; width:28px; height:28px; border-radius:50%; display:grid; place-items:center; color:white; font-size:12px; font-weight:800; border:2px solid white; box-shadow:0 2px 6px rgba(0,0,0,0.3);">${v.isWomenOnly ? '👩' : '🏠'}</div>`;

        const hostIcon = L.divIcon({
          className: 'host-map-pin',
          html: iconHtml,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const popupContent = `
          <div style="font-family:sans-serif; min-width:180px;">
            <strong style="font-size:13px; color:#0f172a;">${v.name}</strong>
            <div style="font-size:11px; color:#64748b; margin-top:2px;">📍 ${v.city}, ${v.state}</div>
            <div style="font-size:11px; margin-top:4px;">${v.amenities.slice(0, 2).map(a => `• ${a}`).join('<br>')}</div>
            <div style="margin-top:8px;">
              <button onclick="window.KoottuApp.openContactModal('${v.id}')" style="background:#0f766e; color:white; border:none; border-radius:4px; padding:5px 9px; font-size:11px; font-weight:700; cursor:pointer;">
                💬 Contact Host
              </button>
            </div>
          </div>
        `;

        const marker = L.marker([v.lat, v.lng], { icon: hostIcon })
          .addTo(leafletMap)
          .bindPopup(popupContent);
        mapMarkers.push(marker);
      }
    });

    if (bounds.length > 0) {
      leafletMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
  }

  // --- View Mode Toggle (List vs Map) ---
  function setViewMode(mode) {
    currentViewMode = mode;
    if (btnListView) btnListView.classList.toggle('active', mode === 'list');
    if (btnMapView) btnMapView.classList.toggle('active', mode === 'map');

    if (mode === 'map') {
      interactiveMapContainer.style.display = 'block';
      setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
        renderInteractiveMap();
      }, 200);
    } else {
      interactiveMapContainer.style.display = 'none';
    }
  }

  // --- Render Candidate SOS Requests ---
  function renderRequests() {
    if (!requestsList) return;

    requestsList.innerHTML = requests.map(req => {
      return `
        <div class="request-card" data-id="${req.id}">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom: 4px;">
              ${req.isUrgent ? `<span class="request-urgent-tag">⚡ ${currentLang === 'ml' ? 'അത്യാവശ്യം' : 'Urgent Travel'}</span>` : ''}
              <span style="font-size: 0.78rem; color: var(--text-dim);">🕒 ${req.postedAgo}</span>
            </div>
            <h3 class="request-headline">${req.candidateName} (${req.fromDistrict})</h3>
            <div class="request-route-line">
              <span>📍 Kerala ➔ <strong>${req.toCity}, ${req.toState}</strong></span>
              <span>• 📅 ${req.examDate}</span>
              <span>• 💰 ${req.budget}</span>
            </div>
            <p class="request-description"><strong>${currentLang === 'ml' ? 'പരീക്ഷ / ലക്ഷ്യം:' : 'Purpose:'}</strong> ${req.purpose}</p>
            <p class="request-description" style="margin-top:6px; font-style:italic; color: var(--text-main);">"${req.fearMessage}"</p>
            <div class="request-footer-info">
              <span>🛡️ ${currentLang === 'ml' ? 'പരിചയമില്ലാത്ത സ്ഥലം, ഹിന്ദി അറിയില്ല' : 'First time traveler, non-Hindi speaker'}</span>
            </div>
          </div>
          <div>
            <button class="btn-help-candidate" onclick="window.KoottuApp.respondToCandidate('${req.id}', '${encodeURIComponent(req.candidateName)}')">
              🤝 ${currentLang === 'ml' ? 'സഹായിക്കാം എന്ന് അറിയിക്കൂ' : 'Offer Help to Candidate'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- Render Survival Phrases ---
  function renderSurvivalPhrases() {
    if (!survivalPhrasesList) return;

    survivalPhrasesList.innerHTML = SURVIVAL_PHRASES.map((p, idx) => {
      return `
        <div class="phrase-item">
          <button class="phrase-audio-btn" onclick="window.KoottuApp.speakHindiPhrase(${idx})" title="Listen pronunciation">
            🔊 ${currentLang === 'ml' ? 'കേൾക്കൂ' : 'Listen Pronunciation'}
          </button>
          <div class="phrase-malayalam">🌴 ${p.ml}</div>
          <div class="phrase-hindi">${p.hi}</div>
          <div class="phrase-translit">🗣️ <em>"${p.translit}"</em></div>
          <div style="font-size:0.78rem; color:var(--text-dim); margin-top:4px;">📌 ${p.en}</div>
        </div>
      `;
    }).join('');
  }

  // --- Text-to-Speech for Hindi Survival Phrases ---
  function speakHindiPhrase(index) {
    const phrase = SURVIVAL_PHRASES[index];
    if (!phrase) return;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.hi);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
      showToast(currentLang === 'ml' ? 'ഹിന്ദി വാചകം കേൾപ്പിച്ചു നൽകുന്നു...' : 'Playing Hindi phrase aloud...');
    } else {
      showToast(currentLang === 'ml' ? 'ശബ്ദം ലഭ്യമല്ല. എഴുതിയത് വായിക്കുക.' : 'Audio synthesis not supported on this browser.');
    }
  }

  // --- Setup Event Listeners ---
  function setupEventListeners() {
    // Theme toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language toggle
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        applyLanguage(currentLang === 'ml' ? 'en' : 'ml');
      });
    }

    // Live Geolocation Button
    if (btnTurnLocation) {
      btnTurnLocation.addEventListener('click', toggleLiveLocation);
    }

    // List vs Map View Toggle
    if (btnListView) {
      btnListView.addEventListener('click', () => setViewMode('list'));
    }
    if (btnMapView) {
      btnMapView.addEventListener('click', () => setViewMode('map'));
    }

    // State dropdown filter
    if (stateSelect) {
      stateSelect.addEventListener('change', (e) => {
        currentSelectedState = e.target.value;
        currentSelectedCity = 'all';
        populateCityDropdown(currentSelectedState);
        renderVolunteers();
      });
    }

    // City dropdown filter
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        currentSelectedCity = e.target.value;
        renderVolunteers();
      });
    }

    // Search query input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        renderVolunteers();
      });
    }

    // Category Tag buttons
    filterTagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterTagBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilterCategory = btn.getAttribute('data-tag');
        renderVolunteers();
      });
    });

    // Main Feature Tab switcher
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Close modals on click outside or close button
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        closeAllModals();
      });
    });

    [contactModal, postRequestModal, volunteerModal, sosModal].forEach(modal => {
      if (!modal) return;
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    });

    // Post Travel Request Form Submission
    const postRequestForm = document.getElementById('postRequestForm');
    if (postRequestForm) {
      postRequestForm.addEventListener('submit', handlePostRequestSubmit);
    }

    // Volunteer Registration Form Submission
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
      volunteerForm.addEventListener('submit', handleVolunteerSubmit);
    }

    // Owner Settings Form Submission
    if (ownerForm) {
      ownerForm.addEventListener('submit', handleOwnerFormSubmit);
    }
  }

  // --- Switch Tabs ---
  function switchTab(tab) {
    activeTab = tab;
    hostsSection.style.display = tab === 'hosts' ? 'block' : 'none';
    requestsSection.style.display = tab === 'requests' ? 'block' : 'none';
    survivalSection.style.display = tab === 'survival' ? 'block' : 'none';
    emergencySection.style.display = tab === 'emergency' ? 'block' : 'none';
    if (tab === 'hosts' && currentViewMode === 'map') {
      setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
      }, 100);
    }
  }

  // --- Modal Helpers ---
  function closeAllModals() {
    [contactModal, postRequestModal, volunteerModal, sosModal, ownerModal].forEach(m => {
      if (m) m.classList.remove('active');
    });
  }

  // --- Render Owner / Founder Profile ---
  function renderOwnerProfile() {
    const founderDisplayName = document.getElementById('founderDisplayName');
    const founderStoryText = document.getElementById('founderStoryText');
    const founderAvatarLetter = document.getElementById('founderAvatarLetter');

    if (founderDisplayName) {
      founderDisplayName.textContent = `${ownerProfile.name} (${ownerProfile.district})`;
    }
    if (founderStoryText) {
      founderStoryText.textContent = `"${ownerProfile.story}"`;
    }
    if (founderAvatarLetter && ownerProfile.name) {
      founderAvatarLetter.textContent = ownerProfile.name.charAt(0).toUpperCase();
    }

    // Pre-populate form inputs if modal opens
    const nameInput = document.getElementById('ownerInputName');
    const districtInput = document.getElementById('ownerInputDistrict');
    const phoneInput = document.getElementById('ownerInputPhone');
    const roleInput = document.getElementById('ownerInputRole');
    const storyInput = document.getElementById('ownerInputStory');

    if (nameInput) nameInput.value = ownerProfile.name || '';
    if (districtInput) districtInput.value = ownerProfile.district || 'Kozhikode';
    if (phoneInput) phoneInput.value = ownerProfile.phone || '';
    if (roleInput) roleInput.value = ownerProfile.role || '';
    if (storyInput) storyInput.value = ownerProfile.story || '';
  }

  function openOwnerModal() {
    closeAllModals();
    renderOwnerProfile();
    if (ownerModal) ownerModal.classList.add('active');
  }

  function handleOwnerFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('ownerInputName').value.trim();
    const district = document.getElementById('ownerInputDistrict').value;
    const phone = document.getElementById('ownerInputPhone').value.trim();
    const role = document.getElementById('ownerInputRole').value.trim();
    const story = document.getElementById('ownerInputStory').value.trim();

    if (!name || !story) {
      alert('Please fill out your name and mission story.');
      return;
    }

    ownerProfile = {
      name,
      district,
      phone: phone || "+91 94470 00000",
      role: role || "Founder & Platform Creator",
      story
    };

    localStorage.setItem('koottu_owner_profile', JSON.stringify(ownerProfile));
    renderOwnerProfile();
    closeAllModals();

    showToast(currentLang === 'ml'
      ? `അഭിനന്ദനങ്ങൾ! ഈ വെബ്സൈറ്റ് ഇപ്പോൾ ${ownerProfile.name}-ന്റെ സ്വന്തം പേരിലായി മാറിയിരിക്കുന്നു.`
      : `Success! This website is now branded and owned by ${ownerProfile.name}.`);
  }

  // --- Open Contact Modal for a Host ---
  function openContactModal(hostId) {
    const host = volunteers.find(v => v.id === hostId);
    if (!host) return;

    const displayName = currentLang === 'ml' && host.nameMl ? host.nameMl : host.name;
    const displayAbout = currentLang === 'ml' && host.aboutMl ? host.aboutMl : host.about;
    const displayOrigin = currentLang === 'ml' && host.originMl ? host.originMl : host.origin;

    const modalHostName = document.getElementById('modalHostName');
    const modalHostRole = document.getElementById('modalHostRole');
    const modalHostLocation = document.getElementById('modalHostLocation');
    const modalHostAbout = document.getElementById('modalHostAbout');
    const modalAmenitiesList = document.getElementById('modalAmenitiesList');
    const modalMessageMalayalam = document.getElementById('modalMessageMalayalam');
    const modalMessageEnglish = document.getElementById('modalMessageEnglish');
    const btnWhatsAppAction = document.getElementById('btnWhatsAppAction');

    if (modalHostName) modalHostName.textContent = displayName;
    if (modalHostRole) modalHostRole.textContent = host.role;
    if (modalHostLocation) modalHostLocation.textContent = `📍 ${host.city}, ${host.state} • Native: ${displayOrigin}`;
    if (modalHostAbout) modalHostAbout.textContent = displayAbout;

    if (modalAmenitiesList) {
      modalAmenitiesList.innerHTML = host.amenities.map(a => `<span class="offer-tag">✓ ${a}</span>`).join(' ');
    }

    const msgMl = `നമസ്കാരം ചേട്ടാ/ചേച്ചീ, ഞാൻ കേരളത്തിൽ നിന്നാണ് വരുന്നത്. എനിക്ക് ${host.city}, ${host.state}-ൽ ഒരു ഇന്റർവ്യൂ / എക്സാം ഉണ്ട്. അവിടെ മുൻപരിചയമില്ലാത്തതിനാൽ പേടിയുണ്ട്. കൂട്ടിൽ (Koottu) നിങ്ങളുടെ പ്രൊഫൈൽ കണ്ടു. എനിക്ക് റൂട്ട് സംശയങ്ങൾ ചോദിക്കാനോ കുറഞ്ഞ ചെലവിൽ തങ്ങാനോ സഹായം തരാൻ സാധിക്കുമോ? നന്ദി!`;
    const msgEn = `Hello Chetta/Chechi, I am traveling from Kerala to ${host.city}, ${host.state} for an interview/exam. I saw your profile on Koottu network. I am unfamiliar with the place and need some guidance on safe route/accommodation. Could you please help me? Thank you!`;

    if (modalMessageMalayalam) modalMessageMalayalam.textContent = msgMl;
    if (modalMessageEnglish) modalMessageEnglish.textContent = msgEn;

    if (btnWhatsAppAction) {
      btnWhatsAppAction.onclick = () => {
        const textToSend = currentLang === 'ml' ? msgMl : msgEn;
        const url = `https://wa.me/${host.whatsapp}?text=${encodeURIComponent(textToSend)}`;
        window.open(url, '_blank');
      };
    }

    if (contactModal) contactModal.classList.add('active');
  }

  // --- Copy Pre-composed Message to Clipboard ---
  function copyMessageTemplate() {
    const textEl = currentLang === 'ml'
      ? document.getElementById('modalMessageMalayalam')
      : document.getElementById('modalMessageEnglish');
    if (!textEl) return;

    navigator.clipboard.writeText(textEl.textContent).then(() => {
      showToast(currentLang === 'ml' ? 'സന്ദേശം കോപ്പി ചെയ്തു! വാട്സാപ്പിൽ അയക്കാം.' : 'Message copied to clipboard! Paste in WhatsApp.');
    }).catch(() => {
      showToast('Copied text!');
    });
  }

  // --- Handle Travel Request Post Form ---
  function handlePostRequestSubmit(e) {
    e.preventDefault();
    const candidateName = document.getElementById('reqCandidateName').value.trim();
    const fromDistrict = document.getElementById('reqFromDistrict').value;
    const toState = document.getElementById('reqToState').value;
    const toCity = document.getElementById('reqToCity').value;
    const examDate = document.getElementById('reqExamDate').value;
    const purpose = document.getElementById('reqPurpose').value.trim();
    const budget = document.getElementById('reqBudget').value;
    const fearMessage = document.getElementById('reqFearMessage').value.trim();
    const contactInfo = document.getElementById('reqContactInfo').value.trim();

    if (!candidateName || !fearMessage) {
      alert('Please fill out all required fields.');
      return;
    }

    const newRequest = {
      id: "req-" + Date.now(),
      candidateName,
      fromDistrict,
      toState,
      toCity,
      examDate: examDate || "Upcoming Week",
      purpose: purpose || "Job Interview",
      budget: budget || "Low Budget",
      fearMessage,
      postedAgo: "Just now",
      isUrgent: true,
      contactInfo
    };

    requests.unshift(newRequest);
    localStorage.setItem('koottu_requests_v2', JSON.stringify(requests));

    renderRequests();
    closeAllModals();
    e.target.reset();

    switchTab('requests');
    tabBtns.forEach(b => {
      if (b.getAttribute('data-tab') === 'requests') b.classList.add('active');
      else b.classList.remove('active');
    });

    showToast(currentLang === 'ml' ? 'നിങ്ങളുടെ യാത്രാ സഹായ അഭ്യർത്ഥന പോസ്റ്റ് ചെയ്തു! അടുത്തുള്ള മലയാളികൾ ബന്ധപ്പെടും.' : 'Your travel request is posted! Nearby Malayalis will reach out to help you.');
  }

  // --- Handle Volunteer Registration Form ---
  function handleVolunteerSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('volName').value.trim();
    const role = document.getElementById('volRole').value.trim();
    const state = document.getElementById('volState').value;
    const city = document.getElementById('volCity').value;
    const origin = document.getElementById('volOrigin').value;
    const phone = document.getElementById('volPhone').value.trim();
    const distance = document.getElementById('volDistance').value.trim();
    const about = document.getElementById('volAbout').value.trim();
    const canProvideStay = document.getElementById('volCanProvideStay').checked;
    const isWomenOnly = document.getElementById('volIsWomenOnly').checked;

    if (!name || !phone || !about) {
      alert('Please fill out your details.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const categories = ['route-guide', 'malayalam-buddy'];
    if (canProvideStay) categories.push('free-stay');

    const newVolunteer = {
      id: "v-custom-" + Date.now(),
      name,
      role: role || "Malayali Volunteer",
      state,
      city,
      lat: 25.0 + Math.random() * 4,
      lng: 78.0 + Math.random() * 6,
      origin: origin || "Kerala",
      distanceFromStation: distance || "Near Railway Station / Center",
      phone: phone,
      whatsapp: cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone,
      verified: true,
      category: categories,
      isWomenOnly: isWomenOnly,
      avatarColor: "#0f766e",
      about,
      amenities: [canProvideStay ? "Safe Stay Space" : "Route Guidance", "Malayalam Support", "Emergency Assistance"]
    };

    volunteers.unshift(newVolunteer);
    localStorage.setItem('koottu_volunteers_v2', JSON.stringify(volunteers));

    renderVolunteers();
    closeAllModals();
    e.target.reset();

    showToast(currentLang === 'ml' ? 'വലിയ നന്ദി! സഹായിയായി രജിസ്റ്റർ ചെയ്തു.' : 'Heartfelt thanks! You are now registered to help our candidates.');
  }

  // --- Respond to Candidate SOS ---
  function respondToCandidate(reqId, candidateNameEncoded) {
    const candidateName = decodeURIComponent(candidateNameEncoded);
    const candidate = requests.find(r => r.id === reqId);
    const msg = currentLang === 'ml'
      ? `${candidateName} എന്ന ഉദ്യോഗാർത്ഥിയെ സഹായിക്കാൻ തയ്യാറായതിന് നന്ദി! കമ്മ്യൂണിറ്റി വാട്സാപ്പ് വഴി കണക്റ്റ് ചെയ്യാൻ തുറക്കുന്നു.`
      : `Thank you for offering help to ${candidateName}! Connecting via Koottu Volunteer Desk.`;
    showToast(msg);
    setTimeout(() => {
      window.open(`https://wa.me/?text=${encodeURIComponent(`Hi ${candidateName}, I saw your Koottu travel request for ${candidate ? candidate.toCity + ', ' + candidate.toState : 'your exam'}. I am a Malayali living here and would love to help you safely!`)}`, '_blank');
    }, 600);
  }

  // --- Toast Notification ---
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>💬</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // --- Modal Openers for Global Buttons ---
  function openPostRequestModal() {
    closeAllModals();
    if (postRequestModal) postRequestModal.classList.add('active');
  }

  function openVolunteerModal() {
    closeAllModals();
    if (volunteerModal) volunteerModal.classList.add('active');
  }

  function openSosModal() {
    closeAllModals();
    if (sosModal) sosModal.classList.add('active');
  }

  // --- Friendly Living Companion Methods ---
  const companionChatWindow = document.getElementById('companionChatWindow');
  const companionChatBody = document.getElementById('companionChatBody');

  function toggleCompanionChat() {
    if (companionChatWindow) {
      companionChatWindow.classList.toggle('active');
    }
  }

  const COMPANION_RESPONSES = {
    fear_hindi: {
      ml: "ഒട്ടും പേടിക്കണ്ട കുട്ടീ! ഹിന്ദി അറിയാത്തത് ഒരിക്കലും ഒരു കുറവല്ല. നമ്മുടെ ഉദ്യോഗാർത്ഥികളിൽ 90% പേരും ആദ്യമായി ട്രെയിൻ കയറുമ്പോൾ ഹിന്ദി ഒട്ടും അറിയാത്തവരാണ്. റെയിൽവേ സ്റ്റേഷനിൽ നിന്ന് ഇറങ്ങുമ്പോൾ ഓട്ടോക്കാരോട് സംസാരിക്കാൻ നമ്മുടെ വെബ്സൈറ്റിലെ 'ഹിന്ദി സർവൈവൽ ടൂൾകിറ്റ്' തുറന്ന് ഓഡിയോ കേൾപ്പിച്ചു കൊടുത്താൽ മതി. കൂടാതെ വഴിയിൽ എന്തെങ്കിലും സംശയമുണ്ടായാൽ ലഖ്‌നൗവിലെയും ഡൽഹിയിലെയും നമ്മുടെ സമാജം നമ്പറുകളിൽ നേരിട്ട് വിളിക്കാം.",
      en: "Don't be afraid at all! Not knowing Hindi is never a setback. 90% of our candidates travel without knowing Hindi. When you reach the station, just open the 'Hindi Survival Toolkit' on this website and play the audio aloud for auto drivers. Plus, our local Malayali helpline will guide you over the phone!"
    },
    no_money: {
      ml: "പണമില്ലെന്ന് കരുതി ജീവിതത്തിലെ വലിയൊരു അവസരവും പരീക്ഷയും ഉപേക്ഷിക്കരുത്. ഒരുപാട് പണം ചെലവാക്കി ഹോട്ടലിൽ മുറിയെടുക്കേണ്ട കാര്യമില്ല. റെയിൽവേ സ്റ്റേഷനിലെ പ്ലാറ്റ്ഫോം 1-ൽ ഉള്ള എക്സിക്യൂട്ടീവ് വെയിറ്റിംഗ് റൂമിൽ മണിക്കൂറിന് 20-30 രൂപയ്ക്ക് ഇരിക്കാം, ഫോൺ ചാർജ് ചെയ്യാം. അല്ലെങ്കിൽ നമ്മുടെ കൂട്ടിലെ രാഹുൽ, സിസ്റ്റർ മേരി തുടങ്ങിയ നല്ല മനസ്സുള്ള സഹോദരങ്ങളുടെ ഫ്ലാറ്റിൽ സൗജന്യമായി താമസിക്കാം. ഭക്ഷണം വരെ അവർ സ്നേഹത്തോടെ തരും.",
      en: "Never give up on an interview because you don't have money for hotels. You can use official IRCTC AC waiting lounges at the station for just ₹20–₹30/hour, or stay for free with our verified student & family hosts like Rahul and Sr. Mary who provide clean mattress and home food with zero charges."
    },
    women_safety: {
      ml: "പെൺകുട്ടികളുടെ സുരക്ഷയ്ക്കാണ് ഞങ്ങൾ ഏറ്റവും വലിയ മുൻഗണന നൽകുന്നത്. തനിച്ചു വരുന്ന പെൺകുട്ടികൾക്ക് താമസിക്കാൻ സിസ്റ്റർ മേരിയുടെ നേതൃത്വത്തിലുള്ള ലഖ്‌നൗ അലിഗഞ്ചിലെ ക്വാർട്ടേഴ്സും, ചെന്നൈയിലെ കവിത ചേച്ചിയുടെ വീടും ലഭ്യമാണ്. കൂടാതെ എമർജൻസി സഹായത്തിനായി യു.പി വിമൻ പവർലൈൻ (1090) നമ്പറും നമ്മുടെ വോളണ്ടിയർമാരും 24 മണിക്കൂറും സജ്ജമാണ്. വീട്ടുകാരോട് പേടിക്കാതെ വിടാൻ പറയൂ.",
      en: "Women's safety is our top priority. We have verified female-only safe havens run by Malayali senior nurses and families (like Sr. Mary in Lucknow and Kavitha in Chennai). In addition, the 24x7 Women Power Line 1090 is always available."
    },
    station_scam: {
      ml: "റെയിൽവേ സ്റ്റേഷൻ എക്സിറ്റിൽ 'ഓട്ടോ വേണോ ഹോട്ടൽ വേണോ' എന്ന് ചോദിച്ചു വരുന്ന ബ്രോക്കർമാരെ പൂർണ്ണമായും അവഗണിക്കുക. നേരിട്ട് മെട്രോ സ്റ്റേഷനിലേക്ക് നടക്കുക (ലഖ്‌നൗവിൽ ചാർബാഗ് മെട്രോ നേരിട്ട് പ്ലാറ്റ്‌ഫോമിന് അടുത്താണ്). അല്ലെങ്കിൽ മൊബൈലിൽ Rapido / Uber ഓട്ടോ ബുക്ക് ചെയ്യുക, അല്ലെങ്കിൽ നമ്മുടെ വോളണ്ടിയറുടെ ഫോൺ നമ്പർ കാണിച്ച് സംസാരിക്കുക.",
      en: "Firmly ignore touts shouting 'hotel/cab' inside train platforms. Walk straight to the official pre-paid booth or direct Metro station, or use Rapido/Uber. Never take an unregistered auto outside."
    }
  };

  function askCompanion(topic) {
    const resp = COMPANION_RESPONSES[topic];
    if (!resp || !companionChatBody) return;

    const answerText = currentLang === 'ml' ? resp.ml : resp.en;

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-friend';
    bubble.style.marginTop = '10px';
    bubble.style.borderLeft = '4px solid var(--accent-gold)';
    bubble.innerHTML = `
      <strong>അഞ്ജലി പറയുന്നു:</strong>
      <p style="margin-top:4px;">${answerText}</p>
      <button class="btn-speak-companion" onclick="window.KoottuApp.speakCompanionText('${encodeURIComponent(answerText)}')">
        🔊 ഈ മറുപടി കേൾക്കൂ (Listen Voice)
      </button>
    `;

    companionChatBody.appendChild(bubble);
    companionChatBody.scrollTop = companionChatBody.scrollHeight;

    // Automatically speak out softly to reassure user
    speakCompanionText(encodeURIComponent(answerText));
  }

  function speakCompanionText(customTextEncoded) {
    let textToSpeak = "";
    if (customTextEncoded) {
      textToSpeak = decodeURIComponent(customTextEncoded);
    } else {
      textToSpeak = currentLang === 'ml'
        ? "നമസ്കാരം! ഞാൻ അഞ്ജലി. നിങ്ങളുടെ സ്വന്തം മലയാളി കൂട്ടുകാരി. കേരളത്തിൽ നിന്ന് ദൂരദേശങ്ങളിലേക്ക് ആദ്യമായി പോകുമ്പോൾ പേടിയും പരിഭ്രമവും ഉണ്ടാകുന്നത് സ്വാഭാവികമാണ്. ഒട്ടും പേടിക്കണ്ട, ഞാൻ കൂടെയുണ്ട്."
        : "Hello! I am Anjali, your friendly Malayali travel companion. Please don't be scared traveling far for your interview. We are right here with you.";
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = currentLang === 'ml' ? 'ml-IN' : 'en-IN';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      showToast(currentLang === 'ml' ? 'അഞ്ജലി സംസാരിക്കുന്നു...' : 'Anjali is speaking...');
    }
  }

  // --- Play Host Voice Note Audio Greeting ---
  function playHostVoiceNote(hostId) {
    const host = volunteers.find(v => v.id === hostId);
    if (!host) return;

    const hostName = currentLang === 'ml' && host.nameMl ? host.nameMl : host.name;
    const voiceText = currentLang === 'ml'
      ? `നമസ്കാരം! ഞാൻ ${hostName}. ${host.city}-ൽ എത്തിയാൽ ഒട്ടും പേടിക്കണ്ട. ചാർബാഗ് റെയിൽവേ സ്റ്റേഷനിൽ നിന്ന് മെട്രോ കയറി വന്നാൽ മതി. റൂമിൽ സൗകര്യങ്ങൾ ഉണ്ട്, ഭക്ഷണം ഞങ്ങൾ തരാം. ധൈര്യമായി വാ!`
      : `Hello! I am ${hostName}. Welcome to ${host.city}. Please do not worry. Call me once you reach the railway station, and we will guide you safely. Wishing you the best for your interview!`;

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(voiceText);
      utterance.lang = currentLang === 'ml' ? 'ml-IN' : 'en-IN';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
      showToast(currentLang === 'ml' ? `${hostName} സംസാരിക്കുന്നു...` : `Playing voice greeting from ${hostName}...`);
    } else {
      showToast(voiceText);
    }
  }

  // Expose to window for inline onclick handlers
  window.KoottuApp = {
    openContactModal,
    openPostRequestModal,
    openVolunteerModal,
    openSosModal,
    openOwnerModal,
    closeAllModals,
    copyMessageTemplate,
    respondToCandidate,
    speakHindiPhrase,
    switchTab,
    toggleLiveLocation,
    setViewMode,
    toggleCompanionChat,
    askCompanion,
    speakCompanionText,
    playHostVoiceNote
  };

  // Run on load
  document.addEventListener('DOMContentLoaded', init);
})();
