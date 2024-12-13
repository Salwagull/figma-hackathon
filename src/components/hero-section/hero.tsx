import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="flex gap-[20px] ml-[20px] items-center mt-[30px] ">
        <div>
        <Image
          src="/images/ads1.svg"
          width={640}
          height={360}
          alt="ads1"
          
        />
        </div>
        <div>
  
    <Image
      src="/images/ads2.svg"
      width={640}
      height={360}
      alt="ad2"
    />
        </div>
      </div>
<div className=' flex'>
<div className="w-[582px] h-[132px] mt-[30px] rounded-[10px] bg-white ml-[20px]  flex flex-col px-[16px]">
  <div className='flex mt-[10px]'>
  <Image
    src="/images/mark.svg"
    width={16}
    height={16}
    alt="logo"
   
  />
  <p className="font-bold text-[16px] ml-[10px]">Pick-Up</p>
</div>
  {/* Input Container */}
  <div className='flex flex-grow  gap-[24px] ml-[10px]'>
    <div className='w-[126px] h-[48px]'>
      <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Locations</h1>
      <select name="city" id="city"  className='w-[108px] h-[20px]'>
      <option value="" disabled selected>Select your city</option>
        <option value="karachi">karachi</option>
        <option value="lahore">lahore</option>
        <option value="islamabad">islamabad</option>
        </select>
      
    </div>
    <p className='border-r-[1px] border-gray-200'></p>


    <div className='w-[126px] h-[48px]'>
   <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Date</h1>
   <select name="Select your Date" id="Date"  className='w-[108px] h-[20px]'>
   <option value="" disabled selected>Select your Date</option>
     <option value="karachi">1</option>
     <option value="lahore">2</option>
     <option value="islamabad">3</option>
     </select>
 </div>
 <p className='border-r-[1px] border-gray-200'></p>
 <div className='w-[126px] h-[48px]'>
   <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Time</h1>
   <select name="Select your Date" id="Date"  className='w-[108px] h-[20px]'>
<option value="" disabled selected>Select your Time</option>
  <option value="karachi">4 to 5</option>
  <option value="lahore">7 to 8</option>
  <option value="islamabad">12 to 1</option>
  </select>  
  
  </div>
 </div>
  </div>
  <div className='w-[60px] h-[60px] bg-blue-700 mt-[50px] ml-[30px] '>
<Image
src="/images/switch.svg"
width={18.08}
height={16.33}
alt="arrow"
className=' justify-center item-center text-center mt-[20px] ml-[20px]'
/>
</div>
{/* Pick-Up Section */}
<div className="w-[582px] h-[132px] mt-[30px] rounded-[10px] bg-white ml-[40px]  flex flex-col px-[16px]">
  {/* Icon and Label */}
  <div className='flex mt-[10px]'>
  <Image
    src="/images/mark.svg"
    width={16}
    height={16}
    alt="logo"
   
  />
  <p className="font-bold text-[16px] ml-[10px]">Drop - Off</p>
</div>
  {/* Input Container */}
  <div className='flex flex-grow  gap-[24px] ml-[10px]'>
    <div className='w-[126px] h-[48px]'>
      <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Locations</h1>
      <select name="city" id="city"  className='w-[108px] h-[20px]'>
      <option value="" disabled selected>Select your city</option>
        <option value="karachi">karachi</option>
        <option value="lahore">lahore</option>
        <option value="islamabad">islamabad</option>
        </select>
      
    </div>
    <p className='border-r-[1px] border-gray-200'></p>


    <div className='w-[126px] h-[48px]'>
   <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Date</h1>
   <select name="Select your Date" id="Date"  className='w-[108px] h-[20px]'>
   <option value="" disabled selected>Select your Date</option>
     <option value="karachi">1</option>
     <option value="lahore">2</option>
     <option value="islamabad">3</option>
     </select>
 </div>
 <p className='border-r-[1px] border-gray-200'></p>
 <div className='w-[126px] h-[48px]'>
   <h1 className='font-bold text-[16px] leading-[24px] font-PlusJakartaSans'>Time</h1>
   <select name="Select your Date" id="Date"  className='w-[108px] h-[20px]'>
<option value="" disabled selected>Select your Time</option>
  <option value="karachi">4 to 5</option>
  <option value="lahore">7 to 8</option>
  <option value="islamabad">12 to 1</option>
  </select>
 </div>
  </div>
</div>
      </div>
{/* tart cards*/}
<div className='w-[1312px]  h-[44px]  gap-[1076px] flex mt-[10px]'>
<div className='w-[132px] h-[44px]  rounded-[4px] px-[20px]  gap-[8px] '>
    <p className='w-[92px] h-[24px] text-center'>Popular Car</p>
</div>
<div className='w-[104px] h-[44px] px-[20px] text-blue-400'>View All</div>
</div>
{/*  main row1cards*/}

<div className='w-[1312px] h-[452px] gap-[32px] items center ml-[30px] flex'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Koenigsegg</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div> 
        <div className="flex justify-center items-center mt-[50px]">
        <Image
    src="/images/car.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification1.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$99.00/ 
    <p className='text-gray-300 text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
 
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Nissan GT-R</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡
        
</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
        <Image
    src="/images/car2.svg"
    width={232}
    height={72}
    alt='car pic'
    
    />
    </div>
    <Image
  src="/images/spesification2.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
  <div className='flex'>$80.00/<p className='text-gray-300  text-[15px]'>day</p></div> 
  <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$100.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Rolls - Royce</h1>
        <p className='text-gray-300 '>Sedan</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
    <Image
        src="/images/car3.svg"
        width={232}
        height={72}
        alt="car pic"
    />
</div>
   <Image
  src="/images/spesification3.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$96.00/ 
    <p className='text-gray-300  text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>Nissan GT - R</h1>
        <p className='text-gray-300 '>Sport</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡</div>
        </div>
        <div className="flex justify-center items-center mt-[66px]"> 
        <Image
    src="/images/car2.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification2.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '><div className='flex'>$80.00/
    <p className='text-gray-300  text-[15px]'>day</p></div> <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$100.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>
</div>
<div>
    <p className='w-[196px] h-[44px] text-center px-[20px]'>Recomendation Car</p>
    </div>

<div className='w-[1312px] h-[388px] gap-[32px] items center ml-[30px] flex'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>All New Rush</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡</div>
        </div> 
        <div className="flex justify-center items-center mt-[50px]">
        <Image
    src="/images/car4.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification5.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$72.00/ 
    <p className='text-gray-300 text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>CR  - V</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
        <Image
         src="/images/car5.svg"
         width={232}
         height={72}
         alt='car pic'
    
    />
    </div>
    <Image
  src="/images/spesification6.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
  <div className='flex'>$80.00/<p className='text-gray-300  text-[15px]'>day</p></div> 
 </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px] whitespace-nowrap'>All New Terios</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
    <Image
        src="/images/car6.svg"
        width={232}
        height={72}
        alt="car pic"
    />
</div>
    <Image
  src="/images/spesification7.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$74.00/ 
    <p className='text-gray-300  text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>
<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>CR  - V</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div>
        <div className="flex justify-center items-center mt-[66px]"> 
        <Image
    src="/images/car7.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification6.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '><div className='flex'>$80.00/
    <p className='text-gray-300  text-[15px]'>day</p></div> </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

    </div>
{/*3rd*/}
{/*main row1cards*/}

<div className='w-[1312px] h-[388px] gap-[32px] items center ml-[30px] flex mt-[20px]'>
    {/*1stcards*/}
<div className='w-[304px] h-[388px] rounded-[10px]  bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px] whitespace-nowrap'>MG ZX Exclusice</h1>
        <p className='text-gray-300 '>Hatchback</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div> 
        <div className="flex justify-center items-center mt-[50px]">
        <Image
    src="/images/car8.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification8.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col'>$76.00/ 
    <p className='text-[14px] mt-[0px]  leading-[17.64px] text-gray-400 font-normal'>$80.00</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>
    Rent Now
   </button>
    </div>
</div>
 


<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>New MG ZS</h1>
        <p className='text-gray-300 '>SUV</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
        <Image
    src="/images/car9.svg"
    width={232}
    height={72}
    alt='car pic'
    
    />
    </div>
    <Image
  src="/images/spesification6.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
<div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '>
  <div className='flex'>$80.00/<p className='text-gray-300  text-[15px]'>day</p></div> 
 </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>MG ZX Excite</h1>
        <p className='text-gray-300 '>Hatchback</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♥️</div>
        </div> 
        <div className="flex justify-center items-center mt-[66px]">
    <Image
        src="/images/car10.svg"
        width={232}
        height={72}
        alt="car pic"
    />
</div>
    <Image
  src="/images/spesification9.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex'>$74.00/ 
    <p className='text-gray-300  text-[15px]'>day</p></div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>

<div className='w-[304px] h-[388px] rounded-[10px] bg-white '>
    <div  className='flex'>
    <div className='w-[128px] h-[48px] top-[24px] left-[24px] mt-[10px] ml-[10px]'>
        <h1 className='font-bold text-[20px] leading-[30px]'>New MG ZS</h1>
        <p className='text-gray-300 '>Suv</p>
        </div>
        <div className='ml-[100px] mt-[20px]'>♡</div>
        </div>
        <div className="flex justify-center items-center mt-[66px]"> 
        <Image
    src="/images/car11.svg"
    width={232}
    height={72}
    alt='car pic'

    />
    </div>
    <Image
  src="/images/spesification6.svg"
  width={256}
  height={24}
  alt='car pic'
  className='mt-[66px]'
/>
  <div className='flex gap-[4px] mt-[20px]'>
  <div className='w-[116px] h-[44px] mt-[10px] gap-[4px]  font-bold text-[20px] leading-[25.2px] flex-col '><div className='flex'>$80.00
    <p className='text-gray-300  text-[15px]'>day</p></div> </div>
   <button className='w-[116px] h-[44px] rounde[4px] bg-blue-700 px-[20px] text-white font-semi-bold text-[16px]'>Rent Now</button>
    </div>
</div>
</div>
<div className="flex justify-center items-center gap-[8px] mt-[20px]">
  <button className="w-[156px] h-[44px] rounded-[4px] px-[20px] text-white bg-blue-500 whitespace-nowrap">
    Show more car
  </button>
  <p className="text-gray-400 whitespace-nowrap">
    120 Car
  </p>
</div>

</div>
  
  );
};

export default Hero;