import AdvancedBenefits from "../../../Components/AdvancedBenefits";
import HowItWorks from "../../../Components/HowItWorks";
import MobileCard from "../../../Components/MobileCard";
import MutionCard from "../../../Components/MutionCard";
import OurHistory from "../../../Components/OurHistory";
import PaymentCard from "../../../Components/PaymentCard";
<<<<<<< HEAD
import WhyChooseUs from "../../../Components/WhyChooseUs/WhyChooseUs";
=======
import TeamMarquee from "../../../Components/TeamMarquee";
>>>>>>> 7821e1eda25375449def8b2bae779baedbd6ade8
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";
import Guarantee from "../Guarantee/Guarantee";
import HeroSection from "../hero/HeroSection";
import SecuritySection from "../SecuritySection/SecuritySection";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  return (
    <div>
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
        <Subscription></Subscription>
      </section>

      <section>
        <MutionCard></MutionCard>
      </section>
    </div>
  );
};

export default Home;
