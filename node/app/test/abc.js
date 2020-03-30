function loop(callback, loopNum) {
    for(let i = 0; i < loopNum; i++) {
        callback(i);
    }
}

module.exports = loop;
