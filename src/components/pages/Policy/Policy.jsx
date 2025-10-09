import { useTranslation } from '@hooks/useTranslation';
import './Policy.css';
import { useEffect } from 'react';

export default function Policy() {
  const { t, lang } = useTranslation();
  useEffect(() => {
    document.title = t('page-titles.policy_page_title') || 'Политика конфиденциальности';
  }, [t]);
  return (
    <section className="policy-section">
      <div className="container">
        <div className="policy-block">
          <h1 className="policy-title">{t("policy.title")}</h1>
          <div className="policy-content">
            <p>{t("policy.intro")}</p>

            <h2 className="policy-subtitle">{t("policy.sections.general.title")}</h2>
            <p>{t("policy.sections.general.text")}</p>

            <h2 className="policy-subtitle">{t("policy.sections.collected_data.title")}</h2>
            <ul className="policy-list">
              {t("policy.sections.collected_data.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="policy-subtitle">{t("policy.sections.purposes.title")}</h2>
            <p>{t("policy.sections.purposes.text")}</p>
            <ul className="policy-list">
              {t("policy.sections.purposes.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="policy-subtitle">{t("policy.sections.third_parties.title")}</h2>
            <p>{t("policy.sections.third_parties.text")}</p>

            <h2 className="policy-subtitle">{t("policy.sections.cookies.title")}</h2>
            <p>{t("policy.sections.cookies.text")}</p>

            <h2 className="policy-subtitle">{t("policy.sections.user_rights.title")}</h2>
            <p>{t("policy.sections.user_rights.text")}</p>
            <ul className="policy-list">
              {t("policy.sections.user_rights.items").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="policy-subtitle">{t("policy.sections.contacts.title")}</h2>
            <p>{t("policy.sections.contacts.text")}</p>
            <p><strong>{t("policy.sections.contacts.email_label")}</strong> devoil@internet.ru</p>
            <p><strong>{t("policy.sections.contacts.phone_label")}</strong> +7 985 977 5678</p>

            <p className="policy-date">{t("policy.effective_date")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}