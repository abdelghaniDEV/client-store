"use client";
import {
  Check,
  Mail,
  MessageCircleCode,
  MessageSquare,
  Star,
 
  User2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createReview, getProductReviews } from "@/actions/actions";
import { useParams } from "next/navigation";
import ReviewCart from "./ReviewCart";
import { Skeleton } from "./ui/skeleton";

type data = {
  fullName: string;
  email: string;
  comment: string;
  rating: number;
  product: string;
  image?: File;
};

export default function ProductReview() {
  const params = useParams();
  const id = params.id as string;

  const [data, setData] = useState<data>({
    fullName: "",
    email: "",
    comment: "",
    rating: 1,
    product: id,
    image: undefined,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    comment: "",
    rating: "",
  });

  const [loadingData, setLoadingData] = useState(false);
  const [reviews, setReviews] = useState<any>();


  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoadingData(true);
        const reviewsTarget = await getProductReviews(id);
        setReviews(reviewsTarget);
        setLoadingData(false);
        console.log("reviws", reviewsTarget);
      } catch (err) {
        console.error(err);
        setLoadingData(false);
      }
    };
    fetchReview();
  }, [id]);

  // check data
  const checkData = () => {
    let isValid = true;
    const errors: any = {};

    if (!data.fullName) {
      isValid = false;
      errors.fullName = "Full Name is required";
    } else {
      errors.fullName = "";
    }

    if (!data.email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/i.test(data.email)) {
      isValid = false;
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }

    if (!data.comment) {
      isValid = false;
      errors.comment = "Comment is required";
    } else {
      errors.comment = "";
    }

    if (!data.rating) {
      isValid = false;
      errors.rating = "Rating is required";
    } else {
      errors.rating = "";
    }

    setErrors(errors);

    return isValid;
  };

  const submitReview = async (e: any) => {
    e.preventDefault();
    
    if (checkData()) {
      // send data to server
     
      try {
        const response = await createReview(data);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
  };
  const listSketelon = () => {
    return Array.from({ length: 5 }, (_, index) => {
      return (
        <div className="border-b-[1px] py-5 " key={index}>
          <div className="flex items-start gap-3">
            <Skeleton className="w-14 h-14 rounded-full " />

            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="text-[20px] font-[500] h-[20px] w-[200px] leading-[20px]" />
              <Skeleton className="font-[500] leading-[20px] w-[240px] h-[20px] " />

              <Skeleton className="pl-4 pt-1 md:pt-3 w-full h-[20px]" />
              <Skeleton className="pl-4 pt-1 md:pt-3 w-full h-[20px]" />
              <Skeleton className="pl-4 pt-1 md:pt-3 w-[80%] h-[20px]" />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="py-4 px-3 border-[1px] rounded-[10px]">
      <h4 className="text-[30px] font-[500]">{reviews?.count}- Comments</h4>
      <div className="py-4 grid grid-col-1 ">
        {loadingData
          ? listSketelon()
          : reviews?.ratings.map((review: any) => {
              return <ReviewCart review={review} key={review._id} />;
            })}
        {/* {reviews?.ratings.map((review: any) => {
          return <ReviewCart review={review} key={review._id} />;
        })} */}
      </div>
      {/* form  */}
      <div>
        <div className="relative">
          <h3 className="text-[30px] font-[500] leading-[20px] pb-3">
            Write a review
          </h3>
          <MessageCircleCode className="absolute top-[-4px] left-[175px]" />
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
}
