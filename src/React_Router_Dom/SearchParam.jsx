// import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// function SearchParam(props) {
//     let [searchParam,setSearchParam]=useSearchParams()
//     let price = searchParam.get('price_range')

//     function update(e)
//     {
//        setSearchParam({price_range: e.target.value})
//     }



//     return (
//         <div>
//             Select Range : <input type="range" min={10000} max={100000} onChange={update} />
//             <span>{price}</span>
            
//         </div>
//     );
// }

// export default SearchParam;



import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParam(props) {
    let [searchParam,setSearchParam] = useSearchParams();

    let price = searchParam.get('price')
    let cat = searchParam.get('cat')
    let sub =searchParam.get('sub')


    function update()
    {
        setSearchParam({price:1000,cat:'Men',sub:'T-shirt'})
    }
    return (
        <div>
            <button onClick={update}>Set Parameters</button><br />
            price: {price}
            <br />
            Category: {cat}
            <br />
            Sub_Cat: {sub}
            
        </div>
    );
}

export default SearchParam;