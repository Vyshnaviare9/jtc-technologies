const prompt=require("prompt-sync")({sigint:true}); 
  
var a=prompt("give the array size");
console.log("array size is"+a);
var b=[];
for(var i=0;i<a;i++)
{
	b[i] = prompt('Enter Element ' + (i+1));
	//console.log("array value is"+b[i]);
}
console.log(b);
b.sort();
console.log(b);	
var max=a-1;
var min=0;
var m=a+1;
for(var i=0;i<a;i++)
{
	b[i]=parseInt(b[i]);
}
for(var i=0;i<a;i++)
{
	if(i%2==0)
	{
		b[i]=b[i]+((b[max]%m)*m);
		console.log(b[i]);
		max--;
	}
	else{
		b[i]=b[i]+((b[min]%m)*m);
		console.log(b[i]);
		min++;
	}
}
for(var i=0;i<a;i++)
{
	b[i]=parseInt(b[i]/m);
	
}
console.log(b);