/**
 * 退出群助手
 */
export const exitGroupAssistent = () => {
	return new Promise( resolve => {
		const backBtn = document.querySelector( '.list-back' );
		if ( backBtn ) {
			backBtn.click();
			// 延时 300 ms, 等待主窗口状态更新(动画延时)
			setTimeout( () => {
				resolve();
			}, 300 );
		}
	} );
};
