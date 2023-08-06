function vysledek(){
  kolo1=document.form1.checkname1.checked ? parseInt(document.form1.checkname1.value) : 0;
  //kolo1=parseInt(document.form1.checkname1.value);
  kolo2=document.form1.checkname2.checked ? parseInt(document.form1.checkname2.value) : 0;
  kolo3=document.form1.checkname3.checked ? parseInt(document.form1.checkname3.value) : 0;
  kolo4=document.form1.checkname4.checked ? parseInt(document.form1.checkname4.value) : 0;

  mnozstvi1=parseInt(document.form1.qtyname1.value);
  mnozstvi2=parseInt(document.form1.qtyname2.value);
  mnozstvi3=parseInt(document.form1.qtyname3.value);
  mnozstvi4=parseInt(document.form1.qtyname4.value);

  pocetDni=parseInt(document.form1.days.value);   

  if(document.getElementById('radio1').checked){
    nosic=document.getElementById('radio1').value
  }else if(document.getElementById('radio2').checked){
    nosic=document.getElementById('radio2').value
  }else{
    nosic=document.getElementById('radio3').value
  };

  suma=(((kolo1 * mnozstvi1) + (kolo2 * mnozstvi2) + (kolo3 * mnozstvi3) + (kolo4 * mnozstvi4)) * pocetDni) * nosic;

  document.form1.sumname.value=parseInt(suma);

  maxCastka=parseInt(document.form1.limitname.value);

  if((maxCastka-suma)>=0){
    kontrola = "Do limitu se vejdete"
  }else{
    kontrola = "Potřebujete více peněz"
  };

  document.form1.controlname.value=kontrola;
};

function emailCheck(){
adresa=document.getElementById('email').value;
if (adresa.indexOf("@")<1){
  alert("Email má špatný formát");  
}else alert("Objednávka byla odeslána")
};

  



  
    
  

