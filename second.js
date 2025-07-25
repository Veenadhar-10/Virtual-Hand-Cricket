function batting(game, mb) {
  ele.classList.toggle('hide');
  function ale() {
    alert('first innings completed,tap ok to start second innings');
  }

  let f = true;
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
          fruns += a; game.score = fruns;
          document.querySelector('.doboy').textContent = `score:- ${fruns}-0 (${Math.floor(cb/6)}.${cb%6})`;
          ups.textContent = `you scored ${fruns} runs ${mb - cb} balls left`;
          if (cb == mb) {
            ups.textContent =`computer need ${fruns + 1} in ${mb} balls `; vp.textContent = 'second innings';
            finn = true; setTimeout(ale, 1);
            document.querySelector('.aboy').textContent = 'Bowling';
            document.querySelector('.abot').textContent = 'Batting';
            
          }
        }
        else if (k == a) {
          document.querySelector('.doboy').textContent = `score:- ${fruns}-1 (${Math.floor((cb+1)/6)}.${(cb+1)%6})`;
          game.score = fruns;
          ups.textContent = `OUT! computer need ${fruns + 1} in ${mb} balls`; vp.textContent = 'second innings';
          finn = true; setTimeout(ale, 1);
          document.querySelector('.aboy').textContent = 'Bowling';
          document.querySelector('.abot').textContent = 'Batting';

        }
      }
      else if (finn == true) {
        let k = Math.floor(Math.random() * 6) + 1;
        if (a != k) {
          sruns += k;sb+=1;
          document.querySelector('.dobot').textContent = `score:- ${sruns}-0 (${Math.floor(sb/6)}.${sb%6})`;
          
          if (sb < mb && sruns < fruns + 1) { ups.textContent = `computer need ${fruns - sruns + 1} runs in ${mb - sb} balls`; }

          else if (sb == mb && sruns < fruns) {
            vp.textContent = "Match completed"; f = false;
            ups.textContent = `you won by ${fruns - sruns} runs`; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else if (sb == mb && sruns == fruns) {
            vp.textContent = "Match completed"; f = false;
            ups.textContent = `Its a tie`; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else {
            vp.textContent = "Match completed";
            ups.textContent = `computer won by 1 wicket`; f = false; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
        }
        else if (a === k) {
          document.querySelector('.dobot').textContent = `score:- ${sruns}-1 (${Math.floor((sb+1)/6)}.${(sb+1)%6})`;
          if (sruns == fruns) {
            vp.textContent = "Match completed"; f = false;
            ups.textContent = `Its a tie`; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
          else {
            vp.textContent = "Match completed";
            ups.textContent = `you won by ${fruns - sruns} runs`; f = false; l.classList.remove('hide');
            document.querySelector('.aboy').textContent = '';
            document.querySelector('.abot').textContent = '';
          }
        }
      }
    }
    if (f == false) {
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