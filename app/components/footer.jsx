export const Footer = () => {
    return (
        <footer class="relative bg-blueGray-200 pt-8 pb-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="mt-6 lg:mb-0 mb-6">
                        <i class="cursor-pointer px-4 py-3 hover:bg-cyan-400 hover:text-white border-2 border-cyan-400 text-cyan-400 rounded-full uil uil-facebook-f"></i>
                        <i class="cursor-pointer px-4 mx-5 py-3 hover:bg-cyan-400 hover:text-white border-2 border-cyan-400 text-cyan-400 rounded-full uil uil-twitter"></i>
                        <i class="cursor-pointer px-4 py-3 hover:bg-cyan-400 hover:text-white border-2 border-cyan-400 text-cyan-400 rounded-full uil uil-instagram"></i>
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 px-4 ml-auto">
                            <span class="block text-sm font-semibold mb-2">Enlaces</span>
                            <ul class="list-unstyled">
                            <li>
                                <a class="text-gray-400 hover:text-cyan-400 font-medium pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Inicio</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-cyan-400 font-medium pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Nosotros</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-cyan-400 font-medium pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Admisiones</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-cyan-400 font-medium pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Contacto</a>
                            </li>
                            <li>
                                <a class="text-gray-400 hover:text-cyan-400 font-medium pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Pagos</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-gray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Created by </a>
                            <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">The CJ</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}