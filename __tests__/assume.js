import assume, {
    AssumptionFailed,
    Assume,
    normalizeClassNames
} from '@padresmurfa/assume';

describe('assume',()=>{
    it('should export an assumption engine instance by default',()=>{
        expect(assume.isNull).toBeDefined();
    });

    it('should export an assumption failure error class',()=>{
        var af = new AssumptionFailed("asdf");
        expect(af.message).toBe("asdf");
        expect(af.stack).not.toBeUndefined();
    });

    it('should export an Assumption engine class',()=>{
        var a = new Assume();
        a.isNull(null);
    });
});
