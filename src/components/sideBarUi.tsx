import SidebarItem from "./SidebarItem";
import { Home, Settings, Coffee } from "lucide-react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { label: "Dashboard", icon: <Home /> },
    { label: "Food Distribution", icon: <Coffee /> },
    { label: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 p-4 flex flex-col space-y-2">
      <h1 className="text-white text-2xl font-bold mb-6 text-center">CMS Dashboard</h1>
      {menuItems.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          icon={item.icon}
          active={activeItem === item.label}
          onClick={() => setActiveItem(item.label)}
        />
      ))}
    </div>
  );
};

export default Sidebar;