const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const COLORS = [["Almond", "EFDBC5", "239,219,197"],
["Antique Brass", "CD9575", "205,149,117"],
["Apricot", "FDD9B5", "253,217,181"],
["Aquamarine", "78DBE2", "120,219,226"],
["Asparagus", "87A96B", "135,169,107"],
["Atomic Tangerine", "FFA474", "255,164,116"],
["Banana Mania", "FAE7B5", "250,231,181"],
["Beaver", "9F8170", "159,129,112"],
["Bittersweet", "FD7C6E", "253,124,110"],
["Black", "232323", "35,35,35"],
["Blue", "1F75FE", "31,117,254"],
["Blue Bell", "ADADD6", "173,173,214"],
["Blue Green", "199EBD", "25,158,189"],
["Blue Violet", "2E5090", "115,102,189"],
["Bluetiful", "7366BD", "46,80,144"],
["Blush", "DE5D83", "222,93,131"],
["Brick Red", "CB4154", "203,65,84"],
["Brown", "B5674D", "180,103,77"],
["Burnt Orange", "FF7F49", "255,127,73"],
["Burnt Sienna", "EA7E5D", "234,126,93"],
["Cadet Blue", "B0B7C6", "176,183,198"],
["Canary", "FFFF99", "255,255,159"],
["Caribbean Green", "1CD3A2", "28,211,162"],
["Carnation Pink", "FFAACC", "255,170,204"],
["Cerise", "FF43A4", "221,68,146"],
["Cerulean", "1DACD6", "29,172,214"],
["Chestnut", "BC5D58", "188,93,88"],
["Copper", "DD9475", "221,148,117"],
["Cornflower", "9ACEEB", "154,206,235"],
["Cotton Candy", "FFBCD9", "255,188,217"],
["Denim", "2B6CC4", "43,108,196"],
["Desert Sand", "EFCDB8", "239,205,184"],
["Eggplant", "DD4492", "110,81,96"],
["Electric Lime", "1DF914", "29,249,20"],
["Fern", "71BC78", "113,188,120"],
["Forest Green", "6DAE81", "109,174,129"],
["Fuchsia", "C364C5", "195,100,197"],
["Fuzzy Wuzzy", "CC6666", "204,102,102"],
["Gold", "E7C697", "231,198,151"],
["Goldenrod", "FCD975", "255,217,117"],
["Granny Smith Apple", "A8E4A0", "168,228,160"],
["Gray", "95918C", "149,145,140"],
["Green", "1CAC78", "28,172,120"],
["Green Yellow", "F0E891", "240,232,145"],
["Hot Magenta", "FF1DCE", "255,29,206"],
["Inchworm", "B2EC5D", "178,236,93"],
["Indigo", "5D76CB", "93,118,203"],
["Jazzberry Jam", "CA3767", "202,55,103"],
["Jungle Green", "3BB08F", "59,176,143"],
["Laser Lemon", "FDFC74", "253,252,116"],
["Lavender", "FCB4D5", "252,180,213"],
["Macaroni and Cheese", "FFBD88", "255,189,136"],
["Magenta", "FCB4D5", "246,100,175"],
["Mahogany", "CD4A4A", "205,74,74"],
["Manatee", "979AAA", "151,154,170"],
["Mango Tango", "FF8243", "255,130,67"],
["Maroon", "C8385A", "200,56,90"],
["Mauvelous", "EF98AA", "239,152,170"],
["Melon", "FDBCB4", "253,188,180"],
["Midnight Blue", "1A4876", "26,72,118"],
["Mountain Meadow", "30BA8F", "48,186,143"],
["Navy Blue", "1974D2", "25,116,210"],
["Neon Carrot", "FFA343", "255,163,67"],
["Olive Green", "BAB86C", "186,184,108"],
["Orange", "FF7538", "255,117,56"],
["Orchid", "C0448F", "230,168,215"],
["Outer Space", "414AAC", "65,74,76"],
["Outrageous Orange", "FF6E4A", "255,110,74"],
["Pacific Blue", "1CA9C9", "28,169,201"],
["Peach", "FFCFAB", "255,207,171"],
["Periwinkle", "C5D0E6", "197,208,230"],
["Piggy Pink", "FDD7E4", "253,215,228"],
["Pine Green", "158078", "21,128,120"],
["Pink Flamingo", "FC74FD", "252,116,253"],
["Pink Sherbet", "F780A1", "247,128,161"],
["Plum", "8E4584", "142,69,133"],
["Purple Heart", "7442C8", "116,66,200"],
["Purple Mountains' Majesty", "9D81BA", "157,129,186"],
["Purple Pizza", "FF1DCE", "255,29,206"],
["Radical Red", "FF496C", "255,73,107"],
["Raw Sienna", "D68A59", "214,138,89"],
["Razzle Dazzle Rose", "E6A8D7", "255,72,208"],
["Razzmatazz", "E3256B", "227,37,107"],
["Red", "EE204D", "238,32,77"],
["Red Orange", "FF5349", "255,83,73"],
["Red Violet", "c0448f", "192,68,143"],
["Robin's Egg Blue", "1FCECB", "31,206,203"],
["Royal Purple", "7851A9", "120,81,169"],
["Salmon", "FF9BAA", "255,155,170"],
["Scarlet", "FC2847", "242,40,71"],
["Screamin Green", "76FF7A", "118,255,122"],
["Sea Green", "9FE2BF", "159,226,191"],
["Sepia", "A5694F", "165,105,79"],
["Shadow", "8A795D", "138,121,93"],
["Shamrock", "45CEA2", "69,206,162"],
["Shocking Pink", "FB7EFD", "251,126,253"],
["Silver", "CDC5C2", "205,197,194"],
["Sky Blue", "80DAEB", "128,218,235"],
["Spring Green", "ECEABE", "236,234,190"],
["Sunglow", "FFCF48", "255,207,72"],
["Sunset Orange", "FD5E53", "253,94,83"],
["Tan", "FAA76C", "250,167,108"],
["Tickle Me Pink", "FC89AC", "252,137,172"],
["Timberwolf", "DBD7D2", "219,215,210"],
["Tropical Rain Forest", "17806D", "23,128,109"],
["Tumbleweed", "DEAA88", "222,170,136"],
["Turquoise Blue", "77DDE7", "119,221,231"],
["Unmellow Yellow", "FDFC74", "253,252,116"],
["Violet (Purple)", "926EAE", "146,110,174"],
["Violet Red", "F75394", "247,83,148"],
["Vivid Tangerine", "FFA089", "255,160,137"],
["Vivid Violet", "8F509D", "143,80,157"],
["White", "EDEDED", "237,237,237"],
["Wild Blue Yonder", "A2ADD0", "162,173,208"],
["Wild Strawberry", "F664AF", "255,67,164"],
["Wild Watermelon", "FC6C85", "252,108,133"],
["Wisteria", "CDA4DE", "205,164,222"],
["Yellow", "FCE883", "252,232,131"],
["Yellow Green", "C5E384", "197,227,132"],
["Yellow Orange", "FFB653", "255,182,83"]];

const RGBToHSB = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  const h =
    n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n;
  return [Math.round(60 * (h < 0 ? h + 6 : h)), Math.round(v && (n / v) * 100), Math.round(v * 100)];
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:color', (req, res) => {
  const color = req.params.color.toLowerCase();
  const colorInfo = COLORS.filter(col => col[0].toLowerCase().includes(color));
  const colorsMap = colorInfo.map(col => ({
    color: col[0],
    hex: `#${col[1]}`,
    rgb: `${col[2]}`,
    hsb: `${RGBToHSB(col[2].split(',')[0], col[2].split(',')[1], col[2].split(',')[2])}`
  }));
  res.json(colorsMap);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}, you'd better go catch it!`);
});