import Image from "next/image";
import Banner from "@/components/Banner";
import Products from "@/components/Products";

import { ProductProps } from "../../type";
// import FacebookMassager from "@/components/FacebookMassager";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  // console.log(productData);
  return (
    <div className="font-bodyFont bg-gray-300">
      <main>
        <div className="max-w-screen-2xl mx-auto">
          <Banner />
          <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
            <Products productData={productData} />
          </div>
          Main
        </div>
        {/* <FacebookMassager /> */}
      </main>
    </div>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
