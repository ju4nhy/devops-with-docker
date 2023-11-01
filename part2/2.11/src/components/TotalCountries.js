import React from 'react'

const TotalCountries = ({ countryData, searchFilter }) => {
    return (
         <div className="mt-30 mb-5">
            {!searchFilter ? <h3 className="font-bold">Total of {countryData.length} countries</h3> : null}
        </div>
    )
}

export default TotalCountries