export function calculatePadding(labelsSize, yInterval, width, height) {
    const marginTop = 30
    const marginLeft = yInterval > 0 ? 50 : 20
    const marginRight = 20
    const marginBottom = Math.max(30 * ((labelsSize * 70) / (width - marginLeft - marginRight)), 30);
    return {top: marginTop, right: marginRight, bottom: marginBottom, left: marginLeft};
}
