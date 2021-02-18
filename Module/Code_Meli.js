module.exports.checkCodeMeli = (code) => {
    if (typeof code !== 'string' || code.length !== 10) return false
    const codemeliArray = code.slice(0, code.length - 1).split('').reverse()
    const SumAndMul = codemeliArray.reduce((pv, cv, index) => {
        return parseInt(pv) + (parseInt(cv) * (index + 2))
    }, 0)
    const Remaning = Math.floor(SumAndMul % 11)
    return (Remaning < 2 && parseInt(code[code.length - 1]) === Remaning) || (Remaning > 2 && 11 - Remaning === parseInt(code[code.length - 1]))
}
