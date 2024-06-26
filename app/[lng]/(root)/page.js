import { useTranslation } from "@/app/i18n";
import DecisionInput from "./DecisionInput";
import RecentHistory from "./RecentHistory";

const HomePage = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="hero min-h-full bg-base-200">
      <div className="hero-content text-center">
        <div className="flex max-w-full flex-col gap-5 md:max-w-screen-sm">
          <h1 className="whitespace-pre-wrap text-5xl font-bold leading-tight">
            {t("home_title")}
          </h1>
          <p>{t("home_desc")}</p>
          <DecisionInput />
          <RecentHistory />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
