import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import Repos from "../components/Repos";

const Explorepage = () => {
	const [loading,setLoading] = useState(false);
	const [repos,setRepos] = useState([]);
	const [language,setLanguage] = useState('');
		
	const exploreRepo= async(language)=>{
		setLoading(true)
		setRepos([])
		
		try {
			const res = await fetch(`https://api.github.com/search/repositories?q=lanquage:${language}&sort=stars$order=dec&per_page_10`,{
				headers:{
					authorization:`token ${import.meta.env.VITE_GITHUB_API_KEY}`
				}
			});
			const data = await res.json();
			setRepos(data.items)
			setLanguage(language);

		} catch (error) {
			toast.error(error.messsage);
		}finally{
			setLoading(false)
		}

	}
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepo('javascript')} />
					<img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepo('typescript')} />
					<img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepo('c++')}/>
					<img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepo('python')} />
					<img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer'
					onClick={()=>exploreRepo('java')} />
				</div>
				{repos.length > 0 && (
					<h2 className='text-lg font-semibold text-center my-4'>
						<span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full '>
							{language.toUpperCase()}{" "}
						</span>
						Repositories
					</h2>
				)}
				{!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
				{loading && <Spinner />} 
			</div>
		</div>
	);
};

export default Explorepage
