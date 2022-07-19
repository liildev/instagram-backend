const SEARCH = `
    SELECT
    *
    FROM
        users
    WHERE
        user_name LIKE '%$1%';
`;

const EDIT_USER = `
    UPDATE
        users
    SET
        user_name = $1,
        visibility = $2
    WHERE
        user_id = $3
    RETURNING
        *;
`;

const EDIT_NAME = `
    UPDATE
        users
    SET
        user_name = $1
    WHERE
        user_id = $2
    RETURNING
        *;
`;

const EDIT_VISISBLILITY = `
    UPDATE
        users
    SET
        visibility = $1
    WHERE
        user_id = $2
    RETURNING
        *;
`;

const USER = `
    SELECT
        u.*,
        json_agg(p.*) AS posts
    FROM
        users AS u
        LEFT JOIN posts AS p ON u.user_id = p.user_id
        WHERE u.user_id = $1
    GROUP BY
        u.user_id;
`;

const DELETE = `
    DELETE FROM users AS u
    WHERE u.user_name = $1
        AND PASSWORD = crypt($2, u.password) RETURNING *;
`;

module.exports = {
  EDIT_USER,
  EDIT_NAME,
  EDIT_VISISBLILITY,
  SEARCH,
  USER,
  DELETE,
};
