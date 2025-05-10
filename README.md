# La Bandera - React Version 

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




