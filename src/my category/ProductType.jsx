import React from "react"


export default function ProductType({onTypeChange}){

        return (
            <div>
                <div className="flex flex-col bg">
                    <label>Filter Product Type</label>
                    <select
                    onChange={(e)=>{onTypeChange(e.target.value)}}
                    >
                        <option value="">All</option>
                        <option value="seasonal">Seasonal</option>
                        <option value="non-seasonal">Non-Seasonal</option>
                    </select>
                    
                </div>
            </div>
        )
}