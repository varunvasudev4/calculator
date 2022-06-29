str=""
    //str2=""
    arr=[]
    function valueadd(numop) {
        if(numop=="." && str[str.length-1]=="."){
                numop=""
        }
        if(numop=='del'){
            if(str=='0'){
                str=""
            }else{
                num=Number(str)
                flr=Math.floor(num)
                if(flr<num && num<(flr+1)){
                    //deci = num-flr
                    //l = String(deci).length
                    //console.log(deci.toString());
                    str=flr
                }else{
                    str=Math.floor(Number(str)/10)
                }
            }
            numop=""
        }
        //str2+=numop
        if(numop=='+'||numop=='-'||numop=='x'||numop=='/'||numop=='%'){
            arr.push(str)
            arr.push(numop)
            str=""
            numop=""
            //console.log(arr);
        }else if(numop=='='){
            arr.push(str)
            str=""
            numop=""
            if(arr[1]=='+'){
                str=Number(arr[0])+Number(arr[2])
            }else if(arr[1]=='-'){
                str=Number(arr[0])-Number(arr[2])
            }else if(arr[1]=='x'){
                str=Number(arr[0])*Number(arr[2])
            }else if(arr[1]=='/'){
                str=Number(arr[0])/Number(arr[2])
            }else if(arr[1]=='%'){
                str=Number(arr[0])%Number(arr[2])
            }
            arr=[]
        }
        str+=numop
        document.querySelector('#result').value=str
        //document.querySelector('#result2').value=str2
    }