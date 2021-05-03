import React, { useEffect, useState } from 'react'
import NewsFragment from '../components/feed'
import Axios from 'axios'

export default function NewsFeed({ query }) {  
  
  const [feedArticles,  setFeedArticles] = useState([]);
  
  useEffect(() => {
      callNewsFeed();
    }, [query]);
    
    const callNewsFeed = async () => {
      const response = await Axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2021-04-30&to=2021-04-30&sortBy=popularity&apiKey=a1efacbce70c42b0b0bb0dd1dc6386fc`);
      setFeedArticles(response.data.articles);
    }
    
    return (
       <div>
         <NewsFragment feed = { feedArticles }></NewsFragment>
       </div> 
    )
}