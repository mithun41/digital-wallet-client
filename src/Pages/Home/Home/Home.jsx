import AdvancedBenefits from "../../../Components/AdvancedBenefits";
import HowItWorks from "../../../Components/HowItWorks";
import MobileCard from "../../../Components/MobileCard";
import MutionCard from "../../../Components/MutionCard";
import OurHistory from "../../../Components/OurHistory";
import PaymentCard from "../../../Components/PaymentCard";
import TeamMarquee from "../../../Components/TeamMarquee";
import TestimonialCard from "../../../Components/TestimonialCard";
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";
import Guarantee from "../Guarantee/Guarantee";
import HeroSection from "../hero/HeroSection";
import SecuritySection from "../SecuritySection/SecuritySection";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <OurHistory></OurHistory>
      </section>
      <section>
        <Features></Features>
      </section>
      <HeroSection></HeroSection>

      <section>
        <section>
          {/* <MobileCard></MobileCard> */}
          <TeamMarquee></TeamMarquee>
        </section>
        <section>
          <HowItWorks></HowItWorks>
        </section>
        <section>
          <AdvancedBenefits></AdvancedBenefits>
        </section>
        <PaymentCard></PaymentCard>
      </section>
      <section>
        <SecuritySection />
      </section>
      <section>
        <Guarantee></Guarantee>
      </section>
      <section>
        <TestimonialCard></TestimonialCard>
      </section>
      <section>
        <Subscription></Subscription>
      </section>

      <section>
        <MutionCard></MutionCard>
      </section>
    </div>
  );
};

export default Home;
