### 1. UI/UX & Admin UI: Structure and Hosting

* **File Structure:**
* `index.html` $\rightarrow$ Student-facing Event Discovery Feed & Registration Slip.
* `admin.html` $\rightarrow$ Organizer Dashboard (Create Events, View Attendees).
* `style.css` $\rightarrow$ Shared styling.
* `app.js` $\rightarrow$ Frontend logic and API calls.


* **GitHub Pages**
* **Vercel / Netlify**

### 2. Backend API
#### Tech Stacks

**Python (Flask / FastAPI)**

#### Backend Hosting
* **Render.com**
  
### 3. Database: Setup and Hosting
#### DB Structure
**`Events`** (Title, Date, Venue, Max_Seats, Available_Seats) 
**`Registrations`** (Student_Name, Reg_No, Event_ID).

* **Supabase**
---

### Full Architecture

```
[ Frontend: HTML/CSS/JS ]  ────>  GitHub Pages
                 │
           (fetch / REST)
                 │
                 ▼
[ Backend API: Flask ]   ────>  Render.com
                 │
                 ▼
[ Database: PostgreSQL / MongoDB ]  ────>  Supabase

```
