import AdvancedBenefits from "../../../Components/AdvancedBenefits";
import HowItWorks from "../../../Components/HowItWorks";
import OurHistory from "../../../Components/OurHistory";
import PaymentCard from "../../../Components/PaymentCard";
import WhyChooseUs from "../../../Components/WhyChooseUs/WhyChooseUs";
import TeamMarquee from "../../../Components/TeamMarquee";
import TestimonialCard from "../../../Components/TestimonialCard";
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";
import Guarantee from "../Guarantee/Guarantee";
import HeroSection from "../hero/HeroSection";
import SecuritySection from "../SecuritySection/SecuritySection";
import Subscription from "../Subscription/Subscription";
import WalletFeatures from "../../../Components/WalletFeatures";

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
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <Features></Features>
      </section>
      <HeroSection></HeroSection>

      <section>
        <section>
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
        <WalletFeatures></WalletFeatures>
      </section>
     
    </div>
  );
};

export default Home;
