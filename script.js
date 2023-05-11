let tree = document.getElementById("tree");

let ll = -130;

let tl = 95;

let lr = -140;

let tr = 45;

let i = 1;

tree.innerHTML += ` <div class="root" id="nodeLeft${i}" style="--i:2;--r:2;--l:2">
                        <div class="rootCircle">7</div>
                        <div class="rootLines">
                        <div class="rootLeftLine" style="--l: 2"></div>
                        <div class="rootRightLine" style="--r: 2"></div>
                        </div>
                        </div>`;

document.getElementById("nodeLeft1").style.left = ll + "px";
document.getElementById("nodeLeft1").style.top = tl + "px";

ll += ll;
tl += i*tl;

i++;

tree.innerHTML += ` <div class="root" id="nodeRight${i}" style="--i:-2;--r:2;--l:-2">
                        <div class="rootCircle">8</div>
                        <div class="rootLines">
                        <div class="rootLeftLine" style="--l: 2"></div>
                        <div class="rootRightLine" style="--r: 2"></div>
                        </div>
                        </div>`;

i++;
document.getElementById("nodeRight2").style.right = lr + "px";
document.getElementById("nodeRight2").style.top = tr + "px";

// tree.innerHTML += ` <div class="root" id="nodeRight${i}" style="--i:-2;--r:2;--l:-2">
//                         <div class="rootCircle">8</div>
//                         <div class="rootLines">
//                         <div class="rootLeftLine" style="--l: 2"></div>
//                         <div class="rootRightLine" style="--r: 2"></div>
//                         </div>
//                         </div>`;

// document.getElementById("nodeRight3").style.right = lr + "px";
// document.getElementById("nodeRight3").style.top = tr + "px";

lr -= lr;
tr += i*tr;
