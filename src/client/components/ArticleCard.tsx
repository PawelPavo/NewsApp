import * as React from 'react';
import * as moment from 'moment';

const ArticleCard: React.SFC<ArticleCardProps> = props => {

    return (
        <>
            <div className="col-md-4 card border rounded-0 border-bottom-0 border-top-0 article-card my-5">
                <div className="col">
                    <img src={props.article.urlToImage} className="card-img media" alt="No Image Available" />
                    <div className="card-body">
    <div className="text-center">{props.article.title}</div>
                        <p className="text-center"><a className="text-center" target="_blank" href={props.article.url}>Read More</a></p>
                        <div className="border border-left-0 border-right-0">
                            <p className="text-center my-auto"><small className="text-muted">{props.article.author}</small></p>
                        </div>
                        <div>
                            <p className="text-center my-3"><small className="text-warning">Source: {props.article.source.name}</small></p>
                            <p className="text-center"><small className="text-muted">{moment(props.article.publishedAt).format('MMMM Do YYYY, hh:mm a')}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface ArticleCardProps {
    article?: any
}

export default ArticleCard;