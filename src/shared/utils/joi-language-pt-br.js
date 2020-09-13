module.exports = {
    root: 'value',
    key: '"{{!label}}" ',
    messages: {
        wrapArrays: false
    },
    any: {
        unknown: 'não é permitido',
        invalid: 'contém um valor inválido',
        empty: 'não pode estar vazio',
        required: 'é obrigatório',
        allowOnly: 'deve conter um dos seguintes valores: {{valids}}',
        default: 'lançou um erro ao executar o método padrão'
    },
    alternatives: {
        base: 'não corresponde às alternativas permitidas'
    },
    array: {
        base: 'deve ser um array',
        includes: 'o valor na posição {{pos}} não corresponde à nenhum dos tipos permitidos',
        includesSingle: 'valor único do "{{!key}}" não corresponde à nenhum dos tipos permitidos',
        includesOne: 'o valor na posição {{pos}} falhou porque {{reason}}',
        includesOneSingle: 'valor único do "{{!key}}" falhou porque {{reason}}',
        includesRequiredUnknowns: 'não contém {{unknownMisses}} o(s) valor(es) obrigatório(s)',
        includesRequiredKnowns: 'não contém {{knownMisses}}',
        includesRequiredBoth: 'não contém {{knownMisses}} e {{unknownMisses}} outro(s) valor(es) obrigatório(s)',
        excludes: 'o valor na posição {{pos}} contém um valor excluído',
        excludesSingle: 'valor único do "{{!key}}" contém um valor excluído',
        min: 'deve conter pelo menos {{limit}} itens',
        max: 'deve conter {{limit}} ou menos itens',
        length: 'deve conter exatamente {{limit}} itens',
        ordered: 'o valor na posição {{pos}} falhou porque {{reason}}',
        orderedLength: 'o valor na posição {{pos}} falhou porque o array pode ter no máximo {{limit}} itens',
        sparse: 'não deve ter valores vazios ou que representem um valor "falso"',
        unique: 'a posição {{pos}} contém um valor duplicado'
    },
    boolean: {
        base: 'deve ser um boleano'
    },
    binary: {
        base: 'deve ser um buffer ou uma string',
        min: 'deve ter no mínimo {{limit}} bytes',
        max: 'deve ter no máximo {{limit}} bytes',
        length: 'deve ter exatamente {{limit}} bytes'
    },
    date: {
        base: 'deve ter um número de milissegundos ou uma sequência de datas válida',
        format: 'deve ser uma sequência com um dos seguintes formatos {{format}}',
        strict: 'deve ser uma data válida',
        min: 'deve ser maior ou igual a "{{limit}}"',
        max: 'deve ser menor ou igual a "{{limit}}"',
        isoDate: 'deve ser uma data ISO 8601 válida',
        timestamp: {
            javascript: 'deve ser um timestamp ou número em milissegundos',
            unix: 'deve ser um timestamp ou o número de segundos'
        },
        ref: 'referência "{{ref}}" não é uma data'
    },
    function: {
        base: 'deve ser uma função',
        arity: 'necessita de uma aridade de {{n}}',
        minArity: 'deve ter uma aridade menor ou igual a {{n}}',
        maxArity: 'deve ter uma aridade maior ou igual a {{n}}',
        ref: 'deve ser uma instância de Joi'
    },
    lazy: {
        base: '!!erro de esquema: esquema lento deve ser definido',
        schema: '!!erro de esquema: esquema lento necessita retornar um esquema'
    },
    object: {
        base: 'deve ser um objeto',
        child: '!!child "{{!child}}" fails because {{reason}}',
        min: 'deve ter no mínimo {{limit}} filho(s)',
        max: 'deve ter no máximo {{limit}} filho(s)',
        length: 'deve ter {{limit}} filho(s)',
        allowUnknown: '!!"{{!child}}" is not allowed',
        with: 'missing required peer "{{peer}}"',
        without: 'conflict with forbidden peer "{{peer}}"',
        missing: 'must contain at least one of {{peers}}',
        xor: 'contains a conflict between exclusive peers {{peers}}',
        or: 'must contain at least one of {{peers}}',
        and: 'contains {{present}} without its required peers {{missing}}',
        nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
        rename: {
            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
        },
        type: 'deve ser uma instância de "{{type}}"',
        schema: 'deve ser uma instância do Joi'
    },
    number: {
        base: 'deve ser um número',
        min: 'deve ser maior ou igual que {{limit}}',
        max: 'deve ser menor ou igual que {{limit}}',
        less: 'deve ser menor que {{limit}}',
        greater: 'deve ser maior que {{limit}}',
        float: 'deve ser um número',
        integer: 'deve ser um inteiro',
        negative: 'deve ser um número negativo',
        positive: 'deve ser um número positivo',
        precision: 'must have no more than {{limit}} decimal places',
        ref: 'references "{{ref}}" which is not a number',
        multiple: 'must be a multiple of {{multiple}}'
    },
    string: {
        base: 'deve ser um texto',
        min: 'deve ter pelo menos {{limit}} caracteres',
        max: 'deve ser menor ou igual a {{limit}} caracteres',
        length: 'o tamanho deve ter {{limit}} caracteres',
        alphanum: 'deve ter somente caracteres alfanuméricos',
        token: 'deve ter somente caracteres alfanuméricos e sublinhados',
        regex: {
            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
            name: 'with value "{{!value}}" fails to match the {{name}} pattern'
        },
        email: 'deve ser um e-mail válido',
        uri: 'deve ser um uri valido',
        uriCustomScheme: 'deve ser um uri com esquema correspondente ao {{scheme}} padrão',
        isoDate: 'must be a valid ISO 8601 date',
        guid: 'deve ser um GUID valid',
        hex: 'must only contain hexadecimal characters',
        hostname: 'must be a valid hostname',
        lowercase: 'must only contain lowercase characters',
        uppercase: 'must only contain uppercase characters',
        trim: 'não deve ter caracteres em branco à esquerda ou à direita',
        creditCard: 'deve ser um cartão de crédito',
        ref: 'references "{{ref}}" which is not a number',
        ip: 'deve ser um endereço de ip valido com a {{cidr}} CIDR',
        ipVersion: 'deve ser um endereço de ip valido de uma das versões {{version}} com a {{cidr}} CIDR'
    }
}