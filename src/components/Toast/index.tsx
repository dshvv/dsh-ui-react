// @ts-nocheck
import ReactDomCli from 'react-dom/client';
import './style.css'

const Toast = (props) => {
    return <div className='Toast'>{props.msg}</div>
}

const div = document.createElement('div');
let toastRoot = null;
let unmountTimer = null;

export default {
    show(msg, time = 2000) {
        if (unmountTimer) {
            clearTimeout(unmountTimer);
            toastRoot.unmount();
            document.body.removeChild(div);
        }

        // 挂载
        toastRoot = ReactDomCli.createRoot(div);
        toastRoot.render(<Toast msg={msg} />);
        document.body.appendChild(div);

        // 过几秒卸载
        unmountTimer = setTimeout(() => {
            toastRoot.unmount();
            document.body.removeChild(div);
            unmountTimer = null;
        }, time)
    }
}