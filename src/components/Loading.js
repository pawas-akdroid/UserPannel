import { Loader } from '@mantine/core';


export const Loaders = () =>{
    return (<>
    <div style={{display: "flex",position:"absolute",left:"40%",top: "50%"}}>
    <Loader variant={'dots'} size={250}/>
    </div>
    
    </>
    )
}
export const SmallLoader = () =>{
    return (<>
    <div>
    <Loader variant={'bars'} size={50}/>
    </div>
    
    </>
    )
}
export const Loadings = () =>{
    return (<>
    <div className='flex justify-center text-center'>
    <Loader variant={'circle'} size={150}/>
    </div>
    
    </>
    )
}
