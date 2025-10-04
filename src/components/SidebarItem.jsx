import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";

const SidebarItem = ({ icon, label, active, badge, onClick }) => {
  return (
    <ListItem
      onClick={onClick}
      className={`cursor-pointer rounded-lg transition-all duration-300
        ${active ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white" : "text-gray-300 hover:bg-gray-800"}
      `}
    >
      <ListItemPrefix className="text-white">{icon}</ListItemPrefix>
      <span className="flex-1">{label}</span>
      {badge && (
        <Chip
          value={badge}
          size="sm"
          variant="ghost"
          color="white"
          className="rounded-full text-xs bg-gray-700 text-white"
        />
      )}
    </ListItem>
  );
};

export default SidebarItem;
