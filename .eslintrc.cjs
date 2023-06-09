const production = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
    worker: true
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended'
    // "plugin:import/recommended",
    // "plugin:node/recommended",
    // 'plugin:promise/recommended'
  ],
  globals: {
    $: 'readonly',
    $bpm: 'readonly',
    $wsPool: 'readonly',
    _: 'readonly',
    __mainAppProps__: 'readonly',
    // eslint-disable-next-line camelcase
    __webpack_public_path__: 'writable',
    axios: 'readonly',
    Base64: 'readonly',
    ClipboardJS: 'readonly',
    DEV: 'readonly',
    Enum: 'readonly',
    jQuery: 'readonly',
    Vue: 'readonly',
    VueRouter: 'readonly'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { impliedStrict: true },
    // vueFeatures: {
    //   interpolationAsNonHTML: true,
    //   styleCSSVariableInjection: true
    // },
    ecmaVersion: 2022,
    // parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  plugins: ['html', 'vue', 'jsx', '@cailiao/prettier', '@typescript-eslint'],
  root: true,
  // 默认可用的全局变量
  rules: {
    '@cailiao/prettier/prettier': 0,
    'accessor-pairs': 0, //在对象中使用getter/setter
    //数组中括号（不含成员之间的换行）需要换行
    'array-bracket-newline': [
      2,
      'consistent' //consistent表示有换行则换行
      // {
      //   "multiline": true //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
      // }
    ],
    'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
    'array-element-newline': [
      2,
      'consistent' //数组成员之间需要换行，onsistent表示有换行则换行
      // {
      //   "multiline": true, //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
      //   "minItems": 8
      // }
    ],
    'arrow-parens': 0, //箭头函数用小括号括起来
    'arrow-spacing': 0, //=>的前/后括号
    'block-scoped-var': 0, //块语句中使用var
    'brace-style': [1, '1tbs'], //大括号风格
    'callback-return': 0, //回调后需要有return语句，避免多次调用回调
    // 要求驼峰法命名
    camelcase: 1,
    'comma-dangle': [2, 'never'], //对象字面量项尾不能有逗号
    'comma-spacing': 0, //逗号前后的空格
    'comma-style': [2, 'last'], //逗号风格，换行时在行首还是行尾
    complexity: [0, 11], // 条件复杂度，限制11条分支
    'computed-property-spacing': [0, 'never'], //强制计算后属性的空格保持一致性。（是否允许计算后的键名什么的）
    'consistent-return': 0, // return 后面是否允许省略返回值
    // 字段内保持this名称一致性
    'consistent-this': [0, 'that'],
    'constructor-super': 2, // 非派生类不能调用super，派生类必须调用super
    curly: [0, 'all'], //强制使用一致的大括号样式
    'default-case': 2, //switch语句最后必须有default
    'dot-location': [2, 'property'], //对象访问符的位置，换行的时候在行首还是行尾
    'dot-notation': [
      //访问属性时优先使用“.”，避免不必要的方括号
      2,
      { allowKeywords: true }
    ],
    'eol-last': 1, // 强制文件末尾以一个换行符结束
    eqeqeq: 1, // 必须使用全等
    'func-names': 0, // 函数表达式必须有名字
    'func-style': [0, 'declaration'], //函数风格，规定只能使用函数声明/函数表达式
    'generator-star-spacing': 2, //生成器函数*的前后空格
    'guard-for-in': 0, // for in循环要用if语句过滤
    'handle-callback-err': 0, // nodejs 处理错误
    'id-length': [
      1,
      {
        max: 25,
        min: 1
      }
    ],
    'id-match': 0, //要求标识符匹配指定的正则表达式
    //变量名长度
    //强制统一缩进符号，tab表示使用tab，数字表示使用几个空格
    indent: [
      2,
      2, // 两个空格
      {
        ArrayExpression: 'first',
        CallExpression: { arguments: 'first' },
        FunctionDeclaration: { parameters: 'first', body: 1 },
        ignoredNodes: ['TemplateLiteral'],
        ImportDeclaration: 'first',
        ObjectExpression: 'first',
        SwitchCase: 1,
        VariableDeclarator: 'first'
      }
    ],
    'init-declarations': 0, //声明时必须赋初值
    'key-spacing': [
      //对象字面量中冒号的前后空格
      2,
      {
        beforeColon: false,
        afterColon: true
      }
      // {
      //   "singleLine" : {
      //     "beforeColon" : false,
      //     "afterColon"  : true
      //   },
      //   "multiLine" : {
      //     "beforeColon" : true,
      //     "afterColon"  : true,
      //     "align"       : "colon"
      //   }
      // }
    ],
    'keywrod-space': 0, // return throw case后面要不要加空格
    'linebreak-style': [0, 'windows'], //换行风格
    'lines-around-comment': 0, //行前/行后备注
    'max-depth': [1, 5], //嵌套块深度
    'max-len': [1, { code: 140 }], //字符串最大长度
    'max-nested-callbacks': [0, 2], //回调嵌套深度
    'max-params': [2, 3], //函数最多只能有3个参数
    'max-statements': [0, 10], // 函数内最多有几个声明
    'new-cap': 2, // 要求构造函数的首字母必须大写
    'new-parens': 2, // new时必须加小括号
    'newline-per-chained-call': 2, // 要求链式调用必须换行，ignoreChainWithDepth表示无需换行的最大调用深度，默认为2.
    'no-alert': 1, // 禁止使用alert confirm prompt
    'no-array-constructor': 0, // 禁止使用数组构造器
    'no-async-promise-executor': 0, // 禁止使用异步函数作为Promise执行程序
    'no-bitwise': 0, //禁止使用按位运算符
    'no-caller': 0, //禁止使用arguments.caller或arguments.callee
    'no-case-declarations': 2, // 不允许在case中声明
    'no-catch-shadow': 2, //禁止catch子句参数与外部作用域变量同名
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-console': [production ? 2 : 1, { allow: ['warn', 'error', 'info'] }], //不能使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 1, //禁止在条件中使用常量表达式 if(true) if(1
    'no-continue': 0, //禁止使用continue
    'no-control-regex': 2, //禁止在正则表达式中使用控制字符
    'no-debugger': production ? 2 : 1, //禁止使用debugger
    'no-delete-var': 1, //不能对var声明的变量使用delete操作符
    'no-div-regex': 1, //不能使用看起来像除法的正则表达式/=foo/
    'no-dupe-args': 2, //函数参数不能重复
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-else-return': 0, //如果if语句里面有return,后面不能跟else语句
    'no-empty': 0, //块语句中的内容不能为空
    'no-empty-character-class': 2, //正则表达式中的[]内容不能为空
    'no-eq-null': 1, //禁止对null使用==或!=运算符
    'no-eval': 1, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-extend-native': 2, //禁止扩展native对象
    'no-extra-bind': 2, //禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, //禁止不必要的bool转换
    'no-extra-parens': 2, //禁止非必要的括号
    'no-extra-semi': 2, //禁止多余（可省略）的分号
    'no-fallthrough': 1, //禁止switch穿透
    'no-floating-decimal': 2, //禁止省略浮点数中的0 .5 3.
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-inline-comments': 0, //禁止行内备注
    'no-inner-declarations': [0, 'functions'], //禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-invalid-this': 0, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-iterator': 0, //禁止使用__iterator__ 属性
    'no-label': 0, //禁止使用空label
    'no-label-var': 2, //label名不能与var声明的变量名相同
    'no-labels': 2, //禁止标签声明
    'no-lone-blocks': 1, //禁止不必要的嵌套块
    'no-lonely-if': 0, //禁止else语句内只有if语句
    'no-loop-func': 1, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-mixed-requires': [0, false], //声明时不能混用声明类型
    'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
    'no-multi-spaces': 1, //不能用多余的空格
    'no-multi-str': 2, //字符串不能用\换行
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 0, //in 操作符的左边不能有!
    'no-nested-ternary': 1, //禁止使用嵌套的三目运算
    'no-new': 0, //禁止在使用new构造一个实例后不赋值
    'no-new-func': 0, //禁止使用new Function
    'no-new-object': 0, //禁止使用new Object()
    'no-new-require': 1, //禁止使用new require
    'no-new-wrappers': 0, //禁止使用new创建包装实例，new String new Boolean new Number
    'no-obj-calls': 0, //不能调用内置的全局对象，比如Math() JSON()
    'no-octal': 0, //禁止使用八进制数字)
    'no-octal-escape': 0, //禁止使用八进制转义序列
    'no-param-reassign': 2, //禁止给参数重新赋值
    'no-path-concat': 0, //node中不能使用__dirname或__filename做路径拼接
    'no-plusplus': 0, //禁止使用++，–
    'no-process-env': 0, //禁止使用process.env
    'no-process-exit': 0, //禁止使用process.exit()
    'no-proto': 0, //禁止使用__proto__属性
    'no-prototype-builtins': 0,
    'no-redeclare': 2, //禁止重复声明变量
    'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-restricted-modules': 2, //如果禁用了指定模块，使用就会报错
    'no-return-assign': 2, //return 语句中不能有赋值表达式
    'no-script-url': 0, //禁止使用javascript:void(0)
    'no-self-assign': 2, // 禁止自我赋值
    'no-self-compare': 2, //不能比较自身
    'no-sequences': 0, //禁止使用逗号运算符
    'no-shadow': 0, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-shadow-restricted-names': 2, //严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-sparse-arrays': 1, //禁止稀疏数组， [1,,2]
    'no-sync': 0, //nodejs 禁止同步方法
    'no-ternary': 0, //禁止使用三目运算符
    'no-this-before-super': 2, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //禁止抛出字面量错误 throw "error";
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    // 最大空行1
    'no-undef': 2, //未定义变量不能使用
    'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
    'no-undefined': 0, //不能使用undefined
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-unexpected-multiline': 1, //避免多行表达式
    'no-unneeded-ternary': 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unused-expressions': 0, //禁止无用的表达式
    // 参数不检查 不允许声明未使用变量
    'no-unused-vars': [
      1,
      {
        vars: 'local',
        args: 'after-used'
      }
    ],
    'no-use-before-define': [
      0,
      {
        functions: false,
        classes: true,
        variables: false
      }
    ], //定义前不能使用，包括函数
    'no-useless-call': 2, //禁止不必要的call和apply
    'no-useless-catch': 2, // 禁止无用的try catch，如直接将错误抛出
    'no-useless-escape': 0,
    'no-var': 0, //禁用var，用let和const代替
    'no-void': 0, //禁用void操作符
    'no-warning-comments': [
      1,
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ], //不能有警告备注
    'no-with': 2, //禁用with
    'object-curly-newline': [
      2,
      {
        //要求对象大括号后换行
        consistent: true // 保持一致换行
        // ObjectExpression: {
        //   //对象字面量设置
        //   multiline: true, //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
        //   minProperties: 0
        // },
        // ObjectPattern: {
        //   //结构赋值设置
        //   multiline: true, //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
        //   minProperties: 4
        // },
        // ImportDeclaration: {
        //   // 按需导入
        //   multiline: true, //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
        //   minProperties: 4
        // },
        // ExportDeclaration: {
        //   // 按需导出
        //   multiline: true, //multiline表示如果有换行则换行，minItems限制必须换行的最小成员数
        //   minProperties: 4
        // }
      }
    ],
    'object-curly-spacing': [0, 'never'], //大括号内是否允许不必要的空格
    'object-shorthand': 2, //强制对象字面量缩写语法
    'one-var': [2, { var: 'always', let: 'always', const: 'consecutive' }], //强制集体声明
    'operator-assignment': [2, 'always'], //强制使用或禁用赋值运算符缩写 += -=
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }], //换行时运算符在行尾还是行首
    'padded-blocks': [2, 'never'], //块语句内行首行尾是否要空行
    'padding-line-between-statements': [
      2, // 控制关键字后的空行
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: ['try', 'block-like', 'for', 'class'],
        next: '*'
      },
      {
        blankLine: 'never',
        prev: ['try', 'block-like', 'for', 'class'],
        next: ['case', 'default']
      },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'prefer-const': 1, //对于声明后从未重新分配的变量，需要const声明
    'prefer-object-spread': 2, // 禁止对空对象使用Object.assign，应该使用解构赋值
    'prefer-reflect': 0, //首选Reflect的方法
    'prefer-spread': 2, //需要展开操作符而不是.apply()
    'quote-props': [0, 'always'], //对象字面量中的属性名是否强制双引号
    quotes: [2, 'single'], // 强制单引号
    radix: 0, //parseInt必须指定第二个参数
    'require-jsdoc': [
      1, // 强制要求书写注释
      {
        require: {
          FunctionDeclaration: true, // 函数声明
          MethodDefinition: true, // 类（内部）方法定义
          ClassDeclaration: true, // 类声明
          ArrowFunctionExpression: false, // 箭头函数表达式
          FunctionExpression: false // 函数表达式
        }
      }
    ],
    'require-yield': 2, //生成器函数必须有yield
    semi: [2, 'never'], // 要求示分号结尾，never表示从不以分号结尾，除语法消除歧义外。
    'semi-spacing': [
      //分号前后空格
      0,
      {
        before: false,
        after: true
      }
    ],
    'sort-imports': 1, // 导入声明排序
    'sort-vars': 0, // 变量声明时排序
    'space-before-blocks': [2, 'always'], // 不以新行开始的块 { 前面要不要有空格
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ], // 函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
    'space-infix-ops': 0, // 中缀操作符周围要不要有空格
    'space-unary-ops': [
      0, // 一元运算符的前/后要不要加空格
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': 0, // 注释风格要不要有空格什么的
    strict: 2, // 使用严格模式
    'template-curly-spacing': 1, // 要求模版字符串大括号内侧需要空格
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'valid-jsdoc': [
      2, // jsdoc 规则校验
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          constructor: 'class',
          returns: 'return',
          virtual: 'abstract',
          method: 'func',
          function: 'func'
        },
        preferType: {
          boolean: 'Boolean',
          number: 'Number',
          object: 'Object',
          string: 'String',
          array: 'Array'
        },
        requireReturn: false,
        requireReturnType: false,
        matchDescription: '.+',
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],
    'valid-typeof': 2, // 必须使用合法的typeof的值
    'vars-on-top': 2, // var必须放在作用域顶部
    'wrap-iife': [2, 'inside'], // 要求立即执行函数表达式的小括号风格为外部括号(去掉"inside"默认为内部括号)
    'wrap-regex': 0,
    yoda: [2, 'never'], // 禁止尤达条件, // 正则表达式字面量用小括号包起来
    // eslint-disable-next-line vue/sort-keys
    'vue/attribute-hyphenation': [0, 'never'], // 强制要求模版中的绑定属性名称为连字符分隔或者从不使用连字符
    'vue/camelcase': 2, // template 和 script 中要求使用 camelcase
    'vue/comment-directive': 0,
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/component-options-name-casing': [2, 'PascalCase'],
    'vue/eqeqeq': 2, // 要求在 template 中使用全等于
    'vue/experimental-script-setup-vars': 0, //防止在 < script setup > 中定义的变量被标记为未定义
    'vue/html-closing-bracket-newline': 1, //要求html标签结束符前面需要有换行符
    'vue/html-indent': [
      //限制html换行的缩进量
      1,
      2,
      {
        attribute: 1, //属性缩进的倍数
        baseIndent: 1, //顶级标签的缩进倍数
        closeBracket: 0, //小括号缩进的倍数
        alignAttributesVertically: false, //属性是否应该垂直对齐到多行大小写中的第一个属性的条件。
        ignores: [] //需要忽略的节点
      }
    ],
    'vue/html-self-closing': [
      1,
      {
        //要求html标签有反斜杠闭合
        html: {
          void: 'always', //html空标签必须要求反斜杠，always始终要求，never始终不要求，any任意
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      // vue模版中每行html属性最大值
      1,
      {
        singleline: 8, // 单行模式下最大为4个属性
        // 多行模式下最大为1个属性
        multiline: { max: 1 }
      }
    ],
    'vue/multi-word-component-names': 0,
    'vue/no-mutating-props': 2, // 不允许在子组件修改父组件通过props传递的参数
    'vue/no-reserved-keys': [
      2 // 限制vue中不允许的变量覆盖（声明）
      // { "reserved": [], "groups": [] }
    ],
    'vue/no-use-v-if-with-v-for': 2, // 不允许同时使用v-if和v-for
    'vue/no-v-html': 0, // 禁止使用 v-html
    'vue/one-component-per-file': 0, // 强制限制仅在单独的vue模版文件中声明组件，不允许使用js创建组件。
    'vue/require-default-prop': [1], // 要求prop中的参数必须有默认值
    'vue/singleline-html-element-content-newline': 0, //要求块级元素如果有内容必须换行展开
    'vue/sort-keys': [
      // 强制要求vue选项中的键排序
      1,
      'asc', // 升序排序
      {
        caseSensitive: false, // 是否区分大小写
        ignoreChildrenOf: [], // 忽略指定对象下的属性排序的清单
        ignoreGrandchildrenOf: [], // 忽略指定对象下所有子树的属性排序的清单
        minKeys: 8, // 检测排序问题的最小属性数量
        natural: true // 是否按自然数排序
      }
    ]
  }
}
