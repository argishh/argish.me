import {
  aLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Argish Abhangi",
  initials: "",
  location: "Surat, India",
  locationLink: "https://www.google.com/maps/place/Surat",
  about:
    "Detail-oriented Machine Learning Engineer dedicated to building high-quality AI Powered products.",
  summary: (
    <>
      Machine Learning Engineer with a strong foundation in Machine Learning and Deep Learning. 
      While I am just starting my professional journey, I am passionate about leveraging 
      cutting-edge algorithms and techniques to solve complex problems and drive innovation. 
      My goal is to contribute to impactful projects while continuously enhancing my skills 
      in this dynamic and ever-evolving field. 
    </>
  ),

  avatarUrl: "https://avatars.githubusercontent.com/u/80659240?v=4",
  personalWebsiteUrl: "https://argish.me",
  contact: {
    email: "abhangiargish@gmail.com",
    tel: "+919023472344",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/argishh",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/argish/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/argishh",
        icon: XIcon,
      },
    ],
  },

  education: [
    {
      school: "Vellore Institute of Technology, Bhopal",
      degree: "M.Tech AI (5 Year Integrated) | CGPA: 8.89",
      start: "2020",
      end: "2025",
    },
    {
      school: "Ryan International School, Surat",
      degree: "Secondary Higher Education (XII) | Grade - 85%",
      start: "2019",
      end: "2020",
    },
    {
      school: "Ryan International School, Surat",
      degree: "Higher Education (X) | Grade - 73%",
      start: "2017",
      end: "2018",
    },
  ],

  work: [
    {
      company: "Spigot InfoTech",
      link: "https://www.spigotinfotech.in/",
      badges: ["Langchain", "OpenAI", "Ollama", "CrewAI", "Streamlit"],
      title: "AI/ML Intern",
      start: "March 2024",
      end: "May 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed and deployed a web scraping pipeline leveraging BeautifulSoup & Selenium to auto-scrape data from 
              30+ websites, boosting data extraction efficiency by 80% & reducing manual effort by 50 hours monthly.
            </li>
            <li>
              Designed RAG pipelines and engineered prompt optimization techniques to improve response quality.
            </li>
            <li>
              Collaborated with cross-functional teams to integrate AI-driven chatbots and summarization tools.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Space Applications Centre - ISRO",
      link: "https://www.sac.gov.in/Vyom/srtd",
      badges: ["Python", "PyTorch", "OpenCV", "Zemax"],
      title: "Machine Learning Intern",
      start: "June 2024",
      end: "July 2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed a novel deep neural network architecture to automate the alignment of primary and secondary 
              mirror segments for a telescope, enhancing precision and reducing manual intervention.
            </li>
            <li>
              Utilized residual attention networks (RANs) & multi-scale feature extraction to optimize image processing tasks.
            </li>
            <li>
              Proposed real-time feedback mechanisms to dynamically adjust mirror positioning for optimal alignment.
            </li>
            <li>
              Collaborated with astrophysicists & optical engineers to understand telescope architecture & requirements, gather domain knowledge and integrate AI-driven solutions into the telescope&apos;s control systems.            
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Water Management and Forecasting, Omdena",
      link: "https://dagshub.com/Omdena/AlgeriaBhopal_WaterManagementandForecasting/src/main/README.md",
      badges: ["Python", "PyTorch", "Scikit-Learn", "Plotly", "Streamlit"],
      title: "Open Source",
      start: "",
      end: "",
      description: (
        <>
        <ul className="list-inside list-disc">
          <li>
            Developed, implemented & fine-tuned LSTM Network using recursive forecasting to predict water availability
            with 96% accuracy using sensor data from the cities of Algiers & Bhopal. Deployed the model using Streamlit.
          </li>
        </ul>
        </>
      ),
    },
    {
      company: "Greenhouse Monitoring Systems, Omdena",
      link: "https://github.com/OmdenaAI/Algeria-Chapter-Green",
      badges: ["Python", "Tensorflow", "Keras", "OpenCV", "HTML", "CSS", "JavaScript"],
      title: "Open Source",
      start: "",
      end: "",
      description: (
        <>
        <ul className="list-inside list-disc">
            <li>
              Built a plant disease & pests detection CNN model to identify 40+ diseases & pests with 98% accuracy.
            </li>
            <li>
              Fine-tuned a plant species identification model using transfer learning to identify 20 species with 94% accuracy.
            </li>
          </ul>
        </>
      ),
    },
  ],
  
  skills: [
    "Python",
    "C++",
    "SQL",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "HuggingFace Transformers",
    "Tensorflow",
    "Keras",
    "NLTK",
    "OpenCV",
    "FastAI",
    "ChromaDB",
    "SQLite",
    "Numpy",
    "Pandas",
    "FireDucks",
    "Scikit-learn",
    "XGBoost",
    "BeautifulSoup",
    "Selenium",
    "FastAPI",
    "Flask",
    "Streamlit",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "HTML/CSS",
    "Git/Github",
  ],
  projects: [
    {
      title: "Realtime Multimodal Emotion Recognition | 🛠️ In Progress",
      techStack: [
        "Python", 
        "PyTorch", 
        "Tensorflow",
        "Keras", 
        "Huggingface-Transformers", 
        "KaggleHub", 
        "Mediapipe", 
        "PyQT5"],
      description:
        "Training a Text + Audio + Vision multimodal for state-of-the-art realtime emotion recognition.",
      logo: aLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "ChatDocs",
      techStack: [
        "Python", 
        "Langchain", 
        "Openai", 
        "FastAPI",
        "ChromaDB,", 
        "SQLite", 
        "Pydantic", 
        "Streamlit"],
      description:
        "Developed a robust RAG-based chatbot with LangChain & OpenAI, achieving 95% context accuracy. Integrated the RAG pipeline with a Streamlit app via FastAPI & SQLite for efficient session management. Optimized system performance & user experience through intuitive architecture & accurate response delivery.",
      logo: aLogo,
      link: {
        label: "chatdocsonline.streamlit.app",
        href: "https://chatdocsonline.streamlit.app/",
      },
    },
    {
      title: "StockGinie",
      techStack: [
        "Python",
        "PyTorch",
        "Yfinance",
        "Plotly",
        "PyTest",
        "Streamlit",
      ],
      description:
        "Built a scalable stock price prediction system using LSTM, achieving an average R² score of 0.85. Automated data analysis, model training & inference with real-time data fetching & comprehensive logging. Deployed an interactive Streamlit dashboard for visualizing insights with dynamic graphs & charts.",
      logo: aLogo,
      link: {
        label: "stockginie.streamlit.app",
        href: "https://stockginie.streamlit.app/",
      },
    },
    {
      title: "genfunc",
      techStack: ["Python", "OpenAI", "Anthropic", "Logging", "PyTest"],
      description:
        "Shipped a python package that leverages power of LLMs to generate functions based on a given description. It reduces time taken to explicitly code one-time use functions & is useful to generate complex boilerplate code.",
      logo: aLogo,
      link: {
        label: "PyPI/genfunc",
        href: "https://pypi.org/project/genfunc/",
      },
    },
  ],
} as const;
