import * as React from 'react';
import * as moment from 'moment';

const ArticleCard: React.SFC<ArticleCardProps> = props => {

    return (
        <>
            <div className="col-md-8">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={props.article.urlToImage} className="card-img my-auto" alt="No Image Available" style={{ width: "vh-100", height: "auto", objectFit: "contain" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.article.title}</h5>
                                <p className="card-text">{props.article.description}</p>
                                {/* <h5 className="card-title">{props.article.title.substring(0, 30)}...</h5>
                                <p className="card-text">{props.article.description.substring(0, 50)}...</p> */}
                                <h6 className="text-warning">Source: {props.article.source.name}</h6>

                                <br />
                                <a target="_blank" href={props.article.url}>Read More</a>
                                <p className="card-text"><small className="text-muted">{props.article.author}</small></p>
                                <p className="card-text"><small className="text-muted">{moment(props.article.publishedAt).format('MMMM Do YYYY, hh:mm a')}</small></p>
                            </div>
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