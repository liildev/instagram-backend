const POSTS = `
    SELECT 
    * 
    FROM posts;
`


const POST = `
    SELECT 
        p.*,
        json_agg(c.*) AS comments
    FROM
        posts AS p
        LEFT JOIN comments AS c ON p.post_id = c.post_id
    WHERE p.post_id = $1
    GROUP BY
        p.post_id, c.created_at
    ORDER BY
        c.created_at DESC
        LIMIT 1;
        `

const CREATE_POST = `
    INSERT INTO posts (title, user_id)
    VALUES ($1, $2) RETURNING *
`

const POST_PHOTOS = `
    INSERT INTO photos (post_id, photo)
    VALUES ($1, $2)
    RETURNING *
`

const EDIT_POST = `
    UPDATE posts SET title = $1 WHERE post_id = $2 AND user_id = $3 returning *
`

const DELETE_POST = `
    DELETE FROM posts WHERE post_id = $1 AND user_id = $2 returning *
`

module.exports = { POSTS, POST, CREATE_POST, POST_PHOTOS, EDIT_POST, DELETE_POST}