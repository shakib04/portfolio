export const projectsData = [
    {
        id: "fintech-erp",
        title: "Fintech ERP Solution",
        shortDescription: "A comprehensive Enterprise Resource Planning system tailored for microfinance institutions.",
        fullDescription: `
        This Fintech ERP Solution is a robust, enterprise-grade platform designed to streamline the complex operations of microfinance institutions. 
        It serves as the backbone for managing millions of transactions, ensuring data integrity, and providing real-time financial insights.
        
        The system was built to address the scalability challenges faced by legacy systems, introducing a microservices-inspired architecture 
        within a modular monolith to handle high concurrency and massive data throughput.
      `,
        tech: ["Java", "Spring Boot", "Angular", "Redis", "RabbitMQ", "PostgreSQL"],
        image: "/project-thumbnails/fintech_erp.png",
        gallery: [
            "/project-thumbnails/fintech_erp.png",
            // In a real scenario, we would have more screenshots here
        ],
        youtubeId: "dQw4w9WgXcQ", // Placeholder ID, user can replace
        features: [
            "**Microfinance Module**: Complete lifecycle management of loans, savings, and insurance products.",
            "**Automated KYC**: Integrated with national ID databases for real-time identity verification.",
            "**Data Deduplication**: Custom algorithm to identify and merge duplicate customer records across millions of entries.",
            "**Webhook System**: Event-driven architecture for real-time notifications to 3rd party services.",
            "**Financial Reporting**: Real-time generation of balance sheets, trial balances, and regulatory reports."
        ],
        challenges: "One of the main challenges was ensuring the system could handle the end-of-day processing window within strict time limits. We implemented a batch processing system using Spring Batch and optimized database queries to reduce processing time by 60%.",
        links: {
            // demo: "#",
        }
    },
    {
        id: "inventory-system",
        title: "Inventory Management System",
        shortDescription: "A scalable microservice-based architecture for managing complex inventory needs.",
        fullDescription: `
        A modern, scalable Inventory Management System designed to handle complex supply chain requirements. 
        Unlike traditional monolithic inventory systems, this solution leverages a microservices architecture to ensure high availability and independent scaling of components.
        
        The system provides real-time visibility into stock levels across multiple warehouses, predicts restocking needs, and manages the entire order fulfillment lifecycle.
      `,
        tech: ["Spring Boot", "Microservices", "PostgreSQL", "React", "Docker", "Kubernetes"],
        image: "/project-thumbnails/inventory_system.png",
        gallery: [
            "/project-thumbnails/inventory_system.png"
        ],
        youtubeId: "", // Empty means no video to show by default
        features: [
            "**Microservices Architecture**: Separated User, Product, Order, and Inventory services for better maintainability.",
            "**Real-time Tracking**: WebSocket integration for live inventory updates.",
            "**Order Orchestration**: Saga pattern implementation for distributed transactions across services.",
            "**Analytics Dashboard**: Visual breakdown of top-selling products, low stock alerts, and revenue trends."
        ],
        challenges: "Managing distributed transactions and ensuring data consistency across services was critical. I implemented the Saga pattern to handle successful transactions and compensating transactions in case of failures.",
        links: {
            github: "https://github.com/shakib04/inventory-management-microservice-spring-boot"
        }
    },
    {
        id: "hr-payroll",
        title: "HR & Payroll Management",
        shortDescription: "An extensive human resource solution managing the complete employee lifecycle.",
        fullDescription: `
        An all-in-one HR and Payroll Management solution designed to digitize and automate workforce management. 
        It covers the entire employee journey from onboarding to retirement, ensuring compliance with local labor laws and tax regulations.
        
        The system reduced manual payroll processing time from days to hours and significantly minimized human error in tax calculations.
      `,
        tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "JasperReports"],
        image: "/project-thumbnails/hr_payroll.png",
        gallery: [
            "/project-thumbnails/hr_payroll.png"
        ],
        youtubeId: "",
        features: [
            "**Automated Payroll**: One-click salary generation considering attendance, leaves, and dynamic allowances.",
            "**Tax Management**: Auto-calculation of income tax based on configurable dynamic slabs.",
            "**Self-Service Portal**: Employees can view payslips, apply for leaves, and download tax certificates.",
            "**Provident Fund**: Comprehensive management of PF contributions and interest calculations."
        ],
        challenges: "Designing a flexible tax calculation engine that could be updated via configuration without code changes was essential to adapt to changing government regulations.",
        links: {}
    }
];
