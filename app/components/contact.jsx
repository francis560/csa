export const Contact = () => {
    return (
        <section className="my-28">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">
                    <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Pregúntenos cualquier cosa</h2>
                </div>

                <form class="w-4/5 mx-auto mt-10">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            E-mail
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                        <button class="bg-gradient-to-r from-pink-300 to-cyan-400 focus:outline-none text-white font-medium py-2 px-6 rounded" type="button">
                            Enviar
                        </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>

                <hr className="my-28" />

                <div className="text-center">
                    <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Horario de apertura</h2>
                    
                    <p className="text-base text-gray-500 mt-8">Colegio: Lunes a Viernes | 7am a 1pm</p>
                    <p className="text-base text-gray-500 mt-4">Oficina: Lunes a Viernes | 9am a 1pm</p>
                </div>

                <hr className="my-28" />

                <div className="text-center">
                    <h2 class="mt-2 text-3xl leading-8 font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400 sm:text-4xl">Visítanos</h2>
                    
                    <p className="text-base text-gray-500 mt-8">Calle 16 de Agosto #180, Santiago de Los Caballeros</p>
                    
                    <p className="text-base text-gray-500 mt-4">Tel: 809-582-2697</p>
                    <p className="text-base text-gray-500 mt-4">Whassapp: 809-604-0483</p>
                </div>
                
            </div>

        </section>
    );
}