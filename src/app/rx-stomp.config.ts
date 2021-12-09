import { InjectableRxStompConfig } from "@stomp/ng2-stompjs";


export const RxStompConfig: InjectableRxStompConfig = {
    //Which server?
    brokerURL: 'ws://127.0.0.1:15674/ws',

    //Headers
    connectHeaders: {
        login: 'guest',
        passcode: 'guest',
    },

    //How often to heartbeat
    //Interval in millisecond, set 0 to disable
    heartbeatIncoming: 0, //Typical value 0 - disabled
    heartbeatOutgoing: 20000, //Typical value 20000 - every 20 seconds

    //Wait in milliseconds before attempting reconnect
    //Set 0 to disable
    //Typical value 500
    reconnectDelay: 2,

    debug: (msg:string): void => {
        console.log(new Date(), msg);
    }

}