
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { getCapsules } from '@/getCapsules';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/Redux/capsuleSlice';
import { resetF } from '@/Redux/filteredCapsuleSlice';
import { Dialog } from 'primereact/dialog';
import AddData from './AddData';

export default function GroupDemo() {
    const toast = useRef(null);
    const dispatch = useDispatch();
    const [addVisible, setAddVisible] = useState(false)
    const filterdCapsules = useSelector((state: any)=> state.filteredCapsules.capsules)

    const Reset = async()=>{
        const capsulesres = await getCapsules()
        dispatch(reset(capsulesres))
        dispatch(resetF(capsulesres))
        console.log(capsulesres)
    }

    useEffect(()=>{
        setAddVisible(false)
        
    },[filterdCapsules])

    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                         setAddVisible(true)
                     }
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
        <div className="card flex justify-center min-h-full">
            <Toast ref={toast} />
            <Menu model={items} className='min-h-full '/>

            <Dialog header="Add Capsule" visible={addVisible} style={{ width: '80vw' }} onHide={() => {if (!addVisible) return; setAddVisible(false); }}>
                <AddData/>
            </Dialog>
        </div>
    )
}
        