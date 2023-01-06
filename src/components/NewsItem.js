import React from 'react'
import { SensitiveContent } from './Sensitive_content'

const NewsItem = (props) =>{

    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div className="my-3">
        <div className="card" >
        <span className=" badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end",right:"0",position:"absolute"}}>{source}</span>
          {imageUrl ? <img src={imageUrl} className="card-img-top" alt="..."/> : <SensitiveContent/>}
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} On {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )

}

export default NewsItem
