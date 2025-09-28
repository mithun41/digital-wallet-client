import MobileCard from "../../../Components/MobileCard";
import MutionCard from "../../../Components/MutionCard";
import OurHistory from "../../../Components/OurHistory";
import PaymentCard from "../../../Components/PaymentCard";
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
        <Features></Features>
      </section>
      <HeroSection></HeroSection>

      <section>
        <section>
          <MobileCard></MobileCard>
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
      <section><Subscription></Subscription></section>
      <section>
        <MutionCard></MutionCard>
      </section>
    </div>
  );
};

export default Home;
