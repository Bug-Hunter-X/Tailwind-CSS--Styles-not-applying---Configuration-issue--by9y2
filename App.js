```javascript
// tailwind.config.js (Corrected)
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Correct the path to include your components
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Example custom color
      }
    }
  },
  plugins: [],
}
```
```javascript
// App.js (Example Component)
import React from 'react';

function App() {
  return (
    <div className="bg-custom-blue p-4 text-white">
      <h1>Hello from Tailwind!</h1>
    </div>
  );
}

export default App;
```