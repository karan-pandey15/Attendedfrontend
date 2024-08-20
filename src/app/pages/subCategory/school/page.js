 
import Image from 'next/image';
import './style.css';
import TopNavbar from '@/app/components/topnavbar/page';
import Footer from '@/app/components/footer/page';
import Link from "next/link"
export default function Cab() {
  return (
    <div>
        <TopNavbar />
    <div className="container"> 

      <div className="categories">
        <h2 className="sectionTitle">School Collections</h2>
        <div className="categoryRow">
          <div className="categoryItem">
        <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="driver" width={80} height={80} />
            <p className='sub-para' >Uniform </p>
        </Link>
          </div>


        
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Books</p>
          </Link>
          </div>



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Bags</p>
          </Link>
          </div>


          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Kids School Lunch</p>
          </Link>
          </div>




          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Cab</p>
          </Link>
          </div>
          



          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>School Project</p>
          </Link>
          </div>
          


          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Accessories</p>
          </Link>
          </div>

          
          
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Book a Teacher</p>
          </Link>
          </div>


          
          
          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Book a Coach</p>
          </Link>
          </div>
          

          <div className="categoryItem">
          <Link href="/pages/subCategory/school">
            <Image src="/marasImg/helper.jpg" alt="cabimg" width={80} height={80} />
            <p>Hot Deals</p>
          </Link>
          </div> 

        </div>   
      </div> 
    </div>

       <Footer />
    </div>
    
  );
}
