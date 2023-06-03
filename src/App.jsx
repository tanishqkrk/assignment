import { useState } from "react"

import Sidebar from "./components/Sidebar/Sidebar"
import Customers from "./components/Page/Customers/Customers"

function App() {
  const [selected, setSelected] = useState("customers");

  return (
    <div className="flex h-screen">
      <Sidebar setSelected={setSelected} ></Sidebar>
      {
        selected === "dashboard"
          ?
          <></>
          :
          selected === "customers"
            ?
            <Customers />
            :
            <></>
      }
    </div>
  )
}

export default App