import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t("welcome")}</h1>
    </section>
  );
};

export default Hero;
