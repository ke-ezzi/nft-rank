import React from 'react';
import image_1 from '../assets/Mask group.svg'
import image_2 from'../assets/Rank 2.svg'
import image_3 from'../assets/Rank 1.svg'
import image_4 from'../assets/Diamond 2.svg'

const Home = () => {
  return (
    <div className="w-full">
    <div className=' text-white 2xl:max-w-7xl lg:max-w-4xl my-20 mx-auto'>
      <div className='text-center pt-20 pb-7'>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium'>Track Your Position</h1>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium'>in NFT World</h1>
      </div>
      <div className='text-center '>
        <p className='md:text-2xl sm:text-xl font-regular'> Get accurate data and</p>
        <p className='md:text-2xl sm:text-xl text-xl'>build reliable whitelists with NFT Ranks</p>
      </div>
      <button className='
        bg-[#D6F866] rounded-md font-semibold 
        md:text-xl sm:text-xl text-0.5xl flex
        my-20 mx-auto px-8 py-3 text-black
      '>
        CHECK MY RANK
      </button>

    <div className='my-60 mx-auto grid md:grid-cols-2 place-items-center'>
      <div>
        <div className='md:text-5xl sm:text-4xl text-3xl font-medium pb-10'>
        <h2>Welcome</h2>
        <h2 className='mt-2'>to the Jungle</h2>
        </div>
      <div className='md:text-xl sm:text-0.5xl mr-10 box border border-none w-[480px] h-auto'>
        <p className='pb-4'>
        NFT Ranks was created by NFT Degens who are highly interested in building service to provide ranking system of wallets and NFT projects in addition to NFT portfolio analysis. 
        </p>
        <p>
        The ranking parameters are set to comprehend whether the owner contributes to NFT eco-system or not. As we aim to help build sound NFT culture , the criterion for the ranking varies and do not focus on profit one has made.
        </p>
      </div>
      </div>
      <img 
      className='w-[1000px] h-auto'
      src={image_1}
      alt='image_1'
      />
    </div>


    <div className='mx-auto my-60 '>
      <div className='flex flex-col justify-center items-center' >
        <h2 className='
          md:text-5xl sm:text-4xl text-3xl font-medium m-10
        '>Check Out Your Portfolio</h2>
        <img 
        className='
        w-[945px] h-auto'
        src={image_2}
        alt='image_2'
      />
      <div className='mx-auto grid md:grid-cols-2 place-items-center box-border border none max-w-[800px] border-none w-400'>
      <p className='md:text-xl sm:text-0.5xl mx-2 '>NFT Ranks was created by NFT Degens who are highly interested in building service to provide ranking system of wallets and NFT projects in addition to NFT portfolio analysis. </p>
      <p className='md:text-xl sm:text-0.5xl mx-2 '>NFT Ranks was created by NFT Degens who are highly interested in building service to provide ranking system of wallets and NFT projects in addition to NFT portfolio analysis. </p>
      </div>
      </div>
    </div>


    <div className='mx-auto grid md:grid-cols-2 place-items-center my-60'>
    <img 
      className='w-[1000px] h-auto'
      src={image_3}
      alt='image_3'
      />
      <div className='mx-20'>
      <h2 className='md:text-5xl sm:text-4xl text-3xl font-medium my-10'>Do You Rank On?</h2>
      <p className='box border md:text-xl sm:text-0.5xl border-none w-[420px] h-auto'>
      Rankings are indicators of how your choices
      have influenced your portfolio and NFT culture
      in positive way. Investment credit ratings will
      be granted according to specific criteria.
      People above a certain score get an honorable
      role called Diamond Hands. On the contrary,
      people with low scores receive a roll called
      Paper Hands.
      </p>
      </div>
    </div>

    
    <div className='mx-auto grid md:grid-cols-2'>
      <div>
      <h2 className='md:text-5xl sm:text-4xl text-3xl font-medium my-10'>Shine Like a Diamond</h2>
      <p className='box border md:text-xl sm:text-0.5xl border-none  mr-20 w-[474px] h-auto'>
      We can sort out wallets into three levels: diamond hands, normal hands, 
      and paper hands. We also have further plan to create community with diamond hands and adopt DAO system. 
      </p>
      </div>
      <img 
      className='w-[540px] h-auto'
      src={image_4}
      alt='image_4'
      />
    </div>


    <div className='text-center py-60 pb-7'>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium'>Wanna be Together?</h1>
        <button className='
        bg-[#D6F866] rounded-md font-semibold 
        md:text-xl sm:text-xl text-0.5xl flex
        my-20 mx-auto px-8 py-3 text-black
      '>
        CHECK MY RANK
      </button>
    </div>
    </div>
    <div className='text-[#626262] m-4'>
      <p>© 2022 RAFFLE    |    All rights reserved</p>
    </div>
    </div>
  );
};

export default Home;