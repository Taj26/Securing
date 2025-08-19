import bcrypt from "bcrypt";
/**
// 1. bcrypt is a package which secure our passwords
*/

const password = "taju@1726";

/**
// 2. this process will encrypte the password 
*/

bcrypt.hash(password, 10, (err, hash) => {
   /**
   // the 10 number means how much strong the hash code should be 
  */
  if (err) throw err;
  console.log("Hashed Password:", hash);

/**
  // this process will compare the password
  */
  bcrypt.compare(password, hash, (err, result) => {
    console.log("Password Match:", result);
    // if the hash code and the real password is same or not if yes it will show true if not it will show false
  });
});

// output 

/**
// Example :  Hashed Password: $2b$10$xDSAaAk1uDbdQ9KC5UF9QuwNMcqQigKBdLbn8ib.Y7QIyPfR702EO
//Password Match: true
*/