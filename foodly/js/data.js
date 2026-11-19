// ===== FOODLY — RETSEPTLAR MA'LUMOTLARI =====

const CATEGORIES = [
  { id: 'all', name: 'Barchasi', emoji: '🍽️' },
  { id: 'milliy', name: 'Milliy taomlar', emoji: '🍲' },
  { id: 'salat', name: 'Salatlar', emoji: '🥗' },
  { id: 'fastfood', name: 'Fast Food', emoji: '🍔' },
  { id: 'desert', name: 'Desertlar', emoji: '🍰' },
  { id: 'ichimlik', name: 'Ichimliklar', emoji: '🥤' },
  { id: 'nonushta', name: 'Nonushta', emoji: '🍳' },
  { id: 'tushlik', name: 'Tushlik', emoji: '🍛' },
  { id: 'kechki', name: 'Kechki ovqat', emoji: '🌙' },
  { id: 'soglom', name: 'Sog\'lom ovqatlar', emoji: '🥑' },
  { id: 'shorva', name: 'Sho\'rvalar', emoji: '🍜' },
  { id: 'pishiriq', name: 'Pishiriqlar', emoji: '🥐' }
];

const RECIPES = [
  // ===== MILLIY TAOMLAR (5) =====
  {
    id: 1,
    title: 'Osh (Palov)',
    desc: "O'zbek milliy taomlarining shohi — mazali va to'yimli palov.",
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80',
    category: 'milliy',
    time: 90,
    cookTime: 60,
    servings: 6,
    rating: 4.9,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Guruch', amount: 500, unit: 'g' },
      { name: 'Qo\'zi go\'shti', amount: 600, unit: 'g' },
      { name: 'Sabzi', amount: 500, unit: 'g' },
      { name: 'Piyoz', amount: 300, unit: 'g' },
      { name: 'O\'simlik yog\'i', amount: 150, unit: 'ml' },
      { name: 'Zira', amount: 1, unit: 'ch.q.' },
      { name: 'Tuz', amount: 2, unit: 'ch.q.' }
    ],
    steps: [
      "Qozonni qizdirib, yog'ni quying va go'shtni qovuring.",
      "Piyozni qo'shib, oltin rangga kirguncha qovuring.",
      "Sabzi qo'shib, 10 daqiqa qovuring.",
      "Suv quyib, 40 daqiqa qaynating.",
      "Guruchni yuvib qo'shing va suvini torting.",
      "Qopqoq yopib, 20 daqiqa dimlang.",
      "Tayyor palovni aralashtirib, dasturxonga torting."
    ],
    tips: "Guruchni 30 daqiqa oldin suvga solib qo'ysangiz, donalar chiroyli ochiladi."
  },
  {
    id: 2,
    title: 'Somsa',
    desc: "Tandirda pishirilgan mazali va sersuv somsa.",
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
    category: 'milliy',
    time: 120,
    cookTime: 40,
    servings: 4,
    rating: 4.8,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Un', amount: 500, unit: 'g' },
      { name: 'Go\'sht', amount: 400, unit: 'g' },
      { name: 'Piyoz', amount: 300, unit: 'g' },
      { name: 'Suv', amount: 200, unit: 'ml' },
      { name: 'Achitqi', amount: 7, unit: 'g' },
      { name: 'Tuz', amount: 1, unit: 'ch.q.' },
      { name: 'Zira', amount: 0.5, unit: 'ch.q.' }
    ],
    steps: [
      "Xamir uchun un, suv, achitqi va tuzni aralashtirib, 1 soat dam bering.",
      "Go'sht va piyozni mayda to'g'rab, zira va tuz qo'shing.",
      "Xamirni yupqa yoyib, kvadrat shaklda kesing.",
      "Markazga go'sht aralashmasini qo'ying.",
      "Burchaklarini uchburchak shaklda yig'ing.",
      "Tandir yoki duxovkada 220°C da 35-40 daqiqa pishiring."
    ],
    tips: "Piyozni ko'p qo'shsangiz, somsa sersuv bo'ladi."
  },
  {
    id: 3,
    title: 'Lagman',
    desc: "Qo'lda cho'zilgan ugra bilan tayyorlangan mazali lagman.",
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
    category: 'milliy',
    time: 80,
    cookTime: 40,
    servings: 4,
    rating: 4.7,
    difficulty: "Qiyin",
    ingredients: [
      { name: 'Un', amount: 400, unit: 'g' },
      { name: 'Go\'sht', amount: 500, unit: 'g' },
      { name: 'Sabzi', amount: 200, unit: 'g' },
      { name: 'Bulg\'or qalampiri', amount: 150, unit: 'g' },
      { name: 'Pomidor', amount: 200, unit: 'g' },
      { name: 'Piyoz', amount: 150, unit: 'g' },
      { name: 'Ziravorlar', amount: 1, unit: 'ch.q.' }
    ],
    steps: [
      "Xamirni qorib, 30 daqiqa dam bering.",
      "Go'sht va sabzavotlarni qovurib, sous tayyorlang.",
      "Xamirni qo'lda cho'zib, ugra shaklida kesing.",
      "Ugrani qaynoq suvda 3-4 daqiqa qaynatib oling.",
      "Sous bilan aralashtirib, dasturxonga torting."
    ],
    tips: "Xamirni cho'zishda sabr qiling — shunda ugra ingichka chiqadi."
  },
  {
    id: 4,
    title: 'Manti',
    desc: "Bug'da pishirilgan, sersuv va mazali manti.",
    image: 'https://images.unsplash.com/photo-1533630018500-3b2a8e8e6e5e?w=800&q=80',
    category: 'milliy',
    time: 90,
    cookTime: 45,
    servings: 4,
    rating: 4.8,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Un', amount: 500, unit: 'g' },
      { name: 'Go\'sht', amount: 500, unit: 'g' },
      { name: 'Piyoz', amount: 400, unit: 'g' },
      { name: 'Suv', amount: 200, unit: 'ml' },
      { name: 'Tuz', amount: 1, unit: 'ch.q.' },
      { name: 'Qora murch', amount: 0.5, unit: 'ch.q.' }
    ],
    steps: [
      "Xamirni qorib, 30 daqiqa dam bering.",
      "Go'sht va piyozni mayda to'g'rab, ziravorlar qo'shing.",
      "Xamirni yupqa yoyib, kvadratchalar kesing.",
      "Markazga go'sht qo'yib, konvert shaklida yig'ing.",
      "Mantiqasqichda 40-45 daqiqa bug'da pishiring."
    ],
    tips: "Piyozni maydaroq to'g'rab, go'shtga ko'p qo'shsangiz, manti sersuv bo'ladi."
  },
  {
    id: 5,
    title: 'Shashlik',
    desc: "Ko'mirda pishirilgan mazali va xushbo'y shashlik.",
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
    category: 'milliy',
    time: 60,
    cookTime: 25,
    servings: 4,
    rating: 4.9,
    difficulty: "Oson",
    ingredients: [
      { name: 'Qo\'zi go\'shti', amount: 800, unit: 'g' },
      { name: 'Piyoz', amount: 300, unit: 'g' },
      { name: 'Zira', amount: 1, unit: 'ch.q.' },
      { name: 'Tuz', amount: 1.5, unit: 'ch.q.' },
      { name: 'Sirka', amount: 50, unit: 'ml' }
    ],
    steps: [
      "Go'shtni bo'laklarga bo'lib, piyoz va ziravorlar bilan marinadlang.",
      "Kamida 30 daqiqa muzlatgichda saqlang.",
      "Go'shtni sixga terib oling.",
      "Ko'mirda 20-25 daqiqa pishiring, vaqti-vaqti bilan aylantiring."
    ],
    tips: "Marinadga bir oz mineral suv qo'shsangiz, shashlik yumshoq bo'ladi."
  },

  // ===== SALATLAR (5) =====
  {
    id: 6,
    title: 'Sezar salati',
    desc: "Klassik Sezar salati — tovuq, parmezan va kruton bilan.",
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&q=80',
    category: 'salat',
    time: 20,
    cookTime: 15,
    servings: 2,
    rating: 4.7,
    difficulty: "Oson",
    ingredients: [
      { name: 'Tovuq filesi', amount: 300, unit: 'g' },
      { name: 'Salat bargi', amount: 200, unit: 'g' },
      { name: 'Parmezan', amount: 50, unit: 'g' },
      { name: 'Kruton', amount: 100, unit: 'g' },
      { name: 'Sezar sousi', amount: 80, unit: 'ml' }
    ],
    steps: [
      "Tovuqni qovurib, bo'laklarga bo'ling.",
      "Salat barglarini yuvib, quriting.",
      "Barcha masalliqlarni aralashtiring.",
      "Sousni quyib, parmezan sepib torting."
    ],
    tips: "Krutonni uy sharoitida tayyorlasangiz, ta'mi yanada yaxshi bo'ladi."
  },
  {
    id: 7,
    title: 'Achichuq salat',
    desc: "Pomidor va piyozdan tayyorlangan klassik o'zbek salati.",
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    category: 'salat',
    time: 10,
    cookTime: 0,
    servings: 3,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Pomidor', amount: 400, unit: 'g' },
      { name: 'Piyoz', amount: 200, unit: 'g' },
      { name: 'Ko\'k piyoz', amount: 50, unit: 'g' },
      { name: 'Tuz', amount: 0.5, unit: 'ch.q.' },
      { name: 'Qora murch', amount: 0.25, unit: 'ch.q.' }
    ],
    steps: [
      "Pomidor va piyozni yupqa halqalar shaklida kesing.",
      "Ko'k piyozni mayda to'g'rang.",
      "Barcha masalliqlarni aralashtiring.",
      "Tuz va murch qo'shib, dasturxonga torting."
    ],
    tips: "Piyozni 5 daqiqa sovuq suvda saqlasangiz, achchiqligi kamayadi."
  },
  {
    id: 8,
    title: 'Yunon salati',
    desc: "Feta pishlog'i, zaytun va yangi sabzavotlar bilan salat.",
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    category: 'salat',
    time: 15,
    cookTime: 0,
    servings: 2,
    rating: 4.8,
    difficulty: "Oson",
    ingredients: [
      { name: 'Pomidor', amount: 200, unit: 'g' },
      { name: 'Bodring', amount: 150, unit: 'g' },
      { name: 'Feta pishloq', amount: 100, unit: 'g' },
      { name: 'Zaytun', amount: 80, unit: 'g' },
      { name: 'Zaytun yog\'i', amount: 30, unit: 'ml' }
    ],
    steps: [
      "Sabzavotlarni bo'laklarga bo'ling.",
      "Zaytun va fetani qo'shing.",
      "Zaytun yog'i va ziravorlar bilan aralashtiring."
    ],
    tips: "Yangi uzilgan oregano qo'shsangiz, ta'mi yanada boy bo'ladi."
  },
  {
    id: 9,
    title: 'Tovuqli salat',
    desc: "Qovurilgan tovuq, yangi sabzavotlar va yong'oq bilan.",
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
    category: 'salat',
    time: 25,
    cookTime: 15,
    servings: 2,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Tovuq filesi', amount: 250, unit: 'g' },
      { name: 'Bodring', amount: 150, unit: 'g' },
      { name: 'Pomidor', amount: 150, unit: 'g' },
      { name: 'Yong\'oq', amount: 50, unit: 'g' },
      { name: 'Limon sharbati', amount: 20, unit: 'ml' }
    ],
    steps: [
      "Tovuqni qovurib, bo'laklarga bo'ling.",
      "Sabzavotlarni to'g'rang.",
      "Yong'oqni maydalang.",
      "Barchasini aralashtirib, limon sharbati quying."
    ],
    tips: "Tovuqni ziravorlar bilan marinadlasangiz, xushbo'y bo'ladi."
  },
  {
    id: 10,
    title: 'Olivye salati',
    desc: "An'anaviy yangi yil salati — kartoshka, kolbasa va tuxum bilan.",
    image: 'https://images.unsplash.com/photo-1568603662180-8b4b0e1c1c1c?w=800&q=80',
    category: 'salat',
    time: 40,
    cookTime: 25,
    servings: 4,
    rating: 4.7,
    difficulty: "Oson",
    ingredients: [
      { name: 'Kartoshka', amount: 300, unit: 'g' },
      { name: 'Sabzi', amount: 150, unit: 'g' },
      { name: 'Tuxum', amount: 3, unit: 'dona' },
      { name: 'Kolbasa', amount: 200, unit: 'g' },
      { name: 'No\'xat', amount: 100, unit: 'g' },
      { name: 'Mayonez', amount: 100, unit: 'g' }
    ],
    steps: [
      "Kartoshka, sabzi va tuxumni qaynatib oling.",
      "Barchasini mayda kubik shaklida kesing.",
      "No'xat va kolbasani qo'shing.",
      "Mayonez bilan aralashtiring."
    ],
    tips: "Mayonezni uy sharoitida tayyorlasangiz, tabiiy ta'm bo'ladi."
  },

  // ===== FAST FOOD (5) =====
  {
    id: 11,
    title: 'Klassik burger',
    desc: "Yumshoq bulochka, sersuv kotlet va yangi sabzavotlar bilan.",
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    category: 'fastfood',
    time: 30,
    cookTime: 15,
    servings: 2,
    rating: 4.8,
    difficulty: "Oson",
    ingredients: [
      { name: 'Burger bulochka', amount: 2, unit: 'dona' },
      { name: 'Mol go\'sht kotleti', amount: 200, unit: 'g' },
      { name: 'Chedar pishloq', amount: 2, unit: 'tilim' },
      { name: 'Salat bargi', amount: 4, unit: 'dona' },
      { name: 'Pomidor', amount: 100, unit: 'g' },
      { name: 'Burger sousi', amount: 40, unit: 'ml' }
    ],
    steps: [
      "Kotletni qovurib, ustiga pishloq qo'ying.",
      "Bulochkani yarim kesib, qovuring.",
      "Pastki qatlamga sous surting.",
      "Salat, pomidor, kotlet va pishloqni joylashtiring.",
      "Yuqori bulochkani yopib, torting."
    ],
    tips: "Kotletni qovurishdan oldin xona haroratida 10 daqiqa ushlab turing."
  },
  {
    id: 12,
    title: 'Fri kartoshka',
    desc: "Tashqi tomondan xrustyashka, ichi yumshoq fri kartoshka.",
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    category: 'fastfood',
    time: 25,
    cookTime: 15,
    servings: 2,
    rating: 4.5,
    difficulty: "Oson",
    ingredients: [
      { name: 'Kartoshka', amount: 500, unit: 'g' },
      { name: 'O\'simlik yog\'i', amount: 500, unit: 'ml' },
      { name: 'Tuz', amount: 1, unit: 'ch.q.' }
    ],
    steps: [
      "Kartoshkani uzun bo'laklarga bo'ling.",
      "Sovuq suvda 10 daqiqa saqlang.",
      "Quritib, qaynoq yog'da qovuring.",
      "Tuz sepib, dasturxonga torting."
    ],
    tips: "Kartoshkani ikki marta qovursangiz, xrustyashka bo'ladi."
  },
  {
    id: 13,
    title: 'Pitsa Margarita',
    desc: "Klassik italyan pitsasi — pomidor, mozzarella va rayhon.",
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    category: 'fastfood',
    time: 40,
    cookTime: 20,
    servings: 4,
    rating: 4.7,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Pitsa xamiri', amount: 400, unit: 'g' },
      { name: 'Pomidor sousi', amount: 150, unit: 'ml' },
      { name: 'Mozzarella', amount: 200, unit: 'g' },
      { name: 'Rayhon', amount: 10, unit: 'g' },
      { name: 'Zaytun yog\'i', amount: 20, unit: 'ml' }
    ],
    steps: [
      "Xamirni yoyib, sous surting.",
      "Mozzarellani joylashtiring.",
      "220°C da 15-20 daqiqa pishiring.",
      "Rayhon va zaytun yog'i sepib torting."
    ],
    tips: "Pitsa toshida pishirsangiz, tagi xrustyashka bo'ladi."
  },
  {
    id: 14,
    title: 'Hot-dog',
    desc: "Yumshoq bulochka va sersuv sosiska bilan klassik hot-dog.",
    image: 'https://images.unsplash.com/photo-1612392061787-2d078b3e573c?w=800&q=80',
    category: 'fastfood',
    time: 15,
    cookTime: 8,
    servings: 2,
    rating: 4.4,
    difficulty: "Oson",
    ingredients: [
      { name: 'Hot-dog bulochka', amount: 2, unit: 'dona' },
      { name: 'Sosiska', amount: 2, unit: 'dona' },
      { name: 'Ketchup', amount: 30, unit: 'ml' },
      { name: 'Xantal', amount: 20, unit: 'ml' },
      { name: 'Marinadlangan bodring', amount: 30, unit: 'g' }
    ],
    steps: [
      "Sosiskani qaynatib yoki qovurib oling.",
      "Bulochkani yarim kesing.",
      "Sosiska, ketchup, xantal va bodringni joylashtiring."
    ],
    tips: "Bulochkani ichidan ozgina qovursangiz, yumshoqroq bo'ladi."
  },
  {
    id: 15,
    title: 'Tovuqli naggets',
    desc: "Tashqi tomondan xrustyashka, ichi yumshoq tovuq naggetslari.",
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    category: 'fastfood',
    time: 30,
    cookTime: 15,
    servings: 3,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Tovuq filesi', amount: 400, unit: 'g' },
      { name: 'Un', amount: 100, unit: 'g' },
      { name: 'Tuxum', amount: 2, unit: 'dona' },
      { name: 'Suxari', amount: 100, unit: 'g' },
      { name: 'Ziravorlar', amount: 1, unit: 'ch.q.' }
    ],
    steps: [
      "Tovuqni bo'laklarga bo'lib, ziravorlar bilan marinadlang.",
      "Un, tuxum va suxariga botirib chiqing.",
      "Qaynoq yog'da oltin rangga kirguncha qovuring."
    ],
    tips: "Suxari o'rniga maydalangan yong'oq ishlatsangiz, ta'mi boy bo'ladi."
  },

  // ===== DESERTLAR (5) =====
  {
    id: 16,
    title: 'Shokoladli tort',
    desc: "Yumshoq va shokoladli, har bir luqmada zavq beruvchi tort.",
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
    category: 'desert',
    time: 90,
    cookTime: 35,
    servings: 8,
    rating: 4.9,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Un', amount: 250, unit: 'g' },
      { name: 'Shakar', amount: 300, unit: 'g' },
      { name: 'Kakao', amount: 80, unit: 'g' },
      { name: 'Tuxum', amount: 4, unit: 'dona' },
      { name: 'Sut', amount: 200, unit: 'ml' },
      { name: 'O\'simlik yog\'i', amount: 120, unit: 'ml' }
    ],
    steps: [
      "Quruq masalliqlarni aralashtiring.",
      "Tuxum va shakarni ko'pirtiring.",
      "Sut va yog'ni qo'shing.",
      "Un aralashmasini qo'shib, aralashtiring.",
      "180°C da 30-35 daqiqa pishiring.",
      "Sovutib, shokoladli krem bilan qoplang."
    ],
    tips: "Pishirishdan oldin shakarni yaxshilab ko'pirtirsangiz, tort yumshoq bo'ladi."
  },
  {
    id: 17,
    title: 'Tiramisu',
    desc: "Italyancha klassik desert — kofe va mascarpone bilan.",
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
    category: 'desert',
    time: 40,
    cookTime: 0,
    servings: 6,
    rating: 4.9,
    difficulty: "O'rta",
    ingredients: [
      { name: 'Savoyardi pechenye', amount: 200, unit: 'g' },
      { name: 'Mascarpone', amount: 300, unit: 'g' },
      { name: 'Tuxum sarig\'i', amount: 3, unit: 'dona' },
      { name: 'Shakar', amount: 100, unit: 'g' },
      { name: 'Kofe', amount: 200, unit: 'ml' },
      { name: 'Kakao', amount: 20, unit: 'g' }
    ],
    steps: [
      "Tuxum sarig'i va shakarni ko'pirtiring.",
      "Mascarpone qo'shib, aralashtiring.",
      "Pechenyeni kofega botirib, idishga joylashtiring.",
      "Kremni quyib, yana pechenye qatlamini qo'ying.",
      "Sovutgichda 4 soat saqlang.",
      "Kakao sepib torting."
    ],
    tips: "Tiramisu bir kechada sovutgichda tursa, ta'mi yanada yaxshi bo'ladi."
  },
  {
    id: 18,
    title: 'Cheesecake',
    desc: "Yumshoq va kremli Nyu-York uslubidagi cheesecake.",
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80',
    category: 'desert',
    time: 120,
    cookTime: 60,
    servings: 8,
    rating: 4.8,
    difficulty: "Qiyin",
    ingredients: [
      { name: 'Pechenye', amount: 200, unit: 'g' },
      { name: 'Sariyog\'', amount: 100, unit: 'g' },
      { name: 'Krem pishloq', amount: 500, unit: 'g' },
      { name: 'Shakar', amount: 150, unit: 'g' },
      { name: 'Tuxum', amount: 3, unit: 'dona' },
      { name: 'Qaymoq', amount: 100, unit: 'ml' }
    ],
    steps: [
      "Pechenyeni maydalab, sariyog' bilan aralashtiring.",
      "Idishga bosib, asos tayyorlang.",
      "Krem pishloq va shakarni ko'pirtiring.",
      "Tuxum va qaymoqni qo'shing.",
      "160°C da 60 daqiqa pishiring.",
      "Sovutib, sovutgichda 4 soat saqlang."
    ],
    tips: "Pishirgandan keyin duxovkada sovutib qo'ysangiz, yorilib ketmaydi."
  },
  {
    id: 19,
    title: 'Baklava',
    desc: "Sharqona shirinlik — yong'oq va asal bilan.",
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
    category: 'desert',
    time: 90,
    cookTime: 45,
    servings: 12,
    rating: 4.7,
    difficulty: "Qiyin",
    ingredients: [
      { name: 'Filo xamiri', amount: 300, unit: 'g' },
      { name: 'Yong\'oq', amount: 200, unit: 'g' },
      { name: 'Sariyog\'', amount: 150, unit: 'g' },
      { name: 'Asal', amount: 150, unit: 'ml' },
      { name: 'Shakar', amount: 100, unit: 'g' }
    ],
    steps: [
      "Yong'oqni maydalang.",
      "Filo qatlamlarini sariyog' bilan surting.",
      "Yong'oq sepib, qatlamlarni yig'ing.",
      "Kesib, 180°C da 45 daqiqa pishiring.",
      "Asal va shakar siropini quying."
    ],
    tips: "Har bir qatlamni alohida sariyog'lasangiz, baklava xrustyashka bo'ladi."
  },
  {
    id: 20,
    title: 'Muzqaymoq',
    desc: "Uy sharoitida tayyorlangan tabiiy muzqaymoq.",
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80',
    category: 'desert',
    time: 240,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Qaymoq', amount: 300, unit: 'ml' },
      { name: 'Sut', amount: 200, unit: 'ml' },
      { name: 'Shakar', amount: 100, unit: 'g' },
      { name: 'Vanil', amount: 1, unit: 'ch.q.' }
    ],
    steps: [
      "Qaymoq va shakarni ko'pirtiring.",
      "Sut va vanil qo'shing.",
      "Aralashtirib, muzlatgichga qo'ying.",
      "Har 30 daqiqada aralashtirib turing.",
      "4 soatdan keyin tayyor."
    ],
    tips: "Yangi mevalar qo'shsangiz, tabiiy ta'mli muzqaymoq bo'ladi."
  },

  // ===== ICHIMLIKLAR (5) =====
  {
    id: 21,
    title: 'Yashil choy',
    desc: "Tetiklantiruvchi va foydali yashil choy.",
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800&q=80',
    category: 'ichimlik',
    time: 10,
    cookTime: 5,
    servings: 2,
    rating: 4.7,
    difficulty: "Oson",
    ingredients: [
      { name: 'Yashil choy', amount: 2, unit: 'ch.q.' },
      { name: 'Suv', amount: 500, unit: 'ml' },
      { name: 'Asal', amount: 20, unit: 'g' }
    ],
    steps: [
      "Suvni 80°C ga qizdiring.",
      "Choy barglarini qo'shing.",
      "3-5 daqiqa damlang.",
      "Asal qo'shib, torting."
    ],
    tips: "Choyni qaynoq suvda damlamang — foydali xususiyatlari yo'qoladi."
  },
  {
    id: 22,
    title: 'Limonad',
    desc: "Yangi limon va yalpiz bilan tetiklantiruvchi ichimlik.",
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&q=80',
    category: 'ichimlik',
    time: 10,
    cookTime: 0,
    servings: 4,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Limon', amount: 3, unit: 'dona' },
      { name: 'Suv', amount: 1, unit: 'l' },
      { name: 'Shakar', amount: 80, unit: 'g' },
      { name: 'Yalpiz', amount: 10, unit: 'g' }
    ],
    steps: [
      "Limonlarni siqib, sharbatini oling.",
      "Shakar va suvni aralashtiring.",
      "Limon sharbati va yalpizni qo'shing.",
      "Muz bilan sovutib torting."
    ],
    tips: "Limon po'stlog'ini ham qo'shsangiz, xushbo'y bo'ladi."
  },
  {
    id: 23,
    title: 'Kofe latte',
    desc: "Yumshoq sutli ko'pik bilan klassik latte.",
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800&q=80',
    category: 'ichimlik',
    time: 10,
    cookTime: 5,
    servings: 1,
    rating: 4.8,
    difficulty: "Oson",
    ingredients: [
      { name: 'Espresso', amount: 30, unit: 'ml' },
      { name: 'Sut', amount: 200, unit: 'ml' }
    ],
    steps: [
      "Espresso tayyorlang.",
      "Sutni bug'lang.",
      "Sutni kofega quying.",
      "Ko'pik bilan bezang."
    ],
    tips: "Sutni 65°C dan oshirmang — ta'mi buziladi."
  },
  {
    id: 24,
    title: 'Smuzi',
    desc: "Meva va sabzavotlardan tayyorlangan foydali smuzi.",
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80',
    category: 'ichimlik',
    time: 5,
    cookTime: 0,
    servings: 1,
    rating: 4.5,
    difficulty: "Oson",
    ingredients: [
      { name: 'Banan', amount: 1, unit: 'dona' },
      { name: 'Qulupnay', amount: 100, unit: 'g' },
      { name: 'Sut', amount: 200, unit: 'ml' },
      { name: 'Asal', amount: 10, unit: 'g' }
    ],
    steps: [
      "Barcha masalliqlarni blenderga soling.",
      "Silliq bo'lguncha aralashtiring.",
      "Stakanga quyib torting."
    ],
    tips: "Muzlatilgan mevalar ishlatsangiz, sovuq smuzi bo'ladi."
  },
  {
    id: 25,
    title: 'Ayran',
    desc: "An'anaviy sovuq sutli ichimlik.",
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=800&q=80',
    category: 'ichimlik',
    time: 5,
    cookTime: 0,
    servings: 2,
    rating: 4.4,
    difficulty: "Oson",
    ingredients: [
      { name: 'Qatiq', amount: 300, unit: 'ml' },
      { name: 'Suv', amount: 200, unit: 'ml' },
      { name: 'Tuz', amount: 0.5, unit: 'ch.q.' }
    ],
    steps: [
      "Qatiq va suvni aralashtiring.",
      "Tuz qo'shing.",
      "Yaxshilab ko'pirtiring."
    ],
    tips: "Yalpiz yoki bodring qo'shsangiz, ta'mi yanada yaxshi bo'ladi."
  },

  // ===== SOG'LOM OVQATLAR (5) =====
  {
    id: 26,
    title: 'Quinoa salati',
    desc: "Foydali quinoa, sabzavot va limonli sous bilan salat.",
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    category: 'soglom',
    time: 25,
    cookTime: 15,
    servings: 2,
    rating: 4.6,
    difficulty: "Oson",
    ingredients: [
      { name: 'Quinoa', amount: 150, unit: 'g' },
      { name: 'Bodring', amount: 100, unit: 'g' },
      { name: 'Pomidor', amount: 100, unit: 'g' },
      { name: 'Limon', amount: 1, unit: 'dona' },
      { name: 'Zaytun yog\'i', amount: 20, unit: 'ml' }
    ],
    steps: [
      "Quinoani qaynatib oling.",
      "Sabzavotlarni to'g'rang.",
      "Limon sharbati va zaytun yog'i bilan aralashtiring."
    ],
    tips: "Quinoani yuvib, 15 daqiqa qaynatish yetarli."
  },
  {
    id: 27,
    title: 'Tovuqli koktail',
    desc: "Yengil tovuq va sabzavotlardan tayyorlangan foydali taom.",
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    category: 'soglom',
    time: 25,
    cookTime: 15,
    servings: 2,
    rating: 4.7,
    difficulty: "Oson",
    ingredients: [
      { name: 'Tovuq filesi', amount: 250, unit: 'g' },
      { name: 'Bodring', amount: 100, unit: 'g' },
      { name: 'Bulg\'or qalampiri', amount: 100, unit: 'g' },
      { name: 'Zaytun yog\'i', amount: 15, unit: 'ml' }
    ],
    steps: [
      "Tovuqni qovurib, bo'laklarga bo'ling.",
      "Sabzavotlarni to'g'rang.",
      "Barchasini aralashtiring."
    ],
    tips: "Yangi ko'katlar qo'shsangiz, vitaminlar ko'payadi."
  },
  {
    id: 28,
    title: 'Avokado tost',
    desc: "Foydali avokado va tuxum bilan nonushta tosti.",
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
    category: 'soglom',
    time: 10,
    cookTime: 5,
    servings: 1,
    rating: 4.8,
    difficulty: "Oson",
    ingredients: [
      { name: 'Non', amount: 2, unit: 'tilim' },
      { name: 'Avokado', amount: 1, unit: 'dona' },
      { name: 'Tuxum', amount: 1, unit: 'dona' },
      { name: 'Limon sharbati', amount: 5, unit: 'ml' }
    ],
    steps: [
      "Nonni qovuring.",
      "Avokadoni ezib, limon sharbati qo'shing.",
      "Tuxumni qaynatib, ustiga qo'ying."
    ],
    tips: "Avokadoga tuz va qalampir qo'shsangiz, ta'mi yaxshilanadi."
  },
  {
    id: 29,
    title: 'Sabzavotli sho\'rva',
    desc: "Yengil va foydali sabzavotli sho'rva.",
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    category: 'soglom',
    time: 35,
    cookTime: 25,
    servings: 4,
    rating: 4.5,
    difficulty: "Oson",
    ingredients: [
      { name: 'Sabzi', amount: 200, unit: 'g' },
      { name: 'Kartoshka', amount: 200, unit: 'g' },
      { name: 'Piyoz', amount: 100, unit: 'g' },
      { name: 'Suv', amount: 1, unit: 'l' },
      { name: 'Ko\'katlar', amount: 30, unit: 'g' }
    ],
    steps: [
      "Sabzavotlarni to'g'rang.",
      "Suvga solib, 25 daqiqa qaynatib oling.",
      "Tuz va ziravorlar qo'shing.",
      "Ko'katlar sepib torting."
    ],
    tips: "Sabzavotlarni juda uzoq qaynatmang — vitaminlar yo'qoladi."
  },
  {
    id: 30,
    title: 'Lazanya',
    desc: "Italyancha klassik lazanya — go'sht va pishloq bilan.",
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80',
    category: 'soglom',
    time: 70,
    cookTime: 40,
    servings: 6,
    rating: 4.7,
    difficulty: "Qiyin",
    ingredients: [
      { name: 'Lazanya qatlami', amount: 200, unit: 'g' },
      { name: 'Go\'sht', amount: 400, unit: 'g' },
      { name: 'Pomidor sousi', amount: 300, unit: 'ml' },
      { name: 'Mozzarella', amount: 200, unit: 'g' },
      { name: 'Sut', amount: 200, unit: 'ml' }
    ],
    steps: [
      "Go'shtni qovurib, pomidor sousini qo'shing.",
      "Sutdan bechamel sous tayyorlang.",
      "Qatlamlarni almashtirib joylashtiring.",
      "180°C da 30-40 daqiqa pishiring."
    ],
    tips: "Pishirishdan oldin 10 daqiqa dam bering — lazanya yaxshiroq kesiladi."
  }
];