import React from 'react'

import Container from '../utils/Utils';
import { useTranslation } from 'react-i18next';
import "./Alll.css"
const BannerContent = ({h2_text,h1_text,population,territory,avgPrice}) => {
  const {t}=useTranslation()
  return (
    <>
    <h2 className='text-white text-[20px] md:text-[24px]'>{h2_text}</h2>
    <h1 className='text-white text-[32px] sm:text-[43px] md:text-[63px] font-bold my-3'>{h1_text}</h1>
    <button className='bg-main rounded-3xl  text-[14px] h-[47px] px-10 font-semibold mb-14 md:mb-28 hover:bg-white hover:text-main hover:border-main hover:border-[1px] transition-colors duration-500 btncolor'><a href="#info">{t('button.go')}</a></button>
    
    </>
  )
}

export default BannerContent