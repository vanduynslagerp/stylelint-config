module.exports = {
  extends: './index.js',
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'at-rules',
      'rules',
      {type: 'at-rule', name: 'media', hasBlock: true},
    ],
    'order/properties-order': [
      [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'display',
        'float',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'box-sizing',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'overflow',
        'overflow-x',
        'overflow-y',
        'clip',
        'clear',
        'font',
        'font-family',
        'font-size',
        'font-style',
        'font-weight',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'font-effect',
        'font-emphasize',
        'font-emphasize-position',
        'font-emphasize-style',
        'font-smooth',
        'hyphens',
        'line-height',
        'color',
        'text-align',
        'text-align-last',
        'text-emphasis',
        'text-emphasis-color',
        'text-emphasis-style',
        'text-emphasis-position',
        'text-decoration',
        'text-indent',
        'text-justify',
        'text-outline',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'text-shadow',
        'text-transform',
        'text-wrap',
        'letter-spacing',
        'word-break',
        'word-spacing',
        'overflow-wrap',
        'word-wrap',
        'tab-size',
        'white-space',
        'vertical-align',
        'list-style',
        'list-style-position',
        'list-style-type',
        'list-style-image',
        'pointer-events',
        'fill',
        'fill-opacity',
        'stroke',
        'stroke-opacity',
        'stroke-width',
        'shape-rendering',
        'cursor',
        'visibility',
        'zoom',
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-direction',
        'flex-wrap',
        'flex-flow',
        'align-items',
        'align-content',
        'align-self',
        'justify-content',
        'order',
        'object-fit',
        'table-layout',
        'empty-cells',
        'caption-side',
        'border-spacing',
        'border-collapse',
        'content',
        'quotes',
        'counter-reset',
        'counter-increment',
        'resize',
        'user-select',
        'nav-index',
        'nav-up',
        'nav-right',
        'nav-down',
        'nav-left',
        'background',
        'background-color',
        'background-image',
        'filter',
        'background-repeat',
        'background-attachment',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-clip',
        'background-origin',
        'background-size',
        'border',
        'border-color',
        'border-style',
        'border-width',
        'border-top',
        'border-top-color',
        'border-top-style',
        'border-top-width',
        'border-right',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-bottom',
        'border-bottom-color',
        'border-bottom-style',
        'border-bottom-width',
        'border-left',
        'border-left-color',
        'border-left-style',
        'border-left-width',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
        'box-shadow',
        'opacity',
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',
        'transform',
        'transform-origin',
        'animation',
        'animation-name',
        'animation-duration',
        'animation-fill-mode',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
      ],
      {unspecified: 'bottomAlphabetical'},
    ],
    'order/properties-alphabetical-order': null,
  },
};