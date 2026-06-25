/**
 * One Stop Computer Academy - Application Data
 */

export interface Course {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
  duration: string;
  level: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  category: 'classroom' | 'lab' | 'activity';
  title: string;
  placeholderText: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  reviewText: string;
  avatarUrl: string;
  placeholderText: string;
}

export const ACADEMY_INFO = {
  name: "One Stop Computer Academy",
  tagline: "Build Your Future with Technology",
  subheading: "Professional Computer Education for School, College & Diploma Students.",
  logoText: "Academy Logo Here",
  contact: {
    phone: "8272905444",
    phoneDisplay: "+91 8272905444",
    phone2: "9123056547",
    phoneDisplay2: "+91 9123056547",
    email: "onestopcomputeracademy@gmail.com",
    address: "DD-202, Street-295, Newtown, Action Area-1, Kolkata – 700156",
    city: "Kolkata - 700156",
    whatsappUrl: "https://wa.me/918272905444",
    whatsappUrl2: "https://wa.me/919123056547",
  },
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "https://wa.me/918272905444"
  }
};

export const WHY_CHOOSE_US_ITEMS = [
  { title: "Practical Training", desc: "Learn by doing with real-world programming exercises and mini-projects." },
  { title: "Small Batch Size", desc: "Get personalized attention and doubts resolved instantly with limited seats per batch." },
  { title: "Career Guidance", desc: "Resume building, industry insights, and mentorship for jobs and higher studies." },
  { title: "Student-Friendly Learning", desc: "Concepts explained in simple, easy-to-understand language with real examples." },
  { title: "Academic Support", desc: "Full alignment with university syllabi and school computer science curriculums." },
  { title: "Affordable Fees", desc: "High-quality, professional technical education at highly accessible course fees." }
];

export const COURSES: Course[] = [
  // Programming
  {
    id: "c-prog",
    name: "C Programming",
    category: "Programming",
    iconName: "Terminal",
    description: "Master the foundational language of computing. Learn variables, flow control, arrays, pointers, structures, and file handling.",
    duration: "2-3 Months",
    level: "Beginner",
    features: ["Pointers & Memory Management", "Hands-on coding challenges", "Academic Syllabus Alignment"]
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    iconName: "FileCode",
    description: "Learn Python from scratch. Cover basic syntax, data structures, functional programming, OOP, and popular libraries.",
    duration: "2-3 Months",
    level: "Beginner",
    features: ["Easy Syntax for Beginners", "File & Exception Handling", "Mini-project Development"]
  },
  {
    id: "cpp-oop",
    name: "Object Oriented Programming (C++)",
    category: "Programming",
    iconName: "Cpu",
    description: "Understand core Object-Oriented principles (Encapsulation, Inheritance, Polymorphism, Abstraction) using C++ with practical assignments.",
    duration: "3 Months",
    level: "Intermediate",
    features: ["OOP Principles in Depth", "C++ Standard Template Library (STL)", "Memory & Class Hierarchies"]
  },
  // CS Core
  {
    id: "dsa",
    name: "Data Structures & Algorithms (DSA)",
    category: "Computer Science Core",
    iconName: "Layers",
    description: "Learn Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting, Searching, and Complexity analysis to ace technical interviews.",
    duration: "3-4 Months",
    level: "Intermediate to Advanced",
    features: ["Complexity Analysis (Big O)", "Recursion & Dynamic Programming", "Interview Problem Solving"]
  },
  {
    id: "os",
    name: "Operating Systems",
    category: "Computer Science Core",
    iconName: "HardDrive",
    description: "Understand CPU scheduling, process synchronization, deadlocks, memory management, and file system implementation.",
    duration: "2 Months",
    level: "Intermediate",
    features: ["Process & Thread Synchronization", "Virtual Memory & Paging", "Syllabus-focused Concept Cards"]
  },
  {
    id: "dbms",
    name: "Database Management Systems (DBMS)",
    category: "Computer Science Core",
    iconName: "Database",
    description: "Learn relational databases, ER-modeling, SQL queries, normalization (1NF-BCNF), and transaction control.",
    duration: "2 Months",
    level: "Beginner to Intermediate",
    features: ["SQL Query Writing Lab", "ER Diagrams & Mapping", "Normalization Techniques"]
  },
  {
    id: "software-eng",
    name: "Software Engineering",
    category: "Computer Science Core",
    iconName: "Workflow",
    description: "Understand software development lifecycles (SDLC), Agile processes, UML modeling, design principles, testing strategies, and project management.",
    duration: "2 Months",
    level: "Intermediate",
    features: ["Agile & Scrum Methodologies", "UML Modeling Practice", "System Design Basics"]
  },
  // Development
  {
    id: "ms-word",
    name: "MS Word",
    category: "Development",
    iconName: "FileText",
    description: "Learn Microsoft Word from absolute basics to advanced document design, formatting, mail merge, templates, and office report creation.",
    duration: "1 Month",
    level: "Beginner",
    features: ["Document Layout & Formatting", "Mail Merge & Office Reports", "Templates & Custom Styling"]
  },
  {
    id: "html",
    name: "HTML",
    category: "Development",
    iconName: "Layout",
    description: "Learn HyperText Markup Language, the backbone of all web content, including semantic markup, forms, and media inclusion.",
    duration: "1 Month",
    level: "Beginner",
    features: ["Semantic HTML5 tags", "Form elements & validation", "SEO & Accessibility best practices"]
  },
  {
    id: "css",
    name: "CSS",
    category: "Development",
    iconName: "Palette",
    description: "Learn Cascading Style Sheets to style web content. Master layouts with Flexbox/Grid, typography, media queries, and animations.",
    duration: "1 Month",
    level: "Beginner",
    features: ["Flexbox, Grid & Media Queries", "Transitions & Transforms", "Tailwind CSS overview"]
  },
  // Networking
  {
    id: "networking",
    name: "Computer Networking",
    category: "Networking",
    iconName: "Network",
    description: "Understand computer networks, OSI & TCP/IP reference models, routing algorithms, subnets, IP addressing, and socket programming basics.",
    duration: "2 Months",
    level: "Intermediate",
    features: ["TCP/IP & OSI Layers", "IP Addressing & Subnetting", "Network Protocols & Ports"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 6 Classroom Images
  {
    id: "class-1",
    category: "classroom",
    title: "Interactive Classroom Session",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "class-2",
    category: "classroom",
    title: "One-on-One Doubt Clearing",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "class-3",
    category: "classroom",
    title: "Programming Theory Class",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "class-4",
    category: "classroom",
    title: "Computer Science Core Discussion",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "class-5",
    category: "classroom",
    title: "Interactive Smart Board Lecture",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "class-6",
    category: "classroom",
    title: "Weekend Batch Study Group",
    placeholderText: "Classroom Image",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
  },

  // 4 Lab Images
  {
    id: "lab-1",
    category: "lab",
    title: "Dedicated Programming Workstations",
    placeholderText: "Lab Image",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lab-2",
    category: "lab",
    title: "High-Speed Internet Connectivity",
    placeholderText: "Lab Image",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lab-3",
    category: "lab",
    title: "Individual Practice Stations",
    placeholderText: "Lab Image",
    imageUrl: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lab-4",
    category: "lab",
    title: "Web Development Hands-on Lab",
    placeholderText: "Lab Image",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  },

  // 4 Student Activity Images
  {
    id: "act-1",
    category: "activity",
    title: "Code-Thon Coding Competition",
    placeholderText: "Student Activity Image",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "act-2",
    category: "activity",
    title: "Weekly Tech Presentations",
    placeholderText: "Student Activity Image",
    imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "act-3",
    category: "activity",
    title: "Group Technical Quizzes",
    placeholderText: "Student Activity Image",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "act-4",
    category: "activity",
    title: "Academy Felicitation & Awards",
    placeholderText: "Student Activity Image",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Chatterjee",
    course: "DSA & Programming in C++",
    rating: 5,
    reviewText: "The practical approach at One Stop Computer Academy helped me build complete confidence in DSA. The small batch size meant the teacher resolved my coding queries instantly. Highly recommended for any engineering student!",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    placeholderText: "Student Photo Placeholder"
  },
  {
    id: "test-2",
    name: "Sneha Sen",
    course: "Python & Website Development",
    rating: 5,
    reviewText: "I came from a non-programming background, but the mentors made learning Python and Web Development incredibly simple. The hands-on project assignments helped me build a great portfolio for my college projects.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    placeholderText: "Student Photo Placeholder"
  },
  {
    id: "test-3",
    name: "Amit Kumar Dey",
    course: "Computer CS Core & Networking",
    rating: 5,
    reviewText: "Amazing experience! The academic support aligned perfectly with my university syllabus. Topics like Operating Systems, DBMS and Networking were explained with easy real-world examples that made passing exams breeze.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    placeholderText: "Student Photo Placeholder"
  }
];
