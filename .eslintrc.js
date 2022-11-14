module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'ignorePatterns': [
        '.eslintrc.js'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'curly': [
            'error',
            'all',
        ],
        'indent': [
            'error',
            4,
            {
                "ignoredNodes": ["TemplateLiteral > *"],
                "SwitchCase": 1
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'double',
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        'react/prop-types': 'off',
        'semi': [
            'error',
            'always'
        ]
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
