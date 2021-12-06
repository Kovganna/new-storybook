import { HiCalendar, HiBriefcase, HiArchive } from "react-icons/hi";
import Navigation from "./Navigation";

const navItems = [
  {
    text: "Calengar",
    icon: <HiCalendar size="24" />,
  },
  {
    text: "Cabinet",
    icon: <HiBriefcase size="24" />,
  },
  {
    text: "Archive",
    icon: <HiArchive size="24" />,
  },
];

const Stories = {
  title: "Navigation",
  component: Navigation,
};
export default Stories;

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: navItems,
};
