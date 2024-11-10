
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { getCapsules } from '@/getCapsules';
import { useDispatch } from 'react-redux';
import { reset } from '@/Redux/capsuleSlice';
import { resetF } from '@/Redux/filteredCapsuleSlice';

export default function GroupDemo() {
    const toast = useRef(null);
    const dispatch = useDispatch();


    const Reset = async()=>{
        const capsulesres = await getCapsules()
        dispatch(reset(capsulesres))
        dispatch(resetF(capsulesres))
        console.log(capsulesres)
    }

    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                
                {
                    label: 'Reset',
                    icon: 'pi pi-sign-out',
                    command: () => {
                       Reset()
                        
                    }
                }
            ],
            
        }
    ];

    return (
        <div className="card flex justify-content-center min-h-full">
            <Toast ref={toast} />
            <Menu model={items} className='min-h-full '/>
        </div>
    )
}
        