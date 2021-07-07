

function GuilderItems (users){

    users.filter((users) => {
        return users.userRole === "GUILDER"
    })
}
export default GuilderItems;