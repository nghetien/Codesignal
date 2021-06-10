function possibleSums(coins, quantity) {
    let setAllItem = new Set()
    for(let i=0;i<coins.length;i++){
        let setQuantity = new Set()
        for(let j=1;j<=quantity[i];j++){
            setQuantity.add(coins[i]*j)
        }
        let setSum = new Set()
        for(let m of setQuantity.entries()){
            for(let n of setAllItem.entries()){
                setSum.add(parseInt(m) + parseInt(n))
            }
        }
        for(let j of setSum.entries()){
            setAllItem.add(parseInt(j))
        }
        for(let j of setQuantity.entries()){
            setAllItem.add(parseInt(j))
        }
    }
    return setAllItem.size
}
