//require moddules
const pool = require('../../dbconnection');

//API for get all employees
exports.getusers = (request, response) => {
 pool.query('SELECT * FROM users', (error, results) => {
  	 if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}



/**
 * API for add the user.
 */
exports.addUser = (request, response) =>{
    // console.log('request:',request.body);
    const {name, phone, address, email, age, interests} = request.body;
    pool.query(`INSERT INTO users (name, phone, address, email, age, interests)
            VALUES ($1, $2, $3, $4, $5, $6)`,[name, phone, address, email, age, interests],(err, result) =>{
        if(err){
            throw err;
        }
        response.status(201)
                .json({
            message: 'user created successfully',
        });
    })
}

/**
 * User Update Api
 */
exports.updateUser = (request, response) =>{
    // console.log('request;',request.body);
    const id = parseInt(request.params.id);
    // console.log('id:',id);
    const {name, phone, address, email, age, interests} = request.body;
    var updateQuery = "UPDATE users SET name = ($1), phone = ($2), address = ($3), email = ($4), age = ($5), interests = ($6) WHERE id =($7)";
    pool.query(updateQuery,[name, phone, address, email, age, interests, id], (err, result) =>{
        if(err){
            throw err;
        }
        return response.status(200)
                        .json({
                            status: 'success',
                            message: 'user modified successfully'
                        })
    })
}


exports.removeUser = (request, response) =>{
    const id = parseInt(request.params.id);
    console.log('id:', id);
    pool.query('DELETE FROM users WHERE id = $1', [id],(err, result) =>{
        if(err){
            throw err;
        }
        return response.status(200)
                        .json({
                            status: "success",
                            message: "user deleted successfully"
                        });
    })

}