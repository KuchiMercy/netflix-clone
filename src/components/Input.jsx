import { useState } from "react";

const Input = () => {
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
    };
    const handleChange = (event) => setInput(event.target.value);
  return (
    <div>
         <p className="text-lg md:text-2xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center md:flex-row my-4 "
          >
            <div>
              <input
                className="outline-none border-2 border-green-700 px-8 py-2 bg-transparent rounded m-1 text-white"
                type="email"
                name="email"
                value={input}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div>
              <button className="bg-primary text-white font-bold px-4 py-2 border-primary border-2 rounded">
                Get Started{" "}
              </button>
            </div>
          </form>
    </div>
  )
}

export default Input