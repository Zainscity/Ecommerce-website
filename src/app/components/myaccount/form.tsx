export default function Form() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Login Section */}
        <div className=" px-10 py-8">
          <h2 className="text-3xl font-semibold mb-8 text-black">Log In</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="login-username"
                className="block text-base font-medium text-gray-800 mb-2"
              >
                Username or email address
              </label>
              <input
                type="text"
                id="login-username"
                className="w-full border border-gray-300 px-4 py-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="login-password"
                className="block text-base font-medium text-gray-800 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                className="w-full border border-gray-300 px-4 py-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 border-gray-300 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full text-black py-5 text-sm font-medium rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-200 transition"            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-black underline hover:text-blue-500"
            >
              Lost Your Password?
            </a>
          </p>
        </div>

        {/* Register Section */}
        <div className=" px-10 py-8">
          <h2 className="text-3xl font-semibold mb-8 text-black">Register</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="register-email"
                className="block text-base font-medium text-gray-800 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="register-email"
                className="w-full border border-gray-300 px-4 py-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email address"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-blue-500 underline hover:text-blue-600">
                privacy policy
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full text-black py-5 text-sm font-medium rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-gray-200 transition mt-8"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    
    );
  }
  