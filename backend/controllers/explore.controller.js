export const exploreRepo= async(req,res)=>{
    
    const {language} = req.params;
    
    try {
        const responce = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
				headers:{
					authorization:`token ${process.env.VITE_GITHUB_API_KEY}`
				}
			});
        const data = await responce.json()
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}