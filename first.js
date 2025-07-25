function ale() {
  alert('first innings completed,tap ok to start second innings');
}
let f = true;

function bowling(game, mb) {
  ele.classList.toggle('hide');
  let one = document.querySelector('.one');
  let two = document.querySelector('.two');
  let the = document.querySelector('.the');
  let fou = document.querySelector('.fou');
  let fiv = document.querySelector('.fiv');
  let six = document.querySelector('.six');
  let ups = document.querySelector('.kyc');
  let vp = document.querySelector('#vv');
  let sss = document.querySelector('.start');

  let cb = 0;
  let sruns = 0;
  let fruns = 0;
  let finn = false;
  let sb = 0;

  function score(a) {
    if (f == true) {
      if (finn == false) {
        let k = Math.floor(Math.random() * 6) + 1;
        if (k != a && cb < mb) {
          cb++;
          fruns += k;
          document.querySelector('.dobot').textContent = `Score:- ${fruns}-0 (${Math.floor(cb/6)}.${cb%6})`;
          game.score = fruns; console.log(k);
          ups.textContent = `Computer scored ${fruns} runs ${mb - cb} balls left`;

          if (cb == mb) {
                      document.querySelector('.aboy').textContent = 'Batting';
          document.querySelector('.abot').textContent = 'Bowling';
            
            ups.textContent = `You need ${fruns + 1} in ${mb} balls `; vp.textContent = 'Second innings';
            finn = true; setTimeout(ale, 1);
          }
        }
        else if (k == a) {
          game.score = fruns;
          document.querySelector('.dobot').textContent = `Score:- ${fruns}-1 (${Math.floor((1+cb)/6)}.${(1+cb)%6})`;
          ups.textContent = `OUT! you need ${fruns + 1} in ${mb} balls `; vp.textContent = 'Second innings';
          finn = true; setTimeout(ale, 1);
          document.querySelector('.aboy').textContent = 'Batting';
          document.querySelector('.abot').textContent = 'Bowling';
        }


      }
      else if (finn == true) {
        let k = Math.floor(Math.random() * 6) + 1;
        if (a != k) {
          sruns += a;sb+=1;
          document.querySelector('.doboy').textContent = `Score:- ${sruns}-0 (${Math.floor(sb/6)}.${sb%6})`;
          
          if (sb < mb && sruns < fruns + 1) { ups.textContent = `You need ${fruns - sruns + 1} runs in ${mb - sb} balls`; }

          else if (sb == mb && sruns < fruns) {
            vp.textContent = "Match completed"; l.classList.remove('hide');
            ups.textContent = `Comptuer won by ${fruns - sruns} runs`; f = false;
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else if (sb == 6 && sruns == fruns) {
            l.classList.remove('hide');
            vp.textContent = "Match completed"; f = false;
            ups.textContent = `Its a tie`;
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else {
            vp.textContent = "Match completed";
            ups.textContent = `You won by 1 wicket`; f = false; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
        }
        else if (a === k) {
          document.querySelector('.doboy').textContent = `Score:- ${sruns}-1 (${Math.floor((sb+1)/6)}.${(1+sb)%6})`;
          if (sruns == fruns) {
            vp.textContent = "Match completed";
            ups.textContent = `Its a tie`; f = false; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else {
            vp.textContent = "Match completed";
            ups.textContent = `Comptuer won by ${fruns - sruns} runs`; f = false; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
        }
      }

    } if (f == false) {
      one.classList.add('hide');
      two.classList.add('hide');
      the.classList.add('hide');
      fou.classList.add('hide');
      fiv.classList.add('hide');
      six.classList.add('hide');
    }
  }

  one.addEventListener('click', () => score(1));
  two.addEventListener('click', () => score(2));
  the.addEventListener('click', () => score(3));
  fou.addEventListener('click', () => score(4));
  fiv.addEventListener('click', () => score(5));
  six.addEventListener('click', () => score(6));
}