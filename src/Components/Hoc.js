const Hoc = (Component) => {
    const Wrapper=(props)=>{
        return (
            <div style={{color:"#ff8383"}}>
            <Component {...props} />
            </div>
        )
    }
    return Wrapper
} 

export default Hoc