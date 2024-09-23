import { Spinner } from "flowbite-react";

const LoadingComponent = ({size="xl"}:{size?:string}) => {
    return(<>
       <Spinner aria-label="Loading..." size={size} />
    </>)
}


export default LoadingComponent;