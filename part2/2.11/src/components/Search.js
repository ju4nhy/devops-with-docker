import React from 'react'

const Search = ({ searchFilter, handleFilterChange, setSearchFilter }) => {
  return (
    <div className="max-w-max mb-10 px-5 py-5 bg-orange-500 bg-opacity-30 border-2 border-purple-200 shadow-md">
      <h2 className="mb-1 text-lg font-bold">Find country</h2>
      <input
        className="h-8 px-2"
        value={searchFilter}
        onChange={handleFilterChange}
      />
      <button 
        className="h-8 lg:ml-2 px-2 lg:m-1 bg-orange-500 text-sm font-bold" 
        type="reset" 
        onClick={() => {setSearchFilter("")}}
      >
        Reset
      </button>
    </div>
  ) 
}

export default Search