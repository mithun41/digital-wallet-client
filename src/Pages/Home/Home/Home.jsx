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
      <section className="mt-40">
        <Features></Features>
      </section>
      <section>
        <PaymentCard></PaymentCard>
      </section>
      <section>
        <SecuritySection/>
      </section>
    </div>
  );
};

export default Home;
