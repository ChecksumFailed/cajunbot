module.exports = {
    command: function(commandObj) {
        var phrases = ['!flip', '!invert'];
        if (commandObj.msg.author.bot === false) {
            var wordsArr = commandObj.msg.content.split(' ');
            wordsArr.map(function(word, index) {
                phrases.map(function(phrase) {
                    if (word.toLowerCase() === phrase) {
                        //zʎxʍʌuʇsɹqdouɯʃʞɾıɥƃɟǝpɔqɐ
                        var flipTable = {
                            'a': 'ɐ',//'\u0250',
                            'b': 'q',
                            'c': 'ɔ',//'\u0254', //open o -- from pne
                            'd': 'p',
                            'e': 'ǝ',//'\u01DD',
                            'f': 'ɟ',//'\u025F', //from pne
                            'g': 'ƃ',//'\u0183',
                            'h': 'ɥ',//'\u0265',
                            'i': 'ı',//'\u0131', //from pne
                            'j': 'ɾ',//'\u027E',
                            'k': 'ʞ',//'\u029E',
                            'l': 'ʃ',//'ʃ', //'\u0283',
                            'm': 'ɯ',//'\u026F',
                            'n': 'u',
                            'o': 'o',
                            'p': 'd',
                            'q': 'b',
                            'r': 'ɹ',//'\u0279',
                            's': 's',
                            't': 'ʇ',//'\u0287',
                            'u': 'n',
                            'v': 'ʌ',//'\u028C',
                            'w': 'ʍ',//'\u028D',
                            'x': 'x',
                            'y': 'ʎ',//'\u028E',
                            'z': 'z',
                            'A':'∀',//
                            'B': '2',
                            'C': 'Ↄ',
                            'D': '◖',
                            'E': 'Ǝ',
                            'F': 'Ⅎ',
                            'G': '⅁',
                            'H': 'H',
                            'I': 'I',
                            'J': 'ſ',
                            'K': '⋊',
                            'L': '⅂',
                            'M': 'W',
                            'N': 'ᴎ',
                            'O': 'O',
                            'P': 'Ԁ',
                            'Q': 'Ό',
                            'R': 'ᴚ',
                            'S': 'S',
                            'T': '⊥',
                            'U': '∩',
                            'V': '^',
                            'W': '',
                            'X': 'X',
                            'Y': '⅄',
                            'Z': 'Z',
                            '.': '˙',//'\u02D9',
                            '[': ']',
                            '(': ')',
                            '{': '}',
                            '?': '¿',//'\u00BF', //from pne
                            '!': '¡',//'\u00A1',
                            "\'": ',',
                            '<': '>',
                            '_': '‾',//'\u203E',
                            ';': '؛',//'\u061B',
                            '\u203F': '\u2040',
                            '\u2045': '\u2046',
                            '\u2234': '\u2235',
                            '\r': '\n',
                            '\n': '\r',
                            ' ': ' ',
                            '`': '`',
                        };
                        var arrOfThings = commandObj.msg.content.replace('!flip', '').split('');
                        var flipped = arrOfThings.map(function(char) {
                            return flipTable[char/*.toLowerCase()*/];
                        });
                        var flipper = ['┗[© ♒ ©]┛', '(╯°□°)╯','(ノ ゜Д゜)ノ','(╯°□°）╯'];
                        var flippedText = flipped.reverse().join('');
                        if(flippedText.length===0){
                            flippedText = '┻━┻';
                        }
                        var message = rand(flipper) + '︵ ' + flippedText;
                        commandObj.msg.channel.send(message);
                    }

                });
            });
        }
    },
    help: '`!flip string` Or !invert, flips the string upside down.'
};

var rand = function(arr) {
    var random_choice = Math.floor(Math.random() * arr.length);
    return arr[random_choice];
}
