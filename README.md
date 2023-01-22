# Astro UI Library

![image](https://user-images.githubusercontent.com/93447469/190551386-74f76819-37ba-4e17-9217-3f87bed1a75b.png)

## How to use this library?

### Install

```JavaScript
npm install astro-ui-library
```

### Import and Use

```JSX
import ReactDOM from "react-dom";
import { AstroButton } from "astro-ui-library/dist";
import "astro-ui-library/dist/styles.css";

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<AstroButton>Button</AstroButton>);
```

Note: Astro UI Library is heavily maintained and gets new components added regularly. Engineers are welcome to contribute to this open source library. Visit [CONTRIBUTING.md](https://github.com/JordanUrbaezLu/astro-ui-library/blob/main/CONTRIBUTING.md) to see how!
