# Task Manager Application

A full-stack task management application built with Django REST Framework backend and React frontend.

## 🚀 Features

- Create, read, update, and delete tasks
- Mark tasks as completed/incomplete
- Filter tasks by completion status
- Pagination for task lists
- Responsive design
- RESTful API

## 🛠️ Tech Stack

**Backend:**
- Django 5.2.5
- Django REST Framework
- SQLite Database
- Django CORS Headers

**Frontend:**
- React 18+
- Axios for API calls
- Modern CSS styling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone git@github.com:kelvinbe/TaskApp.git
cd taskapi
```

### 2. Backend Setup (Django)

#### Create and activate virtual environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

#### Install Django dependencies
```bash
pip install -r requirements.txt
```

#### Set up the database
```bash
python manage.py makemigrations
python manage.py migrate
```

#### Run the Django development server
```bash
python manage.py runserver
```

The Django API will be available at: `http://localhost:8000`

### 3. Frontend Setup (React)

#### Navigate to the frontend directory
```bash
cd task-manager-frontend
```

#### Install React dependencies
```bash
npm install
# or if you prefer yarn:
yarn install
```

#### Start the React development server
```bash
npm run dev
# or if you prefer yarn:
yarn dev
```

The React application will be available at: `http://localhost:5173` (or another port if 5173 is occupied)


The Django backend provides the following API endpoints:

- `GET /api/tasks/` - List all tasks (with pagination)
- `POST /api/tasks/` - Create a new task
- `GET /api/tasks/{id}/` - Retrieve a specific task
- `PUT /api/tasks/{id}/` - Update a specific task
- `PATCH /api/tasks/{id}/` - Partially update a specific task
- `DELETE /api/tasks/{id}/` - Delete a specific task

### Query Parameters
- `?page=1` - Pagination
- `?is_completed=true` - Filter completed tasks
- `?is_completed=false` - Filter incomplete tasks
