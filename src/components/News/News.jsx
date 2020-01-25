import React, {useState, useEffect} from "react";
import {
    Container,
    Row,
    Column
} from "../index";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NewsStyles from "./NewsStyles";

const useStyles = makeStyles(NewsStyles);
//5454cb1b9be0477fb63a1b9fc15db6eb - API key

const News = (props) => {
    const classes = useStyles();


    const [news, newsUpdate] = useState([]);

    useEffect(() => {
        let url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=5454cb1b9be0477fb63a1b9fc15db6eb';
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                newsUpdate(data.articles)
            });
    }, []);

    return (
        <Container>
            <Row>
                <Column className={classes.newsWrapper}>
                    <h1 className={classes.newsTitle}>News</h1>
                    {news ?
                        news.map((items, i) => (
                            <div key={i} className={classes.newsWrapper}>
                               <h4 className={classes.title}>{items.title}</h4>
                                <p className={classes.description}>{items.description}</p><br/>
                                <div>
                                    <img className={classes.images} src={items.urlToImage} alt="img"/>
                                </div>
                                <p>Author:
                                    <span className={classes.authorPost}>
                                        {items.author}
                                     </span>
                                </p>
                                <div className={classes.line}>
                                </div>
                            </div>
                        ))
                        : (<CircularProgress color="secondary" />)}
                </Column>
            </Row>
        </Container>
    )
};

export default News;