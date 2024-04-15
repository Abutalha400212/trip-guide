"use client"
import image from "@/assets/images/033eb769-6b07-47c3-845b-0d9ca4564fea.webp";
import image2 from "@/assets/images/img_2.jpg";
import image3 from "@/assets/images/img_3.jpg";
import image4 from "@/assets/images/img_4.jpg";
import image5 from "@/assets/images/img_5.jpg";
import Image from "next/image";
import BlogCard from "@/components/ui/components/BlogCard";
export default function Blog() {
    const blogs = [
        {
          id: "1",
          title: "A Global Affair",
          description:
            "Tour guides familiarise people with the history, functions, and customs of a particular region or establishment. Though customers typically include foreigners on vacation, virtually any person can attend a tour.",
          image: image2,
        },
        {
          id: "2",
          title: "A Journey Through Life",
          description:
            "Tour guides familiarise people with the history, functions, and customs of a particular region or establishment. Though customers typically include foreigners on vacation, virtually any person can attend a tour.",
          image: image3,
        },
        {
          id: "3",
          title: "A Traveler’s Journey",
          description:
            "Tour guides familiarise people with the history, functions, and customs of a particular region or establishment. Though customers typically include foreigners on vacation, virtually any person can attend a tour.",
          image: image4,
        },
        {
          id: "4",
          title: "Aboard Adventures",
          description:
            "Tour guides familiarise people with the history, functions, and customs of a particular region or establishment. Though customers typically include foreigners on vacation, virtually any person can attend a tour.",
          image: image5,
        },
      ];
  return (
    <div>
    <main className="pt-2 pb-16 lg:pt-8 lg:pb-4 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto">
        <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt="abc"
                  className="w-16 h-16 rounded-full mr-4"
                />

                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                  >
                    Abu Talha
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator & CEO Trip Guide
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time title="February 8th, 2022">Feb. 8, 2022</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              A Worldly Perspective
            </h1>
          </header>
          <p className="lead">
            We are recruiting a Tour Guide to join our company and run
            informative and engaging tours. As a Tour Guide, your
            responsibilities will include guiding tourists through the
            itinerary and sharing facts about history, local culture, and
            customs. Your duties include scheduling museum, galleries, and
            attraction visits, ensuring your tourist group remains safe, and
            maintaining and updating your knowledge.
          </p>

          <figure className="my-3">
            <Image src={image2} alt="" width={500} height={200} />
            <figcaption>Budapest, Hungery</figcaption>
          </figure>
          <h2 className="leading-tight font-semibold text-lg py-4">
            What does a Tour Guide do?
          </h2>

          <p>
            Tour guides familiarise people with the history, functions, and
            customs of a particular region or establishment. Though customers
            typically include foreigners on vacation, virtually any person can
            attend a tour.
          </p>
          <h2 className="leading-tight font-semibold text-lg py-4">
            Tour Guide Duties
          </h2>
          <div className="ml-6">
            <ul className="list-disc">
              <li> Greeting customers and sharing the tour’s itinerary.</li>
              <li>
                Ensuring tourists are prepared for the day’s weather forecast.
              </li>
              <li>
                Purchasing tickets and scheduling gallery, museum, and
                attraction visits.
              </li>
              <li>Relaying historical and interesting facts.</li>
              <li>Ensuring the safety of tour group members.</li>
              <li>Responding to customer illnesses and accidents.</li>
            </ul>
          </div>
          <h2 className="leading-tight font-semibold text-lg py-4">
            Tour Guide Requirements
          </h2>
          <div className="ml-6">
            <ul className="list-disc">
              <li> Diploma in Travel and Tourism.</li>
              <li>Local and historical knowledge (an advantage).</li>
              <li>Storytelling skills.</li>
              <li>Language skills (advantageous).</li>
              <li>Excellent verbal communication skills.</li>
              <li>
                Willingness to work during the weekends and on national
                holidays.
              </li>
            </ul>
          </div>

          <h2 className="leading-tight font-semibold text-lg py-4">
            How to write a Tour Guide Job Advert
          </h2>

          <p>
            Use our job advert template to write a job advert for posting on
            job sites and job boards. Our job advertising templates are
            carefully created to help you reach your audience and beat the
            competition to the best talent. A job description informs the
            reader about a job, whereas a job advert’s main objective is to
            sell the job opportunity to attract as many suitable applicants
            possible. A job advert maybe the first touch-point a candidate has
            with your company so it is important to create a great impression.
            Job Advertisements should enticing, so considering using short,
            exciting language which get the reader’s attention.
          </p>

          <h2 className="leading-tight font-semibold text-lg py-4">
            How to write a Tour Guide Job Description
          </h2>
          <p>
            To write a job description, we recommend starting with a job
            description template from our job description library, which
            contains examples for 800+ positions and professions. Our job
            description examples include a job summary with duties and
            responsibilities and skills and requirements, which can be
            personalised for your job vacancy.
          </p>
        </article>
      </div>
    </main>
    <aside
      aria-label="Related Articles"
      className="py-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="px-4 mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related Articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {blogs?.map((blog, i) => (
            <BlogCard key={i} props={blog} />
          ))}
        </div>
      </div>
    </aside>
  </div>
  )
}
