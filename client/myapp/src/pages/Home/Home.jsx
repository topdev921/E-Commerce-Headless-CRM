import React from 'react'
import './Home.scss'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
}

export default Home