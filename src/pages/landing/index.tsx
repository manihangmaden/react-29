
import { BannerComponent } from "../../components/banner";
import { Heading3 } from "../../components/common/title";
import { ImageWithTitleCard, SingleProductCard } from "../../components/common/card/single-card.component.tsx";
import { NavLink } from "react-router-dom";


const LandingPage = () => {
   //const [banner, setBanner] = useState([]);
   return (
      <>
        

         <BannerComponent />

         <div className="flex justify-between mx-20 mt-20 py-1 border-b border-solid border-teal-500">
            <Heading3><>Category List</></Heading3>
            <NavLink className="bg-teal-700 text-white text-center py-1 rounded-lg w-40" to="/categories">
               View All &rarr;
            </NavLink>
         </div>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-20">
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
            <ImageWithTitleCard data={{_id:"", title:"Household", slug:"/category/household", image:"https://static-01.daraz.com.np/p/971d5bcc5fa821f11327401886716801.jpg"}}/>
         </div>




         <div className="flex justify-between mx-20 mt-20 py-1 border-b border-solid border-teal-500">
            <Heading3><>Product List</></Heading3>
            <NavLink className="bg-teal-700 text-white text-center py-1 rounded-lg w-40" to="/product">
               View All &rarr;
            </NavLink>
         </div>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-10">
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
            <SingleProductCard data={{}}/>
         </div>

      </> //this is end tagof  React.fragment which can also written as <React.fragment></React.fragment> 
   )
}

export default LandingPage;