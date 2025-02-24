import React from "react";

import { CircleHelp, RotateCcw, Share2, Timer, Truck } from "lucide-react";

export default function ProductConditions() {
  return (
    <div className="text-main-text pt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck />
          <span>Delivery & Return</span>
        </div>
        |
        <div className="flex items-center gap-2">
          <CircleHelp />
          <span>Ask A Question</span>
        </div>
        |
        <div className="flex items-center gap-2">
          <Share2 />
          <span>Sahre</span>
        </div>
      </div>
      <div className="pt-2">
         <div className="flex items-center gap-2 ">
             <Timer className="w-8 h-8" />
             <p>Estimated Delivery:  12-26 days(International), 3-6 days (United States)</p>
         </div>
         <div className="flex items-center gap-2 pt-1">
             <RotateCcw className="w-8 h-8" />
             <p>Return within 45 days of purchase. Duties & taxes are non-refundable.</p>
         </div>
      </div>
    </div>
  );
}
