//init
var lastFunction = 'none';
resetBg();  document.getElementById('perc25').style.backgroundColor = 'rgba(240, 91, 79, 0.8)';

function resetValue() {
document.getElementById('incl').value = ''; document.getElementById('excl').value = '';
document.getElementById('btw').value = '';

  resetBg();  document.getElementById('perc25').style.backgroundColor = 'rgba(240, 91, 79, 0.8)';
}

function calcIncl(e){	
  if(e) {
    var vat = e;
  } else {
    var vat = 25;
  }
  var excl = document.getElementById('excl').value;
	document.getElementById('excl').value = excl;
	document.getElementById('btw').value = ((excl / 100) * vat).toFixed(2).replace(/\./g, '.').replace('.00', '');
	document.getElementById('incl').value = ((excl / 100) * (100 + vat)).toFixed(2).replace(/\./g, '.').replace('.00', '');
	// Last run
	lastFunction = 'incl';
}

function calcExcl(e){
	var incl = document.getElementById('incl').value;
	document.getElementById('incl').value = incl;
  
if(e) {
    var vat = e;
  } else {
    var vat = 25;
  }
	document.getElementById('btw').value = ((incl / (100 + vat)) * vat).toFixed(2).replace(/\./g, '.').replace('.00', '');
	document.getElementById('excl').value = ((incl / (100 + vat)) * 100).toFixed(2).replace(/\./g, '.').replace('.00', '');
	// Last ran
	lastFunction = 'excl';
}

function resetBg() {
 var elem = document.getElementsByClassName("perc");
 for(var i = 0; i < elem.length; i++)
{
   elem.item(i).style.backgroundColor = 'transparent';
}
}

function percChange(e){
	// Calculate values with function that was last run
if (e == 6){
resetBg();
document.getElementById('perc6').style.backgroundColor = 'rgba(240, 91, 79, 0.8)';
} else if (e == 12) {
 resetBg();
 document.getElementById('perc12').style.backgroundColor = 'rgba(240, 91, 79, 0.8)';
} else {
resetBg();  document.getElementById('perc25').style.backgroundColor = 'rgba(240, 91, 79, 0.8)';
}
if (lastFunction === 'incl') {
		calcIncl(e);
	}
else{
		calcExcl(e);
	}
}