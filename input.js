//The objective is to return the array arranged in an 
//alternate order such that max value is followed by min value in a descending fashion, so that the 1st element is the 
//max value, 2nd element is the min value, 3rd element is the second max value, 4th element is the second min value & so on.

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
