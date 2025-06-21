A modern, responsive e-commerce product listing web app built with Next.js (App Router) and in-memory API routes.
Live link:https://assignment-fetl42jhm-sh1wang1s-projects.vercel.app/
🚀 How to Run the Project
1)Navigate to the frontend folder:
  cd frontend
2)Install dependencies:  
   npm start
3)Start the development server:
   npm run dev
4)Open your browser and visit:
   http://localhost:3000/ — Home page
   http://localhost:3000/products — Product listing  

🛠 Tech Stack Used
Frontend & Backend: Next.js 14+ (App Router)
API: Next.js API Routes (in-memory, no database)
Styling: Custom CSS (globals.css)

📝 Notes & Assumptions
In-memory data: Product data is stored in-memory and will reset on server restart. No database is used.
Image URLs: Uses placehold.co for placeholder images. You can use real image URLs if desired.
API Endpoints:
GET /api/products — List all products
POST /api/products — Add a product ({ name, price, imageUrl })
PATCH /api/products — Update a product ({ id, name, price, imageUrl })
DELETE /api/products/:id — Delete a product by ID
UI Features:
Add, search, view, and delete products from the UI
Responsive and accessible design
Clean, modular code structure
Assumptions:
No authentication or user accounts
No persistent storage (for demo/assignment purposes)
📄 Author & License
Created for internship/assignment evaluation.
