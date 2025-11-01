import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  hasSolidBackground?: boolean;
}

export default function LanguageSwitcher({ hasSolidBackground = true }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'vi', name: t('common.vietnamese') },
    { code: 'en', name: t('common.english') },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const textColor = hasSolidBackground ? 'text-gray-700' : 'text-white';
  const hoverColor = hasSolidBackground ? 'hover:text-[#3CB371]' : 'hover:text-gray-200';

  return (
    <div className="relative group">
      <button className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${textColor} ${hoverColor}`}>
        <Globe size={16} />
        <span className="hidden sm:inline">{t('common.language')}</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              i18n.language === lang.code ? 'text-[#3CB371] font-medium' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}
