import {Link} from "react-router-dom";
import articles from '../article-content';
import ArticlesList from "../ArticlesList";
export default function ArticlelistPage(){
    return (
        <>
        <h1>ArticlelistPage</h1>
        <ArticlesList articles={articles} />
    </>);
}