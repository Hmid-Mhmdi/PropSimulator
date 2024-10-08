import BannerSection from "@/components/banner-section";
import PlansSection from "@/components/plans-section";

// dynamic metadata

export async function generateMetadata() {
  // can get value from server
  return {
    title: "Prop Simulator",
    description: "Generated by -Hamid-Mohamdi",
  };
}

const Home = () => {
  return (
    <main>
      <div className="h-96  max-w-max bg-red-500"></div>
      <div className="h-96  max-w-max bg-yellow-500"></div>
      <BannerSection />
      <div className="h-96 max-w-max"></div>
      <PlansSection />
      <div className="h-96 max-w-max"></div>
    </main>
  );
};

export default Home;
