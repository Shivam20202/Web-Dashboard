import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FileInput, UserCircle } from 'lucide-react';
import Logo from '../assets/logo.svg';


const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Briefcase, label: 'Portfolio', path: '/portfolio' },
    { icon: FileInput, label: 'Input', path: '/inputs' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  return (
    <>
      <aside className="fixed top-0 left-0 h-screen bg-[#DD4B25] text-white w-64 hidden lg:block">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-8">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">LOGO</span>
          </div>

          <nav className="space-y-2 flex-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 p-3 rounded-lg
                  transition-colors duration-200
                  ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden">
        <div className="flex justify-around p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center gap-1
                ${isActive ? 'text-[#DD4B25]' : 'text-gray-500'}
              `}
            >
              <item.icon size={24} />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;