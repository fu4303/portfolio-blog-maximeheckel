const theme = {
  light: {
    backgroundColor: 'var(--maximeheckel-colors-body-0, #F6F7F8)',
    borderColor: '#f5f5f9',
    boxShadow: '0 0px 12px -6px rgba(0, 24, 40, 0.25)',
    colors: {
      blue: 'var(--maximeheckel-colors-brand, #5184f9)',
      gray: '#F8F8F9',
      pink: '#FED5D7',
      prism: {
        token: `#fff`,
        // tslint:disable-next-line:object-literal-sort-keys
        languageJavascript: `#e8696b`,
        javascript: `#e8696b`,
        background: `#292c34`,
        comment: `#5e6a76`,
        string: `#a8e2a8`,
        var: `#b3bac5`,
        number: `#e4854d`,
        constant: `#b3bac5`,
        plain: `#fff`,
        doctype: `#e8696b`,
        tag: `#e8696b`,
        keyword: `#d49fd4`,
        boolean: `#ff5874`,
        function: `#5F8DC3`,
        parameter: `#F9965D`,
        className: `#ffcf74`,
        attrName: `#bf87ba`,
        attrValue: `#a8e2a8`,
        interpolation: `#fff`,
        punctuation: `#5FA8AA`,
        ['maybe-class-name']: `#fff`,
        property: `#80cbc4`,
        propertyAccess: `#fff`,
        namespace: `#b2ccd6`,
        highlight: `rgba(255,255,255,0.07)`,
        highlightBorder: '#196FD8',
        dom: `#5F8DC3`,
        operator: `#5FA8AA`,
      },
      white: '#FFFFFF',
    },
    fontColor: 'var(--maximeheckel-colors-typeface-0, #2B2D3E)',
    foregroundColor:
      'var(--maximeheckel-colors-body-1, rgba(217, 230, 247, 0.55))',
    overlayBackground:
      'var(--maximeheckel-colors-body-2, rgba(236, 236, 236, 0.8))',
    transitionTime: 0.5,
  },

  dark: {
    backgroundColor: 'var(--maximeheckel-colors-body-0, #1b1e21)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: 'rgba(0,0,0,0.2) 0px 20px 40px',
    colors: {
      black: '#000000',
      blue: 'var(--maximeheckel-colors-brand, #5184f9)',
      gray: '#F8F8F9',
      pink: '#FED5D7',
      prism: {
        token: `#fff`,
        // tslint:disable-next-line:object-literal-sort-keys
        languageJavascript: `#e8696b`,
        javascript: `#e8696b`,
        background: `#0F111B`,
        comment: `#5e6a76`,
        string: `#a8e2a8`,
        var: `#b3bac5`,
        number: `#e4854d`,
        constant: `#b3bac5`,
        plain: `#fff`,
        doctype: `#e8696b`,
        tag: `#e8696b`,
        keyword: `#d49fd4`,
        boolean: `#ff5874`,
        function: `#5F8DC3`,
        parameter: `#F9965D`,
        className: `#ffcf74`,
        attrName: `#bf87ba`,
        attrValue: `#a8e2a8`,
        interpolation: `#fff`,
        punctuation: `#5FA8AA`,
        ['maybe-class-name']: `#fff`,
        property: `#80cbc4`,
        propertyAccess: `#fff`,
        namespace: `#b2ccd6`,
        highlight: `rgba(255,255,255,0.07)`,
        highlightBorder: '#3c83da',
        dom: `#5F8DC3`,
        operator: `#5FA8AA`,
      },
      white: '#FFFFFF',
    },
    fontColor: 'var(--maximeheckel-colors-typeface-0, #FFFFFF)',
    foregroundColor:
      'var(--maximeheckel-colors-body-1, rgba(14, 20, 27, 0.55))',
    overlayBackground: 'var(--maximeheckel-colors-body-2, rgba(0,0,0,0.40))',
    transitionTime: 0.5,
  },
};

export default theme;
