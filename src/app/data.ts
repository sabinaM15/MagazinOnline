import { Address } from "./models/address.model";
import { Product } from "./models/product.model";

export const sample_products: Product[] =  [
  {
    id: "0",
    name: "Apple iPhone 13",
    price: 1549,
    address: [
      {
        id: 1,
        code: "HD",
        street: "Hillside Drive",
        num: 266,
        city: "Charlestown"
      },
      {
        id: 4,
        code: "BD",
        street: "Benedum Drive",
        num: 2575,
        city: "New York"
      },
      {
        id: 5,
        code: "RR",
        street: "Rinehart Road",
        num: 127,
        city: "Miami"
      },
    ],
    stock: 94,
    description: "An apple mobile which is nothing like apple",
    comments: "Fast, overall a solid phone. The only thing I would decry is the battery health is 88%, not the 90 or above from the testing sheet. Wouldn't be a huge issue except that I use the phone a bunch for work for Spotify and rideshare apps.",
    rating: 4.69,
    img: "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon_APPLE_iPhone_13_mini_5G_128GB_Pink_4_.jpg",
    favorite: true
  },
  {
    id: "1",
    name: "Dr. Martens Women's 1460w Originals",
    price: 145.62,
    address:[
      {
        id: 0,
        code: "SS",
        street: "Short Street",
        num: 1523,
        city: "Austin"
      },
      {
        id: 6,
        code: "CS",
        street: "Conaway Street",
        num: 3526,
        city: "Columbus"
      },
    ],
    stock: 10,
    description: "Goodyear Welted - the upper and sole are heat-sealed and sewn together, providing more comfort and durability for years to come.",
    comments: "I was tossing between a 9 and 10 and knowing how DMs run rather large, went to purchase a 9, which is my normal shoe size. A 10 would be great for thick socks and insoles but decided to have them all season and have a standard thin sock on. The toe box and width are what they were expected. Kinda stiff at the beginning but they mold to your feet after a while. If you're a halfie, size down (ex: 8.5, go 8)",
    rating: 4.7,
    favorite: false,
    img: "https://m.media-amazon.com/images/I/81uFFsnDooL._AC_UY1000_.jpg"
  },
  {
    id: "2",
    name: "Women's Microfiber Campus Backpack",
    price: 105,
    address:[
      {
        id: 0,
        code: "SS",
        street: "Short Street",
        num: 1523,
        city: "Austin"
      },
      {
        id: 7,
        code: "ED",
        street: "Elkview Drive",
        num: 2582,
        city: "Miami"
      },
      {
        id: 5,
        code: "RR",
        street: "Rinehart Road",
        num: 127,
        city: "Miami"
      },
    ],
    stock: 54,
    description: "The Campus Backpack measures 16 inches high, 11 inches wide, and 8 inch deep with a 3 inch Top handle drop and 32 inch adjustable straps, with a trolley sleeve for smooth travels",
    comments: "I use this backpack for work. Love all of the compartments. Best backpack I’ve ever owned. Light weight! I can fit everything including my laptop, lunch-bag, personal care, and small wallet purse.",
    rating: 4.8,
    favorite: false,
    img: "https://i5.walmartimages.com/asr/35bc3df8-bc11-4f4a-be2c-973aa27fdfe8.d473fdf10a6a3f34308a94f27c4d852f.jpeg"
  },
  {
    id: "3",
    name: "OPI ProSpa Nail and Cuticle Oil To Go",
    price: 50, 
    address:[
      {
      id: 7,
      code: "ED",
      street: "Elkview Drive",
      num: 2582,
      city: "Miami"
    },
    {
      id: 5,
      code: "RR",
      street: "Rinehart Road",
      num: 127,
      city: "Miami"
    },
  ],
    stock: 10,
    description: "Designed to nourish & protect the skin while helping to stop the signs of aging before they start",
    comments: "Such a lovely scent very rosey is great on your cuticles soaks in really well not greasy. High priced though a little cheaper would be good as this is the second one I’ve bought.",
    rating: 4.7,
    favorite: false,
    img: "https://m.media-amazon.com/images/I/51ElGujJLbL._SL1500_.jpg"
  },
  {
    id: "4",
    name: "Fast Wireless Charger",
    price: 13.99,
    address:[
      {
        id: 7,
        code: "ED",
        street: "Elkview Drive",
        num: 2582,
        city: "Miami"
      },
      {
        id: 0,
        code: "SS",
        street: "Short Street",
        num: 1523,
        city: "Austin"
      },
      {
        id: 2,
        code: "HL",
        street: "Huntz Lane",
        num: 1257 ,
        city: "Marlboro"
      },
    ],
    stock: 34,
    description: "Compatible Phone Models: Samsung Galaxy S22,Google Pixel,S10,Huawei,Iphone,Note 10",
    comments: "Good quality. Takes a lot of time to charge 3 minutes for 1% on iPhone 11 but I bought it for overnight charging so That’s not a problem for me. A single day usage based review.",
    rating: 4.69,
    favorite: false,
    img: "https://m.media-amazon.com/images/I/71u0d4PLcML._AC_SL1500_.jpg"
  },
  {
    id: "5",
    name: "Dinosaur Costume, T-Rex with Sound",
    price: 56.79,
    address:[
      {
        id: 6,
        code: "CS",
        street: "Conaway Street",
        num: 3526,
        city: "Columbus"
      },
      {
        id: 0,
        code: "SS",
        street: "Short Street",
        num: 1523,
        city: "Austin"
      },
      {
        id: 5,
        code: "RR",
        street: "Rinehart Road",
        num: 127,
        city: "Miami"
      },
    ],
    stock: 3,
    description: "Long sleeve inflatable jumpsuit with battery operated fan. Fan requires 4 AA batteries, fan instructions included with costume. Batteries available separately. Please read before buying; costumes are not sized the same as apparel, please review the Rubies size chart in images, read recent reviews and Q & A to determine best fit. ",
    comments: "Great costume would have gave it 5 star but as it has no sound have only gave it 4 star daughter still loves it works as it should",
    rating: 3.9,
    favorite: true,
    img: "https://m.media-amazon.com/images/I/81uv7iNvIrL._AC_UY879_.jpg"
  },
  {
    id: "6",
    name: "Pokémon Assorted Cards, 50 Pieces",
    price: 6.49,
    address:[
      {
        id: 4,
        code: "BD",
        street: "Benedum Drive",
        num: 2575,
        city: "New York"
      },
      {
        id: 2,
        code: "HL",
        street: "Huntz Lane",
        num: 1257 ,
        city: "Marlboro"
      },
    ],
    stock: 65,
    description: "50 Pokemon card Collection This lot will include 50 Random Uncommon and Common Pokemon Cards. Perfect way to start or grow a collection! 50 Random Pokemon cards from random sets; these could include cards from any set from the beginning up through the current set. ",
    comments: "I Recieved these today and opened them up, and to my disappointment I go through all the cards and I see the majority are Training Cards, I only found 2 that were not Training and actual Pokemon. But what did I expect for this Price, I do not recommend unless you're seeking Training Cards.",
    rating: 4.4,
    favorite: false,
    img: "https://m.media-amazon.com/images/I/71z1rgxpN4L._AC_SL1000_.jpg"
  },
  {
    id: "7",
    name: "Apple Pencil (2nd Generation), White",
    price: 98.99,
    address:[
      {
        id: 4,
        code: "BD",
        street: "Benedum Drive",
        num: 2575,
        city: "New York"
      },
      {
        id: 0,
        code: "SS",
        street: "Short Street",
        num: 1523,
        city: "Austin"
      },
    ],
    stock: 100,
    description: "It magnetically attaches to iPad mini (6th generation), iPad Pro and iPad Air, charges wirelessly, and lets you change tools with a simple double tap.",
    comments: "Apple Pencil 2 is such an integral part of iPad. The connection is so flawless that it never feel one is accessory. I would recommend buying an Apple Pencil over other cheaper substitutes for an over all seamless experience. Amazon delivered it in just 24 hrs. A must own product for iPad Pro users.",
    rating: 4.69,
    favorite: false,
    img: "https://lcdn.altex.ro/resize/media/catalog/product/m/k/2bd48d28d1c32adea0e55139a4e6434a/mk0c2zm_3_1.jpg"
  },
]

export const sample_addresses: Address[] =  [
  {
    id: 0,
    code: "SS",
    street: "Short Street",
    num: 1523,
    city: "Austin"
  },
  {
    id: 1,
    code: "HD",
    street: "Hillside Drive",
    num: 266,
    city: "Charlestown"
  },
  {
    id: 2,
    code: "HL",
    street: "Huntz Lane",
    num: 1257 ,
    city: "Marlboro"
  },
  {
    id: 3,
    code: "WS",
    street: "Water Street",
    num: 2439,
    city: "San Francisco"
  },
  {
    id: 4,
    code: "BD",
    street: "Benedum Drive",
    num: 2575,
    city: "New York"
  },
  {
    id: 5,
    code: "RR",
    street: "Rinehart Road",
    num: 127,
    city: "Miami"
  },
  {
    id: 6,
    code: "CS",
    street: "Conaway Street",
    num: 3526,
    city: "Columbus"
  },
  {
    id: 7,
    code: "ED",
    street: "Elkview Drive",
    num: 2582,
    city: "Miami"
  },

]
