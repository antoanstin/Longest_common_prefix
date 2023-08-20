const input = ["apiple", "apipetizer", "apiprehend","ap"];
var z="";
for(i=0;i<input[0].length;i++){
    var flag=true;
    for(j=1;j<input.length;j++){

        if(input[0][i]!=input[j][i]){
            flag=false;
        }
    }
    if(flag){
        z+=input[0][i]
    }
}
console.log(z);