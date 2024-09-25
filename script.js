let wavecolor = [];

let wCM = [];
let wCC = [
    {r:209, g:25, b:84},
    {r:136, g:8, b:49},
    {r:152, g:9, b:13},
    {r:122, g:7, b:74},
    {r:244, g:83, b:87},
    {r:187, g:22, b:119},
    {r:221, g:75, b:161}
  ]
let columnsLetters = [
  ["Null","N̵͉̽u̶̱̿͝l̷̥͠ĺ̷̩̰","N̵̩͙͖̖̂̔ù̵̹̍̊l̸̼̒̽͝ĺ̶̨͖͚̗","N̶̡̗̲̺̥͚͙̖͚̖̪͍̗͓̈̈́̃̇̓͛̀̇̆͒͘u̷̗̮͑̎̃l̵̗̹̮̞͔̹̟̭̰̞͑̑̈́̂̈́̑̂̚ͅl̵̛̗̇̓̃́̒͝","N̴͙̖͛̾ù̴͚̫̞l̷͚̏l̸̘̭͘"],
  ["Undefined","NaN","Ū̸̙̮̚n̶̠͓͐̀d̵̢̫̀e̸͒ͅḟ̸̱͇i̵͚͊̀n̸̙̼̒ë̵̼̳d̵̲͝"," "," "," ","system32.delete()","Ǹ̵͍̣͇͗̐a̶̟̿͐Ń̶̫̟ͅ","N̸̢̲̥͔͇̥͐͂̇͒á̸̫̹͖͙̪̟̽̀͆͋́͝͝N̸͈̣̳̰̓̑̈́̽͌̅̊̑","Ǘ̷̘̍ņ̷͎̭́d̸̩̐e̷͓̐̀ͅf̷͇͒͂ǐ̴̡͓̈͐̉n̸̰̩̰̈́͌͛͝e̶̝͝d̷̢̡̞͚̂͘"],
  [" ","ErrOR","ErRoR","CRITICAL FAILURE","eRorr"," "," ","cancer","E̷͕̺̊̀r̷̗̫̞̅͌̕r̸͇͑Ȏ̴̼̜͌R̸̤͓͉͓̅̑̒","E̷̤̒r̵̙͛R̴̬̔ȍ̸͕R̵̠͗","Ç̶̛̳̮͖̳̝̗͈̠͙̪͐̓͌̉͑R̶̹̖̱̥͍̹͚͉̐͋̈́̐̏̿I̷͍̥͉͚͑̾T̸̮͓̋͂̾̌̑̈̂̃̐̕Ḯ̷̧̡͇͚͙̦̽̑C̷͔̘̳͈̼̠̭͈͚̊̔̌͂̓̇̈̓̂̍͘͠Ạ̶̼̒͌͌̐̈̾̓̍̃͜͠L̴̨͇̰͙͍̼͇̟̻̯͕͑͐̄͝ ̴̹̫̟͔̭̟́̉̒͒͐͜F̴̭̥̥͍̳͙̤̗̩̋̆̔̔̃̓̊͜͝A̶̛͇̠̼͍̫̻͕̳̱̞͈͒́͗̀͑̏̽̔͐I̵̡̧͕̞̪̰̲̘͂ͅL̶̡̡̮̪͍̼̖̣͔̈́̓̈́̓͘͠͝Ư̸̡͋̾̏͋͑̈́̈́̎̀́R̴̪̗̫̤̰̱̙̥̣͇͐̓̇́͆̓̆͐̈́͝Ȩ̵̡̙̜̼̩̤̠̓̓͗͝"]
]
var root = {
    rainbowSpeed: 0.5,
    rainbow: false,
    matrixspeed: 50
};

var c = document.getElementById("c");
var ctx = c.getContext("2d");

var hueFw = false;
var hue = -0.01;

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

var font_size = 14;
var columns = c.width/font_size;    // number of columns for the rain
var gradient = ctx.createLinearGradient(0,10, 0,200);
// an array of drops - one per column
var drops = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;
// drawing the characters

function randText(rt){
  var text = columnsLetters[rt%columnsLetters.length]
   textExport = text[Math.floor(Math.random() * text.length)]
   return textExport;
}
function randColor(){
  let rSeed = Math.round((Math.floor(Math.random()*100))%wavecolor.length)
  ctx.fillStyle = 'rgba(' +wavecolor[rSeed].r + ',' +wavecolor[rSeed].g + ',' +wavecolor[rSeed].b + ')';
  
}
function draw() {
 if(wCM.length > 1){
  wavecolor = wCM
 } else {
  wavecolor = wCC 
 }
    // Get the BG color based on the current time i.e. rgb(hh, mm, ss)
    // translucent BG to show trail
    ctx.fillStyle = "rgba(0,0,0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#BBB"; // grey text
    ctx.font = font_size + "px arial";
    
    // looping over drops
    for (var i = 0; i < drops.length; i++)
    {
        // background color
        ctx.fillStyle = "rgba(10,10,10, 1)";
        ctx.fillRect(i * font_size, drops[i] * font_size,font_size,font_size);
        // x = i * font_size, y = value of drops[i] * font_size

        if (root.rainbow) {
          hue += (hueFw) ? 0.01 : -0.01;
          var rr = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 0) + 128);
          var rg = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 2) + 128);
          var rb = Math.floor(127 * Math.sin(root.rainbowSpeed * hue + 4) + 128);
          ctx.fillStyle = 'rgba(' + rr + ',' + rg + ',' + rb + ')';
        } else {
         randColor();
        }

        ctx.fillText(randText(i), i * font_size, drops[i] * font_size);
        // Incrementing Y coordinate
        drops[i]++;
        // sending the drop back to the top randomly after it has crossed the screen
        // adding randomness to the reset to make the drops scattered on the Y axis
       if (drops[i] * font_size > c.height && Math.random() > 0.975)
			      drops[i] = 0;
    }
}

window.onresize=()=>{
    location.reload();
}

setInterval(draw, root.matrixspeed);

function livelyPropertyListener(name, val)
{
  switch(name) {
    case "matrixColor":
      wCM.push(hexToRgb(val))

      break;
    case "rainBow":
      root.rainbow = val;
      wavecolor = [];
      wCM = [];
      break;   
    case "rainbowSpeed":
      root.rainbowSpeed = val/100;
      break;     
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
