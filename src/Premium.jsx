import React from 'react';
import Card from './Card';
import API from './Api';
import API2 from './Api2';
import API3 from './Api3';
import API4 from './Api4';
import API5 from './Api5';

// return <Card url={item.url} name={item.name} />

function Premium() {
    return (
        <div className='Inner_Item'>
            {API.filter(item => item.category === "premium").map((filtereditem) => {
                return <Card url={filtereditem.url} name={filtereditem.name} />
            })}
            {API2.filter(item => item.category === "premium").map((filtereditem) => {
                return <Card url={filtereditem.url} name={filtereditem.name} />
            })}
            {API3.filter(item => item.category === "premium").map((filtereditem) => {
                return <Card url={filtereditem.url} name={filtereditem.name} />
            })}
            {API4.filter(item => item.category === "premium").map((filtereditem) => {
                return <Card url={filtereditem.url} name={filtereditem.name} />
            })}
            {API5.filter(item => item.category === "premium").map((filtereditem) => {
                return <Card url={filtereditem.url} name={filtereditem.name} />
            })}
        </div>
    )

}





export default Premium;