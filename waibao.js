function waibao() {
    var scripts = document.getElementsByTagName("script");
    for (let script of scripts) {
        if (script.type == 'text/外包') {
            analyse(script.innerHTML);
        }
    }
}

function analyse(code) {
    var keywords = {
        'bianliang': 'var',
        'dui': 'true',
        'cuo': 'false',
        'duiyu': 'for',
        'zai': 'in',
        'shuyu': 'of',
        'dang': 'while',
        'kaiguan': 'switch',
        'qingkuang': 'case',
        'moren': 'default',
        'tuichu': 'break',
        'jixu': 'continue',
        'shanchu': 'delete',
        'ruguo': 'if',
        'fouze': 'else',
        'fanhui': 'return',
        'hanshu': 'function',
        'leixing': 'typeof',
        'lei': 'class',
        'daoru': 'import',
        'daochu': 'export',
        'kong': 'null',
        'weidingyi': 'undefined',
        'dayin': 'console.log',
        'suijishu': '(Math.random())'
    }
    var lines = code.split('\n');
    var words = []
    for (let line of lines) {
        words.push(line.split(/\s/))
    }
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            var k = words[i][j].match(/\w+/);
            if (k !== null) {
                k = k[0];
            }
            var repl = keywords[k];
            if (repl !== undefined)
                words[i][j] = words[i][j].replace(k, repl);
        }
    }
    var buffer = '';
    for (let line of words) {
        buffer += line.join(' ') + '\n';
        console.log(buffer);
        try {
            eval.call(document, buffer);
            buffer = '';
        } catch (e) {
            
        }
    }
}