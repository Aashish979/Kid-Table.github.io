// Math Table

//connection between these two ids (req-number and number)
 let numberEl= document.querySelector('#req-number');
 numberEl.addEventListener('keyup', function(){
 	let theNumber = Number(numberEl.value);
 	document.querySelector('#number').innerText=theNumber;
calculate();
 });

//connection between these two ids (multiplier and multiples) 
  let multiplierEl= document.querySelector('#multiplier');
 multiplierEl.addEventListener('input', function(){
 	let theMultiplier = Number(multiplierEl.value);
 	document.querySelector('#multiples').innerText=theMultiplier;
calculate();
 });

// calculate result
  let calculate= ()=>{

  let theNumber =Number(document.querySelector('#number').innerText);
   let theMultiplier =Number(document.querySelector('#multiples').innerText);
   let theResult= theNumber*theMultiplier;
   document.querySelector('#result').innerText=theResult;
  l
};



