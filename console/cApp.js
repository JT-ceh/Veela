const React=require('react');
const {greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els} = require('./da.json');
const moods=[greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els];

function log(v){console.error(v);}
const DA=(v)=>{
  let value=v.toLowerCase();let rp='';let msg='';let sug='';
  let ex=value;
  const process=function(){ex=ex.trim().toLowerCase().split('').filter(f=>f!==' '&&f!==',');ex=[...new Set(ex)]}();
  log(ex);let found=0;
  function think(mood){
    let moody=mood.keys.split('');
    function send(m){rp=m.rp[Math.floor(Math.random()*m.rp.length)];found=1;sug=m.sug}
    const neuron1=function(){
      if(moody.every(r=>ex.includes(r))){send(mood)}else{
        const neuron2=function(){
          if(mood.keys1.search(value)!=-1){send(mood)}else{
            const neuron3=function(){
              const tmp=mood.keys1.split(',');let f=0
              for(let i=0;i<tmp.length;i++){
                if(!f){if(value.search(tmp[i])!=-1){send(mood);break;}
                else{rp=els.rp[Math.floor(Math.random()*els.rp.length)];found=0;sug=els.sug}}}
            }();}}();
  }}();}
  log(rp)
  moods.forEach((m)=>{!found&&think(m);msg=rp})
  log(`Sent: ${value}\nReceived: ${msg}\nSuggestions: ${sug}`)
  found=0;
}
DA("Hey");
setTimeout(()=>DA("argh its so boring uku"),3000)
setTimeout(()=>DA("i am doing well, how about you"),6000)
setTimeout(()=>DA("i am eating zvank, wanna join"),9000)

