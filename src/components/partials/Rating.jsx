import React from 'react'

const Rating = ({ rating }) => {

    if (rating === '5') {
        return (
            <>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            </>
        ) 
    }else if(rating === '4'){
        return (
            <>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star"></i>
            </>
        ) 
    }else if(rating === '3'){
        return (
            <>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            </>
        ) 
    }else if(rating === '2'){
        return (
            <>
            <i class="ti-star full"></i>
            <i class="ti-star full"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            </>
        ) 
    }else if(rating === '1'){
        return (
            <>
            <i class="ti-star full"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            </>
        ) 
    }else if(rating === ''){
        return (
            <>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            <i class="ti-star"></i>
            </>
        ) 
    }
  
}

export default Rating