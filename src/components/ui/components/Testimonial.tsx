"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Ratings } from "../rating";

export default function Testimonial() {
  return (
    <div className="py-10 px-5">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
        <p className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
          He has excellent testimonials wherever he has been. One is pleased to
          note that the testimonials are not confined only to visitors who have
          come from another country.
        </p>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Web Developer
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            People who want a creative career path may enjoy web development.
            They can use their creativity skills to design layouts for pages
            that are easy and enjoyable to read. Many developers also use coding
            to produce unique effects for websites.
          </p>
          <ul className="mb-0 flex items-center justify-center">
          <Ratings variant="yellow" rating={5} />{" "}
          </ul>
        </div>
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Graphic Designer
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            People who want a creative career path may enjoy web development.
            They can use their creativity skills to design layouts for pages
            that are easy and enjoyable to read. Many developers also use coding
            to produce unique effects for websites.
          </p>
          <ul className="mb-0 flex items-center justify-center">

            <Ratings variant="yellow" rating={5} />{" "}
            {/* <Ratings onClick={() => setRating(rating + 1)} variant="yellow" rating={rating} />{" "} */}
          </ul>
        </div>
        <div className="mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">John Smith</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
            Marketing Specialist
          </h6>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            Effective marketing and promotion strategies generate interest and
            entice travellers by showcasing the unique features, attractions,
            and experiences that make a destination appealing.
          </p>
          <ul className="mb-0 flex items-center justify-center">
            <Ratings variant="yellow" rating={5} />{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
