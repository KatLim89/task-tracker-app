# Task Tracker App with Pomodoro Timer using React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
----------------------------------------------------------

Features:

- Sign up, login & logout functions for single user usage.
- All data (user credentials & task items) is stored in local storage.
- CRUD operation (Create, Read, Update, Delete)
- Collapsible card for each task item with interchangeable edit/save button, delete button & left/right arrow buttons to move task item between 3 columns.
- Each task item can be moved manually between 3 status columns (Backlog, In Progress, Done).
- Separate page for Pomodoro timer: hard-coded with timer at 25 minutes.
- Countdown timer has start, pause & reset buttons.
- Button undermeath timer to return to home page.
- Styled using SASS, Bootstrap & React Bootstrap. Icons from React Icons & fontawesome.


Ideas for additional features:

- Use backend database for better/safer encryption for user authentication (signup & login).
- Change manual movement of task items between columns to draggable element using React DND (Drag & Drop).
- Modify countdown timer to display work & break times when one ends (work -> break).
- Add settings feature to countdown timer so user can change the total amount of time (in minutes) for work & break times.
