function randNum() {
    return Math.floor(Math.random() * 100) + 1;


}
function c2f(c) {
    return (c * 9) / 5 + 32;
}
module.exports = {
    randNum,
    c2f,
};
