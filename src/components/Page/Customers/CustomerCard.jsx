/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function CustomerCard({ data, setSelected, setIsEditOn, setCustomers }) {

    function edit() {
        setSelected(data);
        setIsEditOn(true);
    }

    function deleteCustomer() {
        setCustomers((prev) => {
            return {
                ...prev,
                users: [
                    ...prev.users.filter((x) => x.id !== data.id)
                ]
            }
        })
    }

    return (
        <div className="flex justify-between w-full text-sm bg-white p-3 rounded-lg gap-6">
            <div className="w-3/12 flex items-center gap-3"><img className="w-[40px] rounded-full border-[1px] border-solid border-[#074234]" src={data.image} alt="" /> {data.firstName}  {data.lastName}</div>
            <div className="flex items-center w-2/12">{data.email}</div>
            <div className="flex items-center w-2/12 capitalize">{data.gender}-{data.age}</div>
            <div className="flex items-center w-2/12">{data.university}</div>
            <div className="flex items-center w-2/12">{data.phone}</div>
            <div className="flex items-center w-2/12 gap-9 ">
                <button onClick={deleteCustomer}><img src="/trash-solid.svg" alt="" /></button>
                <button onClick={edit}><img src="/edi.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default CustomerCard