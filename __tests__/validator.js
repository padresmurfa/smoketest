import validator, {Validator, ValidationFailed} from '@padresmurfa/validator';

describe('validator',()=>{
    it('should export an validator factory by default',()=>{
        expect(validator("ads").string).toBeDefined();
    });
    it('should export an validator failure error class',()=>{
        var af = new ValidationFailed("asdf");
        expect(af.message).toBe("asdf");
        expect(af.stack).not.toBeUndefined();
    });

    it('should export an validator engine class',()=>{
        var v = new Validator("id");
        v.string("ads");
    });
});
