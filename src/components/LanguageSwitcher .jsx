import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-5">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("bn")}>বাংলা</button>
    </div>
  );
};

export default LanguageSwitcher;
