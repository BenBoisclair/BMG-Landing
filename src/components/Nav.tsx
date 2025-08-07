import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "../i18n/i18n";
import logoTransparent from "../assets/logo-transparent.svg";

interface NavItem {
  key: string;
  href: string;
}

interface Language {
  code: string;
  name: string;
  flag?: string;
}

interface NavProps {}

const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "story", href: "/story" },
  { key: "products", href: "/products" },
  // { key: "portfolio", href: "/portfolio" },
  // { key: "articles", href: "/articles" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];

const languages: Language[] = [
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function Nav({}: NavProps) {
  const { t, i18n, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setIsLangDropdownOpen(false);
    // Reload the page to apply the new language
    window.location.reload();
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient || !ready) {
    return (
      <nav className="fixed top-0 left-0 right-0 w-full bg-primary z-50 h-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <div>
              <a href="/">
                <img
                  src={logoTransparent.src}
                  alt="BMG Logo"
                  className="w-auto h-14 hover:opacity-80 transition-all duration-300"
                />
              </a>
            </div>
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full bg-primary z-50 transition-all duration-300 hover:opacity-100 ${
        isScrolled ? "shadow-lg opacity-80" : "opacity-100"
      }`}>
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-24"
          }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img
                src={logoTransparent.src}
                alt="BMG Logo"
                className={`w-auto hover:opacity-80 transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-14"
                }`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-white hover:text-gray-200 font-medium uppercase tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-sm" : "text-base"
                }`}>
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className={`flex items-center space-x-2 px-3 py-1.5 font-medium text-white hover:bg-white/10 rounded transition-all duration-300 ${
                isScrolled ? "text-sm" : "text-base"
              }`}>
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <FaChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLangDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 ${
                      i18n.language === lang.code
                        ? "bg-gray-50 text-primary font-medium"
                        : "text-gray-700"
                    }`}>
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-200 focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-gray-200 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}>
                  {t(`nav.${item.key}`)}
                </a>
              ))}

              {/* Language Switcher - Mobile */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-2">
                  <span className="text-white/70 text-xs uppercase tracking-wider">
                    Language
                  </span>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-200 flex items-center space-x-2 ${
                        i18n.language === lang.code
                          ? "bg-white text-primary font-medium"
                          : "text-white hover:bg-white/10"
                      }`}>
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
