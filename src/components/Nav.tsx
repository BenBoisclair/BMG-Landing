import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import '../i18n/i18n';

interface NavItem {
  key: string;
  href: string;
}

interface Language {
  code: string;
  name: string;
  flag?: string;
}

const navItems: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'story', href: '/story' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'products', href: '/products' },
  { key: 'articles', href: '/articles' },
  { key: 'news', href: '/news' },
  { key: 'contact', href: '/contact' }
];

const languages: Language[] = [
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/src/assets/logo-transparent.svg" 
              alt="BMG Logo" 
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-gray-200 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10 rounded transition-colors duration-200"
            >
              <span>{currentLanguage.flag}</span>
              <span>{currentLanguage.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLangDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 ${
                      i18n.language === lang.code ? 'bg-gray-50 text-primary font-medium' : 'text-gray-700'
                    }`}
                  >
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
            className="md:hidden text-white hover:text-gray-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
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
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              
              {/* Language Switcher - Mobile */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex flex-col space-y-2">
                  <span className="text-white/70 text-xs uppercase tracking-wider">Language</span>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors duration-200 flex items-center space-x-2 ${
                        i18n.language === lang.code
                          ? 'bg-white text-primary font-medium'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
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