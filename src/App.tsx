import { useState, useRef, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { SlArrowDown, SlArrowUp, SlHome } from "react-icons/sl";
import { BsCart4 } from "react-icons/bs";
import { IoReturnUpForward } from "react-icons/io5";
import { SiCoffeescript } from "react-icons/si";
import ChoiceCoffee from "./components/ChoiceCoffee";
import { Link } from 'react-router-dom';
import { ICategories, IProduct, ISelectedMenu } from "./commonTypes";

export default function App(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <div className="flex w-full h-full">
      {/* left section */}
      <CategoryMenu handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      {/* right section */}
      <div className="w-5/6">
        {/* banner */}
        <BannerMenu />
        {/* Menu Section */}
        <MainMenu selectedCategory={selectedCategory} />
      </div>
    </div >
  );
}

// Menu Section
function MainMenu({ selectedCategory }: ISelectedMenu) {
  const [products, setProducts] = useState<IProduct[]>([]);

  // selectedCategory filtering
  const filteredMenuItems = selectedCategory
    ? products.filter((item) => item.categoryId === selectedCategory)
    : products;

  // Products Rest API
  const fetchProducts = async () => {
    try {
      const response = await fetch("/products");
      const rawData = await response.json();
      setProducts(rawData.data);
      // console.log(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ul className="relative h-5/6 overflow-y-scroll overflow-x-hidden grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 z-0">
      {filteredMenuItems.map((menuItem) => (
        <ProductCard key={menuItem.name} product={menuItem} />
      ))}
    </ul>
  );
}

// Banner Section
function BannerMenu() {
  const [showStatus, setShowStatus] = useState<boolean>(false);

  return (
    <div className="h-1/6">
      <div className="flex items-center justify-between w-full h-full m-3">
        {/* left banner */}
        <svg width="440" height="86" viewBox="0 0 461 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.9147 26.2258C48.0978 25.3085 51.8862 23.0901 54.7478 19.8821L54.7052 19.927C57.9092 16.5393 62.0449 14.1975 66.5831 13.2012L66.6184 13.1945C68.8949 12.4957 71.2765 12.2049 73.6553 12.3353L73.5125 12.3328C75.3316 12.5052 76.406 13.0766 76.7356 14.0472C77.1241 14.9427 76.7753 15.8006 75.6892 16.6209C74.4306 17.5404 73.0061 18.2033 71.4949 18.5729L71.4632 18.5789C69.7683 19.292 67.8828 19.407 66.1107 18.9054L66.1606 18.9181C65.6708 18.7823 65.2131 18.5473 64.8155 18.2273C64.4179 17.9074 64.0887 17.5093 63.848 17.0573L63.8363 17.0337C62.1009 17.5096 61.0659 18.1112 60.7313 18.8385C60.4093 19.4273 60.3258 20.12 60.4983 20.7715L60.4969 20.7643C60.8971 21.7216 62.1934 22.3986 64.386 22.7954C66.1944 23.014 68.2134 22.9566 70.2437 22.5725C71.2517 22.3818 72.2309 22.1154 73.169 21.7866L73.0624 21.8215L73.1752 21.8002C76.3087 21.2074 79.0348 19.6771 81.1197 17.5561L81.0765 17.5975C81.6653 16.9251 82.0648 16.1053 82.2336 15.2231C82.4024 14.3408 82.3343 13.4281 82.0365 12.5795L82.0454 12.6073C81.2181 10.5503 79.1006 9.0904 75.693 8.22751C71.1094 7.42969 66.4049 7.8122 62.0155 9.3396L62.1601 9.29378C54.9688 11.3823 50.5983 13.8312 49.0488 16.6403C46.7999 19.9075 43.3656 22.1459 39.4871 22.8726L39.3355 22.9013L39.3426 22.9C37.7915 23.4514 36.1365 23.6447 34.4991 23.4659L34.5807 23.4726C34.0856 23.4445 33.605 23.2912 33.183 23.0268C32.761 22.7624 32.4113 22.3954 32.1659 21.9595L32.1548 21.9394C32.0486 21.5726 32.0661 21.1809 32.2046 20.8262C32.343 20.4714 32.5945 20.1736 32.9195 19.9797L32.9294 19.9741C33.7302 19.4021 34.6985 18.9237 35.7498 18.6142L35.7879 18.6033C36.9154 18.3146 38.0723 18.1564 39.2363 18.1316L39.1462 18.1376C40.1714 18.0764 41.1308 18.1495 42.0512 18.3442L41.9725 18.3333C42.3337 18.1188 42.6331 17.813 42.8414 17.4458L42.8443 17.4416C42.9101 17.3123 42.9449 17.1691 42.9458 17.0234C42.9468 16.8778 42.914 16.7338 42.8499 16.6031L42.8513 16.6102C42.4915 15.8667 41.6128 15.4611 40.2151 15.3936C38.5294 15.353 36.8488 15.5801 35.2349 16.0665L35.3005 16.0467C31.7046 17.096 29.7283 18.3184 29.3717 19.7139C29.0101 20.7579 28.9746 21.8899 29.2698 22.9575L29.2664 22.9397C29.781 23.9671 30.5347 24.8538 31.4628 25.5234C32.3908 26.1929 33.4653 26.6252 34.5936 26.7829L34.6457 26.7879C36.7807 27.2472 39.1669 27.2974 41.5778 26.8413C42.4061 26.6846 43.2096 26.4735 43.9852 26.2124L43.8956 26.2404L43.9147 26.2258ZM96.6647 33.7246C94.5163 34.7189 92.1798 35.6775 89.6552 36.6003C87.1305 37.5231 84.4501 38.3942 81.6139 39.2136C78.7799 40.0449 75.76 40.8585 72.5542 41.6544C69.3484 42.4503 66.0191 43.1724 62.5664 43.8208C58.9735 44.5005 55.5401 45.0579 52.266 45.4929C48.9919 45.9279 45.863 46.2616 42.8792 46.4941C39.8954 46.7266 37.0603 46.8769 34.374 46.9449C31.6876 47.0129 29.1683 47.0051 26.8159 46.9214C23.2884 46.7662 19.7851 46.2409 16.3626 45.3539L16.6942 45.4276C14.7767 45.0042 12.9937 44.1008 11.5094 42.8006L11.4871 42.779C12.4767 45.7902 13.5218 48.3815 14.7142 50.8821L14.5257 50.4456C15.9327 53.4442 17.2288 55.8368 18.6331 58.146L18.3503 57.6351C17.397 58.4952 16.5252 59.4431 15.7463 60.4667L15.7605 60.4456C14.9623 61.4972 14.2517 62.6138 13.6357 63.7841L13.6093 63.8371C12.4417 66.0344 11.6897 68.4334 11.3918 70.9117L11.38 71.0615C11.1013 73.4642 11.2286 75.8988 11.7565 78.2615L11.7504 78.2295C12.3226 80.5782 13.4067 82.6419 14.8612 84.3477L14.8125 84.2832C16.3057 86.0138 18.099 87.455 20.1039 88.5354L20.1445 88.5572C22.1061 89.627 24.2753 90.2482 26.4981 90.3765L26.6043 90.3785C28.8858 90.4327 31.1525 90.0164 33.2657 89.1551L33.1633 89.1929C34.1813 88.8232 35.0692 88.3638 35.886 87.8182L35.811 87.8656C36.6885 87.2938 37.5574 86.779 38.4176 86.3211L38.3048 86.3424C36.4854 86.689 34.6169 86.6923 32.7938 86.3521L32.9027 86.3684C30.9822 85.992 29.1273 85.3269 27.4 84.3955L27.4406 84.4173C25.5474 83.4768 23.8253 82.2183 22.3482 80.6956L22.2931 80.636C20.7972 79.0843 19.6758 77.2055 19.0165 75.1467L18.9967 75.0804C18.1929 73.1777 17.8103 71.1222 17.8755 69.0579L17.8754 69.1538C17.9508 67.1222 18.4011 65.124 19.2031 63.262L19.178 63.3221C19.406 62.9838 19.6167 62.65 19.81 62.3208C20.0033 61.9916 20.2139 61.6578 20.442 61.3195C21.3864 62.8378 22.3756 64.3096 23.4094 65.7347C24.4433 67.1599 25.532 68.5402 26.6755 69.8757C28.8632 72.1893 31.0705 74.407 33.2973 76.5287C35.5242 78.6504 37.7514 80.7868 39.9789 82.9379C40.8747 84.0448 41.8135 85.3982 42.6602 86.8243L42.7835 87.0519C43.4582 88.1674 44.1553 89.5555 44.754 91.0027L44.8277 91.199C46.3228 92.5984 47.98 93.7162 49.7798 94.5452L49.8436 94.5737C51.6329 95.3861 53.627 95.9496 55.6956 96.1928L55.844 96.2053C58.1522 96.5765 60.838 96.7434 63.5583 96.6493L63.7998 96.6331C66.2392 96.559 69.0113 96.2558 71.7923 95.7297L72.3633 95.6217C75.19 95.0838 77.9694 94.3211 80.6756 93.3407L80.3763 93.4379C83.1047 92.4805 85.7426 91.2802 88.259 89.8511L87.9395 90.0148C89.7041 89.033 91.3188 87.7994 92.7338 86.352L92.672 86.4117C94.0625 84.9748 95.1942 83.3039 96.0166 81.4737L96.0417 81.4136L96.359 81.3536C96.3983 80.018 96.498 78.5248 96.6578 76.8738C96.8487 75.0079 97.1884 73.3684 97.6775 71.7854L97.6361 71.9334C98.8544 69.123 100.116 66.3401 101.42 63.5848C102.724 60.8295 104 57.9343 105.249 54.8992C106.75 50.2871 107.828 45.5437 108.468 40.729L108.525 40.1243C109.203 35.128 109.514 30.0864 109.454 25.0409L109.427 24.3598C108.453 26.1542 107.092 27.7038 105.444 28.8947L105.37 28.9456C102.757 30.8761 99.9076 32.458 96.892 33.6521L96.6597 33.7367L96.6647 33.7246ZM25.4279 39.5659C27.7911 39.7066 30.3163 39.7454 33.0035 39.6821C35.6908 39.6188 38.5042 39.4505 41.4437 39.1772C44.3856 38.9158 47.4725 38.5531 50.7046 38.0891C53.9367 37.6252 57.3068 37.0614 60.8151 36.3976C64.4079 35.7178 67.7935 35.0035 70.9716 34.2547C74.1498 33.5058 77.1559 32.7157 79.9899 31.8844C82.8239 31.0531 85.4827 30.1639 87.9662 29.2169C90.4497 28.2699 92.8061 27.3261 95.0352 26.3854C98.6984 24.8376 102.124 22.7736 105.211 20.2546L105.014 20.4063C107.104 18.5377 108.014 16.8911 107.744 15.4664C107.606 14.8855 107.347 14.3402 106.986 13.8663C106.624 13.3924 106.168 13.0006 105.647 12.7164L105.639 12.7106C104.16 11.8445 102.544 11.2451 100.864 10.9394L100.759 10.926C101.238 11.1416 101.658 11.4495 102.001 11.8347L102.014 11.8469C102.369 12.2256 102.611 12.6982 102.71 13.2094C102.993 14.7053 102.157 16.264 100.203 17.8856C97.6401 19.8535 94.5679 21.619 91.2479 22.9628L91.0058 23.0529C87.0812 24.6808 82.5702 26.2905 77.4729 27.882C72.6129 29.4028 66.9162 30.8237 61.0793 31.9281L60.2786 32.0759L60.3209 32.0679L59.7463 32.1766C53.9024 33.2822 48.0703 34.0647 42.2704 34.5349L42.9903 34.4614C37.9348 34.9126 32.8575 35.0813 27.7815 34.9667L28.6923 34.9567C25.1302 34.8473 21.5939 34.2881 18.1659 33.2924L18.4265 33.3574C16.0149 32.5619 14.6743 31.4518 14.4047 30.0271L14.4041 30.0235C14.2781 29.3575 14.3364 28.7009 14.5448 28.1044L14.5376 28.1242C14.8532 27.3414 15.3262 26.658 15.9298 26.1048L15.9518 26.0859C13.9298 27.2996 12.0492 28.7381 10.345 30.3746L10.4542 30.2765C9.38707 31.2162 8.82183 32.6476 9.05145 34.1314L9.0528 34.1385C9.47681 35.6077 11.0382 36.8236 13.737 37.7862C17.218 38.8762 21.1329 39.519 25.142 39.5795L25.4152 39.5757L25.4279 39.5659Z" fill="#483431" />
          <path d="M196.464 71.1919L189.808 70.9999C185.2 70.9999 181.467 71.1705 178.608 71.5119C178.395 71.2559 178.288 70.8932 178.288 70.4239L178.352 69.9119C180.912 69.3145 182.533 68.6745 183.216 67.9919C183.899 67.3092 184.304 65.8585 184.432 63.6399C184.56 61.4212 184.624 59.1172 184.624 56.7279C184.624 54.2959 184.496 50.6052 184.24 45.6559L183.728 35.1599C181.765 38.7865 178.693 44.9519 174.512 53.6559C170.373 62.3599 167.685 68.5679 166.448 72.2799H164.656C156.336 53.4639 151.003 42.0079 148.656 37.9119L145.968 33.3039C145.797 38.5945 145.712 45.0585 145.712 52.6959C145.712 60.2905 145.968 65.7305 146.48 69.0159C147.419 69.1439 149.083 69.2079 151.472 69.2079C151.6 69.5492 151.664 69.9332 151.664 70.3599C151.664 70.7439 151.6 71.0212 151.472 71.1919L144.24 70.9999C141.296 70.9999 138.821 71.1705 136.816 71.5119C136.603 71.2559 136.496 70.8932 136.496 70.4239L136.56 69.9119C138.651 69.4425 140.037 68.7599 140.72 67.8639C141.445 66.9679 141.915 65.7945 142.128 64.3439C143.152 57.0479 143.749 45.5492 143.92 29.8479C142.768 28.3972 141.509 27.3732 140.144 26.7759C139.973 26.7332 138.779 26.5625 136.56 26.2639L136.368 25.3679C136.368 24.9412 136.432 24.5999 136.56 24.3439L146.8 24.0879C147.44 24.0879 148.528 25.2185 150.064 27.4799C151.643 29.7412 153.2 32.2585 154.736 35.0319C156.272 37.7625 158.043 41.3252 160.048 45.7199C162.096 50.1145 163.803 53.9119 165.168 57.1119C166.533 60.3119 167.301 62.0612 167.472 62.3599C168.027 61.1225 170.651 55.5545 175.344 45.6559C180.037 35.7145 183.131 28.8025 184.624 24.9199C188.933 24.9199 192.368 24.7279 194.928 24.3439C195.141 24.7279 195.248 25.2612 195.248 25.9439C193.115 26.4132 191.685 27.1172 190.96 28.0559C190.235 28.9945 189.829 29.9972 189.744 31.0639C189.659 32.1305 189.616 34.1359 189.616 37.0799C189.616 40.0239 189.744 45.0159 190 52.0559C190.299 59.0959 190.747 64.7492 191.344 69.0159C192.155 69.1439 193.861 69.2079 196.464 69.2079C196.592 69.5065 196.656 69.8479 196.656 70.2319C196.656 70.6159 196.592 70.9359 196.464 71.1919ZM205.146 39.4479L210.65 39.2559C210.735 39.4692 210.778 39.7892 210.778 40.2159L210.65 41.2399C209.327 41.2399 208.388 41.2825 207.834 41.3679C208.218 43.9705 209.242 47.2772 210.906 51.2879L217.114 66.6479L222.682 52.3759C224.559 47.5545 225.626 43.9705 225.882 41.6239C224.346 41.4532 222.767 41.3679 221.146 41.3679C220.975 41.1119 220.89 40.8132 220.89 40.4719C220.89 40.1305 220.932 39.7892 221.018 39.4479H227.29C229.252 39.4479 231.044 39.3199 232.666 39.0639C233.007 39.6185 233.178 40.1732 233.178 40.7279C232.111 41.1972 231.343 41.6665 230.874 42.1359C229.722 43.3732 228.463 45.5705 227.098 48.7279L217.818 70.9999C217.263 72.3225 216.367 74.6052 215.13 77.8479C213.892 81.1332 213.018 83.4159 212.506 84.6959C212.036 85.9759 211.588 87.1705 211.162 88.2799C210.735 89.4319 210.244 90.6265 209.69 91.8639C208.538 94.5092 207.62 95.8319 206.938 95.8319C206.724 95.8319 206.276 95.7039 205.594 95.4479C203.759 94.8079 201.69 94.2319 199.386 93.7199C199.386 92.8665 199.578 92.1839 199.962 91.6719C201.498 91.9279 202.33 92.0559 202.458 92.0559C203.695 92.0559 205.274 90.6052 207.194 87.7039C209.156 84.8452 210.671 82.0079 211.738 79.1919L214.042 73.0479L203.61 47.4479C202.543 44.7599 201.562 42.9465 200.666 42.0079C200.111 41.3252 199.279 40.8132 198.169 40.4719C198.169 39.7039 198.276 39.1492 198.489 38.8079C201.306 39.2345 203.524 39.4479 205.146 39.4479ZM280.653 72.2799C273.314 72.2799 267.511 69.9972 263.245 65.4319C259.021 60.8239 256.909 55.0425 256.909 48.0879C256.909 41.0905 259.213 35.3092 263.821 30.7439C268.429 26.1785 274.317 23.8959 281.485 23.8959C287.159 23.8959 292.194 24.5999 296.589 26.0079C296.802 26.1359 296.909 26.3065 296.909 26.5199C296.909 26.6905 296.845 27.3519 296.717 28.5039C296.162 32.4719 295.863 35.3732 295.821 37.2079C295.181 37.3359 294.733 37.3999 294.477 37.3999C294.221 37.3999 293.837 37.3145 293.325 37.1439C292.941 34.1999 292.557 32.0025 292.173 30.5519C291.063 29.3572 289.506 28.3332 287.501 27.4799C285.495 26.6265 283.213 26.1999 280.653 26.1999C275.789 26.1999 271.757 27.9065 268.557 31.3199C265.399 34.7332 263.821 39.4052 263.821 45.3359C263.821 49.5172 264.503 53.4425 265.869 57.1119C267.277 60.7812 269.346 63.8105 272.077 66.1999C274.85 68.5465 278.135 69.7199 281.933 69.7199C285.73 69.7199 289.101 68.6959 292.045 66.6479C292.855 65.2825 293.858 62.9999 295.053 59.7999C296.077 59.7999 296.866 60.0132 297.421 60.4399C296.823 63.5119 296.375 66.6052 296.077 69.7199C296.034 70.1892 295.757 70.4665 295.245 70.5519C291.149 71.7039 286.285 72.2799 280.653 72.2799ZM336.574 55.3839C336.574 64.8559 331.07 70.4879 320.062 72.2799C315.539 72.2799 311.72 70.6799 308.606 67.4799C305.534 64.2372 303.998 60.2052 303.998 55.3839C303.998 45.8265 309.523 40.1732 320.574 38.4239C325.054 38.4239 328.83 40.0665 331.902 43.3519C335.016 46.6372 336.574 50.6479 336.574 55.3839ZM321.47 69.5279C327.614 69.5279 330.686 65.6025 330.686 57.7519C330.686 53.3145 329.662 49.4319 327.614 46.1039C325.566 42.7759 322.856 41.1119 319.486 41.1119C316.115 41.1119 313.662 42.1999 312.126 44.3759C310.632 46.5092 309.885 49.5812 309.885 53.5919C309.885 57.5599 310.931 61.2079 313.022 64.5359C315.112 67.8639 317.928 69.5279 321.47 69.5279ZM359.541 71.1919L350.709 70.9999C347.168 70.9999 343.925 71.1705 340.981 71.5119C340.768 71.2559 340.661 70.8932 340.661 70.4239L340.725 69.9119C343.498 69.3572 345.162 68.2692 345.717 66.6479C346.4 64.7279 346.741 57.3252 346.741 44.4399V42.3279L340.405 42.3919C340.106 42.2212 339.957 41.9652 339.957 41.6239C340.17 41.1972 340.405 40.4719 340.661 39.4479H346.805C346.848 38.7652 346.976 36.8452 347.189 33.6879C347.445 30.4879 348.106 27.7785 349.173 25.5599C350.282 23.3412 351.498 21.6772 352.821 20.5679C354.144 19.4159 355.594 18.4772 357.173 17.7519C359.477 16.7279 361.61 16.2159 363.573 16.2159C365.578 16.2159 368.202 17.0052 371.445 18.5839C371.274 19.5652 370.89 20.5252 370.293 21.4639C369.738 22.3599 369.013 22.9785 368.117 23.3199C364.533 20.4185 361.802 18.9679 359.925 18.9679C358.432 18.9679 356.917 20.1839 355.381 22.6159C353.845 25.0479 352.928 27.7145 352.629 30.6159C352.33 33.4745 352.16 36.4185 352.117 39.4479C355.36 39.4479 358.176 39.2985 360.565 38.9999C360.821 39.1705 360.949 39.4479 360.949 39.8319C360.778 40.1732 360.629 40.6212 360.501 41.1759C360.416 41.6879 360.352 42.0079 360.309 42.1359L351.989 42.2639V51.8639C351.989 63.2132 352.245 68.9092 352.757 68.9519C354.506 69.1225 356.768 69.2079 359.541 69.2079C359.712 69.5492 359.797 69.8905 359.797 70.2319C359.797 70.5305 359.712 70.8505 359.541 71.1919ZM382.041 71.1919L373.209 70.9999C369.668 70.9999 366.425 71.1705 363.481 71.5119C363.268 71.2559 363.161 70.8932 363.161 70.4239L363.225 69.9119C365.998 69.3572 367.662 68.2692 368.217 66.6479C368.9 64.7279 369.241 57.3252 369.241 44.4399V42.3279L362.905 42.3919C362.606 42.2212 362.457 41.9652 362.457 41.6239C362.67 41.1972 362.905 40.4719 363.161 39.4479H369.305C369.348 38.7652 369.476 36.8452 369.689 33.6879C369.945 30.4879 370.606 27.7785 371.673 25.5599C372.782 23.3412 373.998 21.6772 375.321 20.5679C376.644 19.4159 378.094 18.4772 379.673 17.7519C381.977 16.7279 384.11 16.2159 386.073 16.2159C388.078 16.2159 390.702 17.0052 393.945 18.5839C393.774 19.5652 393.39 20.5252 392.793 21.4639C392.238 22.3599 391.513 22.9785 390.617 23.3199C387.033 20.4185 384.302 18.9679 382.425 18.9679C380.932 18.9679 379.417 20.1839 377.881 22.6159C376.345 25.0479 375.428 27.7145 375.129 30.6159C374.83 33.4745 374.66 36.4185 374.617 39.4479C377.86 39.4479 380.676 39.2985 383.065 38.9999C383.321 39.1705 383.449 39.4479 383.449 39.8319C383.278 40.1732 383.129 40.6212 383.001 41.1759C382.916 41.6879 382.852 42.0079 382.809 42.1359L374.489 42.2639V51.8639C374.489 63.2132 374.745 68.9092 375.257 68.9519C377.006 69.1225 379.268 69.2079 382.041 69.2079C382.212 69.5492 382.297 69.8905 382.297 70.2319C382.297 70.5305 382.212 70.8505 382.041 71.1919ZM403.325 67.6719C406.824 67.6719 409.917 66.7332 412.605 64.8559C413.202 65.0692 413.544 65.5172 413.629 66.1999L406.717 71.0639C405.693 71.8745 403.41 72.2799 399.869 72.2799C396.328 72.2799 393.32 70.7012 390.845 67.5439C388.37 64.3439 387.133 60.3119 387.133 55.4479C387.133 50.5839 388.477 46.7439 391.165 43.9279C393.853 41.1119 397.053 39.2772 400.765 38.4239C404.008 38.4239 406.866 39.5119 409.341 41.6879C410.834 42.9679 411.88 44.6319 412.477 46.6799C412.605 47.1919 413.202 47.4692 414.269 47.5119C414.525 47.8105 414.653 48.1305 414.653 48.4719C414.653 48.7705 414.61 49.0905 414.525 49.4319C407.016 51.1812 399.634 52.3972 392.381 53.0799C392.381 58.5412 393.896 62.6372 396.925 65.3679C398.632 66.9039 400.765 67.6719 403.325 67.6719ZM407.357 48.1519C407.57 48.0239 407.677 47.8745 407.677 47.7039C407.677 47.4905 407.4 46.8932 406.845 45.9119C406.333 44.8879 405.416 43.8212 404.093 42.7119C402.77 41.5599 401.384 40.9839 399.933 40.9839C398.482 40.9839 397.416 41.1972 396.733 41.6239C394.344 43.2452 392.978 46.1892 392.637 50.4559C394.941 50.4559 397.565 50.2212 400.509 49.7519C403.453 49.2399 405.736 48.7065 407.357 48.1519ZM436.388 67.6719C439.886 67.6719 442.98 66.7332 445.668 64.8559C446.265 65.0692 446.606 65.5172 446.692 66.1999L439.78 71.0639C438.756 71.8745 436.473 72.2799 432.932 72.2799C429.39 72.2799 426.382 70.7012 423.908 67.5439C421.433 64.3439 420.196 60.3119 420.196 55.4479C420.196 50.5839 421.54 46.7439 424.228 43.9279C426.916 41.1119 430.116 39.2772 433.828 38.4239C437.07 38.4239 439.929 39.5119 442.404 41.6879C443.897 42.9679 444.942 44.6319 445.54 46.6799C445.668 47.1919 446.265 47.4692 447.332 47.5119C447.588 47.8105 447.716 48.1305 447.716 48.4719C447.716 48.7705 447.673 49.0905 447.588 49.4319C440.078 51.1812 432.697 52.3972 425.444 53.0799C425.444 58.5412 426.958 62.6372 429.988 65.3679C431.694 66.9039 433.828 67.6719 436.388 67.6719ZM440.42 48.1519C440.633 48.0239 440.74 47.8745 440.74 47.7039C440.74 47.4905 440.462 46.8932 439.908 45.9119C439.396 44.8879 438.478 43.8212 437.156 42.7119C435.833 41.5599 434.446 40.9839 432.996 40.9839C431.545 40.9839 430.478 41.1972 429.796 41.6239C427.406 43.2452 426.041 46.1892 425.7 50.4559C428.004 50.4559 430.628 50.2212 433.572 49.7519C436.516 49.2399 438.798 48.7065 440.42 48.1519Z" fill="black" fillOpacity="0.5" />
        </svg>
        {/* right banner */}
        <div className="flex items-center justify-end mr-10">
          {/* search */}
          <div className="max-w-2xl mx-2 relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full md:w-80 text-md text-gray-900 bg-gray-200 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="커피를 검색해 주세요."
              required
            />
            <button
              type="submit"
              className="custom-button absolute sm:text-sm lg:text-md text-white right-2.5 bottom-1.5"
            >
              검색
            </button>
          </div>
          {/* home */}
          <div className="p-3 custom-button">
            <a href="/">
              <SlHome />
            </a>
          </div>
          {/* item cart */}
          <div className="custom-button">
            <button onClick={() => setShowStatus(!showStatus)}>
              <BsCart4 />
            </button>
            {showStatus && (
              <>
                {/* 사이드 박스 */}
                <div className="fixed top-0 right-0 h-full w-1/4 text-black shadow-xl z-10">
                  <div className="h-4/5 flex flex-col bg-white rounded-tl-3xl">
                    {/* 주문내역 배너 */}
                    <div className="flex justify-between items-center mt-7 mx-6">
                      <div className="sm:text-xl lg:text-4xl">주문 내역</div>
                      <button onClick={() => setShowStatus(!showStatus)} className="flex items-center sm:text-md lg:text-xl">
                        뒤로 <IoReturnUpForward className="ml-2 text-2xl" />
                      </button>
                    </div>
                    <div className="ml-7 my-2 h-full overflow-y-scroll overflow-x-hidden">
                      {/* ChoiceCoffee 컴포넌트 또는 내용 */}
                      <ChoiceCoffee />
                      <ChoiceCoffee />
                      <ChoiceCoffee />
                      <ChoiceCoffee />
                    </div>
                  </div>
                  <div className="relative h-1/5 flex flex-col justify-end rounded-bl-3xl custom-pay-color">
                    <div className="ml-7 flex justify-between items-center h-full">
                      Total
                      <div className="sm:text-xl lg:text-3xl mr-7">
                        10000원
                      </div>
                    </div>
                    <Link to="/pay" className="mx-7 mb-5 mt-3 custom-button flex justify-center">결제</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Section
function CategoryMenu({ handleCategoryClick, selectedCategory }: { handleCategoryClick: (id: string) => void, selectedCategory: string | null }) {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  // Categories data define
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleNextButtonClick = (nextType: 'prev' | 'next') => {
    if (!horizontalScrollRef.current) return;
    const itemHeight = horizontalScrollRef.current.firstElementChild?.clientHeight || 0;
    const scrollAmount = nextType === 'prev' ? -itemHeight : itemHeight;
    horizontalScrollRef.current.scrollTop += scrollAmount;
  };

  // Category API
  const fetchCategories = async () => {
    try {
      const response = await fetch("/categories");
      const data = await response.json();
      setCategories(data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="w-1/6 flex justify-center">
        <div className="relative bg-white p-4 m-10 rounded-lg shadow-xl w-3/5 flex flex-col justify-between">
          <div className="flex justify-center items-center mb-2">
            <button onClick={() => handleNextButtonClick('prev')}><SlArrowUp /></button>
          </div>
          <div ref={horizontalScrollRef} className="flex-1 overflow-hidden">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`p-3 border-2 rounded-xl my-3 cursor-pointer flex items-center justify-center ${selectedCategory === category.id ? 'bg-yellow-600' : ''
                    }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="text-center">
                    <SiCoffeescript className="sm:text-xl md:text-2xl lg:text-5xl" />
                    <h3 className="sm:text-xs md:text-sm lg:text-base">{category.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center mt-3">
            <button onClick={() => handleNextButtonClick('next')}><SlArrowDown /></button>
          </div>
        </div>
      </div>
    </>
  );
}
