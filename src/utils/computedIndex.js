/**
 * 计算索引, 如果小于0则返回最大值, 如果大于最大值则返回 0
 * @param {number} max
 * @param {number} index
 */
export const computedIndex = ( max, index ) => {
	return index < 0
		? max
		: index > max
			? 0
			: index;
};
