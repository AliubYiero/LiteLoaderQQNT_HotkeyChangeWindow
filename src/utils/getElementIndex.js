/**
 * 获取元素是父元素的第几个元素, 如果没有父元素, 则返回 -1
 *
 * @param {HTMLElement} element
 * @returns {number}
 */
export const getElementIndex = ( element ) => {
	const parent = element.parentElement;
	if ( !parent ) {
		return -1;
	}
	
	const childrenArray = Array.from( parent.children );
	return childrenArray.indexOf( element );
};
