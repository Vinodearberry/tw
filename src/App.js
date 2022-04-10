import "./App.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
                    Deluxe Properties
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

      <main className="mt-10 px-4 md:mt-16 mx-auto max-w-7xl lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Premium Properties </span>
            <span className="block text-green-500 xl:inline">
              Non-Premium Prices
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
            At prime properties, we ensure that our clients get the best
            properties at affordable prices.Luxury is our priority and budget is
            our constrain. Pick and choose from 1000+ properties across the
            globe.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="md:m-2 mb-3">
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
          <img className="w-full " src="images/chicago.jpg" alt="" />
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
          <img className="w-full " src="images/ny.jpg" alt="" />
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
          <img className="w-full " src="images/California.jpg" alt="" />
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

      {/* Banner */}

      <div className="py-20 backgroundBannerColor">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-2">
            Save upto 50% on broker commisions
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">Lowest Brokerage fees</h3>
          <button className=" bg-white rounded-2xl uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
            Enquire
          </button>
        </div>
      </div>

      {/* Banner */}

      {/* Testimonials */}
      {/* Testimonials Banner*/}
      <div>
        <div>
          <div className="mt-16 flex justify-center">
            <h2 className="text-3xl text-gray-500 mb-2">
              What clients say about us ?
            </h2>
          </div>
        </div>
      </div>
      {/* Testimonials Banner */}

      {/* Testimonials Cards */}

      <div>
        {/* Card Container */}

        <div className="grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="shadow-lg p-5 rounded-xl ">
            <div>
              <p className="text-gray-500 text-2xl">
                <span className="text-green-500">"</span>To get social media
                testimonials like these, keep your customers engaged with your
                social media accounts by posting regularly yourself
                <span className="text-green-500">"</span>
              </p>
            </div>
            <div className="pt-10 ">
              <div className="bg-green-100 rounded-full flex items-center">
                <img src="images/avatar.png" alt="" />
                <div className="flex-col pl-5">
                  <p className="text-green-500 font-bold">Richard Parker</p>
                  <p className="text-gray-800 flex items-center">
                    User of Tail-kit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg p-5 rounded-xl">
            <div>
              <p className="text-gray-500 text-2xl">
                <span className="text-green-500">"</span>To get social media
                testimonials like these, keep your customers engaged with your
                social media accounts by posting regularly yourself
                <span className="text-green-500">"</span>
              </p>
            </div>
            <div className="pt-10 ">
              <div className="bg-green-100 rounded-full flex items-center">
                <img src="images/avatar.png" alt="" />
                <div className="flex-col pl-5">
                  <p className="text-green-500 font-bold">Timmy Denson</p>
                  <p className="text-gray-800 flex items-center">
                    User of Head-kit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-lg p-5 rounded-xl">
            <div>
              <p className="text-gray-500 text-2xl">
                <span className="text-green-500">"</span>To get social media
                testimonials like these, keep your customers engaged with your
                social media accounts by posting regularly yourself
                <span className="text-green-500">"</span>
              </p>
            </div>
            <div className="pt-10 ">
              <div className="bg-green-100 rounded-full flex items-center">
                <img src="images/avatar.png" alt="" />
                <div className="flex-col pl-5">
                  <p className="text-green-500 font-bold">Mary Jane</p>
                  <p className="text-gray-800 flex items-center">
                    User of React-kit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Cards */}

      {/* Testimonials */}

      <div className="mt-20 flex p-10 justify-center">
        <h2 className="text-3xl text-gray-500 mb-2">Contact us</h2>
      </div>

      <div className="bg-green-300 mt-5 flex p-10 justify-center items-center ">
        <form className="w-full max-w-lg">
          <div className="flex mb-6 flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor=""
                className="block uppercase text-md text-gray-700 font-bold mb-2 tracking-wider"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Mary"
                className=" py-3 px-4 mb-3 rounded text-gray-700 block w-full border-green-500"
              />
              <p className="text-sm text-green-500 italic">
                Please fill out this field
              </p>
            </div>

            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <label
                htmlFor=""
                className="block uppercase text-md text-gray-700 font-bold mb-2 tracking-wider"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className=" py-3 px-4 rounded text-gray-700 block w-full border-green-500"
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full px-3">
              <label
                htmlFor=""
                className="block uppercase text-md text-gray-700 font-bold mb-2 tracking-wider"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="example@example.com"
                className=" py-3 px-4 mb-3 rounded text-gray-700 block w-full border-green-500"
              />
              <p className="text-sm text-green-500 italic mt-3">
                Please fill out this field
              </p>
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-full px-3">
              <label
                htmlFor=""
                className="block uppercase text-md text-gray-700 font-bold mb-2 tracking-wider"
              >
                Message
              </label>
              <textarea
                placeholder="Type your message here"
                className="no-resize resize-none h-48 appearance-none py-3 px-4 mb-3 rounded text-gray-700 block w-full border-green-500"
              />
              <p className="text-sm text-green-500 italic mt-3">
                Please fill out this field
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 mx-2">
              <button className="shadow bg-green-400 text-white py-2 px-4 rounded">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Starts */}

      <footer className="pt-40 px-4">
        <div className="container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a href="" className="flex justify-center">
              <div className="flex w-12 h-12">
                <img src="images/house.png" className="h-8 w-8 mr-2" alt="" />
              </div>
              <span className="font font-semibold text-gray-500 text-2xl">
                Prime Properties
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-4 lg:w-2/3">
            <div className="space-y-3">
              <h3 className="uppercase text-green-500 tracking-wide ">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Integrations</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-green-500 tracking-wide">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Integrations</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-green-500 tracking-wide">
                Developers
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="">Public API</a>
                </li>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Guides</a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-green-500 tracking-wide">
                Social media
              </h3>
              <div className="flex gap-3">
                <div className="flex justify-start">
                  <a href="">
                    <FaFacebook className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-start">
                  <a href="">
                    <FaTwitter className="w-8 h-8" />
                  </a>
                </div>
                <div className="flex justify-start">
                  <a href="">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="m-10" />

        <div className="text-center text-green-500 py-6">
          1986 Company. All Rights Reserved
        </div>
      </footer>

      {/* Footer Ends */}
    </>
  );
}

export default App;
