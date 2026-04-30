import ChefHero from "./landing/hero";
import AboutChef from "./landing/about";
import HistoriaTradicion from "./landing/alianza";
import ServicesChef from "./landing/servicios";
import DishesPortfolio from "./landing/dishes";
import CertificationsChef from "./landing/certificaciones";
import FooterCTA from "./landing/footer";
import Faqs from "./landing/faq";
import SimpleHeroSphere from "./landing/hero-text-sphere";
import TrustIndicators from "./landing/circleglow";
import ParticleBreathingTest from "./landing/particle-breathing-test";

export default function Page() {
  return(
    <>
    <ChefHero />
    <AboutChef />
    <HistoriaTradicion />
    <ServicesChef />
    <DishesPortfolio />
    <CertificationsChef />
    <Faqs />
    <FooterCTA />
    <SimpleHeroSphere />
    <TrustIndicators />
    <ParticleBreathingTest />
    </>
  )
}