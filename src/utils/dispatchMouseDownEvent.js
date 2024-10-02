/**
 * 触发鼠标按下事件
 *
 * @param {HTMLElement} element
 * @returns {boolean}
 */
export const dispatchMouseDownEvent = ( element ) => {
	const mouseDownEvent = new Event( 'mousedown' );
	return element.dispatchEvent( mouseDownEvent );
};
