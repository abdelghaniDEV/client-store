"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { order } from "@/types";

interface Country {
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

interface FormattedCountry {
  name: string;
  code: string;
  flag: string;
  phoneCode: string;
}

type phoneNumberProps = {
  setData: React.Dispatch<React.SetStateAction<order>>;
  data: order;
  error : string;
};

export default function PhoneNumberInput({ setData , error }: phoneNumberProps) {
  const [countries, setCountries] = useState<FormattedCountry[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("+122");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchingCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = response.data
          .map((country: Country) => ({
            name: country.name.common,
            code: country.cca2,
            flag: country.flags.svg,
            phoneCode: country.idd?.root
              ? `${country.idd.root}${
                  country.idd.suffixes ? country.idd.suffixes[0] : ""
                }`
              : "",
          }))
          .filter((country: FormattedCountry) => country.phoneCode);

        setCountries(
          countryList.sort((a: FormattedCountry, b: FormattedCountry) =>
            a.name.localeCompare(b.name)
          )
        );

        const defaultCountry =
          countryList.find((c: FormattedCountry) => c.code === "US") ||
          countryList[0];
        setSelectedCountry(defaultCountry.phoneCode);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };
    fetchingCountries();
  }, []);

  const handelChange = (value: string) => {
    const country = countries?.find(
      (country: FormattedCountry) => country.code === value
    );

    if (country) {
      console.log("setSelectedCountry", country.phoneCode);
      setSelectedCountry(country.phoneCode);
    } else {
      console.warn("Country not found for code:", value);
    }
  };

  // const handlePhoneChange = useCallback(() => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     phone: selectedCountry + phoneNumber,
  //   }));
  // }, [phoneNumber, selectedCountry , setData]);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      phone: selectedCountry + phoneNumber,
    }));
  }, [phoneNumber, selectedCountry, setData]);

  return (
    <div className="flex flex-col gap-2 ">
      <Label>
        Phone Number <span className="text-red-500">*</span>
      </Label>
      <div className="flex gap-2 relative">
        <Select onValueChange={(value) => handelChange(value)}>
          <SelectTrigger className="w-[120px] border-[1px]">
            <SelectValue placeholder={selectedCountry} />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country: FormattedCountry) => {
              return (
                <SelectItem key={country.code} value={country.code}>
                  <div className="flex items-center gap-1">
                    <Image
                      className="w-5 h-4 "
                      width={20}
                      height={20}
                      src={country.flag}
                      alt={country.name}
                    />
                    <div>{country.phoneCode}</div>
                  </div>
                </SelectItem>
              );
            })}
            <SelectItem value="light">Light</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Entre Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {error && <p className="text-red-500 text-[12px] absolute bottom-[-18px]">{error}</p>}
      </div>
    </div>
  );
}
