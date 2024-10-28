import React from 'react'
import { useSelector } from 'react-redux'

interface Props {

}
interface capsule {
status : string
}

const CapsuleCards = (props: Props) => {
    const capsules = useSelector((state: any)=> state.capsules.capsules)
    const activeCapsules = capsules?.filter((capsule : capsule)  => capsule.status === "active");
    const destroyedCapsules = capsules?.filter((capsule : capsule) => capsule.status === "destroyed");
    return (
        <div className='flex flex-col gap-5 sm:gap-10 sm:flex-row mt-7'>
            <div className='w-full flex flex-col rounded-lg gap-4 p-6 border border-gray-400 bg-[#2a323d] text-white'>
                <p className='font-medium'>Total Capsules</p>
                <h3 className='font-bold'> {capsules?.length} </h3>
            </div>
            <div className='w-full flex flex-col rounded-lg gap-4 p-6 border border-gray-400'>
                <p className='font-medium'>Total Active Capsules</p>
                <h3 className='font-bold'>{activeCapsules?.length}</h3>
            </div>
            <div className='w-full flex flex-col rounded-lg gap-4 p-6 border border-gray-400'>
                <p className='font-medium'>Total Destroyed Capsules</p>
                <h3 className='font-bold'>{destroyedCapsules?.length}</h3>
            </div>
            
        </div>
    )
}

export default CapsuleCards
