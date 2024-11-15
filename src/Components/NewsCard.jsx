import React from 'react';
import { FaEye, FaShareAlt, FaBookmark, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ News }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = News;

    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-lg overflow-hidden">
            {/* Header with author info and actions */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-300 border-gray-200">
                <div className="flex items-center space-x-3">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={author.img}
                        alt={author.name}
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex space-x-3 text-gray-500">
                    <FaShareAlt className="cursor-pointer" />
                    <FaBookmark className="cursor-pointer" />
                </div>
            </div>

            {/* Thumbnail Image */}
            <img
                className="h-[500px] object-cover p-3"
                src={thumbnail_url}
                alt={title}a
            />

            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 text-sm mb-3">
                    {details.slice(0, 120)}...{' '}
                    <Link to={`/news/${News._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
                </p>
            </div>

            {/* Footer with rating and views */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <span className="font-bold">{rating.number}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
