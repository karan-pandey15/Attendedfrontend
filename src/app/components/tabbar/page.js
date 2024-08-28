import Link from 'next/link';
import { FaThLarge } from 'react-icons/fa';

import { GrUserWorker } from "react-icons/gr";
import { FaTaxi } from "react-icons/fa"; 
import { FaInbox } from "react-icons/fa";
const TabBar = () => {
  return (
    <div className="w-full flex justify-around items-center bg-white p-2 sm:p-4  shadow-lg">
      <Link href="/pages/subCategory/attendate" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
      <GrUserWorker className="h-6 w-6 text-black" />
        <span className="text-sm sm:text-base font-medium">Attendante</span>
      </Link>
      <Link href="/pages/subCategory/cab" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
      <FaTaxi className="h-6 w-6 text-black" />
        <span className="text-sm sm:text-base font-medium">Cab </span>
      </Link>
      <Link href="/pages/subCategory/schoolLunch" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
      <FaInbox className="h-6 w-6 text-black" /> 
        <span className="text-sm sm:text-base font-medium">Lunch</span>
      </Link>
      <Link href="/" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 border border-gray-300">
        <FaThLarge className="h-6 w-6 text-black" /> 
      </Link>
    </div>
  );
};

export default TabBar;
