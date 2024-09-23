import { useParams, useSearchParams } from "react-router-dom";

const CategoryDetail = () => {
    //hook
    const params = useParams();
    const [query, setQuery] = useSearchParams(); //for getting query
    
    return (<>
         <p className="m-10 p-10">
            Category detail of {params.slug}
         </p>
    </>)
}
export default CategoryDetail;