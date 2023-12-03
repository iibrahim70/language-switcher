import React from "react";
import ReactDOM from "react-dom/client";
// package for language switch
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// local files
import enTranslation from "../public/locales/en/translation.json";
import bnTranslation from "../public/locales/bn/translation.json";
// main files
import App from "./App.jsx";
import "./index.css";

// configuration
i18n.use(LanguageDetector).init({
  resources: {
    en: { translation: enTranslation },
    bn: { translation: bnTranslation },
  },
  fallbackLng: "bn",
  debug: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
