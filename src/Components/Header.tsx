'use client'
import React, { useEffect, useState } from 'react'
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
interface Props {
    
}

const Header = (props: Props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // Check the initial theme on component mount
    useEffect(() => {
        const currentBackground = getComputedStyle(document.documentElement)
        .getPropertyValue('--background')
        .trim();
        
        // Set initial theme based on the current background color
        setIsDarkMode(currentBackground === '#0a0a0a'); // Assuming #0a0a0a is dark mode
    }, []);
    //toggle function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        const root = document.documentElement;
        if (!isDarkMode) {
            root.style.setProperty('--background', '#0a0a0a');
            root.style.setProperty('--foreground', '#ffffff');
        } else {
            root.style.setProperty('--background', '#ffffff');
            root.style.setProperty('--foreground', '#0a0a0a');
        }
      };
    return (
        <div className=' w-full flex justify-between p-1.5 items-center sm:p-2.5'>
            <div>Welcome <strong>Elon Musk</strong></div>
            <div className='card flex flex-wrap justify-content-center gap-4 items-center'>
                
               
                {isDarkMode?
                    <i className='pi pi-moon cursor-pointer' style={{ fontSize: '1.4rem' }} onClick={toggleTheme}></i>
                    :
                    <i className='pi pi-lightbulb cursor-pointer' style={{ fontSize: '1.4rem' }} onClick={toggleTheme}></i>
                }
                
                <Avatar label="E" size="normal" shape="circle" className='cursor-pointer'/>

            </div>
        </div>
    )
}

export default Header
