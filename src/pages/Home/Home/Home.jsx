import { Helmet } from "react-helmet-async"
import Testimonials from "../../Shared/Testimonials/Testimonials"
import Banner from "../Banner/Banner"
import CallUs from "../CallUs/CallUs"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Home | Bistro Boss</title>
        </Helmet>
      </div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home