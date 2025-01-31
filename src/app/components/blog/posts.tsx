import React from "react";

const Blogposts = () => {
  return (
      <section className="bg-white">

    <div className="bg-white max-w-6xl mx-auto p-6 grid grid-cols-3 gap-10">
      {/* Left Content - Blog Posts */}
      <div className="col-span-2 space-y-10">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img src="/blog2.jpeg" alt="Blog Post 1" className="w-full" />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <span className="mr-4">👤 Admin</span>
              <span className="mr-4">📅 14 Oct 2022</span>
              <span>📌 Wood</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Going all-in with millennial design</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <a href="#" className="text-yellow-500 font-semibold">Read more</a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img src="/blog4.jpg" alt="Blog Post 2" className="w-full" />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <span className="mr-4">👤 Admin</span>
              <span className="mr-4">📅 14 Oct 2022</span>
              <span>📌 Handmade</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Exploring new ways of decorating</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <a href="#" className="text-yellow-500 font-semibold">Read more</a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <img src="/blog5.jpg" alt="Blog Post 3" className="w-full" />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <span className="mr-4">👤 Admin</span>
              <span className="mr-4">📅 14 Oct 2022</span>
              <span>📌 Handmade</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Exploring new ways of decorating</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <a href="#" className="text-yellow-500 font-semibold">Read more</a>
          </div>
        </div>

      </div>

      

      {/* Right Sidebar */}
      <div className=" space-y-6">
        {/* Search bar */}
               <div>
                <input type="text" placeholder="" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gray-300" />
              </div>
        {/* Categories */}
        <div className="p-6 bg-white shadow-lg rounded-xl text-black">
          <h3 className="text-xl font-semibold mb-8">Categories</h3>
          <ul className="text-gray-500 space-y-8">
            <li>Crafts (2)</li>
            <li>Design (8)</li>
            <li>Handmade (7)</li>
            <li>Interior (1)</li>
            <li>Wood (6)</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div className=" p-6 bg-white shadow-lg rounded-xl text-black">
          <h3 className="text-xl font-semibold mb-10">Recent Posts</h3>
          <ul className="space-y-10">
            <li className="flex items-center gap-4">
              <img src="/link1.jpg" alt="Recent Post 1" className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Going all-in with millennial design</span>
            </li>
            <li className="flex items-center gap-4">
              <img src="/link2.jpg" alt="Recent Post 2" className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Exploring new ways of decorating</span>
            </li> 
            <li className="flex items-center gap-4">
              <img src="/link3.jpg" alt="Recent Post 3" className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Handmade pieces that took time to make</span>
            </li> 
            <li className="flex items-center gap-4">
              <img src="/link4.jpg" alt="Recent Post 4" className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Modern home in Milan</span>
            </li> 
            <li className="flex items-center gap-4">
              <img src="/link5.jpg" alt="Recent Post 5" className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Colorful office redesign</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </section>
  );
};

export default Blogposts;
