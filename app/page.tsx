"use client";

import React from "react";
import { NavbarDefault } from "@/components/navbar";
import CardGrid from "@/components/card-grid";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
function page() {
  return (
    <div>
      <NavbarDefault />
      <Hero />
      <CardGrid />
      <Contact />
    </div>
  );
}

export default page;
