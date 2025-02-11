import React from "react";
import Image from "next/image";

const Blogposts = () => {
  return (
    <section className="bg-white">
      <div className="bg-white max-w-6xl mx-auto p-6 grid grid-cols-3 gap-10">
        {/* Left Content - Blog Posts */}
        <div className="col-span-2 space-y-10">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <Image src="/blog2.jpeg" alt="Blog Post 1" width={800} height={400} className="w-full" />
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
            <Image src="/blog4.jpg" alt="Blog Post 2" width={800} height={400} className="w-full" />
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

        {/* Right Content - Recent Posts */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-10">Recent Posts</h3>
          <ul className="space-y-10">
            <li className="flex items-center gap-4">
              <Image src="/link1.jpg" alt="Recent Post 1" width={64} height={64} className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Going all-in with millennial design</span>
            </li>
            <li className="flex items-center gap-4">
              <Image src="/link2.jpg" alt="Recent Post 2" width={64} height={64} className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Exploring new ways of decorating</span>
            </li>
            <li className="flex items-center gap-4">
              <Image src="/link3.jpg" alt="Recent Post 3" width={64} height={64} className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Handmade pieces that took time to make</span>
            </li>
            <li className="flex items-center gap-4">
              <Image src="/link4.jpg" alt="Recent Post 4" width={64} height={64} className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Modern home in Milan</span>
            </li>
            <li className="flex items-center gap-4">
              <Image src="/link5.jpg" alt="Recent Post 5" width={64} height={64} className="w-16 h-16 rounded-lg" />
              <span className="text-gray-600">Colorful office redesign</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogposts;
