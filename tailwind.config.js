```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'], // Or wherever your templates are
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
This configuration assumes your HTML, JSX, or TSX files are in the `src` directory. Adjust the path `content` property accordingly if your template files are located elsewhere.  If you are still facing issues, ensure that the files you intend to style are correctly included within the `content` array.