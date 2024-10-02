import { exitGroupAssistent } from './exitGroupAssistent';
import { dispatchMouseDownEvent } from '../utils/dispatchMouseDownEvent';

/**
 * 切换窗口
 *
 * @param {number} index 要进入第几个窗口
 * @param {boolean} isReturn 是否退出群助手
 */
export const changeWindow = async ( index, isReturn = false ) => {
	/**
	 * 判断当前窗口是群助手列表还是主列表
	 */
	const groupViewportListContainerSelector = '.group-assistent-list';
	let groupViewportListContainer = document.querySelector( groupViewportListContainerSelector );
	// 判断: 如果在群助手列表内, 则退出群助手列表
	const exitGroup = groupViewportListContainer && isReturn;
	if ( exitGroup ) {
		await exitGroupAssistent();
	}
	// 判断: 箭头方向
	const arrowWay = !isReturn
		? ''
		: index > 0
			? 'ArrowUp'     // 因为上层的index是循环的, 所以如果是上箭头, 反而 index 会是在数组的最后一位
			: 'ArrowDown';
	
	/**
	 * 获取窗口列表
	 */
	const viewportListSelector = '.recent-contact-list:not([style="display: none;"]) .viewport-list__inner > .recent-contact-item';
	const viewportList = Array.from( document.querySelectorAll( viewportListSelector ) );
	
	/**
	 * 如果退出群助手, 重新获取索引
	 * 判断: 使用上箭头, 则进入到群助手的上一个窗口
	 *
	 */
	if ( exitGroup && arrowWay === 'ArrowUp' ) {
		// 获取群助手所在的索引
		const assistentIndex = viewportList.findIndex( item => item.querySelector( '.text-ellipsis > span' ).textContent === '群助手' );
		// 获取群助手的上一个窗口
		index = Math.max( 0, assistentIndex - 1 );
		// 如果群助手是第一个窗口, 则切换到最后一个窗口
		if ( assistentIndex === 0 ) {
			index = viewportList.length - 1;
		}
	}
	// 判断: 使用下箭头, 则进入到群助手的下一个窗口
	else if ( exitGroup && arrowWay === 'ArrowDown' ) {
		// 获取群助手所在的索引
		const assistentIndex = viewportList.findIndex( item => item.querySelector( '.text-ellipsis > span' ).textContent === '群助手' );
		// 获取群助手的下一个窗口
		index = Math.min( viewportList.length - 1, assistentIndex + 1 );
		// 如果群助手是最后一个索引, 则切换到第一个窗口
		if ( assistentIndex >= viewportList.length - 1 ) {
			index = 0
		}
	}
	
	/**
	 * 获取当前要切换的窗口
	 */
	const element = viewportList[index];
	
	/**
	 * 如果是群助手, 则进入群助手, 并重新获取群助手内的窗口
	 */
	if ( element.querySelector( '.text-ellipsis > span' ).textContent === '群助手' ) {
		dispatchMouseDownEvent( element );
		return;
	}
	
	/**
	 * 否则, 切换窗口
	 */
	dispatchMouseDownEvent( element );
};
