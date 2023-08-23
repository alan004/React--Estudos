import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function BaseHeading() {
    return (
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}