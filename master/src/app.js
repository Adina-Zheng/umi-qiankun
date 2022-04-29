//dva运行时配置，这里可以看到一些接口异常

import { message } from 'antd';

export const dva = {
    config: {
        onError(e) {
            message.error(e.message, 3);
        },
    },
};

//主应用传递给子应用,这种方式因无法实现子修改主model的数据而弃用
// export function useQiankunStateForSlave() {

//     const [masterState, setMasterState] = useState(HomeModel.state.loginUser);
//     const setState = (str) => { setMasterState({ str }) }

//     return {
//         masterState,
//         setMasterState,
//         setState
//     };

// }