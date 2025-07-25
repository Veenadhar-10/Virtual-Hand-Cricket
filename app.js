let y;
let k = 0; let i = 0;
let heads = document.querySelector('.a');
let tails = document.querySelector('.b');
let arr = ["bowl", "bat"];
let c = document.querySelector('.kyc');
let s = document.querySelector('.start');
let run = document.querySelector('.runs');
let vp = document.querySelector('#vv');
let pap = document.querySelector('.pap');
let rule = document.querySelector('.rule');
let rules = document.querySelector('.rules');
let sp = document.querySelector('span');
let l = document.querySelector('.restart');
let r = document.querySelector('#overs')
let ele = document.querySelector('.ov');
function assign(a) {
    y = a;
    pap.classList.add('hide');

    c.innerText = `Computer chose to ${arr[a]} click start to start first innings`;
    s.classList.toggle('hide');
}

function assignx(a) {
    y = a;
    pap.classList.toggle('hide');
    c.innerText = `You chose to ${arr[a]} click start to start first innings`;
    s.classList.toggle('hide');

}

function youwon() {
    heads.onclick = () => assignx(1);
    tails.onclick = () => assignx(0);

}

function toss() {
    let x = Math.random() > 0.5 ? 1 : 0;
    if (x === 0) {
        let ctoss = Math.floor((Math.random()) * 2);

        assign(Math.abs(ctoss - 1));
        c.innerText = `Computer won the toss and chose to ${arr[ctoss]}`;
    }
    else {
        c.innerText = "You won toss what will you do";
        heads.innerText = "Bat";
        tails.innerText = "Bowl";
        youwon();

    }
}
const game = { score: 0 };
let x = 0; let j = 0;
if (performance.getEntriesByType("navigation")[0].type !== "reload") {
  alert('Please read the rules before you start the game and also enter the number of overs at the time of toss');
}



 o = 1;
rule.addEventListener('click', () => { rules.classList.toggle('hide');
    heads.classList.toggle('cv');
    tails.classList.toggle('cv');
     s.classList.toggle('cv');
    rule.classList.add('shift'); if (rules.classList.contains('hide') == false) { rule.innerText = 'Close'; } else { rule.innerText = 'Rules'; } })
heads.addEventListener('click', () => toss());
tails.addEventListener('click', () => toss());
sp.addEventListener('click', () => {  s.classList.toggle('cv');    heads.classList.toggle('cv');
    tails.classList.toggle('cv');  rules.classList.add('hide'); rule.innerText = 'Rules'; })
s.addEventListener('click', () => {
    run.classList.toggle('hide'); s.innerText = 'Continue';
    c.innerText = ""; s.classList.toggle('hide');
    if (y == 0) {
        if (x === 0) {
            vp.textContent = "First innings"; o = 1; if ((r.value) != "") { o = parseInt(r.value) }
            document.querySelector('.aboy').textContent = 'Bowling'; document.querySelector('.abot').textContent = 'Batting';
            document.querySelector('.dobot').textContent = 'Score:- 0-0';

            bowling(game, o * 6); x++;
        }
    }
    else {
        vp.textContent = "First innings"; o = 1; if ((r.value) != "") { o = parseInt(r.value) }
        document.querySelector('.aboy').textContent = 'Batting'; document.querySelector('.abot').textContent = 'Bowling';
        document.querySelector('.doboy').textContent = 'Score:- 0-0';

        batting(game, o * 6); x++;
    }
})

document.querySelector('.restart').addEventListener('click', () => {
    ele.classList.toggle('hide'); location.reload(); l.classList.add('hide');
});