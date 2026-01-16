import { Sidebar, SidebarCondicional } from "../components/Sidebar/Sidebar";

import { Outlet } from "react-router";

export const DespachadorLayout = () => {
    return (
        <div className="xl:h-[100vh] min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <SidebarCondicional/>
            <div className="xl:col-span-5 p-4">
                <div><Outlet/></div>
            </div>

            
            
        </div>
    )
}