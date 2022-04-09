function App() {
  return (
    <>
      <nav class="bg-white shadow-lg">
        <div className="px-4 max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a className="flex items-center py-4 px-2" href="#">
                  <img className="h-8 w-8 mr-2" src="images/house.png" alt="" />
                  <span className="semi-bold text-gray-500 text-lg">
                    Prime Properties
                  </span>
                </a>
              </div>
              <div className="hidden md:flex space-x-1 items-center">
                <a
                  className="py-4 px-2 text-green-500 font-semibold border-green-500 border-b-4"
                  href=""
                >
                  Home
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  Services
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  About
                </a>
                <a
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  href=""
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Site Banner */}

      <main className="mt-10 px-4 ">
        <div className="sm:text-center lg:text-left">
          <h1 className="font-extrabold text-4xl sm:5xl">
            <span className="block">Premium Properties</span>
            <span className="block text-green-500">Non-Premium Prices</span>
          </h1>
          <p>
            At prime properties, we ensure that our clients get the best
            properties at affordable prices.Luxury is our priority and budget is
            our constrain. Pick and choose from 1000+ properties across the
            globe.
          </p>
          <div>
            <div>
              <button></button>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </main>

      {/* Site Banner */}
    </>
  );
}

export default App;
