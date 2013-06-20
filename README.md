# poorman-spiff: module-less Spiff.scad

poorman-spiff will allow you to generate the static code equivalent to a call
to Spiff.scad's write() function.

## Usage

From [index.html][], type the string you want to write in the top field, with
any modifications to the spacing or font in the fields below. The equivalent
OpenSCAD code will appear in the field on the right.

[index.html]: http://stuartpb.github.io/poorman-spiff/index.html

The second field specifies the font variable's name. If this is blank, the
literal arrays for each character will be used instead of indices into the
font array.

The third field defines the space allocated between each glyph.

The fourth field textarea contains the JSON array (using the same syntax as the
OpenSCAD array) for the font.

