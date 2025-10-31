import AdvancedBenefits from "../../../Components/AdvancedBenefits";
import HowItWorks from "../../../Components/HowItWorks";
import OurHistory from "../../../Components/OurHistory";
import PaymentCard from "../../../Components/PaymentCard";
// import WhyChooseUs from "../../../Components/WhyChooseUs/WhyChooseUs";
import TeamMarquee from "../../../Components/TeamMarquee";
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";
import Guarantee from "../Guarantee/Guarantee";
import HeroSection from "../hero/HeroSection";
import SecuritySection from "../SecuritySection/SecuritySection";
import Subscription from "../Subscription/Subscription";
import WalletFeatures from "../../../Components/WalletFeatures";
import QrCode from "../../../Components/qr_code/Qr_code";
import OurShortCard from "../../../Components/OurShortCard";
import BankingCards from "../../../Components/BankingCards";
import OurMission from "../../../Components/ourMission/OurMission";
import QrCodeScanner from "../../../Components/scaner/QrCodeScanner";

import Testimonial from "../../../Components/Testimonial/Testimonial";
import FAQSection from "../../FAQSection/FAQSection";

const Home = () => {
  return (
    <div className="">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <OurMission></OurMission>
      <section>
        <OurHistory></OurHistory>
      </section>
      <section>
        <WalletFeatures></WalletFeatures>
        {/* </section>
      <OurShortCard></OurShortCard>
      <section> */}
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
      <Testimonial></Testimonial>

      <section>
        <BankingCards></BankingCards>
        <FAQSection></FAQSection>
      </section>
      <section>
        <Subscription></Subscription>
      </section>
    </div>
  );
};

export default Home;
