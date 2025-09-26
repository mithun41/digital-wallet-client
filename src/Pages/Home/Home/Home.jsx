import MobileCard from "../../../Components/MobileCard";
import PaymentCard from "../../../Components/PaymentCard";
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";
import SecuritySection from "../SecuritySection/SecuritySection";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Features></Features>
      </section>

      <section>
        <PaymentCard></PaymentCard>
      </section>
      <section>
        <SecuritySection />
      </section>
      <section>
        <MobileCard></MobileCard>
      </section>
    </div>
  );
};

export default Home;
