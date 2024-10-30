
# Azure Resume Project 🌐


https://github.com/user-attachments/assets/07ef1132-138d-4759-98af-5c6c89ae92bf



This repository contains the source code for a serverless resume website deployed using **Azure Services**. The project integrates **Azure Functions**, **Cosmos DB**, and **Azure CDN** to create a dynamic resume that tracks visitor counts in real-time.

## 📂 Project Structure

```
azure-resume/
│
├── .vscode/              # VSCode configuration files
├── backend/              # Backend API using Azure Functions and CosmosDB
│   ├── api/              # Contains Azure Functions and configurations
│   ├── tests/            # Unit tests for backend components
│   └── README.md         # Documentation for backend
│
├── frontend/             # Static website files served through Azure CDN
│   ├── css/              # CSS for styling
│   ├── js/               # JavaScript logic
│   ├── images/           # Images used in the website
│   ├── index.html        # Main HTML page
│   └── README.md         # Documentation for frontend
│
├── azure-resume.sln      # Solution file for the project
└── README.md             # Main documentation (this file)
```

---

## 🚀 Getting Started

### **Prerequisites**
- **Azure Account**: Sign up [here](https://azure.microsoft.com/).
- **Azure CLI**: Install from [here](https://docs.microsoft.com/cli/azure/install-azure-cli).
- **Azure Functions Core Tools**: Install from [here](https://docs.microsoft.com/azure/azure-functions/functions-run-local).
- **Git**: Ensure Git is installed on your machine.

---

## ⚙️ Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/azure-resume.git
cd azure-resume
```

### 2. Deploy Backend API to Azure Functions
Navigate to the **backend/api** folder and deploy the Azure Function:
```bash
cd backend/api
func azure functionapp publish <your-function-app-name>
```

### 3. Set up Frontend with Azure CDN
- Go to your **Azure Portal** and create a **CDN profile**.
- Link the CDN profile to a **static website** enabled in your **Azure Storage Account**.
- Upload the contents of the **frontend** folder to the storage account.

---

## 🛠️ Project Details

- **Backend**:  
  The backend contains an **Azure Function** that interacts with **Cosmos DB** to store and update the visitor count.
  
- **Frontend**:  
  The frontend is a static website served via **Azure CDN** and displays the real-time visitor count.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

If you have any questions, feel free to reach out at **bhargavbhargav995@gmail.com** or connect on [LinkedIn](https://www.linkedin.com/in/bharghavakumarpurru/).
```

---

## **Backend `README.md` (backend/README.md)**

```markdown
# Backend - Azure Resume Project 🌐

This folder contains the backend code for the Azure Resume project. It includes an **Azure Function** that updates and retrieves the visitor count from **Cosmos DB**.

## 📂 Structure

```
backend/
├── api/
│   ├── .vscode/               # VSCode configuration
│   ├── bin/                   # Compiled output files
│   ├── obj/                   # Temporary object files
│   ├── Counter.cs             # C# class representing visitor count model
│   ├── GetResumeCounter.cs    # Azure Function to get and update the visitor count
│   ├── api.csproj             # Project file for the Azure Function
│   ├── host.json              # Configuration for the Function App
│   ├── local.settings.json    # Local environment settings
│   └── Program.cs             # Main entry point for the Azure Function
└── tests/                     # Unit tests for backend components
```

---

## ⚙️ How to Run Locally

1. **Navigate to the API folder:**
   ```bash
   cd backend/api
   ```

2. **Restore dependencies:**
   ```bash
   dotnet restore
   ```

3. **Run the function locally:**
   ```bash
   func start
   ```

4. **Test the function:**
   Open a browser and navigate to:
   ```
   http://localhost:7071/api/GetResumeCounter
   ```

---

## 🚀 Deployment Instructions

To deploy the function to Azure, follow these steps:

1. **Login to Azure:**
   ```bash
   az login
   ```

2. **Deploy the function:**
   ```bash
   func azure functionapp publish <your-function-app-name>
   ```

---

## 🛠️ Technologies Used

- **Azure Functions**: Serverless backend.
- **Cosmos DB**: Database for storing visitor counts.
- **C#**: Backend language for the function.
- **Azure CLI**: Command-line tool for managing Azure services.

---

## 🧪 Testing

Run unit tests (if available) by navigating to the `tests/` directory and running:
```bash
dotnet test
```
```

---

## **Frontend `README.md` (frontend/README.md)**

```markdown
# Frontend - Azure Resume Project 🌐

This folder contains the frontend code for the Azure Resume project. The frontend is a static website that displays a real-time visitor count using **JavaScript** and data from an **Azure Function**.

## 📂 Structure

```
frontend/
├── css/               # Stylesheets
├── images/            # Image assets
├── js/                # JavaScript files
├── index.html         # Main HTML file
├── main.js            # JavaScript logic for API calls
└── favicon.png        # Website icon
```

---

## 🚀 How to Deploy

1. **Enable Static Website** on your **Azure Storage Account**:
   - Go to the **Storage Account** in the Azure Portal.
   - Under **Settings**, select **Static Website** and enable it.
   - Set `index.html` as the default document.

2. **Upload Frontend Files**:
   - Upload all files from the **frontend** folder to the **$web** container in the storage account.

3. **Set up Azure CDN**:
   - Create an **Azure CDN Profile**.
   - Link the CDN profile to the static website hosted in your storage account.

---

## 🛠️ Technologies Used

- **HTML/CSS/JavaScript**: Frontend technologies.
- **Azure CDN**: Content delivery for faster loading.
- **Azure Storage**: Hosting static files.

---

## 📧 Contact

If you have any questions, feel free to reach out at **bharghava.kumar.purru@example.com** or connect on [LinkedIn](https://www.linkedin.com/in/bharghavakumarpurru/).
```

---

This structure ensures that each part of your project is well-documented. Make sure to update any placeholders (like `<your-function-app-name>`) with actual values. Let me know if you need further customization!
