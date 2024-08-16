import Footer from '@/app/components/footer/page';
import TopNavbar from '@/app/components/topnavbar/page';
import Image from 'next/image';

const subCategories = [
  { name: 'Uniform', image: '/category/uniform.jpeg' },
  { name: 'Books', image: '/category/books.jpeg' },
  { name: 'Shoes', image: '/category/shoes.jpeg' },
  { name: 'Bag', image: '/category/bags.jpeg' },
  { name: 'Cab', image: '/category/bags.jpeg' },
  { name: 'School Project', image: '/category/boximage.jpeg' },
  { name: 'Accessories', image: '/category/boximage.jpeg' },
  { name: 'Tiffin', image: '/category/tiffin.jpeg' },
];

export default function SubCategoryPage() {
  return (
    <div>
      <TopNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">School Cart</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {subCategories.map((category) => (
            <div key={category.name} className="text-center">
              <div className="rounded-xl overflow-hidden shadow-lg"> {/* Added shadow-lg for box shadow */}
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <h2 className="text-lg md:text-xl font-bold mt-4">{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '40px' }}></div>
      <Footer />
    </div>
  );
}
