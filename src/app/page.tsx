"use client"
import Header from "@/Components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import GroupDemo from "@/Components/Sidebar";
import CapsuleCards from "@/Components/CapsuleCards";
import { useDispatch, useSelector } from "react-redux";
import { getCapsules } from "@/getCapsules";
import { fetchCapsulesSuccess } from "@/Redux/capsuleSlice";
import CapsuleTable from "@/Components/CapsuleTable";
import FilterForm from "@/Components/FilterForm";
import { addfilter } from "@/Redux/filteredCapsuleSlice";


export default function Home() {

  const capsules = useSelector((state: any)=> state.capsules.capsules)
  const dispatch = useDispatch();

  const fetchCapsules = async() =>{
    if(!capsules)
    {
      const capsulesres = await getCapsules()
      dispatch(fetchCapsulesSuccess(capsulesres))
      dispatch(addfilter(capsulesres))
      console.log(capsulesres)
    }

  }

  useEffect(()=>{
    dispatch(addfilter(capsules))
    fetchCapsules()

  }, [])

  return (
    <div className="flex min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="hidden lg:block">
          <GroupDemo/>
      </div>
      <div className="p-3 pb-10 w-full sm:py-5 sm:px-8 ">
        <Header/>  
        <CapsuleCards  /> 
        
        
        <CapsuleTable/>

        
        
      </div>
    </div> 
  );
}
