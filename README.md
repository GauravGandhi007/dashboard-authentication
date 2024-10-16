
### **Task 1 : Build an Authenticated Dashboard with API Integration**

#### **Objective:**
Test the candidate's ability to build a complex authentication system, use external APIs, and manage a well-documented project with clear instructions.

#### **Requirements:**

1. **Authentication System:**
   - Implement **login** and **signup** functionality.
   - Use **JWT (JSON Web Token)** or **session-based authentication** (specify which).
   - Store authentication state using **React Context API** or a global state management tool like **Redux**.
   - Password validation with strict rules (e.g., minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character).
   - Protect routes that require authentication:
     - A user can access the dashboard only after successful login.
     - Redirect to the login page if the session expires.
   - Implement **token refresh** logic for JWT (if applicable).
   - **Logout** functionality to clear the session.

2. **Dashboard:**
   - After login, display a **dashboard** that:
     - Shows the **user's profile** information (name, email, and signup date).
     - Allows users to **update their profile**.
     - Implement **responsiveness** using **Tailwind CSS**.
     - Display a **welcome message** using data from [freeapi.app](https://freeapi.app/). Use the **quote**  endpoint and display a personalized greeting message like "Hello, [username], [random greeting]!".
     - Use other [freeapi.app](https://freeapi.hashnode.space/api-guide/apireference/getJokes) endpoints (e.g  **/joke**) to display a random joke on the dashboard.
   
3. **API Integration:**
   - Fetch data from [freeapi.app](https://freeapi.app/) using **Axios** or **Fetch API**.
   - Handle **loading states**, **errors**, and **success responses**:
     - Show a loading spinner or placeholder while fetching.
     - Display error messages if the API request fails (e.g., "Failed to fetch joke. Please try again.").
     - Display the fetched data in a styled manner using **Tailwind CSS**.

4. **Routing:**
   - Use **React Router** for navigation:
     - **Public routes**: Login, Signup pages.
     - **Protected routes**: Dashboard and profile update pages (only accessible if authenticated).
     - Redirect users to the login page if they try to access protected routes without a valid token.

5. **Tailwind CSS:**
   - Fully styled using **Tailwind CSS** with a focus on responsiveness.
   - Use **custom Tailwind utilities** to modify designs (e.g., custom color schemes, animations).
   - Implement **dark mode** support using Tailwind's dark mode feature.
   - Ensure all components (login, signup, dashboard) are **mobile-friendly**.

6. **Form Validation:**
   - Implement **client-side validation** for all forms (login, signup, profile update) with appropriate error messages (e.g., "Email is required", "Password must contain at least 8 characters").
   - Use **regex validation** for stricter password rules.
   - Display form errors inline, styled with Tailwind.

7. **README File:**
   - A comprehensive **README.md** that includes:
     - **Project overview**.
     - **Setup instructions** (including how to run the project locally and any necessary dependencies).
     - Technologies used.
     - Detailed explanation of the **authentication** flow.
     - Instructions on how to configure **environment variables** (e.g., API URL, JWT secret).
     - Instructions for deploying the project (if applicable).

#### **Bonus Points:**
- Add **unit tests** using **Jest** or **React Testing Library** for at least one major component (e.g., login form validation, API integration).
- Use **Redux Toolkit** for managing global state.
- Implement **persistent login** using localStorage or cookies.
- Include **error boundaries** in the app.
- Deploy the project on **Vercel** or **Netlify** and provide a **live link**.
- Add a **Forgot Password** functionality using a modal.

#### **Deliverables:**
1. A **GitHub repository** with the full project.
2. A well-documented **README.md**.
3. A **short demo video** showing the authentication flow, API integration, and dashboard functionality (optional but recommended).

#### **Deadline:**
2 Days


#### **End Points**

- login - https://api.freeapi.app/api/v1/users/login

- signup - https://api.freeapi.app/api/v1/users/register
- refreshToken - https://api.freeapi.app/api/v1/users/refresh-token

- logout - https://api.freeapi.app/api/v1/users/logout

- random jokes - https://api.freeapi.app/api/v1/public/randomjokes

- quotes - https://api.freeapi.app/api/v1/public/quotes

You have full freedome to use more api as well

