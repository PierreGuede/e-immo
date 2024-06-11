"use client"
import { NavBar } from "@/components/menu/header/NavBar";
import Image from "next/image";
import { LandingPage } from "./components/home/LanddingPage";
import PerkComponent from "./components/home/PerkComponent";
import StatisticPage from "./components/home/StatisticPage";
import { EmblaOptionsType } from 'embla-carousel'
import { CarouselSize } from "./components/home/HomeCarousel";
import Communes from "./components/home/CommuneComponent";
import TestomonialsComponents from "./components/home/TestimonialsComponents";
import QuestionAccordion from "./components/home/QuestionAccordion";
import OwnerComponent from "./components/home/OwnerComponent";
export default function Home() {
  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className="  ">
      <NavBar />
      <hr className="w-11/12 mx-auto border-1 border-[#123C3F]" />
      <LandingPage />
      <div className="space-y-8">
        <PerkComponent />
        <StatisticPage />
        <CarouselSize />
        <Communes />
        <TestomonialsComponents/>
        <QuestionAccordion/>
        <OwnerComponent/>
      </div>
    </div>
  );
}
