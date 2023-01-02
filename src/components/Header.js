import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import nftranksLogo from '../assets/NFT_Ranks_Logo.svg'

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  return (
    <div className='flex m-4'>
        <a href='/'>
          <img className=' w-140 h-auto cursor-pointer'
          src={nftranksLogo}
          alt='nftranks Logo'
          />
        </a>
      <ul className='text-white flex'>
      <li>
          <Link to = "/"></Link>
        </li>
        <li>
          <Link to = "/ranking">Ranking</Link>
        </li>
        <li>
          <Link to = "/about">About us</Link>
        </li>
        <li>
          <Link Link to = "/project">Projects</Link>
        </li>
        <li>
          <Link Link to = "/portfolio">Portfolio</Link>
        </li>
        <li>
          <button className='text-white'>
            Connect Wallet
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}


export default Header;