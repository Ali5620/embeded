const Home = () => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">

      {/* NAVBAR */}
      <div className="flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-green-400 font-bold text-xl">
          SmartSoC
        </div>

        {/* Center Menu */}
        <div className="bg-green-500 rounded-full px-8 py-3 flex gap-6 text-sm font-semibold">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">Company</span>
          <span className="cursor-pointer underline">Our Offerings</span>
          <span className="cursor-pointer">Career</span>
          <span className="cursor-pointer">Contact Us</span>
          <span className="cursor-pointer">Insights</span>
        </div>

        {/* Right Info */}
        <div className="text-sm">
          080-49789412 &nbsp; info@smartsocs.com
        </div>

      </div>

      {/* PAGE CONTENT */}
      <div className="px-8 mt-16 text-lg opacity-70">
        Offerings page content will go here
      </div>

    </div>
  );
};

export default Home;
