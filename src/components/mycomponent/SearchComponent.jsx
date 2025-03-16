import React from 'react'

function SearchComponent() {
  return (
    <>
    <form action="/search" class="w-full px-4">
        <div className="relative">
            <input type="text"  class="w-full border h-12 shadow p-4 rounded-lg dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder= "search here.." />
        </div>
    </form>

    </>

  )
}
export default SearchComponent