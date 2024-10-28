import { fetchCapsulesSuccess } from '@/Redux/capsuleSlice';
import { addfilter } from '@/Redux/filteredCapsuleSlice';
import { Field, Form, Formik } from 'formik';
import { Dropdown } from 'primereact/dropdown'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

interface Props {
    
    
}

const FilterForm = (props: Props) => {
    const capsules = useSelector((state: any)=> state.capsules.capsules)
    const dispatch = useDispatch();

    const searchValidationSchema = Yup.object({
        status: Yup.string(),
        original_launch: Yup.date().nullable(),
        type: Yup.string(),
    });

    const initialValues = {
    status: '',
    original_launch: '',
    type: '',
    };
    const statusOption = [
        '',
        'active',
        'destroyed',
        'unknown',
        'retired'
    ]

    const handleSearch = (filters: any)=>{
        const filteredCapsules = capsules?.filter((capsule : any) =>
            (!filters.status || capsule.status.includes(filters.status)) &&
            (!filters.original_launch || (capsule.original_launch && capsule.original_launch.startsWith(filters.original_launch))) &&
            (!filters.type || capsule.type.replace(/\s+/g, '').toLowerCase().includes(filters.type.trim().toLowerCase()))
        );
        console.log(filters.status)
        dispatch(addfilter(filteredCapsules))
    }

    return (
        <div className='my-8 w-full overflow-x-scroll'>
            <Formik
            initialValues={initialValues}
            validationSchema={searchValidationSchema}
            onSubmit={(values) => handleSearch(values)}
            >
            {({ errors, touched }) => (
                <Form className=" flex items-center gap-8 ">
                    <div className='flex flex-col items-center'>
                        <label>Status</label>
                        <Field as="select" name="status" className='bg-transparent border border-gray-400 p-1.5' >
                            {statusOption.map((item, index)=>(
                                <option value={item} key={index}>{item}</option>
                            ))}
                            
                        </Field>
                        {errors.status && touched.status && <div>{errors.status}</div>}
                    </div>

                    <div className='flex flex-col items-center '>
                        <label>Original Launch</label>
                        <Field name="original_launch" type="date" placeholder="Launch Date" className='bg-transparent border border-gray-400 p-1'/>
                        {errors.original_launch && touched.original_launch && <div>{errors.original_launch}</div>}
                    </div>

                    <div className='flex flex-col items-center '>
                        <label>Type</label>
                        <Field name="type" type="text" placeholder="Type" className='bg-transparent border border-gray-400 p-1' />
                        {errors.type && touched.type && <div>{errors.type}</div>}
                    </div>
                    <button type="submit" className='px-3 py-1 bg-[#8dd0ff] mt-5 hover:bg-[#71a7cd]'>Search</button>
                </Form>
            )}
            </Formik>

        </div>
    )
}

export default FilterForm
