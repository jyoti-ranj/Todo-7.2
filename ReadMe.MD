# 📝 Recoil Todo App with Theme Switcher

This is a simple yet elegant Todo App built using **React** and **Recoil**. It allows you to:

- Add new todos with a title and description
- Filter todos in real-time by title or description
- Switch between light and dark themes

## 🚀 Features

- ✅ Add new todos using input fields
- 🔍 Filter todos using a search input
- 🌗 Toggle between light and dark themes
- 🧠 State management powered by Recoil (using atoms and selectors)

## 🛠️ Tech Stack

- React
- Recoil
- Axios (for fetching todos from backend)
- CSS

## 📂 Project Structure

```bash
src/
│
├── App.jsx
├── Createtodo.jsx
├── FiltterTodo.jsx
├── stores/
│   └── atom/
│       ├── todo.jsx       # Recoil selector for fetching todos
│       └── theme.jsx      # Recoil atom for theme switching
├── App.css                # Theme styles and layout
└── ...
