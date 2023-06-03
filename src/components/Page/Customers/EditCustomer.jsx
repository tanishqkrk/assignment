/* eslint-disable react/prop-types */
import { useState } from "react";

function EditCustomer({ selected, setIsEditOn, setCustomers }) {

    const [firstName, setFirstName] = useState(selected.firstName);
    const [lastName, setLastName] = useState(selected.lastName);
    const [email, setEmail] = useState(selected.email);
    const [age, setAge] = useState(selected.age);
    const [gender, setGender] = useState(selected.gender);
    const [university, setUniversity] = useState(selected.university);
    const [phone, setPhone] = useState(selected.phone);
    const newCustomer = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        age,
        gender,
        university,
        phone,
        image: selected.image
    }

    function saveCustomer() {
        setCustomers((prev) => {
            return {
                ...prev,
                users: [
                    ...prev.users.filter((x) => x.id !== selected.id),
                    newCustomer
                ]
            }
        })
        setIsEditOn(false)
    }

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-lg grid grid-cols-2 gap-6 shadow-2xl">
            <div className="text-lg font-bold">Add Customer</div>
            <button onClick={() => setIsEditOn(false)} className="flex justify-end">❌</button>
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
            <button onClick={saveCustomer} className="w-full text-center text-white bg-[#225B4B] flex items-center  justify-center rounded-lg">Save</button>
        </div>
    )
}

export default EditCustomer