function chessBoard(n) {
    let divOpenStr = '  <div>\n';
    let divCloseStr = '  </div>\n';
    let blackTemplate = '    <span class="black"></span>\n';
    let whiteTemplate = '    <span class="white"></span>\n';
    let blackIsUsed = false;
    let resultStr = '<div class="chessboard">\n';

    for (let i = 1; i <= n; i++) {
        resultStr += `${divOpenStr}`
        for (let j = 1; j <= n; j++) {

            if (!blackIsUsed) {
                resultStr += `${blackTemplate}`;
                blackIsUsed = true;
            } else {
                resultStr += `${whiteTemplate}`;
                blackIsUsed = false;
            }

            if (j === n && n % 2 === 0) {
                if (blackIsUsed) {
                    blackIsUsed = false;
                } else {
                    blackIsUsed = true;
                }
            }
        }
        resultStr += `${divCloseStr}`;
    }
    resultStr += '</div>';

    console.log(resultStr);
}

chessBoard(6);