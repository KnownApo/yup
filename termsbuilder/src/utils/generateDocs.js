import Handlebars from 'handlebars';
import termsTemplate from '../templates/termsTemplate';
import privacyTemplate from '../templates/privacyTemplate';

export const generateDocs = (formData) => {
  const compiledTerms = Handlebars.compile(termsTemplate);
  const compiledPrivacy = Handlebars.compile(privacyTemplate);

  const context = {
    businessName: formData.businessName,
    dataCollected: formData.dataCollected.split(',').map(item => item.trim()),
    usesCookies: formData.usesCookies === 'yes',
    country: formData.country
  };

  return {
    terms: compiledTerms(context),
    privacy: compiledPrivacy(context)
  };
};
