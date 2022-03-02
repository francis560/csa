import { About } from "~/components/about";
import { Gallery } from "~/components/gallery";
import { Hero } from "~/components/hero";
import { Philosophy } from "~/components/philosophy";
import { Project } from "~/components/project";
import { Testimonials } from "~/components/testimonials";


export default function Index () {
  return (
    <div>

      <Hero data="Colegio Santa Ana" />

      <div className="px-20 py-28">

        <hr />

        <Philosophy />

        <hr />

        <Project />

        <hr />

        <About />

        <hr />

        <Testimonials />

        <hr />

        <Gallery />

        <hr />

      </div>

    </div>
  );
}