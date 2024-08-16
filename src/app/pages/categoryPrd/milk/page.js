import Footer from "@/app/components/footer/page";
import TopNavbar from "@/app/components/topnavbar/page";
import Image from "next/image";

export default function MilkPage() {
  // Milk products array
  const milkProducts = [
    {
      id: 1,
      name: "Amul Taaza Toned Milk Pouch",
      volume: "1 ltr",
      price: 56,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      name: "Amul Gold Full Cream Milk Pouch",
      volume: "1 ltr",
      price: 68,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "Amul Taaza Toned Milk Pouch",
      volume: "500 ml",
      price: 28,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      name: "Amul Full Cream Milk Pouch",
      volume: "500 ml",
      price: 34,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      name: "Amul Buffalo A2 Milk Pouch",
      volume: "1 ltr",
      price: 73,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      name: "Amul Taaza Toned Milk Pouch",
      volume: "500 ml",
      price: 28,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      name: "Amul Full Cream Milk Pouch",
      volume: "500 ml",
      price: 34,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      name: "Amul Buffalo A2 Milk Pouch",
      volume: "1 ltr",
      price: 73,
      imgSrc:
        "https://tse1.mm.bing.net/th?id=OIP.vqRbhd5sppo3G8kWTsKfcgHaHa&pid=Api&P=0&h=220",
    },
  ];

  return (
    <div>
      <TopNavbar />
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
        <header className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Milk</h2>
        </header>
        <div>
          {milkProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
            >
              <div className="flex items-center">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-500">{product.volume}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">₹{product.price}</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded flex items-center justify-center">
                  <span className="text-lg font-bold mr-1">+</span>
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
