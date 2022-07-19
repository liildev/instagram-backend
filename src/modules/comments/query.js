const CREATE = `
    INSERT INTO comments (title, post_id, user_id)
        VALUES ($1, $2, $3)
    RETURNING
        *;
`;

const DELETE = `
    DELETE FROM comments AS c
    WHERE c.comment_id = $1
        AND c.user_id = $2
        RETURNING
        *;
`;

module.exports = { CREATE, DELETE };
