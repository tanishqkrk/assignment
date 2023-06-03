import SidebarButton from "./SidebarButton"

// eslint-disable-next-line react/prop-types
function Sidebar({ setSelected }) {
    return (
        <div className="bg-[#074234] flex flex-col gap-3 w-1/6 h-screen text-white">
            <div className="text-2xl my-6 text-center border-b-[.4px] border-b-solid border-b-gray-100 pb-3">FundFlow</div>
            <SidebarButton setSelected={setSelected} name={"dashboard"} icon={"/house-solid.svg"} />
            <SidebarButton setSelected={setSelected} name={"customers"} icon={"/user-solid.svg"} />
        </div>
    )
}

export default Sidebar