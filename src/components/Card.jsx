import React from 'react';

const Card = (props) => {
    const { cardData:
        {
            title: { rendered = '' } = '',
            date,
            link,
            featured_media,
            _embedded: { author }
        }
    } = props;

    const getFormattedDate = (date) => {
        return new Date(date).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric'
          });
    }

    return (
        <div className="col-4">
            <div className="p-card">
                <div className="p-card__category">Cloud and Server</div>
                <div className="p-card__separator" />
                <div className="p-card__content">
                    <a href={link}>
                        <img className="p-card__image" alt="" height="185" width="330" src={featured_media} />
                    </a>
                    <h4 className="p-card__title">
                        <a href={link}>{rendered}</a>
                    </h4>
                    <i>By <a href={author[0].link}>{author[0].name}</a> on {getFormattedDate(date)}</i>
                    <div className="p-card__separator" />
                    <div className="p-card__post-type">Article</div>
                </div>
            </div>
        </div>
    )
}

export default Card;