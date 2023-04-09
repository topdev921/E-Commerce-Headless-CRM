import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch';

const List = ({maxPrice, sort, subCat, catId}) => {

  const { loading, data, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )
    
  return (
    <div className='list'>
    {loading 
    ? "Loading..." 
    : data?.map(item => <Card item={item} key={item.id} /> )}
    </div>
  )
}

export default List