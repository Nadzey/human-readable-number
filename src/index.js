module.exports = function toReadable(number) {
    const o = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const p = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const t = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const h = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  
    let str = number.toString(),
      out = '';
  
    if (str.length == 1) return o[number];
    else if (str.length == 2) {
        if (number === 10) return 'ten';
        else if (str[0] == '1') out = p[parseInt(str[1]) - 1];
        else out = t[parseInt(str[0])] + (str[1] != '0' ? ' ' + o[parseInt(str[1])] : '');
    } else if (str.length == 3) {
        if (str[1] === '0' && str[2] === '0') {
            out = h[parseInt(str[0])];
        } else if (str[1] === '1' && str[2] === '0') {
            out = h[parseInt(str[0])] + ' ' + 'ten'
        } else if (str[1] === '0') {
            out = h[parseInt(str[0])] + ' ' + o[parseInt(str[2])];
        } else if (str[1] === '1') {
            out = h[parseInt(str[0])] + ' ' + p[parseInt(str[2]) - 1];
        } else {
            out = h[parseInt(str[0])] + ' ' + t[parseInt(str[1])] + (str[2] != '0' ? ' ' + o[parseInt(str[2])] : '');
        }
    }
  
    return out;
  };
  