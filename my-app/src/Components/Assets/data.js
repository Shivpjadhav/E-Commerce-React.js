// Main product images
import pic_img1 from './singlepiecedress.jpg';
import pic_img2 from './squareneckbodycon.jpg';
import pic_img3 from './westernonepiece.webp';
import pic_img4 from './pic5.webp';
import pic_img5 from './pic6.webp';
import pic_img6 from './pic7.jpg';
import pic_img7 from './pic8.jpg';

// Men's images
import pic_imgm1 from './men1.jpg';
import pic_imgm2 from './men2.jpg';
import pic_imgm3 from './men3.webp';
import pic_imgm4 from './men4.jpg';

// Kids' images
import pic_imgk1 from './kids1.webp';
import pic_imgk2 from './kids2.webp';
import pic_imgk3 from './kids3.jpg';
import pic_imgk4 from './kids4.jpg';

let data_product = [
  // Men
  {
    id: 1,
    name: "Men's T-Shirt 1",
    category: "men",
    image: pic_imgm1,
    new_price: 499,
    old_price: 799
  },
  {
    id: 2,
    name: "Men's T-Shirt 2",
    category: "men",
    image: pic_imgm2,
    new_price: 499,
    old_price: 799
  },
  {
    id: 3,
    name: "Men's T-Shirt 3",
    category: "men",
    image: pic_imgm3,
    new_price: 499,
    old_price: 799
  },
  {
    id: 4,
    name: "Men's T-Shirt 4",
    category: "men",
    image: pic_imgm4,
    new_price: 599,
    old_price: 849
  },

  // Women
  {
    id: 5,
    name: "Women's Dress 1",
    category: "women",
    image: pic_img1,
    new_price: 899,
    old_price: 1299
  },
  {
    id: 6,
    name: "Women's Dress 2",
    category: "women",
    image: pic_img2,
    new_price: 999,
    old_price: 1399
  },
  {
    id: 7,
    name: "Women's Dress 3",
    category: "women",
    image: pic_img3,
    new_price: 849,
    old_price: 1199
  },
  {
    id: 8,
    name: "Women's Dress 4",
    category: "women",
    image: pic_img4,
    new_price: 849,
    old_price: 1199
  },

  // Kids
  {
    id: 9,
    name: "Kid's Dress 1",
    category: "kid",
    image: pic_imgk1,
    new_price: 299,
    old_price: 499
  },
  {
    id: 10,
    name: "Kid's Dress 2",
    category: "kid",
    image: pic_imgk2,
    new_price: 349,
    old_price: 549
  },
  {
    id: 11,
    name: "Kid's Dress 3",
    category: "kid",
    image: pic_imgk3,
    new_price: 349,
    old_price: 549
  },
  {
    id: 12,
    name: "Kid's Dress 4",
    category: "kid",
    image: pic_imgk4,
    new_price: 399,
    old_price: 599
  },

  // Extra women's fashion (no category given, assuming "women")
  {
    id: 13,
    name: "Single Piece Dress",
    category: "women",
    image: pic_img1,
    new_price: 39.99,
    old_price: 59.99,
  },
  {
    id: 14,
    name: "Square Neck Bodycon",
    category: "women",
    image: pic_img2,
    new_price: 89.99,
    old_price: 129.99,
  },
  {
    id: 15,
    name: "Casual Midi Dress",
    category: "women",
    image: pic_img3,
    new_price: 29.99,
    old_price: 49.99,
  },
  {
    id: 16,
    name: "Party Sequin Dress",
    category: "women",
    image: pic_img4,
    new_price: 74.99,
    old_price: 99.99,
  },
  {
    id: 17,
    name: "Boho Maxi Dress",
    category: "women",
    image: pic_img5,
    new_price: 45.00,
    old_price: 69.99,
  },
  {
    id: 18,
    name: "Chiffon Wrap Dress",
    category: "women",
    image: pic_img6,
    new_price: 59.50,
    old_price: 85.00,
  },
  {
    id: 19,
    name: "Polka Dot A-Line Dress",
    category: "women",
    image: pic_img7,
    new_price: 35.99,
    old_price: 55.99,
  }
];

export default data_product;
