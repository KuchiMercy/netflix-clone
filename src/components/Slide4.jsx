import image from "../assets/netflix-2.png"

const Slide4 = () => {
  return (
    <div>
        <div className="bg-black p-5 flex flex-col justify-evenly items-center md:flex-row">
            <div className="text-center text-white md:text-left ">
                <h1 className="text-4xl font-bold md:8xl ">Create profiles for kids</h1>
                <p className="text-lg pt-4 md:text-xl">Send kids on adventures with their favorite <br /> characters in a space made just for them—free <br /> with your membership.</p>
            </div>
            <div>
                <img width={550} src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Slide4