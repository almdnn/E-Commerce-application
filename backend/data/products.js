const products = [
  {
    name: "Mens Thin Cotton Colorful Shirt",
    image: "/images/shirt1.jpg",
    description:
      "Mens Thin & Breathable Cotton Colorful Stripe Holiday Short Sleeve Shirt Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    price: 113.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Popular Colorful Shirt",
    image: "/images/shirt2.jpg",
    description:
      "Popular Shirt Colorful Vertical Stripe Pattern Button up Regular Fit Short-sleeved Notch Collar Shirt for Men Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    price: 169.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Colorful Stripe Button Up Shirt",
    image: "/images/shirt9.webp",
    description:
      "Colorful Stripe Button Up Shirt Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum",
    price: 214.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Mens Summer Colorful Stripe",
    image: "/images/shirt4.jpg",
    description:
      "Mens Summer Colorful Stripe Cotton Ethnic Style Floral Printing Casual Short Sleeve Shirts Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    price: 124.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Mens Dress Shirts Paint Colorful Stripe",
    image: "/images/shirt13.png",
    description:
      "Mens Dress Shirts Paint Colorful Stripe Short Sleeve Button Up Casual Henley Tops Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo",
    price: 122.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "Color Block Raglan Sleeve Hoodie",
    image: "/images/hoodie.webp",
    description:
      "Color Block Raglan Sleeve Hoodie - Light Blue 2xl Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    price: 299.99,
    countInStock: 1,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "Color Block Drop Shoulder Drawstring Hoodie",
    image: "/images/hoodie111.jpeg",
    description:
      "Color Block Drop Shoulder Drawstring Hoodie - Multi-a L Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
    price: 317.99,
    countInStock: 0,
    rating: 3.5,
    numReviews: 11,
  },
  {
    name: "Colorful Tie Dye Print Applique Detail Hoodie",
    image: "/images/hoodie5.webp",
    description:
      "Colorful Tie Dye Print Applique Detail Hoodie - Multi L  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
    price: 217.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 14,
  },
  {
    name: "Letter Embroidery Fleece Lined Colorblock Hoodie",
    image: "/images/hoodie114.webp",
    description:
      "Letter Embroidery Fleece Lined Colorblock Hoodie - Sea Green 2xl Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
    price: 227.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 9,
  },
  {
    name: "Color Block Pullover Kangaroo Pocket Drawstring Hoodie",
    image: "/images/hoodie113.webp",
    description:
      "Color Block Pullover Kangaroo Pocket Drawstring Hoodie - White Xl Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    price: 208.99,
    countInStock: 0,
    rating: 5,
    numReviews: 15,
  },

  {
    name: "Graphic Print ",
    image: "/images/hoodie112.jpeg",
    description:
      "Graphic Print Color Spliced Hoodie - White M  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
    price: 200.99,
    countInStock: 0,
    rating: 5,
    numReviews: 13,
  },
];

export default products;
