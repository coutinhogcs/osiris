import { Inspirations, InspirationLink } from "../components/Inspirations";
import First from "../section-home/first";
import Second from "../section-home/second";

export function Home() {
  const links: InspirationLink[] = [
    { year: 2024, teamName: "JU-Krakow", pageName: "" },
    { year: 2024, teamName: "GEMS-Taiwan", pageName: "" },
    { year: 2024, teamName: "Heidelberg", pageName: "" },
    { year: 2024, teamName: "Marburg", pageName: "" },
    { year: 2024, teamName: "Sydney-Australia", pageName: "" },
    { year: 2024, teamName: "Toulouse-INSA-UPS", pageName: "" },
    { year: 2024, teamName: "BNDS-China", pageName: "" },
    { year: 2024, teamName: "Vilnius-Lithuania", pageName: "" },
    { year: 2024, teamName: "BNUZH-China", pageName: "" },
    { year: 2024, teamName: "XMU-China", pageName: "" },
  ];

  return (

    <section>
      <First />
      <Second />
    </section>
  );
}
