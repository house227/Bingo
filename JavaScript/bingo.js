checkList = []

const makeMasu = (i) => {
    const masu = document.createElement("div");

    // コマの番号を５で割った余りからどの列かを出す
    const col = i % 5;
    const randomNumber = Math.floor(Math.random() * 15 + col * 15 + 1);

    checkList.push(randomNumber);
    masu.textContent = randomNumber;

    masu.addEventListener("click", (evt) => {
        evt.target.textContent = "◯";
        checkList[i] = "◯"
        // 期待通りにcheckListが動いているか確認
        // console.log(checkList)
    })
    document.querySelector(".bingocard").appendChild(masu);
}

document.querySelector(".bingocard").addEventListener("click", ()=>{
    //タテのチェック
    col1 = [checkList[0], checkList[5], checkList[10], checkList[15], checkList[20]];
    col2 = checkList.filter((n, i) => i % 5 === 1);
    col3 = checkList.filter((n, i) => i % 5 === 2);
    col4 = checkList.filter((n, i) => i % 5 === 3);
    col5 = checkList.filter((n, i) => i % 5 === 4);
    //ヨコのチェック
    row1 = [checkList[0], checkList[1], checkList[2], checkList[3], checkList[4]];
    row2 = checkList.slice(5, 9);
    row3 = checkList.slice(10, 14);
    row4 = checkList.slice(15, 19);
    row5 = checkList.slice(20, 24)
    //ナナメのチェック
    dia1 = [checkList[0], checkList[6], checkList[12], checkList[18], checkList[24]];
    console.log([checkList[0], checkList[6], checkList[12], checkList[18], checkList[24]]);

    dia2 = [checkList[4], checkList[8], checkList[12], checkList[16], checkList[20]];
    console.log( [checkList[4], checkList[8], checkList[12], checkList[16], checkList[20]]);

    function checkWin(checkArray){
        if(checkArray.every(n=>n==="◯")){
            checkList.fill("1");
            const bingo = document.createElement("div");
            bingo.textContent = "ビンゴ!";
            bingo.setAttribute("class", "bingo");
            document.body.appendChild(bingo);
        }
    }

    const AllCol = [col1, col2, col3, col4, col5];
    const AllRow = [row1, row2, row3, row4, row5];
    const AllDia = [dia1, dia2];
    for(let i = 0; i < AllCol.length; i++){
        checkWin(AllCol[i]);
        checkWin(AllRow[i]);
        if(i < 2){
            checkWin(AllDia[i]);
        }
    }
    // checkWin(colA);
    // checkWin(colB);
    // checkWin(colC);
    // checkWin(colD);
    // checkWin(colE);
    // checkWin(rowA);
    // checkWin(rowB);
    // checkWin(rowC);
    // checkWin(rowD);
    // checkWin(rowE);
    // checkWin(diaA);
    // checkWin(diaB);
});

for (let i = 0; i < 25; i++) {
    makeMasu(i);
}