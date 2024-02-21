import React, { Component } from 'react';

export default class NewsCol extends Component {
  render() {
    const { imageUrl, title, description, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", height: "25rem", backgroundColor: "#E8D8B7", margin: "20px" }}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "50%" }} />
          <div className="card-body" style={{ height: "50%", overflowY: "auto" }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark blink">Full News</a>
          </div>
        </div>
       
      </div>
    );
  }
}
