
import React from 'react';
import { Link } from 'react-router-dom';

function Students(props) {
    let Students=[
        {id:1,name:'Ishwari'},
        {id:2,name:'Gayatri'},
        {id:3,name:'Aboli'}
    ]
    return (
        <div>
            {
                Students.map((s)=>{
                    return(
                        <>
                        <Link to={`/Stud_Details/${s.id}`} key={s.id} className='myStud'>{s.name}</Link><br />
                        </>
                        
                    )

                })
            }
            
        </div>
    );
}

export default Students;