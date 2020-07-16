import * as React from 'react';
import Navbar from '../components/NavBar'
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';


const WSJ: React.FC<IWSJProps> = () => {

    const [articles, setArticles] = useState<any[]>([])
    const [keyword, setKeyword] = useState<string>('')

    useEffect(() => {
        (async () => {
            try {
                let res = await fetch(`/api/wsj`);
                let articles = await res.json();
                setArticles(articles.articles);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    // const getSearch = async () => {
    //     try {
    //         let res = await fetch(`/api/wsj/${keyword}`);
    //         let articles = await res.json()
    //         console.log(articles.articles)
    //         setArticles(articles.articles)
    //     } catch (error) {
    //         console.log({ error: 'Unable to get articles on click' })
    //     }
    // }

    return (
        <>
            <Navbar />
            <div className="container">
            <h1>WSJ</h1>
                {/* <div className="input-group mb-3 mt-5">
                    <input
                        className="form-control"
                        placeholder="Search"
                        aria-describedby="button-addon2"
                        value={keyword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={getSearch}
                            id="button-addon2">Search</button>
                    </div>
                </div> */}
                
                <div className="row justify-content-center">
                    {articles.map(article => (
                        <ArticleCard key={Math.random()} article={article} />
                    ))}
                </div>
            </div>
        </>
    )
}

export interface IWSJProps { };

export default WSJ;