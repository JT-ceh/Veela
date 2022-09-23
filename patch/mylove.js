let value="miss";let rp, sug, msg;
function Main(){
DA();console.log("\n...Testing Digital Angel...");
console.log(`\nResults:\n\nSent: ${value}\nReply: ${rp}\nMessage: ${msg}\nSuggestion: ${sug}\n`)
}
const DA=()=>{
  let ex=value;
  const process=function(){
    ex=ex.trim().toLowerCase().split('').filter(f=>f!==' '&&f!==',');
    ex=[...new Set(ex)]}();
  let found=0;let neu="None"
  function think(mood){
      const neuron1=function(){
      if(mood.keys.split('').every(r=>ex.includes(r)) || ex.every(v=>mood.keys.split('').includes(v))){
      rp=mood.rp[Math.floor(Math.random()*mood.rp.length)];
      found=1;sug=mood.sug;neu="one";
    }else{
      const neuron2=function(){
        let t=new RegExp(mood.keys1)
        if(t.test(value)){
          rp=mood.rp[Math.floor(Math.random()*mood.rp.length)];found=1;sug=mood.sug;neu="two";
        }else{
           const neuron3=function(){
            mood.keys1.toString().split(',').forEach((m)=>{              
              let tmp=new RegExp(m)
              if(tmp.test(value)){
                rp=mood.rp[Math.floor(Math.random()*mood.rp.length)];found=1;sug=mood.sug;neu="three"
              }else{rp="Fail";sug="Try again"}})
      }();}}();
  }}();}

moods.forEach((m)=>{!found&&think(m);msg=rp;});console.log(neu)}
const {greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els} = require('./da.json');
const moods=[greet,help,nul,rHappy,rSad,join,sing,come,dance,wont,didGood,love,gn,morning,miss,marry,els];

Main();