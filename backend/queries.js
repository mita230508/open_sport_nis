const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'OpenSportsNis',
	password: 'postgre',
	port: 5432
});

    const getPosts = (request, response) => {
        pool.query('SELECT * FROM posts ORDER BY post_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
    }

    const getPostById = (request, response) => {
        const id = parseInt(request.params.id)
    
        pool.query('SELECT * FROM posts WHERE post_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
    }

    const getPostByUserId = (request, response) => {
        const id = parseInt(request.params.id)
    
        pool.query('SELECT * FROM posts WHERE user_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
    }

    const createPost = (request, response) => {
        const { user_id, name, datetime, place, description } = request.body
    
        pool.query('INSERT INTO posts (user_id, name, datetime, place, description) VALUES ($1, $2, $3, $4, $5)', 
        [user_id, name, datetime, place, description], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Post added with ID: ${results.insertId}`)
        })
    }

    const updatePost = (request, response) => {
        const id = parseInt(request.params.id)
        const { user_id, name, datetime, place, description} = request.body
      
        pool.query(
          'UPDATE posts SET user_id = COALESCE($1, user_id), name = COALESCE($2, name) , datetime = COALESCE($3, datetime), place = COALESCE($4, place), description = COALESCE($5, description) WHERE post_id = $6',
          [user_id, name, datetime, place, description, id],
          (error, results) => {
            if (error) {
              throw error
            }
            response.status(200).send(`Post modified with ID: ${id}`)
          }
        )
      }

    const deletePost = (request, response) => {
        const id = parseInt(request.params.id)        
        pool.query('DELETE FROM applies WHERE post_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        })
        pool.query('DELETE FROM posts WHERE post_id = $1', [id], (error, results) => {
          if (error) {
              throw error
        }
        response.status(200).send(`Post deleted with ID: ${id}`)
        })
    }

    const getUsers = (request, response) => {
        pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
    }
    
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserByEmail = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE email = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { name, email, password } = request.body
  
    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE user_id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  const getApplyByPostId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM applies WHERE post_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createApply = (request, response) => {
    const { post_id, first_name, last_name, email } = request.body
  
    pool.query('INSERT INTO applies (post_id, first_name, last_name, email) VALUES ($1, $2, $3, $4)', 
    [post_id, first_name, last_name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Apply added with ID: ${results.insertId}`)
    })
  }

  
  module.exports = {
    getPosts,
    getPostById,
    getPostByUserId,
    createPost,
    updatePost,
    deletePost,
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    getApplyByPostId,
    createApply,
  }