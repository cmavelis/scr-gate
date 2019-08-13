import { convert1Dto2DIndex } from 'app/shared/util/grid-utils';

describe('Grid utils', () => {
  describe(convert1Dto2DIndex, () => {
    it('should return 0,2 when given 2,5', () => {
      expect(convert1Dto2DIndex({ index: 2, gridColumns: 5 })).toEqual([0, 2]);
    });
    it('should return 0,0 when given 0,X', () => {
      expect(convert1Dto2DIndex({ index: 0, gridColumns: 10 })).toEqual([0, 0]);
      expect(convert1Dto2DIndex({ index: 0, gridColumns: 7 })).toEqual([0, 0]);
      expect(convert1Dto2DIndex({ index: 0, gridColumns: 100 })).toEqual([0, 0]);
      expect(convert1Dto2DIndex({ index: 0, gridColumns: 1 })).toEqual([0, 0]);
    });
    it('should return 0,4 when given 4,5', () => {
      expect(convert1Dto2DIndex({ index: 4, gridColumns: 5 })).toEqual([0, 4]);
    });
    it('should return 1,4 when given 9,5', () => {
      expect(convert1Dto2DIndex({ index: 9, gridColumns: 5 })).toEqual([1, 4]);
    });
    it('should return 1,0 when given 4,4', () => {
      expect(convert1Dto2DIndex({ index: 4, gridColumns: 4 })).toEqual([1, 0]);
    });
  });
});
