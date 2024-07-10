import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
              
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2024 Wroggle | All Rights Reserved</p>
                    <a href='https://www.linkedin.com/in/volodymyr-goshko-656ab920b/'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Contact admin@wroggle.com
                    </a>
                </div>
            </div>
        </footer>
    )
}
