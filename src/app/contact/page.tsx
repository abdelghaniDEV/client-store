"use client"
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Dynamically import MapContainer to ensure it's rendered only on the client side
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

export default function Contact() {
  const [position] = useState<[number, number]>([51.505, -0.09]);

  return (
    <div className="pb-10">
      <div className="w-full h-[20vh] xl:h-[35vh] mb-[30px] relative bg-[url(/BannerShop.png)] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px]">Contact</h1>
            <div className="flex gap- items-center text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">Contact</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-10" style={{ width: "100%", height: "500px" }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="z-[10]"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>أنا هنا!</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-10">
        <div>
          <h2 className="text-[35px] font-[500] pb-6">Send a message</h2>
          <form className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <Label>
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input type="text" className="rounded-none" placeholder="Full Name" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input type="text" className="rounded-none" placeholder="Email" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input type="text" className="rounded-none" placeholder="Subject" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>
                Message <span className="text-red-500">*</span>
              </Label>
              <textarea className="flex h-[150px] w-full border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Message" />
            </div>
            <Button>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
