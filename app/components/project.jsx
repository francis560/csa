import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/arrows";


export const Project = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className="w-full my-28">


            <Slider className="heroImg py-12 flex justify-center items-center rounded-md" {...settings}>
                <div className="bg-white text-center p-6 rounded-md">

                    <div className="text-center">
                        <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Proyecto Educativo</h2>
                    </div>

                    <div className="mt-7 text-center">
                        <p className="text-base text-gray-500">La comunidad educativa sanchina del Colegio Santa Ana es una verdadera familia que educa en y desde el amor, en la que reina la armonía, la alegría, el respeto, la actitud de colaboración, la acogida, la aceptación del pluralismo, el trato afable y el trabajo en equipo. Es una comunidad de sólida experiencia de Dios, en la que se celebra y defiende la vida; que a partir del testimonio de fe y el servicio solidario hacia los más necesitados, vivencia los valores humanos y cristianos y es abierta a los cambios con capacidad de emprender nuevos proyectos. Estamos comprometidos con la educación de calidad, desarrollando en nuestros alumnos las competencias que construyen los aprendizajes significativos, a través de una comunidad de docentes empoderados de su vocación de educadores, apertura a los medios tecnológicos y una gestión de eficacia y calidad.</p>
                    </div>

                </div>
               
                <div className="bg-white text-center p-6 rounded-md">

                    <div className="text-center">
                        <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Lo que piensan los padres</h2>
                    </div>

                    <div className="mt-7 text-center">
                        <p className="text-base text-gray-500">Mi nombre es Jacqueline Acevedo A. Soy la madre del alumno Frank González Acevedo, actualmente mi hijo paso a 6to. de Secundaria, este será su último año escolar en su querido Colegio Santa Ana, de sobremanera me gustaría compartir estas palabras con ustedes, me siento sumamente agradecida de las enseñanzas, tanto en lo académico como en su formación espiritual. Él en este momento está en un torneo de baseball en Estados Unidos y Dios mediante regresará para terminar su bachillerato en su Colegio. Esperando que el todopoderoso derrame muchas bendiciones a todo el personal del Colegio Santa Ana, a sus profesores y a las monjas de la Congregación del Cardenal Sancha, por su esfuerzo en el pasado año escolar. La plataforma virtual, fue un buen avance para el desarrollo de la educación, esperando que la misma se pueda mantener, hasta nosotros lograr controlar la pandemia actual. Muchísimas Gracias.</p>
                    </div>

                </div>
            </Slider>

        </section>
    );
}