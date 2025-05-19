import React from 'react'
import { appleImg } from '../utils'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray text-xs'>More ways to shop: {' '}
                    <span className='underLine text-blue'>
                        {' '} Find an Apple Store {' '}
                    </span>
                    or {' '} 
                    <span className='underLine text-blue'>
                        other retailer {' '}
                    </span>
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs'>Or call 0080-050-1943 {' '}
                    </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full' />
            <div className='flex sm:flex-row flex-col md:items-center justify-between'>
                <p className='font-semibold text-gray text-xs'>
                    Copyright @ 2025 Apple Inc. All rights reserved.
                </p>
                <div className='flex'>
                    {footerLinks.map((link, i) => (<p href={link} className='font-semibold text-gray text-xs'>
                        {link}{' '}
                        {i < footerLinks.length - 1 && ' | '}
                    </p>))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer