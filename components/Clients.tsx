"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="pt-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> fellow developers</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="min-h-[40vh] md:min-h-[50vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
