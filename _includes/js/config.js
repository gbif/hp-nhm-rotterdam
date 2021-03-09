var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'collectionID', value: '187a8a55-7de6-4230-8250-7d4ee274004f' }
};
