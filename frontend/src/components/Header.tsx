import { Bell, ShoppingBag, ChevronDown } from 'lucide-react';


const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold lg:hidden">Portfolio</h1>
        <div className="flex items-center gap-4 ml-auto">
          {/* Shopping icon only visible in mobile view */}
          <button className="relative lg:hidden">
            <ShoppingBag size={24} className="text-[#DD4B25]" />
         
          </button>
          
          <button className="relative">
            <Bell size={24} className="text-[#000000]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              
            </span>
          </button>

          {/* Profile section visible only on large screens */}
          <div className="hidden lg:flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold">Shivam </span>
              <span className="text-sm text-gray-500">Manager</span>
            </div>
            <ChevronDown size={20} className="text-gray-400 ml-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
