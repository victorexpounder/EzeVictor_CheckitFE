
import { add, editCapsule, fetchCapsulesSuccess } from '@/Redux/capsuleSlice';
import { addfilter, editFilteredCapsule } from '@/Redux/filteredCapsuleSlice';
import { Field, Form, Formik } from 'formik';
import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

interface capsuleE {
    capsule_id : string,
    capsule_serial: string,
    status: string,
    original_launch: Date| string | number,
    type: string,
    details: string,
    landings: number
}

interface Props {
    selectedCapsule : capsuleE | null
}

const EditCapsuleForm = (props: Props) => {
    const capsules = useSelector((state: any)=> state.capsules.capsules)
    const filteredcapsules = useSelector((state: any)=> state.filteredCapsules.capsules)
    const dispatch = useDispatch();
    const {selectedCapsule} = props
    const searchValidationSchema = Yup.object({
        capsule_serial: Yup.string(),
        status: Yup.string(),
        original_launch: Yup.date().nullable(),
        type: Yup.string(),
    });

    const initialValues = {
        capsule_serial: selectedCapsule?.capsule_serial || '' ,
        status: selectedCapsule?.status || '',
        original_launch: selectedCapsule?.original_launch
        ? new Date(selectedCapsule.original_launch).toISOString().split('T')[0]
        : '',
        type: selectedCapsule?.type || ''
    };
    const statusOption = [
        '',
        'active',
        'destroyed',
        'unknown',
        'retired'
    ]

    const handleEditCapsule = (values: any)=>{
        dispatch(editCapsule({serial: selectedCapsule?.capsule_serial, updatedData: values}))
        dispatch(editFilteredCapsule({serial: selectedCapsule?.capsule_serial, updatedData: values}))
    }

    return (
        <div className='my-8 w-full overflow-x-scroll'>
            <Formik
            initialValues={initialValues}
            validationSchema={searchValidationSchema}
            onSubmit={(values) => handleEditCapsule(values)}
            >
            {({ errors, touched }) => (
                <Form className="p-4 flex flex-col items-center gap-8  sm:flex-row ">
                    <div className='w-full flex flex-col items-center '>
                        <label>Capsule Serial</label>
                        <Field name="capsule_serial" type="text" placeholder="capsule_serial" className=' w-full bg-transparent border border-gray-400 p-1' />
                        {errors.type && touched.type && <div>{errors.type}</div>}
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <label>Status</label>
                        <Field as="select" name="status" className='w-full bg-transparent border border-gray-400 p-1.5' >
                            {statusOption.map((item, index)=>(
                                <option value={item} key={index}>{item}</option>
                            ))}
                            
                        </Field>
                        {errors.status && touched.status && <div>{errors.status}</div>}
                    </div>

                    <div className='w-full flex flex-col items-center '>
                        <label>Original Launch</label>
                        <Field name="original_launch" type="date" placeholder="Launch Date" className='w-full bg-transparent border border-gray-400 p-1'/>
                        {errors.original_launch && touched.original_launch && <div>{errors.original_launch}</div>}
                    </div>

                    <div className='w-full flex flex-col items-center '>
                        <label>Type</label>
                        <Field name="type" type="text" placeholder="Type" className='w-full bg-transparent border border-gray-400 p-1' />
                        {errors.type && touched.type && <div>{errors.type}</div>}
                    </div>
                    <button type="submit" className='px-3 py-1 bg-[#8dd0ff] mt-5 hover:bg-[#71a7cd]'>Save</button>
                </Form>
            )}
            </Formik>

        </div>
    )

}

export default EditCapsuleForm
