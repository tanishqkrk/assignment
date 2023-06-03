import { useEffect, useState } from "react"


function AddCustomer({ setIsAddOn, setCustomers }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(16);
    const [gender, setGender] = useState("Male");
    const [university, setUniversity] = useState("");
    const [phone, setPhone] = useState("");

    const newCustomer = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        age,
        gender,
        university,
        phone
    }

    function addCustomer() {
        if (firstName !== "" && lastName !== "" && email !== "" && age >= 16 && university !== "" && phone !== "") {
            setCustomers((prevList) => {
                return {
                    ...prevList,
                    users: [
                        ...prevList.users,
                        newCustomer
                    ]
                }
            })
        }
        setIsAddOn(false)
    }

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg grid grid-cols-2 gap-6 shadow-2xl">
            <div className="text-lg font-bold">Add Customer</div>
            <button onClick={() => setIsAddOn(false)} className="flex justify-end">❌</button>
            <input value={firstName} onChange={(e) => setFirstName(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="First Name" />
            <input value={lastName} onChange={(e) => setLastName(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="Last Name" />
            <input value={email} onChange={(e) => setEmail(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="Email" />
            <input value={age} onChange={(e) => setAge(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="Age" />
            <div className="flex items-center gap-6">
                <div className="flex items-center justify-center gap-2">
                    <input onInput={() => setGender(() => "Male")} name="gender" value={gender} id="male" className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="radio" placeholder="Gender" />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <input onInput={() => setGender(() => "Female")} name="gender" value={gender} id="female" className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="radio" placeholder="Gender" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <input value={university} onChange={(e) => setUniversity(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="University" />
            <input value={phone} onChange={(e) => setPhone(() => e.target.value)} className="border-[#074234] rounded-md p-2 border-solid border-[1px]" type="text" placeholder="Phone" />
            <button onClick={addCustomer} className="w-full text-center text-white bg-[#225B4B] flex items-center  justify-center rounded-lg">+Add</button>
        </div>
    )
}

export default AddCustomer