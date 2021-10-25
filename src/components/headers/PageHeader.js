import React from 'react';


const PageHeader = ({children}) => {
    return (
        <div className={`min-w-full h-96 bg-page-header bg-cover bg-center bg-fixed flex flex-col justify-center items-center`}>
            {children}
        </div>
    )
}

export default PageHeader
