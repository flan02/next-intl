'use client'

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

type Props = {}


const Navbar = (props: Props) => {
  const [selected, setSelected] = useState('');
  const changeLanguage = (code: string) => {
    console.log(code);
    setSelected(code)
  }
  return (
    <>
      <ReactFlagsSelect
        countries={["MX", "US", "BR"]}
        customLabels={{ US: "EN-US", BR: "PO-BR", MX: "LAT-MX" }}
        placeholder="Select Language" selected={selected} onSelect={changeLanguage}

      />

      <hr />
      <br />
    </>

  )
}

export default Navbar