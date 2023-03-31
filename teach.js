var das=document.querySelector(`#das`);
var kagiz=document.querySelector(`#kagiz`);
var qayci=document.querySelector(`#qayci`);
var usrText=document.querySelector(`.userWin`);
var compText=document.querySelector(`.compWin`);
var tie=document.querySelector(`.tie`);
var game=[`d`,`k`,`q`];
var usrChoice;
var compChoice;
var index;
var compWin=0;
var usrWin=0;
var hechece=0;
function resetScore()
{ 
   compWin=0;
   usrWin=0;
   hechece=0
}
function resetGame()
{  
   das.style.display=`block`,
   kagiz.style.display=`block`,
   qayci.style.display=`block`
}
das.onclick=function()
{
   if(usrWin==10||compWin==10||hechece==10){
      resetScore();
   }
   kagiz.style.display=`none`,
   qayci.style.display=`none`,
   usrText.style.color=`green`,
   compText.style.color=`red`,
   usrChoice=`d`,
   index=Math.floor(Math.random()*game.length),
   compChoice=game[index]
   if(compChoice==`q`)
   {
      usrWin++;
   }
   else if(compChoice==`k`)
   {
      compWin++;
   }
   else{
      hechece++;
   }
   setTimeout(resetGame,2000);
   usrText.innerHTML=usrWin;
   compText.innerHTML=compWin;
   tie.innerHTML=hechece;
   console.log(compChoice)
}
kagiz.onclick=function()
{
   if(usrWin==10||compWin==10||hechece==10){
      resetScore();
   }
   das.style.display=`none`,
   qayci.style.display=`none`,
   usrText.style.color=`green`,
   compText.style.color=`red`,
   usrChoice=`k`,
   index=Math.floor(Math.random()*game.length),
   compChoice=game[index]
   if(compChoice==`d`)
   {
      usrWin++;
   }
   else if(compChoice==`q`)
   {
      compWin++;
   }
   else{
      hechece++;
   }
   setTimeout(resetGame,2000);
   usrText.innerHTML=usrWin;
   compText.innerHTML=compWin;
   tie.innerHTML=hechece;
   console.log(compChoice)
}
qayci.onclick=function()
{  
   if(usrWin==10||compWin==10||hechece==10){
      resetScore();
   }
   kagiz.style.display=`none`,
   das.style.display=`none`,
   usrText.style.color=`green`,
   compText.style.color=`red`,
   usrChoice=`q`,
   index=Math.floor(Math.random()*game.length),
   compChoice=game[index]
   if(compChoice==`k`)
   {
      usrWin++;
   }
   else if(compChoice==`d`)
   {
      compWin++;
   }
   else{
      hechece++;
   }
   setTimeout(resetGame,2000);
   usrText.innerHTML=usrWin;
   compText.innerHTML=compWin;
   tie.innerHTML=hechece;
   console.log(compChoice)
}
