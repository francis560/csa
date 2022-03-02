export const Hero = (props) => {
    return (
        <div className="w-full h-96 heroImg flex justify-center items-center">

            <div className="bg-white text-center p-6 rounded-md">
                {
                    props.data === "Colegio Santa Ana"
                    &&
                    <p className="mb-3 font-medium text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400">Bienvenidos al</p>
                }
                <h1 className="font-medium text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-400">{props.data}</h1>
            </div>

        </div>
    );
}