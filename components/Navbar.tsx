import React, { useContext, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../App";
import { useTranslation } from "../i18n";

interface SubItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  subcategories: SubItem[];
}

const Navbar: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = useTranslation(language);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      name: "introduction",
      path: "/intro",
      subcategories: [
        { name: "welcome_msg", path: "/intro" },
        { name: "departments", path: "/departments" },
      ],
    },
    {
      name: "education",
      path: "#",
      subcategories: [
        { name: "course_information", path: "/course-information" },
        { name: "graduation_reqs", path: "/graduation-requirements" },
      ],
    },
    {
      name: "admissions",
      path: "/admissions",
      subcategories: [],
    },
  ];

  return (
    <nav
      className="relative z-50 bg-white border-b border-gray-100 shadow-sm"
      onMouseLeave={() => {
        setActiveMenu(null);
        setDropdownLeft(null);
      }}
    >
      <div
        ref={navContainerRef}
        className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4"
      >
        <div className="flex h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 mr-auto">
            <img
              src="https://images.seeklogo.com/logo-png/40/2/kaist-korea-advanced-institute-of-science-and-tech-logo-png_seeklogo-402926.png"
              alt="KAIST Logo"
              className="h-32 w-auto object-contain transition-all duration-300"
            />
            <div className="h-11 w-[1px] bg-gray-200 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-[#002380] font-bold text-l sm:text-xl md:text-2xl tracking-tight leading-none">
                College of AI
              </span>
              <span className="text-gray-400 text-[12px] font-base uppercase tracking-widest">
                AI대학
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 h-full mr-16">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="h-full flex items-center relative"
                onMouseEnter={(e) => {
                  if (
                    item.subcategories.length > 0 &&
                    navContainerRef.current
                  ) {
                    const itemRect = e.currentTarget.getBoundingClientRect();
                    const containerRect =
                      navContainerRef.current.getBoundingClientRect();

                    setActiveMenu(item.name);
                    setDropdownLeft(
                      itemRect.left +
                      -containerRect.left -
                      47,
                    );
                  } else {
                    setActiveMenu(null);
                    setDropdownLeft(null);
                  }
                }}
              >
                <Link
                  to={item.path}
                  className={`text-base font-bold tracking-tight transition-colors py-2 border-b-2 ${location.pathname === item.path || activeMenu === item.name
                    ? "text-[#002380] border-[#002380]"
                    : "text-gray-700 border-transparent hover:text-[#002380]"
                    }`}
                >
                  {t(item.name)}
                </Link>
              </div>
            ))}
          </div>

          {/* Utils */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage(language === "en" ? "ko" : "en")}
              className="text-[10px] font-bold text-gray-400 hover:text-[#002380] border border-gray-200 rounded px-2 py-1 transition-all"
            >
              {language === "en" ? "KOREAN" : "ENGLISH"}
            </button>
            <button
              className="md:hidden p-2 text-gray-500 hover:text-[#002380] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Panel */}
      <div
        className={`absolute top-18 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out pb-4
          ${activeMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeMenu && (
            <div
              className="py-4"
              style={{
                marginLeft: dropdownLeft ?? 0,
              }}
            >
              <div className="flex flex-col space-y-3 w-fit">
                {navItems
                  .find((i) => i.name === activeMenu)
                  ?.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="group flex items-center space-x-2 py-1"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#002380] rounded-full transition-colors" />
                      <span className="text-gray-700 font-medium group-hover:text-[#002380] transition-colors">
                        {t(sub.name)}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden
          ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-4 mb-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name} className="space-y-2">
              <Link
                to={item.path}
                className={`block text-lg font-bold ${location.pathname === item.path
                  ? "text-[#002380]"
                  : "text-gray-700"
                  }`}
                onClick={() => {
                  if (item.subcategories.length === 0) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {t(item.name)}
              </Link>
              {item.subcategories.length > 0 && (
                <div className="pl-4 space-y-2">
                  {item.subcategories.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block text-gray-600 hover:text-[#002380] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(sub.name)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
