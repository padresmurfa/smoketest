import binding from '@padresmurfa/binding';

describe('binding',()=>{
    it('should export a binding factory for prebinding',()=>{
        expect(binding.prebind).toBeDefined();
    });
    it('should export a binding factory for jitbinding',()=>{
        expect(binding.JIT).toBeDefined();
    });
});
