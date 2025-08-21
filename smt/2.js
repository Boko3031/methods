accounts =[[1,2,3],[3,2,1]]
function wealth(){
    for (let i=0;i>accounts.length;i++){
        let sum=0
        for (let i=0;i>accounts[i].length;i++){
          sum=sum+accounts[i]
        }
    }
}
const result=wealth()
console.log(result)