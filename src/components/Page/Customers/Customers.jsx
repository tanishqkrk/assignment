import { useEffect, useState } from "react"

import AddCustomer from "./AddCustomer";
import CustomerCard from "./CustomerCard"
import EditCustomer from "./EditCustomer";

function Customers() {
    const [customers, setCustomers] = useState(null);
    const [isAddOn, setIsAddOn] = useState(false)
    const [isEditOn, setIsEditOn] = useState(false);
    const [selected, setSelected] = useState(null)
    async function fetchData() {
        try {
            const responseFetched = await fetch("https://dummyjson.com/users");
            const response = await responseFetched.json();
            setCustomers(response)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="flex flex-col px-4 w-5/6 gap-6 bg-[#F2F5FA]">
            {
                isAddOn && <AddCustomer setIsAddOn={setIsAddOn} setCustomers={setCustomers} />
            }
            {
                isEditOn && <EditCustomer selected={selected} setIsEditOn={setIsEditOn} setCustomers={setCustomers} />
            }
            <div className="flex justify-between w-full pt-3">
                <div className="text-3xl text-[#074234] font-semibold">Customer List</div>
                <button onClick={() => setIsAddOn(true)} className="bg-[#074234] p-2 rounded-md text-white  ">+Add Customer</button>
            </div>
            <div className="flex flex-col gap-5 ">
                <div className="flex justify-between w-full ">
                    <div className="w-3/12">Customer Name</div>
                    <div className="w-2/12">Email</div>
                    <div className="w-2/12">Gender-Age</div>
                    <div className="w-2/12">University</div>
                    <div className="w-2/12">Phone</div>
                    <div className="w-2/12">Actions</div>
                </div>
                <div className="overflow-y-scroll h-[80vh] py-6 flex flex-col gap-6">
                    {
                        customers && customers.users.sort((a, b) => b.id - a.id).map((customer) => {
                            return <CustomerCard setIsEditOn={setIsEditOn} setSelected={setSelected} key={customer.id} data={customer} setCustomers={setCustomers} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Customers