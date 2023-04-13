describe('function renderSquares()', () => {
    it('should return value: true', () => {
        renderSquares()
        console.log(renderSquares());
        expect(renderSquares()).toBe(true);
    });
    it('should not return value: false', () => {
        renderSquares()
        expect(renderSquares()).not.toBe(false);
    })
});
