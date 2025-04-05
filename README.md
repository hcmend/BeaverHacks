# BeaverHacks React App

This is the front-end of the BeaverHacks project built with React and Vite. It uses React Router for navigation and is designed to be easy to extend with new components and pages.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Adding New Components](#adding-new-components)
- [Adding New Pages](#adding-new-pages)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hcmend/BeaverHacks.git
   cd BeaverHacks
   cd beaverapp
```

Install the required dependencies using npm:

```bash
npm install
```
Run the development server:

```bash
npm run dev
```

This will start the Vite development server and your app will be available at http://localhost:5173.

Adding New Components
To add a new React component:

Create a new .jsx file in the src/components/ directory.

Example:

```jsx
// src/components/MyNewComponent.jsx
import React from 'react';

const MyNewComponent = () => {
  return (
    <div>
      <h2>This is my new component!</h2>
    </div>
  );
};

export default MyNewComponent;
```

Import and use the component in your App.jsx or any page component:

```jsx
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div>
      <h1>Welcome to the BeaverHacks App</h1>
      <MyNewComponent />
    </div>
  );
}
```

Adding New Pages
To add a new page:

Create a new .jsx file in the src/pages/ directory.

Example:

```jsx
// src/pages/PageThree.jsx
import React from 'react';

const PageThree = () => {
  return (
    <div>
      <h1>Page Three</h1>
      <p>This is the third page of the app.</p>
    </div>
  );
};

export default PageThree;
```

Add a route for this page in the App.jsx file:

```jsx
import { Routes, Route } from 'react-router-dom';
import PageThree from './pages/PageThree';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </div>
  );
}
```

Add navigation to this page in your Navigation.jsx component:

```jsx
<Link to="/page-three">Page Three</Link>
```

Troubleshooting
If you face issues with dependencies or building the app, try deleting the node_modules/ folder and running npm install again.

Ensure that Vite is properly set up. If not, follow the steps to install and configure it.

