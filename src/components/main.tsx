import React from 'react';
import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Earbuds, IPX8',
      price: '$89.00',
      description: 'Waterproof wireless earbuds with superior sound quality.',
      imageUrl: '/images/image copy 6.png',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'AirPods Max',
      price: '$559.00',
      description: 'High-fidelity audio headphones with noise cancellation.',
      imageUrl: '/images/image copy 5.png',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Bose BT Earphones',
      price: '$289.00',
      description: 'Bluetooth earphones with exceptional sound quality.',
      imageUrl: '/images/image copy 7.png',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'VIVEFOX Headphones',
      price: '$39.00',
      description: 'Wired stereo headphones with a built-in microphone.',
      imageUrl: '/images/image copy 4.png',
      rating: 4.2,
    },
    {
      id: 5,
      name: 'Frypan',
      price: '$99.00',
      description: 'Non-stick frypan for effortless cooking.',
      imageUrl: '/images/61Keg5GUGvL._AC_UF894,1000_QL80_.jpg',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Lipstick Shades',
      price: '$399.00',
      description: 'A collection of vibrant and long-lasting lipstick shades.',
      imageUrl: '/images/f1d2909aa3fe95f89a3ee97c1cc1804c_png_750x750_jpg.webp',
      rating: 4.9,
    },
    {
      id: 7,
      name: 'Hand Chopper',
      price: '$79.00',
      description: 'Compact and efficient hand-operated food chopper.',
      imageUrl: '/images/handchopper-discounters_1.jpg',
      rating: 4.3,
    },
    {
      id: 8,
      name: 'T-shirts in Black',
      price: '$149.00',
      description: 'Stylish and comfortable black t-shirts.',
      imageUrl: '/images/HRW04807_800x.webp',
      rating: 4.4,
    },
    {
      id: 9,
      name: 'Juicer Blender',
      price: '$179.00',
      description: 'Powerful juicer blender for healthy drinks.',
      imageUrl: '/images/image 2.avif',
      rating: 4.5,
    },
    {
      id: 10,
      name: 'Nail 24 Shades',
      price: '$99.00',
      description: 'A vibrant collection of 24 nail polish shades.',
      imageUrl: '/images/images_-_2021-06-03T235503.696_6fd8499b-d94d-4187-958e-0e9ddcd206d7_1024x.jpg',
      rating: 4.8,
    },
    {
      id: 11,
      name: 'Frock in Red',
      price: '$129.00',
      description: 'Elegant red frock perfect for special occasions.',
      imageUrl: '/images/online-shopping.webp',
      rating: 4.7,
    },
    {
      id: 12,
      name: 'Anker Soundcore Liberty',
      price: '$59.00',
      description: 'True wireless earbuds with long battery life.',
      imageUrl: '/images/05e039fc6480950d3402d13620733f98.jpg',
      rating: 4.3,
    },
    {
      id: 13,
      name: 'Phone Case Pro 2',
      price: '$249.00',
      description: 'Durable and stylish phone case for maximum protection.',
      imageUrl: '/images/1_488c67d3-519a-48f2-9417-5ac674316f90.webp',
      rating: 4.6,
    },
    {
      id: 14,
      name: 'Necklace with Pearl',
      price: '$329.00',
      description: 'Elegant pearl necklace for a sophisticated look.',
      imageUrl: '/images/a1deb77db15d70ed2dc8398a60a77b8e27-aurate-necklace.webp',
      rating: 4.9,
    },
    {
      id: 15,
      name: 'Blue Jeans',
      price: '$299.00',
      description: 'Comfortable and stylish blue denim jeans.',
      imageUrl: '/images/b0e440d293b1f2a8f4715e9ef659abbd.jpg_720x720q80.jpg',
      rating: 4.8,
    },
    {
      id: 16,
      name: 'Sneakers Shoes',
      price: '$199.00',
      description: 'Trendy and comfortable sneakers for everyday wear.',
      imageUrl: '/images/He929af53713b47078d88fdb1ef88dadb5.jpg_300x300.avif',
      rating: 4.4,
    },
    {
      id: 17,
      name: 'Eyelashes',
      price: '$69.00',
      description: 'Natural-looking false eyelashes for stunning eyes.',
      imageUrl: '/images/images (1).jpg',
      rating: 4.2,
    },
    {
      id: 18,
      name: 'Glasses',
      price: '$49.00',
      description: 'Stylish and affordable eyewear for everyday use.',
      imageUrl: '/images/images.jpg',
      rating: 4.3,
    },
    {
      id: 19,
      name: 'Hand Bracelet',
      price: '$69.00',
      description: 'Elegant hand bracelet to complement any outfit.',
      imageUrl: '/images/TBCH132_5_694x.webp',
      rating: 4.5,
    },
    {
      id: 20,
      name: 'Charger for Tecno',
      price: '$349.00',
      description: 'Fast and reliable charger compatible with Tecno devices.',
      imageUrl: '/images/LT--12.webp',
      rating: 4.8,
    },
  ];

  return (
    <div className="p-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            {/* Product Image */}
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="object-cover rounded-lg"
              width={200}
              height={200}
            />
            
            {/* Product Name */}
            <h2 className="text-lg sm:text-xl font-semibold mt-4 text-center">
              {product.name}
            </h2>
            
            {/* Product Description */}
            <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                {'⭐'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="ml-2 text-sm sm:text-base text-gray-500">
                ({product.rating})
              </span>
            </div>
            
            {/* Product Price */}
            <p className="text-base sm:text-lg font-semibold mt-4">
              {product.price}
            </p>
            
            {/* Buttons */}
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Buy Now
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
