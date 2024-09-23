import { useEffect, useState } from "react"
import SliderComponent from "../common/slider"
import { SingleSlider } from "../common/slider/__contracts/slider.contract"
import image1 from "../../assets/images/mountain.jpg"
import image2 from "../../assets/images/dharan.jpg"
import image3 from "../../assets/images/cloud.jpg"


export const BannerComponent = () => {

    const [bannerData, setBannerData] = useState([] as Array<SingleSlider>)
    const getAllBanner = () => {
        //load API
        const response: Array<SingleSlider> = [{
            _id: "",
            title: "Banner one",
            image: image1,
            link: "https://google.com"
        },
        {
            _id: "",
            title: "Banner two",
            image: image2,
            link: "https://google.com"
        },
        {
            _id: "",
            title: "Banner three",
            image: image3,
            link: "https://google.com"
        }
    ]
    setBannerData(response);
    }
    useEffect(() => {
        //TODO API caller
        getAllBanner()
    }, [])

    return (<>
            <div className="p-2 h-72 sm:h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[1100px] w-full">
            <SliderComponent data={bannerData}/>
            </div>
    </>)
}

// 