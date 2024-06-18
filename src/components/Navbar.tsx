'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";

type Props = {}


const Navbar = (props: Props) => {
  const [selected, setSelected] = useState('');
  const router = useRouter();

  const changeLanguage = (code: string) => {
    console.log(code);
    setSelected(code)
    router.push(`/${code.toLowerCase()}`)
  }
  return (
    <header className="lg:w-[1000px] md:w-[768px] sm:w-[640px] w-[500px] mx-auto">
      <ReactFlagsSelect
        countries={["MX", "US", "BR"]}
        customLabels={{ US: "EN-US", BR: "PO-BR", MX: "LAT-MX" }}
        placeholder="Select Language" selected={selected} onSelect={changeLanguage}
      />
    </header>

  )
}

export default Navbar