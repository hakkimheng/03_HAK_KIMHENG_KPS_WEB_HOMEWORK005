"use client";
import { usePathname, useRouter } from 'next/navigation'; // Use this for App Router
import React, { useState } from 'react';

function SearchComponent() {
  const [selectedValue, setSelectedValue] = useState('');
  const router = useRouter();
  
  const pathname = usePathname(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedValue.trim()) {
      router.push(`${pathname}?search=${selectedValue}`);
    }
    else{
      router.push(`/book-categories`);
    }
  };
  const handleChange = (e) => {
    setSelectedValue(e.target.value); // Update state to reflect input
  };

  return (
    <form className="w-full px-4" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          onChange={handleChange}
          value={selectedValue}
          type="text"
          className="w-full border h-12 shadow p-4 rounded-lg dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
          placeholder="Search here.."
        />
      </div>
    </form>
  );
}

export default SearchComponent;