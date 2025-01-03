import ChefGrid from "@/components/chefcatagery/chef";

const ChefBanner = () => {
    return (
<div>
<div
        className="md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/heropic.png')" }}
      >
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Our Chef</h1>
          <nav className="mt-2 text-xs md:text-sm">
            <a href="/" className="text-gray-300 hover:text-yellow-500">
              Home
            </a>
            <span className="mx-2 text-yellow-500">{'>'}</span>
            <span className="text-yellow-500">Chef</span>
          </nav>
        </div>
      </div>
      < ChefGrid/>
</div>
    );
  };
  
  export default ChefBanner;