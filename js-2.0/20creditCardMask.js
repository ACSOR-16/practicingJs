function mask(cc) {
  const mask = "#";

  if (cc.length <= 4) {
    console.log(cc);
    return cc;

  } 
    
  let masked = cc.replace(cc, mask.repeat(cc.length - 4) + cc.slice(cc.length - 4));
  console.log(masked);
  return masked;
 
}

function mask(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

mask('4556364607935616') // --> '############5616
mask('a')