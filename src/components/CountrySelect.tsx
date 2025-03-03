"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { order } from "@/types";
import Image from "next/image";

type country = {
  name: string;
  code: string;
  flag: string; //
  phoneCode: string;
};

interface CountryData {
  name: {
    common: string;
  };
  cca2: string;
  flags: {
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
}

type CountrySelectProps = {
  setData: React.Dispatch<React.SetStateAction<order>>;
  data: order;
  error : string;
};

export default function CountrySelect({ setData  , error}: CountrySelectProps) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryList = response.data.map((country: CountryData) => ({
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.svg,
          phoneCode: country.idd?.root
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
            : "N/A",
        }));
        console.log(response.data);
        setCountries(
          countryList.sort((a: country, b: country) =>
            a.name.localeCompare(b.name)
          )
        ); // ترتيب أبجدي
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="flex flex-col gap-2 relative">
      <Label>Country</Label>
      <Select
        onValueChange={(value) =>
          setData((prev) => ({ ...prev, country: value }))
        }
      >
        <SelectTrigger className={`w-full border-[1px] ${error && "border-red-500"}`}>
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country: country) => {
            return (
              <SelectItem key={country.code} value={country.name}>
                <div className="flex items-center gap-2">
                  <Image
                    className="w-6 h-5 "
                    width={24}
                    height={20}
                    src={country.flag}
                    alt={country.name}
                  />
                  <div>
                    {country.name} - {country.phoneCode}
                  </div>
                </div>
              </SelectItem>
            );
          })}
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-[12px] absolute bottom-[-18px]">{error}</p>}
    </div>
  );
}
