import React, { useEffect, useState } from 'react'
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import FilterForm from './FilterForm';
import { Dialog } from 'primereact/dialog';
import AddData from './AddData';
import EditCapsuleForm from './EditCapsuleForm';
import ViewData from './ViewData';
interface Props {
    
}
interface capsule {
    capsule_id : string,
    capsule_serial: string,
    status: string,
    original_launch: Date| string | number,
    type: string,
    details: string,
    landings: number
}

const CapsuleTable = (props: Props) => {
    const [addVisible, setAddVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [visible, setVisible] = useState(false)
    const filterdCapsules = useSelector((state: any)=> state.filteredCapsules.capsules)
    const [selectedCapsule, setSelectedCapsule] = useState<capsule | null>(null)

    const handleEditModal = (capsule: capsule)=>{
        setSelectedCapsule(capsule)
        setEditVisible(true)

    }
    const handleViewModal = (capsule: capsule)=>{
        setSelectedCapsule(capsule)
        setVisible(true)

    }

    useEffect(()=>{
        setAddVisible(false)
        setEditVisible(false)
        setVisible(false)
    },[filterdCapsules])

    const header = (
        <div className=" w-full flex justify-between items-center text-[#fff]">
            <span className="text-xl text-900 font-bold">Capsules</span>
            <Button 
            icon="pi pi-plus" 
            rounded 
            raised 
            className='bg-[#fff] text-[#000]'
            onClick={()=> setAddVisible(true)}
             />
        </div>
    );

    return (
        <div>
            <FilterForm />
            <DataTable value={filterdCapsules} paginator rows={5} header={header} className='mt-11 rounded-lg'>
                <Column field="capsule_serial" header="Capsule Serial" />
                <Column field="original_launch" header="original_launch" />
                <Column field="status" header="Status" />
                <Column field="type" header="Type" />
                <Column body={(rowData) => <button onClick={()=>handleEditModal(rowData)} className='underline'>Edit</button>} header="Actions"  />
                <Column body={(rowData) => <button onClick={()=>handleViewModal(rowData)} className='underline'>View</button>}  />
            </DataTable>

            <Dialog header="Add Capsule" visible={addVisible} style={{ width: '80vw' }} onHide={() => {if (!addVisible) return; setAddVisible(false); }}>
                <AddData/>
            </Dialog>

            <Dialog header="Edit Capsule" visible={editVisible} style={{ width: '80vw' }} onHide={() => {if (!editVisible) return; setEditVisible(false); }}>
                <EditCapsuleForm selectedCapsule={selectedCapsule}/>
            </Dialog>

            <Dialog header="View Capsule" visible={visible} style={{width: '80vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <ViewData selectedCapsule={selectedCapsule}/>
            </Dialog>

        </div>
    )
}

export default CapsuleTable
