const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare sales report",
        titleDescription: "Compile the monthly sales report with regional data",
        taskDate: "2025-08-20",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update client database",
        titleDescription: "Add new clients and update contact details",
        taskDate: "2025-08-21",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix login issue",
        titleDescription: "Debug and resolve login authentication bug",
        taskDate: "2025-08-22",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design homepage banner",
        titleDescription: "Create a responsive homepage banner for the summer campaign",
        taskDate: "2025-08-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test payment gateway",
        titleDescription: "Perform end-to-end testing of Razorpay integration",
        taskDate: "2025-08-23",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Write blog draft",
        titleDescription: "Prepare draft on AI trends for company blog",
        taskDate: "2025-08-25",
        category: "Content",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Onboard new interns",
        titleDescription: "Guide interns through the orientation process",
        taskDate: "2025-08-20",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Security audit",
        titleDescription: "Perform system vulnerability check",
        taskDate: "2025-08-22",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare training material",
        titleDescription: "Update slides for software training",
        taskDate: "2025-08-26",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Weekly standup notes",
        titleDescription: "Summarize team standup discussions",
        taskDate: "2025-08-19",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Server monitoring",
        titleDescription: "Track CPU and memory usage for spikes",
        taskDate: "2025-08-21",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix email alerts",
        titleDescription: "Resolve bug in scheduled alert emails",
        taskDate: "2025-08-23",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Customer feedback analysis",
        titleDescription: "Review survey responses for Q2",
        taskDate: "2025-08-18",
        category: "Analysis",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update knowledge base",
        titleDescription: "Add new troubleshooting steps",
        taskDate: "2025-08-20",
        category: "Support",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Backup database",
        titleDescription: "Run full backup of customer data",
        taskDate: "2025-08-22",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
]

const admin = [
  {
    id: "admin1",
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees,admin};
}