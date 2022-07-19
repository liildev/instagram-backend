const CHECK = `
  SELECT * FROM users WHERE user_name = $1
`

const LOGIN = `
    SELECT u.* FROM users AS u WHERE u.user_name = $1 and password = crypt($2, u.password)
`;

const REGISTER = `
    INSERT INTO users (user_name, PASSWORD, avatar, user_link)
        VALUES ($1, crypt($2, gen_salt('bf')), $3, $4) RETURNING *;
`;


module.exports = {
  LOGIN,
  REGISTER,
  CHECK
};
