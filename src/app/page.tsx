
import Dessert from "@/components/Dessert/Dessert";
import Drink from "@/components/Drinks/Drinks";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/HeroSection/Hero";
import MainCours from "@/components/MainCours/MainCourse";
import StarterMenu from "@/components/Menu/StartMenu";
import PartnersAndClients from "@/components/pattnerClient/pattnerClient";

export default function Home() {
  return (
<>

<div>


  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
</>
  );
}
