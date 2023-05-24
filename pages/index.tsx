import SwitchSection from "@/components/home/SwitchSection";
import SubmitSection from "@/components/home/SubmitSection";
import { DateTimeSection } from "@/components/home/DateTimeSection";

/**
 * Home page component.
 * Renders the main content of the home page.
 */
const HomePage = () => {
  return (
    <div className="container mx-auto h-[calc(100vh-188px)]">
      <SwitchSection />
      <DateTimeSection />
      <SubmitSection />
    </div>
  );
};

export default HomePage;
