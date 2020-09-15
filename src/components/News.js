import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from "./NewsArticle";

function News (props) {
    const { data } = useContext( NewsContext);
    console.log("data: ",data.articles);
    return(
        <div>
            <h1 className="head-text">News App</h1>
            <div className="news-list">
            {/* {data.articles.length !== 0 && data.articles.map(news => (
              <NewsArticle data={news} key={news.url} />
            ))
          } */}
          {data.articles && data.articles.map(news => (
              <NewsArticle data={news} key={news.url}/>
          ))}
            </div>
        </div>
    );
}

export default News;