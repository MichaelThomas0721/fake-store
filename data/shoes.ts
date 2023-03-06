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
      category: "Basketball Shoes",
      price: 100,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 2,
      name: "Adidas",
      category: "Tennis Shoes",
      price: 200,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 3,
      name: "Puma",
      category: "Basketball Shoes",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 4,
      name: "Puma",
      category: "Running Shoes",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 5,
      name: "Puma",
      category: "Basketball Shoes",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
    {
      id: 6,
      name: "Puma",
      category: "Basketball Shoes",
      price: 300,
      imageFolder: "/nikeairjordan1",
      images: 8,
    },
  ];

  objects.categories = categories;
  objects.gender = gender;
  objects.shoes = shoes;

  // if (request) {
  //   if (request.categories) {
  //     objects.categories = categories;
  //   }
  //   if (request.gender) {
  //     objects.gender = gender;
  //   }
  //   if (request.shoes) {
  //     if (request.shoes.category) {
  //       objects.shoes = shoes.filter((shoe: any) => {
  //         return shoe.category === request.shoes.category;
  //       });
  //     } else if (request.shoes.id) {
  //       if (typeof request.shoes.id == "object") {
  //         objects.shoes = shoes.filter((shoe: any) => {
  //           return request.shoes.id.includes(shoe.id);
  //         });
  //       } else {
  //         objects.shoes = shoes.filter((shoe: any) => {
  //           return shoe.id == request.shoes.id;
  //         });
  //       }
  //     } else {
  //       objects.shoes = shoes;
  //     }
  //   }
  // } else {
  //   objects.categories = categories;
  //   objects.gender = gender;
  //   objects.shoes = shoes;
  // }

  return objects;
}
