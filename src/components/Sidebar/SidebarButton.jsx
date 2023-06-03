// eslint-disable-next-line react/prop-types
function SidebarButton({ name, setSelected, icon }) {
    return (
        <button className="flex justify-center items-center gap-5 hover:bg-[#225B4B] py-4 transition-all transition-0.5s capitalize" onClick={() => setSelected(name)}>
            <img className="w-[25px]" src={icon} alt="" /><span>{name}</span>
        </button>
    )
}
export default SidebarButton