import React from 'react'

export default function FormReview() {
  return (
    <div>
        <div className="relative">
          <h3 className="text-[22px] font-[500] leading-[20px] pb-3">
            Write a review
          </h3>
          <MessageCircleCode className="absolute top-[-4px] left-[135px]" />
        </div>
        <form className="">
          <div className="flex flex-col gap-3">
            <div>
              <Select
                onValueChange={(e) =>
                  setData((prev) => {
                    return { ...prev, rating: Number(e) };
                  })
                }
                value={data.rating.toString()}
              >
                <SelectTrigger
                  className={`w-[180px] border-[1px] ${
                    errors.rating && "border-red-500"
                  } text-yellow-500`}
                >
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent className="text-yellow-500">
                  <SelectItem value="1">
                    <div>
                      <Star />
                    </div>
                  </SelectItem>
                  <SelectItem value="2">
                    <div className="flex items-center gap-1">
                      <Star />
                      <Star />
                    </div>
                  </SelectItem>
                  <SelectItem value="3">
                    <div className="flex items-center gap-1">
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </SelectItem>
                  <SelectItem value="4">
                    <div className="flex items-center gap-1">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </SelectItem>
                  <SelectItem value="5">
                    <div className="flex items-center gap-1">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-[60%]">
              <Input
                type="text"
                placeholder="Full Name "
                className={`${errors.fullName && "border-red-400"}`}
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, fullName: e.target.value };
                  })
                }
              />
              <User2 className="absolute top-2 right-2 h-6 w-6 text-main-text" />
            </div>
            <div className="relative w-[80%]">
              <Input
                type="text"
                placeholder="Email Adress "
                className={`${errors.email && "border-red-400"}`}
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
              <Mail className="absolute top-2 right-2 h-6 w-6 text-main-text" />
            </div>
            <div className="relative">
              <textarea
                onChange={(e) =>
                  setData((prev) => {
                    return { ...prev, comment: e.target.value };
                  })
                }
                placeholder="Comment "
                className={` ${
                  errors.comment && "border-red-500"
                } flex h-[180px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
              />
              <MessageSquare className="absolute top-2 right-2 h-6 w-6 text-main-text" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="relative pt-1">
                  <input
                    type="checkbox"
                    value="lowstock"
                    className="custom-checkbox"
                    // onChange={handleStockChange}
                    // checked={stock === "lowstock"}
                  />
                  <Check className="bx bx-check absolute top-[2px] right-[2px] h-4 w-4 text-white pointer-events-none font-[600]" />
                </div>
                <label>I agree with the terms and conditions</label>
              </div>
              <Button
                onClick={submitReview}
                className="w-full bg-main-secondary text-main-primary text-[20px] font-[400]"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
  )
}
