import tv from "../assets/netflix-tv.png"

const Slide1 = () => {
  return (
    <div>
        <main className="bg-black p-5 text-white flex flex-col justify-evenly items-center pb-8 md:flex-row">
            <div>
                <h1 className="text-4xl font-bold md:8xl">Enjoy on your TV</h1>
                <p className="text-lg text-center pt-4 md:text-left md:text-xl">Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players, and <br /> more.</p>
            </div>
            <div>
                <img width={550} src={tv} alt="" />
            </div>
        </main>
    </div>
  )
}

export default Slide1