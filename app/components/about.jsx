export const About = () => {
    return (
        <section className="my-28">

            <div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center">
                        <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Conoce mas de nosotros</h2>
                    </div>

                    <div class="mt-16">
                        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            
                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-300 to-cyan-400 text-white">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffff" d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z"/></svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-cyan-400">Misión</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    El Colegio Santa Ana es una Institución Católica que ofrece una educación integral de calidad, fundamentada en los valores evangélicos, éticos y morales, que llevan al ser humano a transformar la historia desde su vivencia de fe y compromiso comunitario; desarrollando competencias que le garanticen desempeños satisfactorios en su vida.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-300 to-cyan-400 text-white">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffff" d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/></svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-cyan-400">Visión</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Ser un centro educativo comprometido con una educación integral cimentado en valores cristianos y en la excelencia académica, con una propuesta pedagógica innovadora, acorde al avance de la ciencia y la tecnología, que se caracteriza por la formación de niños, niñas y adolescentes gestores de su propio desarrollo, que asumen en libertad su vivencia de fe y se comprometen en la transformación de la sociedad.
                                </dd>
                            </div>

                            <div class="relative">
                                <dt>
                                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-300 to-cyan-400 text-white">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#ffff" d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"/></svg>
                                    </div>
                                    <p class="ml-16 text-lg leading-6 font-medium text-cyan-400">Valores</p>
                                </dt>
                                <dd class="mt-2 ml-16 text-base text-gray-500">
                                    Experiencia de Dios, Respeto, Caridad, Responsabilidad, Humildad, Fraternidad, Autodisciplina, Alegría, Servicio, Criticidad, Conciencia Ecológica.
                                </dd>
                            </div>

                        </dl>
                    </div>

                </div>
            </div>

        </section>
    );
}