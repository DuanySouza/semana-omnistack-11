const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', () => {
    it('should generate sn unique ID', () => {
        
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    })
});