
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Breadcrumbs from '../components/Breadcrumbs';
import { useTranslation } from '../i18n';

const GraduationRequirements: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const t = useTranslation(language);

    return (
        <div className="bg-white">
            <Breadcrumbs />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Hello World</h1>
                <p className="text-xl text-gray-500">{t('graduation_reqs')}</p>
            </div>
        </div>
    );
};

export default GraduationRequirements;
