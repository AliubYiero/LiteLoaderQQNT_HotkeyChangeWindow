import { waitElementLoaded } from './utils/waitElementLoaded';
import { bindHotkey } from './modules/bindHotKey';

try {
	waitElementLoaded( '.viewport-list .viewport-list__inner' ).then( () => {
		bindHotkey().then( () => {
			console.log( '[快速切换聊天窗口]: 启动成功!' );
		} );
	} );
}
catch ( e ) {
	console.error( '[快速切换聊天窗口]: 初始化失败!', e );
}
