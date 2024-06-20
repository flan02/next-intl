'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";
import { useStore } from "zustand";
import { useCountry } from "@/store/countriesStore";

type Props = {}

type Country = {
  selected: string;
  setSelected: (code: string) => void;

}

const Navbar = (props: Props) => {

  //const [selected, setSelected] = useState('');
  const countries: Country = useCountry() as Country;
  const router = useRouter();

  const changeLanguage = (code: string) => {
    //console.log(code);
    //setSelected(code);
    countries.setSelected(code);
    router.push(`/${code.toLowerCase()}`)
  }
  return (
    <header className="lg:w-[1000px] md:w-[768px] sm:w-[640px] min-w-[400px] mx-auto">
      <ReactFlagsSelect
        countries={["MX", "US", "BR", "FR", "JP", "DE"]}
        customLabels={{ US: "EN-US", BR: "PO-BR", MX: "LAT-MX", FR: "FR-FR", JP: "JP-JP", DE: "GER-DE" }}
        placeholder="Select Language" selected={countries.selected} onSelect={changeLanguage}
      />
    </header>

  )
}

export default Navbar