import ChefHero from "./landing/hero";
import AboutChef from "./landing/about";
import HistoriaTradicion from "./landing/alianza";
import DishesPortfolio from "./landing/dishes";
import CertificationsChef from "./landing/certificaciones";
import FooterCTA from "./landing/footer";
import Faqs from "./landing/faq";
import TrustIndicators from "./landing/circleglow";
import Navbar from "./landing/navbar";
import HorizontalScrollCarousel from "./landing/horizontal";
import ItemsPro from "./landing/items";

export default function Page() {
  return(
    <>
    <Navbar />
    <ChefHero />
    <AboutChef />
    <ItemsPro />
    <TrustIndicators />
    <HistoriaTradicion />
    <HorizontalScrollCarousel />
    <DishesPortfolio />
    <CertificationsChef />
    <Faqs />
    <FooterCTA />
    </>
  )
}