function poorman_spiff(str,font,name,spacing){
  spacing = spacing === undefined ? 1 : spacing;
  var glyphimap = {};
  var i;
  for (i = 0; i < font.length; i++) {
    glyphimap[font[i][0]] = i;
  }
  
  var left = 0;
  var lines = [];
  var chari, glyph;
  for (i = 0; i < str.length; i++) {
    chari = glyphimap[str[i]] || 0;
    glyph = font[chari];
    if (glyph[2]) {
      lines[lines.length] = 'translate([' + left + ',0,0]) '
        + 'polygon(points='
        + (name ? name + '[' + chari + '][2][0]' : JSON.stringify(glyph[2][0]))
        + ',paths='
        + (name ? name + '[' + chari + '][2][1]' : JSON.stringify(glyph[2][1]))
        + '); // ' + JSON.stringify(str[i]);
    } else {
      lines[lines.length] = '// ' + JSON.stringify(str[i]);
    }
    left += glyph[1] + spacing;
  }
  return lines.join('\n')+'\n// '+(left-spacing)+' wide\n';
}

if(typeof module != 'undefined') {
  module.exports = poorman_spiff;
}
