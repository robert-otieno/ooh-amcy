import TailGridAbout from "../components/v2/tailgrid_about";
import TailGridFeature from "../components/v2/tailgrid_features";
import TailGridFooter from "../components/v2/tailgrid_footer";
import TailGridHero from "../components/v2/tailgrid_hero";

export default function Home() {
  return (
    <>
      <TailGridHero />
      <TailGridFeature />
      <TailGridAbout />
      <TailGridFooter />
    </>
  );
}
