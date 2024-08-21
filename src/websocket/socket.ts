"use strict";
/**
 * h5 websocket封装
 */

class Socket {
    private websocket: WebSocket = null;
    constructor(url: string, options: {
        onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
        onerror: ((this: WebSocket, ev: Event) => any) | null;
        onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
        onopen: ((this: WebSocket, ev: Event) => any) | null;
    }) {
        const { onopen, onmessage, onclose, onerror } = options;
        const websocket = new WebSocket(url || location.host);
        //打开(链接)
        websocket.onopen = onopen;
        //获取到消息
        websocket.onmessage = onmessage;
        //关闭连接
        websocket.onclose = onclose;
        //连接发生错误的回调方法
        websocket.onerror = onerror;

        this.websocket = websocket;
    }

    // 实际调用的方法
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView) {
        const { websocket } = this;
        if (websocket.readyState === websocket.OPEN) {
            //若是ws开启状态
            websocket.send(data);
        } else if (websocket.readyState === websocket.CONNECTING) {
            // 若是 正在开启状态，则等待1s后重新调用
            setTimeout(() => {
                this.send(data);
            }, 1000);
        } else {
            // 若未开启 ，则等待1s后重新调用
            setTimeout(() => {
                this.send(data);
            }, 1000);
        }
    };

    close(){
        this.websocket.close();
    };
}

export default Socket;

