import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link href={"/users"}>users</Link>
      <ProductCard></ProductCard>
    </div>
  );
};

export default page;
