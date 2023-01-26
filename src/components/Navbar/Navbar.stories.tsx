import { Navbar } from "./Navbar";
import { NavbarItem } from "./NavbarItem";

export default {
  component: Navbar,
  title: "Components/Navbar",
};

export const Default = () => {
  return (
    <Navbar>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
    </Navbar>
  );
};

Default.parameters = {
  layout: "fullscreen",
};

export const Logo = () => {
  return (
    <Navbar
      logoProps={{
        link: "https://github.com/JordanUrbaezLu/void-ui",
        url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
      }}
    >
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
    </Navbar>
  );
};

Logo.parameters = {
  layout: "fullscreen",
};

export const Secondary = () => {
  return (
    <Navbar
      logoProps={{
        link: "https://github.com/JordanUrbaezLu/void-ui",
        url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
      }}
      variant="secondary"
    >
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
      <NavbarItem link="https://github.com/JordanUrbaezLu/void-ui">
        Github
      </NavbarItem>
    </Navbar>
  );
};

Secondary.parameters = {
  layout: "fullscreen",
};
