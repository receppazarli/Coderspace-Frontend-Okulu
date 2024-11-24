import { components } from "storybook/internal/components";
import Title from "./src/components/Title";

export default{
    title: "Title",
    component: Title,
}

const Template =(args) => <Title {...args} />;

