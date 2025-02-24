import React from "react";

export default function ProductDescription({ description }: any) {
  return (
    <>
      {description && (
        <div className="py-4 px-3 rounded-[10px]  border-[1px]">
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="desc-style"
          ></div>
        </div>
      )}
    </>
  );
}
