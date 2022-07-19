const PROFILE = `
    SELECT
        u.*,
        json_agg(p.*) AS posts,
        json_agg(c.*) AS comments
    FROM
        users AS u
        LEFT JOIN posts AS p ON u.user_id = p.user_id
        LEFT JOIN comments AS c ON c.post_id = p.post_id
        WHERE u.user_id = $1
    GROUP BY
        u.user_id;
`;

module.exports = { PROFILE };
