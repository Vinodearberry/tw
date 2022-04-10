import "./App.css";

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

      <main className="mt-10 px-4 md:mt-16">
        <div className="sm:text-center lg:text-left">
          <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl">
            <span className="block">Premium Properties</span>
            <span className="block text-green-500">Non-Premium Prices</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
            At prime properties, we ensure that our clients get the best
            properties at affordable prices.Luxury is our priority and budget is
            our constrain. Pick and choose from 1000+ properties across the
            globe.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="md:m-2">
              <a
                className=" flex justify-center bg-green-500 text-white px-8 py-3 rounded-md"
                href=""
              >
                View properties
              </a>
            </div>
            <div className="md:m-2">
              <a
                className=" flex justify-center bg-green-100 text-green-700 px-8 py-3 rounded-md"
                href=""
              >
                Explore Locations
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Site Banner */}

      <div className="mt-5 flex p-10 justify-center">
        <h2 className="text-gray-500 text-3xl mb-2 ">Recent Properties</h2>
      </div>

      {/* Card Section */}
      {/* Card Container */}
      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* Card */}
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="images/home1.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">
              $4,500,000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
              View Property
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="images/home2.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">
              $4,500,000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
              View Property
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="images/home3.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Orchid Villa</div>
            <p className="text-gray-700">
              Located in the suburbs of california, orchid villa offers luxury
              with a modern touch. Equipped with green lighting and a rainwater
              harvesting system, this property is eco-friendly
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">
              $4,500,000
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Beds
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              7 Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block bg-green-500 rounded-full px-4 py-1 font-bold text-white mr-2 mb-2">
              View Property
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}

      {/* Banner */}

      <div className="h-screen py-20 backgroundOverlay">
        <div className="container mx-auto px-6 mt-40">
          <h2 className="text-4xl font-bold text-white mb-2">
            Experience Luxury Like Never Before
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            50+ Exotic locations across the globe.
          </h3>
          <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
            {" "}
            Explore Locations
          </button>
        </div>
      </div>

      {/* Banner */}

      {/* Site Banner */}

      <div className="mt-20 flex p-10 justify-center">
        <h2 className="text-gray-500 text-3xl mb-2 ">Locations</h2>
      </div>

      {/* Card Section */}
      {/* Card Container */}
      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* Card */}
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2" src="images/chicago.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">San Francisco</div>
            <p className="text-gray-700">
              San Francisco is often called "Everybody’s Favorite City," a title
              earned by its scenic beauty, cultural attractions, diverse
              communities, and world-class cuisine. Measuring 49 square miles,
              this very walk-able city is dotted with landmarks like the Golden
              Gate Bridge, cable cars, Alcatraz and the largest Chinatown in the
              United States. A stroll of the City’s streets can lead from Union
              Square to North Beach to Fisherman’s Wharf, with intriguing
              neighborhoods to explore at every turn. Views of the Pacific Ocean
              and San Francisco Bay are often laced with fog, creating a
              romantic mood in this most European of American cities.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2" src="images/newyork.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">New York</div>
            <p className="text-gray-700">
              New York, or New York City (NYC), is the largest city by
              population in the United States. It is at the southern end of the
              state of New York. New York's population is similar to London in
              the United Kingdom with over 8 million people currently living in
              it, and over 22 million people live in the bigger New York
              metropolitan area. It is the financial capital of the U.S. since
              it is home to the nation's stock market, Wall Street, and the One
              World Trade Center.
            </p>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full h-1/2" src="images/California.jpg" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">California</div>
            <p className="text-gray-700">
              California, officially the State of California, is a state in the
              western part of the United States, along the Pacific Ocean. It is
              the third biggest US state by land area (after Alaska and Texas)
              with 163,696 square mi (423,970 km2). It has more people than any
              other state with over 39 million people as of 2019. It also has
              more people than Canada. Its largest cities are Los Angeles, San
              Diego, San Jose, and San Francisco. The capital is Sacramento. The
              states around its borders are Arizona to the southeast, Oregon to
              the north, Nevada to the east and the Mexican state of Baja
              California to the south.
            </p>
          </div>
        </div>
      </div>

      {/* Card Section */}
    </>
  );
}

export default App;
