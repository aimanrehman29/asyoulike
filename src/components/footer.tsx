const Footer = () => {
    return (
      <footer className="bg-gray-100 text-black py-8">
        <div className="container mx-auto px-4">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            {["facebook", "twitter", "google", "instagram", "linkedin", "vk"].map((icon) => (
              <a
                href="#"
                key={icon}
                className="text-black hover:text-gray-400 transition"
                aria-label={icon}
              >
                <i className={`fab fa-${icon} text-2xl`}></i>
              </a>
            ))}
          </div>
  
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-black">
            {/* DOOGEE Section */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">DOOGEE</h4>
              <ul className="space-y-2">
                {["Teardown", "News", "Partners", "About Us", "Contact Us", "Terms"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Social Section */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Social</h4>
              <ul className="space-y-2">
                {["Facebook", "Twitter", "Youtube"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Service Section */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Service</h4>
              <ul className="space-y-2">
                {["Compare", "Download", "Feedback", "Bug Report"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter Subscription */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Newsletter Subscription</h4>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="flex-grow p-2 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center text-gray-500 mt-8 text-xs">
            Copyright © 2018 DOOGEE. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  