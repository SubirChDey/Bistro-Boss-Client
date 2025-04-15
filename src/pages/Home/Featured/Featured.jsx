import SectionTitle from "../../../components/SectionTitle"
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="mb-10 featured-item text-white bg-fixed">
            <section>
                <SectionTitle subHeading={'Check it out'} heading={'from our menu'}
                ></SectionTitle>
            </section>
            <div className="md:flex gap-8 justify-center items-center pb-20 pt-12 px-36 bg-slate-500/30">
                <div className="">
                    <img src={featuredImage} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2029</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis nobis, voluptatem atque rerum debitis laudantium possimus vel non quos aperiam earum officiis amet excepturi minus? Recusandae ut aut perferendis, animi repellendus vero maxime corporis facilis consectetur hic quibusdam quas ipsa tempora consequatur odit pariatur dolorum illo voluptas alias porro?</p>
                    <button className="btn btn-outline border-0 border-b-4">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Featured