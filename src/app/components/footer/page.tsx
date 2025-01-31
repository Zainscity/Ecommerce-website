export default function Footer() {
  return (
    <footer className="h-auto mx-auto bg-white text-gray-700">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 py-10">
        {/* Address */}
        <div>
          <p className="text-lg text-gray-500 mt-10 md:mt-20">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4 md:mb-10">Links</h3>
          <ul className="space-y-4 md:space-y-8 font-bold">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4 md:mb-10">Help</h3>
          <ul className="space-y-4 md:space-y-10 font-bold">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Newsletter</h3>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow py-2 border-b border-gray-400 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-0 md:ml-4 font-semibold text-black py-2 border-b border-gray-400">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 text-left">
        <p className="text-lg text-black mt-5 ml-4 md:ml-10">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
}