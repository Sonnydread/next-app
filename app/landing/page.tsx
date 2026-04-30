import Locales from "./locales";
import Navbar from "../landing/navbar";
import ParticleBreathingTest from "./particle-breathing-test";
import TrustIndicators from "./circleglow";
import DemoPreloader from "../landing/demo-preloader";
// import PageWithTOC from "../blog/toc-prem";

export default function Page() {
    return (

        <>
    <Navbar />
    <DemoPreloader />
    <Locales />
    <ParticleBreathingTest />
    <TrustIndicators />
    {/* <PageWithTOC /> */}
    </>
    )
}