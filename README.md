# La Bandera - React Version 🇩🇴

This is the **React-based version** of the "La Bandera" Dominican restaurant website. It is a modern upgrade from the original HTML/CSS/JavaScript static version, rebuilt using React for improved structure and maintainability.

---

## 📌 Features

- 🏠 **Multi-page navigation** (Home, Menu, About, Contact) using React Router.
- 🍽️ **Menu page with functional shopping cart**
  - Add/Remove items
  - Increase/Decrease quantity
  - Clear cart
  - Cart modal opens from "Order Online" button
- 🎨 Responsive design styled with CSS (matching original theme)
- 🛍️ Cart behavior matches original `cart.js` functionality exactly

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/emallen2/la-bandera-react.git
cd la-bandera-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000).

---

## 🌐 Deployment

This project uses **GitHub Pages** for deployment.

### Setup `package.json`
```json
"homepage": "https://your-username.github.io/la-bandera-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### Deploy
```bash
npm run deploy
```
Then visit: `https://your-username.github.io/la-bandera-react`

---

## 📂 Original Version
The original static HTML/CSS/JavaScript version is hosted separately at:
[https://emallen2.github.io/La-Bandera](https://emallen2.github.io/La-Bandera)

---

## 📄 License
MIT License.

---

## 🙌 Acknowledgments
- Built as part of a web design course project.
- Fonts from Google Fonts.
- Icons from Font Awesome.
- React version by Esther Mallen.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




