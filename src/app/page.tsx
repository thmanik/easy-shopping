import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import PopularProducts from "@/components/PopularProducts";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <PopularProducts/>
      <Testimonial />
    </main>
  );
}