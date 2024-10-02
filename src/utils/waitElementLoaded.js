/**
 * 等待元素载入到页面中
 *
 * @param {string} selector 元素选择器
 * @param {{
 *       container?: HTMLElement | Document,
 *       timeout?: number,
 *       delay?: number
 * }} [config] 配置
 *
 * @returns {Promise<HTMLElement | null>}
 */
export const waitElementLoaded = async ( selector, config = {} ) => {
	const {
		container = document,
		timeout = 0,
		delay = 100,
	} = config;
	
	return new Promise( resolve => {
		let result = container.querySelector( selector );
		if ( result ) {
			return resolve( result );
		}
		let timer;
		// @ts-ignore
		const observer = new window.MutationObserver( mutations => {
			for ( let mutation of mutations ) {
				for ( let addedNode of mutation.addedNodes ) {
					console.log('addedNode', addedNode);
					if ( addedNode.nodeType === Node.ELEMENT_NODE ) {
						result = addedNode.matches( selector )
							? addedNode
							: addedNode.querySelector( selector );
						if ( result ) {
							observer.disconnect();
							timer && clearTimeout( timer );
							// 为了避免在元素插入后立即刷新，我们在这里添加一个短暂的延迟。
							setTimeout( () => resolve( result ), delay );
						}
					}
				}
			}
		} );
		observer.observe( container, {
			childList: true,
			subtree: true,
		} );
		if ( timeout > 0 ) {
			timer = setTimeout( () => {
				observer.disconnect();
				return resolve( null );
			}, timeout );
		}
	} );
};
