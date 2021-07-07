

function findGuilderUsers (users){

    return users.filter((users) => {
        return users.userRole === "GUILDER"
    })
}
export default findGuilderUsers;