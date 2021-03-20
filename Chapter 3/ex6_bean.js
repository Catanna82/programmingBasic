function countBs(str){
    var count= 0;
    str.toLowerCase().split('').forEach(function(item){
     item==='b' ? count++:null;
    })
    return count; 
  }
  console.log(countBs("BBC"));

  function countChar(str, charac){
    var count= 0;
    str.toLowerCase().split('').forEach(function(item){
     item===charac.toLowerCase() ? count++:null;
    })
    return count;
  }
  console.log(countChar("kakkerlak", "K"));
