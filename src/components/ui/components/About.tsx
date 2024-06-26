"use client"
import Image from 'next/image'
import React from 'react'
import image from "@/assets/images/img_7.jpg"
export default function About() {
  return (
    <div id="about" className="relative bg-white overflow-hidden mt-16 h-[100vh]">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-[100vh] w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <div className="pt-1"></div>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              About Us
            </h2>
            <p>
              Tour guides familiarise people with the history, functions, and
              customs of a particular region or establishment. Though
              customers typically include foreigners on vacation, virtually
              any person can attend a tour.
            </p>
           
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <Image
        className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
        src={image}
        alt=""

      />
    </div>
  </div>
  )
}
