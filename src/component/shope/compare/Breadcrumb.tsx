// components/Breadcrumb.tsx
import React from 'react';

const Breadcrumb: React.FC = () => {
    return (
        <div className="page-header breadcrumb-wrap">
            <div className="container">
                <div className="breadcrumb">
                    <a href="index.html" rel="nofollow">Home</a>
                    <span></span> Shop
                    <span></span> Compare
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
