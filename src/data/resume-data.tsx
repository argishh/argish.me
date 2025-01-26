import {
  ConsultlyLogo,
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
      degree: "Integrated Masters's Degree in Artificial Intelligence",
      start: "2020",
      end: "2025",
    },
  ],

  work: [
    {
      company: "Company Name",
      link: "Company_Website",
      badges: ["Langchain", "OpenAI", "Ollama", "CrewAI", "Streamlit"],
      title: "Machine Learning Intern",
      logo: ConsultlyLogo,
      start: "July 2024",
      end: "June 2024",
      description: (
        <>
          !!!!!!! CHANGE THIS !!!!!!!!!
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
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
      logo: ConsultlyLogo,
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
      logo: ConsultlyLogo,
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
      logo: ConsultlyLogo,
      link: {
        label: "PyPI/genfunc",
        href: "https://pypi.org/project/genfunc/",
      },
    },
  ],
} as const;
