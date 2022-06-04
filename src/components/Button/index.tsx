import './style.css'

const Button = (props: any)=>{
    return <button className='DshBtn' {...props}>{props.children}</button>
}
export default Button;