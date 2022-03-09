var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    rootPredicate: { type: 'equals', key: 'datasetKey', value: 'a307e4d7-1de2-4adc-95d5-a0a8d5f57236' },
    excludedFilters: ['datasetKey'], // no need to have a dataset filter when we only have one dataset
    highlightedFilters: ['q', 'taxonKey', 'catalogNumber', 'locality', 'waterBody', 'year', 'country', 'basisOfRecord'], // or whatever you believe is the most useful filters for your audience
    defaultTableColumns: ['features', 'preparations', 'catalogNumber', 'country', 'coordinates', 'year', 'basisOfRecord'],
  }
};
