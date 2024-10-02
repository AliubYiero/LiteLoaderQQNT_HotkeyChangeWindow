import { changeWindow } from './changeWindow';
import { exitGroupAssistent } from './exitGroupAssistent';
import { getElementIndex } from '../utils/getElementIndex';

/**
 * 绑定快捷键
 */
export const bindHotkey = async () => {
	/**
	 * 句柄: 使用快捷键更改窗口
	 *
	 * @param {KeyboardEvent} e
	 */
	function handleChangeWindow( e ) {
		const numberStrList = new Set( [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ] );
		const arrowStrList = new Set( [ 'ArrowUp', 'ArrowDown', 'Backspace' ] );
		
		// 判断: 用户是否按下 Alt 键, 如果没有, 则不进行动作
		if ( !( e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey ) ) {
			return;
		}
		
		// 判断: 用户按下 [Alt + 数字键(1 ~ 9)], 则跳转到对应窗口
		if ( numberStrList.has( e.key ) ) {
			changeWindow( Number( e.key ) - 1 );
			return;
		}
		
		// 判断: 用户按下 [Alt + Backspace], 则退出群助手
		if ( e.key === 'Backspace' ) {
			exitGroupAssistent();
			return;
		}
		
		// 判断: 用户按下 [Alt + ↑ / Alt + ↓], 则转移到当前窗口的前后窗口
		if ( arrowStrList.has( e.key ) ) {
			// 获取当期所有的窗口列表容器
			const viewportListContainer = document.querySelector( '.recent-contact-list:not([style="display: none;"]) .viewport-list__inner' );
			// 获取当前选择的窗口
			const selectedChatElement = viewportListContainer.querySelector( '.recent-contact-item.recent-contact-item--selected' );
			// 获取所有的窗口
			const viewportList = viewportListContainer.children;
			
			// 判断: 如果没有选择窗口, 则自动选择第一个窗口
			if ( !selectedChatElement ) {
				changeWindow( 0 );
				return;
			}
			
			// 获取当前窗口的索引
			const currentIndex = getElementIndex( selectedChatElement );
			if ( currentIndex === -1 ) {
				return;
			}
			
			// 判断: 如果按下的是上键, 则切换当前窗口的前一个窗口
			// 如果当前是第一个窗口, 则切换到最后一个窗口
			if ( e.key === 'ArrowUp' ) {
				let prevIndex = currentIndex - 1;
				if ( prevIndex < 0 ) {
					prevIndex = viewportList.length - 1;
					changeWindow( prevIndex, true );
				}
				else {
					changeWindow( prevIndex, false );
				}
			}
			
			// 判断: 如果按下的是下键, 则切换当前窗口的后一个窗口
			// 如果当前是最后一个窗口, 则切换到第一个窗口
			if ( e.key === 'ArrowDown' ) {
				let nextIndex = currentIndex + 1;
				if ( nextIndex >= viewportList.length ) {
					nextIndex = 0;
					changeWindow( nextIndex, true );
				}
				else {
					changeWindow( nextIndex, false );
				}
			}
		}
	}
	
	// 绑定快捷键
	window.addEventListener( 'keydown', handleChangeWindow );
};
