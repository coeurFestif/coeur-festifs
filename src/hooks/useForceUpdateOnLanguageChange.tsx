import { useEffect, useState } from "react";
import i18n from "../services/i18n";

export const useForceUpdateOnLanguageChange = () => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    console.log("useForceUpdateOnLanguageChange", i18n.language);
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return language;
};
