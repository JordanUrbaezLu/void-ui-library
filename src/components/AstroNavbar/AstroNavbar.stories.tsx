import AstroNavbar from "./AstroNavbar";
import AstroNavbarItem from "./AstroNavbarItem";

export default {
  component: AstroNavbar,
  title: "Components/AstroNavbar",
};

export const Default = () => {
  return (
    <AstroNavbar>
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
    </AstroNavbar>
  );
};

Default.parameters = {
  layout: "fullscreen",
};

export const Logo = () => {
  return (
    <AstroNavbar
      logoProps={{
        link: "https://github.com/JordanUrbaezLu/astro-ui-library",
        url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
      }}
    >
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
      <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
        Github
      </AstroNavbarItem>
    </AstroNavbar>
  );
};

Logo.parameters = {
  layout: "fullscreen",
};

export const Secondary = () => {
    return (
      <AstroNavbar
        logoProps={{
          link: "https://github.com/JordanUrbaezLu/astro-ui-library",
          url: "https://www.pngkey.com/png/full/141-1415366_arctic-cat-logo-github-png.png",
        }}
        variant="secondary"
      >
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
        <AstroNavbarItem link="https://github.com/JordanUrbaezLu/astro-ui-library">
          Github
        </AstroNavbarItem>
      </AstroNavbar>
    );
  };
  
  Secondary.parameters = {
    layout: "fullscreen",
  };
