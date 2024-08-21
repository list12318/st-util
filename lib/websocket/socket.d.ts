/**
 * h5 websocket封装
 */
declare class Socket {
    private websocket;
    constructor(url: string, options: {
        onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
        onerror: ((this: WebSocket, ev: Event) => any) | null;
        onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
        onopen: ((this: WebSocket, ev: Event) => any) | null;
    });
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    close(): void;
}
export default Socket;
