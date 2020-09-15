import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState([]);
    const apiKey="74e770e2360e4b0cad3d80c923839a0e";

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=rich&from=2020-09-15&sortBy=publishedAt&apiKey=${apiKey}`
        ).then(response => setData(response.data))
        .catch(error => console.log(error));
    }, [data]);

    return(
        <NewsContext.Provider value = {{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}

