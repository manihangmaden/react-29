import { Carousel } from "flowbite-react";
import { SingleSlider } from "./__contracts/slider.contract"

const SliderComponent = ({ data }: { data: Array<SingleSlider> }) => {
    return (<>
        <Carousel>
            {
                data && data.map((row: SingleSlider, i: number) => (
                    row.link ? <a key={i} href={row.link} ><img src={row.image} className="object-fill h-72 sm:h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[1100px] w-full" alt={row.title} /></a> : <img key={i} src={row.image} alt={row.title} />

                ))
            }
        </Carousel>

    </>)
}

export default SliderComponent;
{/* <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}


