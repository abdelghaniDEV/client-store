import React from "react";
import { ChevronRight, Hourglass, Palette, ShieldCheck } from "lucide-react";
import Link from "next/link";
import TitleHome from "@/components/ui/TitleHome";
import imgAbout from "@/assets/img-1-about-us.jpg";
import imagAbout01 from "@/assets/img-2-about-us.jpg";
import Image from "next/image";
import Features from "@/components/home/Features";

export default function page() {
  return (
    <div>
      <div className="w-full h-[20vh] xl:h-[35vh]   mb-[30px] relative bg-[url(/BannerShop.png)] bg-[80%] bg-cover ">
        <div className="flex flex-col items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center md:b-[25px] md:pb-[20px]">
            <h1 className="text-[35px] font-[600] lg:text-[55px] ">About</h1>
            <div className="flex gap- items-center  text-[15px] lg:text-[17px]">
              <Link href={"/"}>Home</Link>
              <ChevronRight />
              <h2 className="text-gray-400">About</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="pb-4">
          <TitleHome>
            Congue quisque egestas diam in arcu cursuspotenti nullamac tortor
          </TitleHome>
          <p className="text-[20px] leading-[25px] font-[300] text-[#555] pt-4">
            Nibh ipsum consequat nisl vel. Non arcu risus quis varius quam
            quisque id diam vel. Eu turpis egestas pretium aeneian phare tra
            magna ac placerat vestibulum. Amet iorem ipsum ulimate sed aium quis
            eleifend quam adipiscing. Viverra nibh cras pulvinar mattis nunc
            sed. Ut enim blandit volutpat maecen as volu tpat bland it aliquam.
            Quam adipiscing vitae serdtiuo erthui eqtuier ziol eleifend eque
            egestas.congue quisque egestas diam in arcu cursuspotenti nullamac
            tortor vitae purus faucibus ornare suspendisse.
          </p>
          <div className="pt-4">
            <Image
              src={imgAbout}
              alt="about"
              width={100}
              height={100}
              className="w-full h-[100%]"
              unoptimized
            />
          </div>
          {/* <p className="text-[20px] leading-[25px] font-[300] text-[#555] pt-4">
            Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam
            cidunulla. Diam in arcu cursus euismod quis. Eget sit amet tellus
            amet cras adipiscing enim aiumLorem ipsum dolor sit amet, comftyr
            nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labolire pretium lectu et doloreVenenatis tellus in metus vulputate
            eu scelerisque felis. Vel pretium lectus lore ipasium ulimate sed
            aium sedr in quam id leo in vitae massa dipiscing elit, Nunc id cur
            Libero id fauci and bus and movern nisl tincidunt eget. In fermentum
            eiquam id diam maecenas ultricies mi eget mauris. ertiuoes gerio
            tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper
            velit sed.
          </p> */}
        </div>
        <div className="py-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <span className="text-[20px]">OUR SKILLS</span>
              <h2 className="text-[40px] leading-[40px] py-4 font-[500]">
                To Serve You, To Comfort You We Are All For You
              </h2>
              <div className="flex gap-4 flex-col">
                <div className="flex items-center gap-3">
                  <Palette className="w-[100px] h-[100px]" />
                  <div>
                    <h4 className="text-[25px]">Simple Design</h4>
                    <p className="text-[17px] leading-[25px] text-[#555] pr-10">
                      A arcu cursus vitae congue mauris. Sagittis id consectetur
                      lorem sed ulimate lorem tellus pellentesque eu tincidunt
                      tortor aliquam nulla.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-[100px] h-[100px]" />
                  <div>
                    <h4 className="text-[25px]">High Quality</h4>
                    <p className="text-[17px] leading-[25px] text-[#555] pr-10">
                      Nunc id cur Libero id fauci and bus and movern nisl
                      tincidunt egetm oium cirtyus auio In fermentum eiquam id
                      diam maecenas ultricies mi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Hourglass className="w-[100px] h-[100px]" />
                  <div>
                    <h4 className="text-[25px]">All Day Service</h4>
                    <p className="text-[17px] leading-[25px] text-[#555] pr-10">
                      Vel pretium lectus lore ipasium ulimate sed aium sedr amet
                      tellus nunic eiqum tortor in quam id leo in vitae massa
                      dipiscing elit, Nunc id cur
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={imagAbout01}
                alt="about"
                width={100}
                height={100}
                className="w-full h-[100%]"
                unoptimized
              />
            </div>
          </div>
        </div>
        
      </div>
      <Features />
    </div>
  );
}
