
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {
    
  const { loading, data, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat dicta qui voluptates odit tenetur dolores quasi dolorem deleniti? Saepe voluptatem rem suscipit exercitationem debitis repudiandae illum. Repellendus, cumque corrupti.</p>
        </div>
        <div className="bottom">
            {error ? "Something went wrong!" : (loading ? "loading..." :
            data?.map(item => (
                <Card 
                    key={item.id}
                    item={item}
                />
            )))}
        </div>
    </div>
  )
}

export default FeaturedProducts