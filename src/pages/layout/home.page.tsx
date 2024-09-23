import { Outlet } from "react-router-dom";
import { HomeHeader } from "../../components/common/header"

const HomePageLayout = () => {
    return (<>
       <HomeHeader/>
         <Outlet/>
       <footer className="bg-slate-300 py-5 text-center mt-5">
           &copy; All Rights reserveed.
       </footer>

    </>)
}

export default HomePageLayout;