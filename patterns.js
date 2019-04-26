0     6       12       18       24
1   5 7    11 13    17 19    23 25
2 4   8 10    14 16    20 22    26
3     9       15       21       27


let myArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
// let myArray = 'WELCOMETOIHSMARKIT'.split('');

for(let i=0; i<4; i++) {
	for(let j=0; j<myArray.length; j++) {
        if(j%3==0) {
            let x=(j/3>0) ? j/3*6 : 0;
            if(myArray[x+i]) {
                console.log(myArray[x+i]);
            }
        }
		if(i==1 && j%3==2 && myArray[j/3*6+i]) {
			console.log(myArray[j/3*6+i]);
		}
		if(i==2 && j%3==1 && myArray[j/3*6+i]) {
			console.log(myArray[j/3*6+i]);
        }
	}
}
