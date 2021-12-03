var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'datasetKey', value: 'a307e4d7-1de2-4adc-95d5-a0a8d5f57236' },
  excludedFilters: ['datasetKey'], // no need to have a dataset filter when we only have one dataset
  highlightedFilters: ['q', 'taxonKey', 'catalogNumber', 'locality', 'waterBody', 'year', 'country', 'basisOfRecord'], // or whatever you believe is the most useful filters for your audience
  defaultTableColumns: ['features', 'country', 'coordinates', 'year', 'catalogNumber', 'basisOfRecord'],
};
