import { Hero } from "~/components/hero";
import { Contact } from "~/components/contact";


export default function Contacto () {
    return (
        <div>

            <Hero data="Contacto" />

            <div className="px-20 py-28">

                <hr />

                <Contact />

                <hr />

            </div>

        </div>
    );
}