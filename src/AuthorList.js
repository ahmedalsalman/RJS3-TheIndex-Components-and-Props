import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {

    const authors = props.authors;
    const authorObj = authors.map(author => <AuthorCard author={author} key={author.last_name} />);

    return (


        <div className="authors">
            <h3>Authors</h3>
            <div className="row">
                {authorObj}
            </div>
        </div>
    );

}

export default AuthorList 