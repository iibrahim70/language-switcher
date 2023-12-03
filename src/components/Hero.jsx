import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <p>{t("greeting")}</p>
    </section>
  );
};

export default Hero;
