# Dorathy Oname Bernard | Software Engineering Portfolio

A multi-page personal portfolio website built with HTML, CSS and JavaScript. It introduces me as a Software Engineering student at Miva Open University, Nigeria, showcases my education, skills and projects, and includes a working Academic Planner and contact form.

**Live Website:** [Visit Portfolio](https://dorathyoname-portfolio.vercel.app)

**Repository:** [View GitHub Repository](https://github.com/dorathybern/dorathy-portfolio-v2)

---

## Pages

| Page | File | What it contains |
|---|---|---|
| Home | `index.html` | Greeting, name, short biography, skill chips, call-to-action buttons and portrait |
| About Me | `about.html` | Biography, career aspirations, education timeline, technical skills, interests and video |
| Projects | `project.html` | Project cards (Event Website, Academic Planner, Programming Projects) and study focus table |
| Academic Planner | `planner.html` | Interactive task manager with priorities, due dates and filters |
| Contact | `contact.html` | Contact details and a validated form that sends messages to my email |

---

## Features

- **Day and night mode:** Follows the visitor's device setting and remembers their choice.
- **Academic Planner:** Add, complete, delete and filter tasks, with overdue and due-today detection. Tasks are saved in the browser using `localStorage`.
- **Contact form:** Live validation (name, email, Nigerian phone number, message length) and real message delivery through Web3Forms.
- **Responsive design:** Supports desktop, tablet and phone, with a hamburger menu on small screens.
- **Smooth animations:** Includes hover effects and a reduced-motion option for visitors who prefer less movement.
- **Accessibility:** Semantic HTML, labelled form fields, `aria-live` status messages, visible focus outlines and descriptive alt text.
- **Embedded video:** Includes a video on the About page with a custom cover image.

---

## Technologies Used

- HTML5
- CSS3 (CSS variables, Flexbox, Grid, media queries, transitions, keyframe animation)
- JavaScript (ES6+): DOM manipulation, events, array methods, `localStorage`, `fetch`, async/await, regular expressions
- Web3Forms for contact form delivery
- Font Awesome icons (loaded from a CDN)
- Git and GitHub for version control

---

## Project Structure

```text
dorathy-portfolio-v2/
│
├── index.html                  Home page
├── about.html                  About page
├── project.html                Projects page
├── planner.html                Academic Planner (includes its JavaScript)
├── contact.html                Contact page (includes form JavaScript)
│
├── style.css                   One stylesheet shared by every page
├── theme.js                    Day / night mode script (loaded on every page)
│
├── profile1.jpg                Portrait
├── dove-event-project.jpg      Event website project image
├── academic planner.jpg        Academic planner project image
├── python-project.jpg          Python project image
├── the-vision.mp4              About page video
└── the-vision-cover.jpg        Video cover image
```

---

## How to run it locally
 
1. Download or clone this repository.
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (or simply double-click `index.html` to open it in a browser).
No build step or installation is needed.
 
---

## How the Main Features Work

### 1. Day and Night Mode (`theme.js`)

All colours are CSS variables. The script sets a `data-theme` attribute on the page, the CSS swaps the variable values, and the choice is saved in `localStorage`.

If nothing is saved, it uses the device's `prefers-color-scheme` setting.

### 2. Academic Planner (`planner.html`)

The planner keeps a `tasks` array as its single source of truth.

Every action (add, complete, delete, filter) updates the array, saves it to `localStorage`, and re-renders the list.

Elements are built with `createElement` and `textContent`, which avoids injecting raw HTML.

### 3. Contact Form (`contact.html`)

The form is validated in JavaScript before sending.

When valid, the data is posted with `fetch` to Web3Forms, which emails it to me.

A hidden spam-trap field blocks most bots. The Web3Forms access key is a public key designed for use in website code.

---

## Author

**Dorathy Oname Bernard**

Software Engineering Student  
Miva Open University, Nigeria.

**Email:** dorathydev0@gmail.com
