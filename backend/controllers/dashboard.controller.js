




export const getDashBoardPage  = (req , res) => {
    try{
        const user = req.user 
        if ( !user ) return res.status(400).json({err:"error to fetch jobs details criteria "})
        
        
        
        
    }catch(error){
        console.log (error , " Error in getDashboardPage")
        res.status(500).json({ error: "Internal Server Error" });
    }
}