import { HiHome } from "react-icons/hi";
import NavigationItem from "./NavigationItem";

const Stories = {
  title: "NavigationItem",
  component: NavigationItem,
};

export default Stories;

const Template = (args) => <NavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "General",
  icon: <HiHome size="24" />,
};
