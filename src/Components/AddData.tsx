
import { add, fetchCapsulesSuccess } from '@/Redux/capsuleSlice';
import { addfilter } from '@/Redux/filteredCapsuleSlice';
import { Field, Form, Formik } from 'formik';
import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';


interface Props {
    
}

const AddData = (props: Props) => {
    const capsules = useSelector((state: any)=> state.capsules.capsules)
    const filteredcapsules = useSelector((state: any)=> state.filteredCapsules.capsules)
    const existingSerials = filteredcapsules.map((capsule:any) => capsule.capsule_serial);
    const dispatch = useDispatch();

    const newCapsuleValidationSchema = Yup.object({
        capsule_serial: Yup.string()
        .required('Serial is required')
        .test('unique-serial', `This serial already exists`, function (value) {
        return !existingSerials.includes(value);
        }),
        status: Yup.string().required('Status is required'),
        original_launch: Yup.date().required('Original launch date is required'),
        type: Yup.string().required('Type is required')
    });

    const initialValues = {
        capsule_serial: '',
        status: '',
        original_launch: '',
        type: ''
    };
    const statusOption = [
        '',
        'active',
        'destroyed',
        'unknown',
        'retired'
    ]

    const handleAddCapsule = (newCapsule: any)=>{
        
            dispatch(add(newCapsule))
            dispatch(addfilter([newCapsule,...filteredcapsules]))
        
    }

    return (
        <div className='my-8 w-full overflow-x-scroll'>
            <Formik
            initialValues={initialValues}
            validationSchema={newCapsuleValidationSchema}
            onSubmit={(values) => handleAddCapsule(values)}
            >
            {({ errors, touched }) => (
                <Form className="p-4 flex flex-col items-center gap-8  sm:flex-row ">
                    <div className='w-full flex flex-col items-center '>
                        <label>Capsule Serial</label>
                        <Field name="capsule_serial"  type="text" placeholder="capsule_serial" className=' w-full bg-transparent border border-gray-400 p-1' />
                        {errors.capsule_serial && touched.capsule_serial && <div className='text-red-500'>{errors.capsule_serial}</div>}
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <label>Status</label>
                        <Field as="select" name="status"  className='w-full bg-transparent border border-gray-400 p-1.5' >
                            {statusOption.map((item, index)=>(
                                <option value={item} key={index}>{item}</option>
                            ))}
                            
                        </Field>
                        {errors.status && touched.status && <div className='text-red-500'>{errors.status}</div>}
                    </div>

                    <div className='w-full flex flex-col items-center '>
                        <label>Original Launch</label>
                        <Field name="original_launch"  type="date" placeholder="Launch Date" className='w-full bg-transparent border border-gray-400 p-1'/>
                        {errors.original_launch && touched.original_launch && <div className='text-red-500'>{errors.original_launch}</div>}
                    </div>

                    <div className='w-full flex flex-col items-center '>
                        <label>Type</label>
                        <Field name="type"  type="text" placeholder="Type" className='w-full bg-transparent border border-gray-400 p-1' />
                        {errors.type && touched.type && <div className='text-red-500'>{errors.type}</div>}
                    </div>
                    <button type="submit" className='px-3 py-1 bg-[#8dd0ff] mt-5 hover:bg-[#71a7cd]'>Add Capsule</button>
                </Form>
            )}
            </Formik>

        </div>
    )
}

export default AddData
