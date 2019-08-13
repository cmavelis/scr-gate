export const convert1Dto2DIndex = ({ index, gridColumns }: { index: number, gridColumns: number }) =>
  [Math.floor(index / gridColumns), index % gridColumns];
