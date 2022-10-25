import { Product } from "./shared/product.model";

export const sample_products: Product[] = [
  {
    id: "1",
    name: "iPhone 13",
    price: 1549,
    address:{
      nickname: "SS",
      street: "Short Street",
      num: 1523,
      city: "Austin"
    },
    stock: 94,
    description: "An apple mobile which is nothing like apple",
    comments: "",
    rating: 4.69,
    img: "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon_APPLE_iPhone_13_5G_128GB_Pink_3_.jpg"
  },
  {
    id: "2",
    name: "Dr. Martens Women's 1460w Originals Eight-Eye Lace-up Boot Combat",
    price: 145.62,
    address:{
      nickname: "HD",
      street: "Hillside Drive",
      num: 266,
      city: "Charlestown"
    },
    stock: 10,
    description: "Goodyear Welted - the upper and sole are heat-sealed and sewn together, providing more comfort and durability for years to come.",
    comments: "",
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/81uFFsnDooL._AC_UY1000_.jpg"
  },
  {
    id: "3",
    name: "Vera Bradley Women's Microfiber Campus Backpack, Classic Black",
    price: 105,
    address:{
      nickname: "HL",
      street: "Huntz Lane",
      num: 1257 ,
      city: "Marlboro"
    },
    stock: 54,
    description: "The Campus Backpack measures 16 inches high, 11 inches wide, and 8 inch deep with a 3 inch Top handle drop and 32 inch adjustable straps, with a trolley sleeve for smooth travels",
    comments: "",
    rating: 4.8,
    img: "https://i5.walmartimages.com/asr/35bc3df8-bc11-4f4a-be2c-973aa27fdfe8.d473fdf10a6a3f34308a94f27c4d852f.jpeg"
  }
]
