import React from "react";
import { ProductProps } from "../../type";
import Image from "next/image";

// Icon
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormattedPrice from "./FormattedPrice";

const Products = ({ productData }: any) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                width={300}
                height={300}
                src={image}
                alt="productImage"
              />
              <div className="absolute top-5 right-5 cursor-pointer">
                <span>
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p className="absolute top-5 left-5 text-amazon_blue font-medium text-xs tracking-wide">
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>

            <hr />

            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <div className="flex w-full justify-between items-center gap-3 mt-3">
                <div>
                  <button
                    // onClick={() =>
                    //   dispatch(
                    //     addToCart({
                    //       _id: _id,
                    //       brand: brand,
                    //       category: category,
                    //       description: description,
                    //       image: image,
                    //       isNew: isNew,
                    //       oldPrice: oldPrice,
                    //       price: price,
                    //       title: title,
                    //       quantity: 1,
                    //     })
                    //   )
                    // }
                    className="px-10 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300"
                  >
                    add to cart
                  </button>
                </div>

                <span className="p-2 text-xl hover:bg-amazon_yellow bg-black hover:text-black text-white rounded duration-300">
                  <HiShoppingCart />
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
