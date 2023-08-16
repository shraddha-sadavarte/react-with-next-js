"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
  const [user, setUser] = useState("Shraddha");
  return (
    <>
      <Header user={user}/>
    </>
  )
}

export default page
