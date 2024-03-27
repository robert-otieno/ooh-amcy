import TailGridAbout from "../../app/components/v2/tailgrid_about";
import TailGridFeature from "../../app/components/v2/tailgrid_features";
import TailGridFooter from "../../app/components/v2/tailgrid_footer";
import TailGridHero from "../../app/components/v2/tailgrid_hero";

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
