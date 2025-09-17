import PaymentCard from "../../../Components/PaymentCard";
import Banner from "../../Banner/Banner";
import Features from "../Features/Features";

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
    </div>
  );
};

export default Home;
