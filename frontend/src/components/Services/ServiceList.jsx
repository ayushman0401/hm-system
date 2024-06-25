import React from 'react'
import {services} from './../../assets/data/services'
import ServiceCard from './ServiceCard'
const ServiceList = () => {
 return <div>
    {services.map((item,index)=><ServiceCard item={item} index={index} key={index}/>)}
 </div>
}

export default ServiceList
