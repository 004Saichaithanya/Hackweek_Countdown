# 🚀 HackWeek COSC Countdown App

This is a simple Next.js application created for **HackWeek COSC 2025**.  
It displays event information loaded from a local JSON file and shows a live countdown timer indicating how much time is left until HackWeek ends.

---

## 📌 Features

- 📖 Displays event details like title and description from a static JSON file (`/public/info.json`)
- ⏳ Live countdown timer updating every second until the end of HackWeek
- ⚡ Fast, client-side rendered application built with **Next.js**
- 📦 Deployed easily using **Vercel**

---

## 📚 Tech Stack

- **Next.js** (React Framework)
- **React Hooks** (`useState`, `useEffect`)
- **Plain CSS (inline styling)** for simple layout
- **Vercel** for deployment

---

## 📁 Project Structure

```

hackweek-cosc-app/
├── components/
│   └── CountdownTimer.js
├── pages/
│   └── index.js
├── public/
│   └── info.json
├── package.json
├── README.md
└── ...

````

---

## 🛠️ How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/hackweek-cosc-app.git
   cd hackweek-cosc-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to view the app.

---

## 🌐 Live Demo

Deployed URL 👉 [https://hackweek-countdown.vercel.app/)


---

## 📌 HackWeek Countdown Configuration

The countdown timer is configured to end at:

```
2025-06-28T23:59:59
```

To update, modify the date inside `components/CountdownTimer.js`.

---

## 📄 License

This project is made for educational and demo purposes during HackWeek COSC 2025.

---

## 🙌 Author

**Sai Chaithanya Poloju**
