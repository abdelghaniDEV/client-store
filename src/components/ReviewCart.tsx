
import { reviewsItem } from "@/types";
import React from "react";


export default function ReviewCart({review} : reviewsItem) {
  return (
    <div className="border-b-[1px] py-5" >
      <div className="flex items-center gap-3">
        <div className="bg-main-primary p-2 uppercase font-[600] text-[20px] flex items-center justify-center h-14 w-14 rounded-full">
          {/* <User className="w-10 h-10 " /> */}
          {review.fullName.slice(0,2)}
        </div>
        <div>
          <h5 className="text-[20px] font-[500] leading-[20px]">
            {review.fullName}
          </h5>

          <h6 className="font-[500] leading-[20px]">{review.email}</h6>
          <p className="text-sm text-gray-500">{new Date(review.created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="pl-4 pt-1 md:pt-3">
        <p className="text-[19px] md:leading-[20px]  text-main-text">
          {review.comment}
        </p>
      </div>
    </div>
  );
}
