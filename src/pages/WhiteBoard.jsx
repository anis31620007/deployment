import {Tldraw} from 'tldraw';


export default function WhiteBoard() {
    const components = {
        PageMenu: null,
        DebugMenu: null,
    }
    return (
        <div style={{position: 'fixed', inset: 0}}>
            <Tldraw components={components}/>
        </div>
    )
}