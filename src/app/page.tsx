import { CarouselPlugin } from "@/components/ui/components/CarouselPlugin";
import Overview from "@/components/ui/components/Overview";
import { SearchCard } from "@/components/ui/components/SearchCard";
import image_2 from "@/assets/images/img_2.jpg";
import image_3 from "@/assets/images/img_3.jpg";
import image_4 from "@/assets/images/img_4.jpg";
import image_5 from "@/assets/images/img_5.jpg";
import Testimonial from "@/components/ui/components/Testimonial";

export default function Home() {
  const images: any[] = [image_2, image_3, image_4, image_5];
  return (
    <div className="">
      <div className="space-y-5">
        <CarouselPlugin images={images} content={<SearchCard />} />
        <Overview />
        <Testimonial/>
      </div>
    </div>
  );
}
