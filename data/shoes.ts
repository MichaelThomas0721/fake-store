export default function Shoes() {
  let objects = {} as any;
  let categories = [
    "Basketball Shoes",
    "Running Shoes",
    "Soccer Shoes",
    "Tennis Shoes",
    "Volleyball Shoes",
    "Sneakers",
  ];
  let gender = ["Men's", "Women's", "Unisex", "Kids"];
  let shoes = [
    {
      id: 1,
      name: "Nike Air Jordan 1",
      Category: "Basketball Shoes",
      Gender: "Men's",
      price: 100,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 2,
      name: "Adidas",
      Category: "Tennis Shoes",
      Gender: "Men's",
      price: 200,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 3,
      name: "Puma",
      Category: "Basketball Shoes",
      Gender: "Men's",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 4,
      name: "Puma",
      Category: "Running Shoes",
      Gender: "Men's",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 5,
      name: "Puma",
      Category: "Basketball Shoes",
      Gender: "Women's",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 6,
      name: "Puma",
      Category: "Basketball Shoes",
      Gender: "Women's",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
  ];

  objects.categories = categories;
  objects.gender = gender;
  objects.shoes = shoes;

  return objects;
}
