export default {
  title: 'General Layout System',
  base: '/gls/',
  menu: [
    'General Layout System',
    'Airspace'
  ],

  // Some cleanups
  codeSandbox: false,
  typescript: true,
  hashRouter: true,
  indexHtml: 'public/index.html',
  themeConfig: {
    footerText: 'white',
    styles: {
      playground: `
        padding: 0px;
        border: 8px solid #eeee;
      `
    }
  },
}
