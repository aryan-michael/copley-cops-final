"use client";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import CarouselImagesData from "../../../lib/CarouseImagesData"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

useEmblaCarousel.globalOptions = { loop: true };

const Hero = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent>
        {CarouselImagesData.map((item) => (
            <CarouselItem key={item?.id}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image src={item?.href} alt={item?.alt} width="1000" height="1000" className="w-full h-full rounded-lg aspect-video"/>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
          <div className="flex justify-between px-2 sm:px-4">
            <CarouselPrevious className="relative left-0 translate-y-0" />
            <CarouselNext className="relative right-0 translate-y-0" />
          </div>
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {/* Slide {current} of {count} */}
      </div>
    </div>
  );
};

export default Hero;
