import { FaList } from 'react-icons/fa';
import { TbLayoutGrid } from 'react-icons/tb';

function RightSideContainer() {
  return (
    <section className="col-span-9">
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center gap-12'>
          <select className="px-12 py-4 text-white bg-[#393939]" name="cars" id="cars">
            <option value="volvo">sort by average rate</option>
            <option value="volvo">sort by popularity</option>
            <option value="volvo">sort by latest</option>
            <option value="volvo">sort by price:low to high</option>
            <option value="volvo">sort by price:high to low</option>
          </select>
          <p>show all 9 results</p>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <p className='bg-[#D22756] text-white w-12 h-12 flex justify-center items-center'><TbLayoutGrid className='text-2xl'/></p>
            <p className='bg-[#393939] text-white w-12 h-12 flex justify-center items-center'><FaList className='text-2xl'/></p>
        </div>
      </div>
    </section>
  );
}

export default RightSideContainer;
