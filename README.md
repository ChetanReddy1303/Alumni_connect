# 🏫 Alumni Connect

**Alumni Connect** is a full-stack MERN web application that bridges the gap between students and alumni. It provides a platform for mentorship, career guidance, opportunity sharing, and community building.

---

## ✨ Features

- **Secure Authentication** (Student and Alumni roles)
- **Public Landing Page** (Home, About, Features)

### Student Dashboard
- View and connect with Alumni
- Request Mentorship
- View Shared Opportunities

### Alumni Dashboard
- Share Job/Internship Opportunities
- Accept/Reject Mentorship Requests
- Manage Profile and Experiences

### Future Scope
- Messaging and Communication
- Notifications

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS (or Bootstrap)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens), bcrypt.js
- **Deployment:** 
  - Vercel (Frontend)  
  - Render or Heroku (Backend)

---

## 📂 Project Structure

```bash
/alumni-connect
├── client (React Frontend)
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       ├── layouts
│       ├── services (API calls)
│       └── utils (helper functions)
│   ├── App.js
│   └── index.js
│
└── server (Node.js Backend)
    ├── controllers
    ├── models
    ├── routes
    ├── middleware
    ├── config
    └── server.js
