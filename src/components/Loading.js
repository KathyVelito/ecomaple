export default function Loading() {
    return (
        <div style={{
            position:'fixed',
            top:'0',
            left:'0',
            width:'100vw',
            height:'100vh',
            zIndex:99,
            backgroundColor:'black'
        }}>
            <i 
                className="far fa-sun fa-spin  fa-6x"
                style={{
                    color:'slateblue',
                    position:'absolute',
                    top:'calc(50% - 50px)',
                    left:'calc(50% - 50px)'
                }}
            />
        </div>
    )
}